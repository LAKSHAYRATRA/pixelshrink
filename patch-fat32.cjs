const fs = require('fs');

// Patch fs.readlink to convert FAT32 Windows 'EISDIR' on regular files to standard 'EINVAL'
const origReadlink = fs.readlink;
fs.readlink = function (...args) {
  const callback = args[args.length - 1];
  if (typeof callback === 'function') {
    args[args.length - 1] = function (err, result) {
      if (err && err.code === 'EISDIR' && err.syscall === 'readlink') {
        err.code = 'EINVAL';
      }
      return callback.apply(this, arguments);
    };
  }
  return origReadlink.apply(this, args);
};

const origReadlinkSync = fs.readlinkSync;
fs.readlinkSync = function (...args) {
  try {
    return origReadlinkSync.apply(this, args);
  } catch (err) {
    if (err && err.code === 'EISDIR' && err.syscall === 'readlink') {
      err.code = 'EINVAL';
    }
    throw err;
  }
};

if (fs.promises && fs.promises.readlink) {
  const origPromisesReadlink = fs.promises.readlink;
  fs.promises.readlink = async function (...args) {
    try {
      return await origPromisesReadlink.apply(this, args);
    } catch (err) {
      if (err && err.code === 'EISDIR' && err.syscall === 'readlink') {
        err.code = 'EINVAL';
      }
      throw err;
    }
  };
}
