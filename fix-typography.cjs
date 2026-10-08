const fs = require('fs');
const path = require('path');

function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (!full.includes('node_modules') && !full.includes('.next') && !full.includes('out')) {
        walk(full);
      }
    } else if (f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.js') || f.endsWith('.cjs')) {
      let content = fs.readFileSync(full, 'utf8');
      const hasIssue = /[\u2018\u2019\u201C\u201D\u2014]/.test(content);
      if (hasIssue) {
        console.log('Fixing typography in:', full);
        // Replace smart quotes with standard straight quotes
        content = content
          .replace(/[\u201C\u201D]/g, '"')
          .replace(/[\u2018\u2019]/g, "'")
          .replace(/\u2014/g, ' - ');
        fs.writeFileSync(full, content, 'utf8');
      }
    }
  }
}

walk('src');
console.log('Typography normalization complete.');
