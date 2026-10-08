import { ToolConfig } from './types';

export const SITE_CONFIG = {
  name: 'CompressKB',
  domain: 'thecompresskb.com',
  url: 'https://thecompresskb.com',
  tagline: 'High-Performance, Privacy-First In-Browser Image Compressor',
  author: 'CompressKB Team',
  description: 'Free online image compressor. Compress JPG, PNG, and WebP images to exact KB limits directly in your browser with zero server uploads.',
};

export const NAV_TOOLS = [
  { name: 'Image Compressor', href: '/' },
  { name: 'To 20KB', href: '/compress-image-to-20kb' },
  { name: 'To 50KB', href: '/compress-image-to-50kb' },
  { name: 'To 100KB', href: '/compress-image-to-100kb' },
  { name: 'To 200KB', href: '/compress-image-to-200kb' },
  { name: 'Compress JPG', href: '/compress-jpg' },
  { name: 'Compress PNG', href: '/compress-png' },
  { name: 'Compress WebP', href: '/compress-webp' },
  { name: 'Resize Image', href: '/resize-image' },
  { name: 'PNG to JPG', href: '/png-to-jpg' },
  { name: 'JPG to PNG', href: '/jpg-to-png' },
  { name: 'WebP to JPG', href: '/webp-to-jpg' },
];

export const NAV_GUIDES = [
  { name: 'How Compression Works', href: '/guides/how-image-compression-works' },
  { name: 'JPG vs PNG vs WebP', href: '/guides/jpg-vs-png-vs-webp' },
  { name: 'Govt & Exam Size Guidelines', href: '/guides/image-size-requirements-government-exams' },
];

export const ALL_TOOLS: ToolConfig[] = [
  {
    slug: '',
    title: 'Compress Image to KB Online Free',
    shortTitle: 'Compress to KB',
    metaTitle: 'Compress Image to KB Online Free - Reduce Image Size to Exact KB',
    metaDescription: 'Compress JPG, PNG, and WebP images to exact KB size online for free. Specify target KB limit with guaranteed byte size reduction. 100% private, in-browser.',
    h1: 'Compress Image to KB Online Free',
    subheading: 'Reduce image file size to your exact target KB limit. Enter any kilobyte target or choose instant presets. Fast, secure, and processed 100% locally in your browser.',
    targetKB: 50,
    keywords: ['compress image to kb', 'reduce image size in kb', 'compress image to 50kb', 'photo compressor to kb', 'image size reducer in kb', 'compress jpg to kb', 'photo size reducer'],
    features: [
      'Exact target KB compression using iterative binary search',
      'Batch compression: process multiple photos simultaneously',
      '100% Client-Side Privacy: files never leave your device',
      'Instant side-by-side visual comparison before downloading',
      '1-Click ZIP download for bulk optimizations'
    ],
    howToSteps: [
      { name: 'Upload Your Images', text: 'Drag and drop JPG, PNG, or WebP images into the upload area or click to select files.' },
      { name: 'Tune Quality or Target Size', text: 'Adjust the compression slider to reach your desired balance between file size and visual fidelity.' },
      { name: 'Download Instantly', text: 'Preview the compressed result and download individual files or a combined ZIP archive.' }
    ],
    faqs: [
      {
        question: 'Does compressing an image reduce its visual resolution or quality?',
        answer: 'Our smart compression engine removes imperceptible high-frequency color variations and metadata while preserving crisp edges, text, and visual contours. At 80% quality, the visual difference is virtually undetectable to the human eye, while yielding 60% to 85% file size reductions.'
      },
      {
        question: 'Are my photos uploaded to a cloud server?',
        answer: 'No. PixelShrink runs 100% locally in your browser using modern HTML5 Canvas and WebAssembly capabilities. Your images never touch an external server or database, providing absolute privacy for sensitive documents, personal IDs, and confidential work.'
      },
      {
        question: 'What image formats are supported?',
        answer: 'PixelShrink fully supports JPEG (.jpg, .jpeg), PNG (.png), and modern WebP (.webp) formats. You can compress images or convert between these formats in seconds.'
      },
      {
        question: 'Is there a file size limit or daily usage cap?',
        answer: 'There are no usage caps or daily limits. Because processing runs on your local CPU and memory, you can compress as many photos as you need completely free of charge.'
      }
    ],
    articleContent: [
      {
        heading: 'Why High-Quality Image Compression Matters in 2026',
        paragraphs: [
          'Images account for over 60% of total payload bytes on modern web pages. Unoptimized images are the leading cause of slow page loading speeds, poor Google PageSpeed Insights scores, and elevated bounce rates on mobile devices.',
          'Google\'s Core Web Vitals algorithms place heavy ranking emphasis on Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS). By optimizing images to modern WebP standards or compressed JPEGs, webmasters consistently see dramatic reductions in load times and improvements in organic search rankings.'
        ]
      },
      {
        heading: 'How Our In-Browser Compression Engine Works',
        paragraphs: [
          'Traditional online image tools require you to upload your files to remote third-party servers. This process consumes heavy upload bandwidth, exposes private documents to potential retention risks, and causes delays during peak server loads.',
          'PixelShrink solves this by executing compression entirely within your client browser. Using HTML5 Canvas pixel quantization and discrete cosine transform algorithms, your images are compressed at native device speed with zero latency and zero data transfer.'
        ]
      }
    ],
    relatedToolSlugs: ['compress-jpg', 'compress-png', 'compress-image-to-100kb', 'resize-image']
  },
  {
    slug: 'compress-image-to-20kb',
    title: 'Compress Image to 20KB Online',
    shortTitle: 'Compress to 20KB',
    metaTitle: 'Compress Image to 20KB Online Free - Exact Size for Signatures & Forms',
    metaDescription: 'Compress image to 20KB online for free. Perfect for signatures, exam forms, SSC, UPSC, and passport portals. Exact size reduction without pixelation.',
    h1: 'Compress Image to 20KB Online Free',
    subheading: 'Reduce image and signature file size to under 20KB instantly. Engineered specifically for official government portals, exam forms, and job applications.',
    targetKB: 20,
    keywords: ['compress image to 20kb', 'compress signature to 20kb', 'reduce image size to 20kb', 'photo compressor 20kb online', 'upsc signature 20kb'],
    features: [
      'Guaranteed file size under or equal to 20KB',
      'Optimized contrast preserving clarity for digital signatures and thumb impressions',
      'Automated binary-search iteration for exact byte precision',
      'Supports JPG, JPEG, and PNG formats',
      'Safe for sensitive documents: 100% in-browser processing'
    ],
    howToSteps: [
      { name: 'Upload Signature or Photo', text: 'Select or drop your photo or signature scan into the box.' },
      { name: 'Automatic 20KB Calibration', text: 'The target size is automatically configured to 20KB. The engine will calculate the optimal dimensions and compression ratio.' },
      { name: 'Check Size & Download', text: 'Verify the output file size is under 20KB and click Download for immediate portal submission.' }
    ],
    faqs: [
      {
        question: 'Why do government portals require images under 20KB?',
        answer: 'Government and competitive exam portals (such as UPSC, SSC, IBPS, and state PSCs) process millions of candidate records simultaneously. Strict 10KB to 20KB limits for candidate signatures and thumb impressions ensure fast server processing and avoid database storage bottlenecks.'
      },
      {
        question: 'Will my signature remain legible at 20KB?',
        answer: 'Yes. Our specialized algorithm maintains high edge contrast while discarding redundant color gradients. Signatures, pen strokes, and stamps remain sharp and clearly identifiable.'
      },
      {
        question: 'What if the image cannot reach 20KB with quality compression alone?',
        answer: 'If the image resolution is very large (e.g. 4000x3000), our engine intelligently scales the canvas dimensions down proportionally until the resulting file fits strictly within the 20KB limit.'
      }
    ],
    articleContent: [
      {
        heading: 'Meeting Exact File Size Constraints for Competitive Exams',
        paragraphs: [
          'Few things are more frustrating than preparing an official exam submission only to have the portal reject your signature or thumb impression with the error: "File size must be between 10KB and 20KB".',
          'PixelShrink eliminates the guesswork. Instead of manually adjusting sliders and repeatedly checking file properties, our binary search optimizer determines the exact mathematical threshold needed to produce a file strictly under 20KB.'
        ]
      }
    ],
    relatedToolSlugs: ['compress-image-to-50kb', 'compress-image-to-100kb', 'resize-image', 'compress-jpg']
  },
  {
    slug: 'compress-image-to-50kb',
    title: 'Compress Image to 50KB Online',
    shortTitle: 'Compress to 50KB',
    metaTitle: 'Compress Image to 50KB Online Free - Passport & Form Photo Reducer',
    metaDescription: 'Compress image to 50KB online free. Easily reduce passport photos, exam photos, and official documents to 50KB or below with crystal-clear face clarity.',
    h1: 'Compress Image to 50KB Online Free',
    subheading: 'Resize and compress passport photos and document scans to exactly 50KB. Perfect for UPSC, NEET, GATE, visa applications, and student admissions.',
    targetKB: 50,
    keywords: ['compress image to 50kb', 'photo compressor 50kb', 'reduce image size to 50kb', 'passport photo 50kb', 'neet admit card photo compressor'],
    features: [
      'Guaranteed file size ≤ 50 KB',
      'Maintains facial clarity and sharp facial features',
      'No watermarks, no registration, no file limits',
      'Real-time before-and-after preview with zoom inspection',
      'Works seamlessly on mobile phones and desktop computers'
    ],
    howToSteps: [
      { name: 'Upload Your Photo', text: 'Select your passport photo or ID image.' },
      { name: 'Instant 50KB Optimization', text: 'Our engine computes the optimal compression curve to reach 50KB.' },
      { name: 'Review & Download', text: 'Inspect the resulting image and save it directly to your device.' }
    ],
    faqs: [
      {
        question: 'Which exam portals require 50KB photo sizes?',
        answer: 'Portals such as NEET, JEE Main, GATE, SSC CGL/CHSL, UPSC Civil Services, and various university admission forms strictly enforce photo sizes between 20KB and 50KB.'
      },
      {
        question: 'Can I compress mobile camera selfies to 50KB?',
        answer: 'Yes! Modern smartphone photos are typically 3MB to 8MB in size. PixelShrink scales down the resolution and compresses the pixel matrix so it smoothly lands under 50KB without distorting aspect ratios.'
      }
    ],
    articleContent: [
      {
        heading: 'Passport Photo Specifications and 50KB Requirements',
        paragraphs: [
          'Passport and visa guidelines usually require standard dimensions (such as 3.5cm x 4.5cm or 2x2 inches) alongside a strict digital file constraint of 50KB max.',
          'PixelShrink ensures your portrait remains compliant with biometric verification standards by maintaining balanced contrast and crisp focus while compressing image metadata and high-frequency noise.'
        ]
      }
    ],
    relatedToolSlugs: ['compress-image-to-20kb', 'compress-image-to-100kb', 'compress-jpg', 'resize-image']
  },
  {
    slug: 'compress-image-to-100kb',
    title: 'Compress Image to 100KB Online',
    shortTitle: 'Compress to 100KB',
    metaTitle: 'Compress Image to 100KB Online Free - Reduce Photo to 100KB',
    metaDescription: 'Compress image to 100KB online for free without losing quality. Ideal for resumes, job portals, email attachments, and web uploads.',
    h1: 'Compress Image to 100KB Online Free',
    subheading: 'Quickly shrink photos, documents, and graphics to under 100KB with zero visible degradation. Safe, fast, and completely free in your browser.',
    targetKB: 100,
    keywords: ['compress image to 100kb', 'reduce image size to 100kb', 'photo compressor 100kb', 'compress jpg to 100kb', 'resume photo 100kb'],
    features: [
      'Guaranteed file size under 100KB',
      'Preserves crisp typography and document readability',
      'Batch processing for multiple documents at once',
      'Zero server upload: 100% private and offline-capable',
      'Supports high-resolution camera photos'
    ],
    howToSteps: [
      { name: 'Drop Files Here', text: 'Select one or more images from your computer or phone.' },
      { name: 'Auto-Calculated Compression', text: 'The tool calibrates compression parameters to hit ≤ 100 KB.' },
      { name: 'Download Result', text: 'Get your compressed image ready for email, forms, or web publishing.' }
    ],
    faqs: [
      {
        question: 'Why is 100KB a popular web standard?',
        answer: '100KB represents an ideal balance for web banners, thumbnails, and email attachments. It ensures sub-second download times over 4G/5G and broadband connections while maintaining vibrant colors.'
      },
      {
        question: 'Will text in certificate scans stay readable at 100KB?',
        answer: 'Yes. The algorithm preserves high-frequency edge information so certificates, marks sheets, and scanned IDs remain fully legible and acceptable for verification.'
      }
    ],
    articleContent: [
      {
        heading: 'Balancing Visual Quality with Fast Web Delivery',
        paragraphs: [
          'A 100KB image loads nearly 10x faster than an uncompressed 1MB photo. For job seekers uploading resumes, e-commerce stores displaying catalog grids, and webmasters optimizing hero banners, 100KB is often the golden threshold for peak digital performance.'
        ]
      }
    ],
    relatedToolSlugs: ['compress-image-to-50kb', 'compress-image-to-200kb', 'compress-jpg', 'compress-png']
  },
  {
    slug: 'compress-image-to-200kb',
    title: 'Compress Image to 200KB Online',
    shortTitle: 'Compress to 200KB',
    metaTitle: 'Compress Image to 200KB Online Free - High Definition Image Reducer',
    metaDescription: 'Compress image to 200KB online for free. Keep maximum resolution and color richness while keeping file size under 200KB. Try PixelShrink now.',
    h1: 'Compress Image to 200KB Online Free',
    subheading: 'Reduce image size to 200KB while preserving stunning high-definition detail, rich color depth, and sharpness across any display.',
    targetKB: 200,
    keywords: ['compress image to 200kb', 'reduce image size to 200kb', 'photo compressor 200kb', 'compress photo to 200kb online'],
    features: [
      'Guaranteed file size under 200KB',
      'Preserves Full HD visual fidelity and smooth gradients',
      'Ideal for blog featured images and digital portfolios',
      'Ultra-fast client-side execution'
    ],
    howToSteps: [
      { name: 'Select Image', text: 'Upload your high-res JPEG, PNG, or WebP photo.' },
      { name: 'Binary Search Optimizer', text: 'The engine finds the highest quality level that fits under 200KB.' },
      { name: 'Download', text: 'Save your optimized photo ready for web publishing or submissions.' }
    ],
    faqs: [
      {
        question: 'How large of an image can be compressed to 200KB?',
        answer: 'You can upload photos up to 25MB or 4K/8K resolution. Our engine will adaptively compress and downsample the matrix to deliver a sharp 200KB result.'
      }
    ],
    articleContent: [
      {
        heading: 'Why 200KB is Ideal for Modern Websites and Blogs',
        paragraphs: [
          'Modern web design demands rich hero imagery that does not choke mobile bandwidth. A 200KB compressed image delivers near-lossless clarity on Retina and high-DPI screens while keeping initial page load under one second.'
        ]
      }
    ],
    relatedToolSlugs: ['compress-image-to-100kb', 'compress-jpg', 'compress-webp', 'resize-image']
  },
  {
    slug: 'compress-jpg',
    title: 'Compress JPG / JPEG Images Online',
    shortTitle: 'Compress JPG',
    metaTitle: 'Compress JPG Online - Free JPEG Image Compressor (Fast & Private)',
    metaDescription: 'Compress JPG and JPEG images online without losing quality. Reduce file size up to 90%. Free, private, batch compression with live preview.',
    h1: 'Compress JPG Images Online Free',
    subheading: 'Advanced lossy JPEG compression that strips unnecessary metadata and applies intelligent quantization to slash file sizes.',
    targetKB: 100,
    keywords: ['compress jpg', 'compress jpeg', 'reduce jpg size', 'jpeg optimizer', 'online jpg compressor', 'shrink jpg file'],
    features: [
      'Discrete Cosine Transform (DCT) quantization optimization',
      'Removes bulky EXIF camera metadata and color profiles',
      'Customizable target KB limit',
      'Interactive split-screen visual comparison',
      'Batch ZIP download for photo albums'
    ],
    howToSteps: [
      { name: 'Upload JPG Files', text: 'Drag and drop your .jpg or .jpeg images.' },
      { name: 'Set Target Size in KB', text: 'Input your desired KB limit or choose a preset in one click.' },
      { name: 'Download Compressed JPG', text: 'Download single files or grab all optimized JPGs in one ZIP archive.' }
    ],
    faqs: [
      {
        question: 'What is the best quality percentage for JPG compression?',
        answer: 'For most photographs and web images, 75% to 82% quality provides the optimal sweet spot: reducing file size by 70% to 85% with zero perceptible visual degradation.'
      },
      {
        question: 'Does compressing JPGs remove EXIF metadata?',
        answer: 'Yes! Stripping camera model, GPS coordinates, timestamp, and thumbnail data saves several kilobytes per image while protecting your personal privacy.'
      }
    ],
    articleContent: [
      {
        heading: 'Understanding JPEG Compression Mechanics',
        paragraphs: [
          'JPEG is the most widely adopted image format on the web. It uses lossy compression based on the Discrete Cosine Transform (DCT) and chroma subsampling (often 4:2:0), which takes advantage of the human eye\'s higher sensitivity to brightness (luminance) than to color variations (chrominance).',
          'PixelShrink provides granular control over the quantization matrix, allowing you to maximize bandwidth savings without introducing unpleasant blocking artifacts or color banding.'
        ]
      }
    ],
    relatedToolSlugs: ['compress-png', 'compress-webp', 'resize-image', 'jpg-to-png']
  },
  {
    slug: 'compress-png',
    title: 'Compress PNG Images Online',
    shortTitle: 'Compress PNG',
    metaTitle: 'Compress PNG Online - Free Transparent PNG Compressor',
    metaDescription: 'Compress PNG images online for free while keeping full alpha transparency. Reduce PNG size up to 80% without blurring edges or icons.',
    h1: 'Compress PNG Images Online Free',
    subheading: 'Optimize PNG file size while preserving 100% transparent backgrounds, crisp vector-like text, and sharp iconography.',
    targetKB: 150,
    keywords: ['compress png', 'reduce png size', 'transparent png compressor', 'png optimizer online', 'shrink png image'],
    features: [
      'Preserves full alpha channel transparency',
      'Removes unneeded chunks, gamma tables, and ancillary metadata',
      'Ideal for logos, screenshots, UI icons, and transparent graphics',
      'Instant side-by-side comparison slider',
      'Completely free with no file limits'
    ],
    howToSteps: [
      { name: 'Upload PNG Files', text: 'Drop your transparent PNGs, logos, or screenshots into the tool.' },
      { name: 'Configure Target KB', text: 'Enter your maximum allowable KB size.' },
      { name: 'Download Result', text: 'Download your lightweight, transparency-intact PNGs.' }
    ],
    faqs: [
      {
        question: 'Will PNG compression ruin transparent backgrounds?',
        answer: 'No. Our PNG engine preserves full 32-bit RGBA alpha transparency so your logos and UI graphics remain perfectly transparent across all dark and light backgrounds.'
      },
      {
        question: 'Why are PNG files typically larger than JPGs?',
        answer: 'PNG utilizes lossless DEFLATE compression to ensure every single pixel is reconstructed identically. While this guarantees sharp lines and zero artifacts, it results in larger file sizes for photographs.'
      }
    ],
    articleContent: [
      {
        heading: 'When to Use PNG vs JPEG Compression',
        paragraphs: [
          'PNG is irreplaceable when dealing with transparency, typography, digital illustrations, and screenshots containing sharp vector lines. Compressing PNGs involves stripping redundant color tables and optimizing filter passes across scanlines.'
        ]
      }
    ],
    relatedToolSlugs: ['png-to-jpg', 'compress-jpg', 'compress-webp', 'resize-image']
  },
  {
    slug: 'compress-webp',
    title: 'Compress WebP Images Online',
    shortTitle: 'Compress WebP',
    metaTitle: 'Compress WebP Online Free - Next-Gen Image Size Optimizer',
    metaDescription: 'Compress WebP images online free. Further reduce WebP file size up to 70% for faster page loads and improved Core Web Vitals.',
    h1: 'Compress WebP Images Online Free',
    subheading: 'Harness Google\'s next-generation WebP format to achieve ultra-lightweight images that supercharge website loading speeds.',
    targetKB: 80,
    keywords: ['compress webp', 'reduce webp size', 'webp optimizer', 'online webp compressor', 'shrink webp'],
    features: [
      'Next-generation predictive coding compression',
      'Supports both lossy and lossless WebP pipelines',
      'Preserves transparency while producing 30% smaller files than PNG',
      'Instant browser-level canvas conversion',
      'Batch processing and ZIP packaging'
    ],
    howToSteps: [
      { name: 'Upload WebP Files', text: 'Select WebP images from your device.' },
      { name: 'Set Target KB Size', text: 'Enter your desired KB cap to find your target compression ratio.' },
      { name: 'Download WebP', text: 'Save the optimized WebP files ready for production deployment.' }
    ],
    faqs: [
      {
        question: 'Why does Google recommend WebP?',
        answer: 'WebP provides superior lossy and lossless compression for web images. WebP lossy images are 25-34% smaller than comparable JPEGs, and WebP lossless images are 26% smaller than PNGs.'
      }
    ],
    articleContent: [
      {
        heading: 'The SEO Power of WebP Optimization',
        paragraphs: [
          'Google Lighthouse and PageSpeed Insights explicitly flag legacy image formats with the recommendation: "Serve images in next-gen formats". Adopting compressed WebP images directly improves your LCP metric and overall SEO performance.'
        ]
      }
    ],
    relatedToolSlugs: ['webp-to-jpg', 'compress-jpg', 'compress-png', 'resize-image']
  },
  {
    slug: 'resize-image',
    title: 'Resize Image Dimensions Online',
    shortTitle: 'Resize Image',
    metaTitle: 'Resize Image Online Free - Reduce Image Size in KB',
    metaDescription: 'Resize and compress image file size online for free. Reduce file size in KB while maintaining visual quality. Fast, private, high quality.',
    h1: 'Resize and Compress Image Online Free',
    subheading: 'Accurately reduce image file size to exact KB constraints with automatic proportion preservation and high-quality resampling.',
    targetKB: 75,
    keywords: ['resize image', 'resize image online', 'reduce image file size', 'photo resizer in kb', 'scale image to kb', 'resize jpg', 'resize png'],
    features: [
      'Exact target file size reduction in KB',
      'Instant one-click size presets (20KB, 50KB, 100KB, 200KB)',
      'Smart aspect ratio preservation prevents visual distortion',
      'High-quality bicubic interpolation prevents pixelation',
      'Batch resizing with 1-click ZIP export'
    ],
    howToSteps: [
      { name: 'Upload Image', text: 'Select photos you wish to resize and reduce.' },
      { name: 'Enter Target KB', text: 'Input target KB size, or pick a standard preset.' },
      { name: 'Download Compressed Image', text: 'Save your perfectly scaled image instantly.' }
    ],
    faqs: [
      {
        question: 'What happens to the aspect ratio when reducing size?',
        answer: 'Our engine strictly maintains the original aspect ratio to prevent distortion or stretching when downscaling.'
      },
      {
        question: 'Does target KB compression reduce image file size?',
        answer: 'Yes! It directly caps the byte payload to the exact number of kilobytes you require.'
      }
    ],
    articleContent: [
      {
        heading: 'Understanding Resolution vs Display Size',
        paragraphs: [
          'Uploading a raw 12-megapixel smartphone photo (4000x3000) into a website container that only displays at 800x600 wastes bandwidth and processing power. Resizing images to their exact rendered dimensions is standard practice for modern web development.'
        ]
      }
    ],
    relatedToolSlugs: ['compress-image-to-100kb', 'compress-jpg', 'compress-png', 'png-to-jpg']
  },
  {
    slug: 'png-to-jpg',
    title: 'Convert PNG to JPG Online',
    shortTitle: 'PNG to JPG',
    metaTitle: 'PNG to JPG Converter Online Free - Convert PNG to JPEG Fast',
    metaDescription: 'Convert PNG to JPG online for free. Fast conversion with custom background color for transparent images. Batch convert PNG to JPG with high quality.',
    h1: 'Convert PNG to JPG Online Free',
    subheading: 'Instantly convert PNG files to universal JPG format. Eliminate file size bloat while cleanly filling transparent backgrounds with crisp white.',
    targetKB: 100,
    keywords: ['png to jpg', 'convert png to jpg', 'png to jpeg converter', 'change png to jpg online', 'turn png into jpg'],
    features: [
      'Instant browser-based format transformation',
      'Clean white background fill for transparent PNG areas',
      'Drastic file size reduction compared to raw PNG',
      'Batch conversion of multiple PNG files at once',
      'No loss of image resolution'
    ],
    howToSteps: [
      { name: 'Upload PNGs', text: 'Select one or more .png files.' },
      { name: 'Instant Conversion', text: 'The tool converts each image to JPEG format with white background fill.' },
      { name: 'Download JPGs', text: 'Download converted JPGs individually or as a single ZIP archive.' }
    ],
    faqs: [
      {
        question: 'What happens to transparent areas when converting PNG to JPG?',
        answer: 'JPEG does not support transparency. Our converter seamlessly fills transparent areas with a clean white background (#FFFFFF) to ensure your subjects, text, or logos look natural.'
      },
      {
        question: 'Why should I convert PNG to JPG?',
        answer: 'Photos saved as PNG are often 5x to 10x larger than necessary. Converting photographic PNGs to JPG slashes file sizes drastically while maintaining beautiful visual fidelity.'
      }
    ],
    articleContent: [
      {
        heading: 'Why Convert From PNG to JPEG?',
        paragraphs: [
          'While PNG is great for screenshots and flat graphics, camera photos stored as PNGs suffer from massive file sizes. Converting them to JPEG introduces DCT lossy quantization, dramatically cutting file size for web and email use.'
        ]
      }
    ],
    relatedToolSlugs: ['jpg-to-png', 'compress-jpg', 'webp-to-jpg', 'resize-image']
  },
  {
    slug: 'jpg-to-png',
    title: 'Convert JPG to PNG Online',
    shortTitle: 'JPG to PNG',
    metaTitle: 'JPG to PNG Converter Online Free - Convert JPEG to PNG Instantly',
    metaDescription: 'Convert JPG to PNG online free. Transform JPEG images into lossless PNG format without any software installation. Fast, free, and private.',
    h1: 'Convert JPG to PNG Online Free',
    subheading: 'Transform JPG and JPEG photos into lossless PNG format directly in your browser. Fast, private, and compatible with all graphic editors.',
    targetKB: 250,
    keywords: ['jpg to png', 'convert jpg to png', 'jpeg to png converter', 'turn jpg into png', 'online image converter'],
    features: [
      'Lossless 24-bit/32-bit PNG output',
      'Full compatibility with Adobe Photoshop, Figma, and Canva',
      'Batch processing with zero upload wait times',
      'Retains original image dimensions and color gamut'
    ],
    howToSteps: [
      { name: 'Upload JPGs', text: 'Drop your .jpg or .jpeg images into the converter.' },
      { name: 'Automatic Conversion', text: 'The engine encodes the pixel matrix into a lossless PNG container.' },
      { name: 'Download PNG', text: 'Save your converted PNG files immediately.' }
    ],
    faqs: [
      {
        question: 'Does converting JPG to PNG make the image transparent?',
        answer: 'No. Converting JPG to PNG encapsulates the existing image into a PNG container. It does not automatically remove the background, but allows you to edit and add transparency in design programs.'
      }
    ],
    articleContent: [
      {
        heading: 'When to Convert JPEG to PNG Format',
        paragraphs: [
          'Converting JPEG to PNG is often required when prepping artwork for graphic design software, print workflows, or further layered digital editing where repeated lossy re-encoding must be prevented.'
        ]
      }
    ],
    relatedToolSlugs: ['png-to-jpg', 'compress-png', 'webp-to-jpg', 'compress-jpg']
  },
  {
    slug: 'webp-to-jpg',
    title: 'Convert WebP to JPG Online',
    shortTitle: 'WebP to JPG',
    metaTitle: 'WebP to JPG Converter Online Free - Turn WebP to JPEG',
    metaDescription: 'Convert WebP to JPG online for free. Fix WebP compatibility issues and convert modern WebP images to universal JPEG format in seconds.',
    h1: 'Convert WebP to JPG Online Free',
    subheading: 'Easily convert WebP images downloaded from websites into standard JPG format for maximum compatibility across all devices and software.',
    targetKB: 100,
    keywords: ['webp to jpg', 'convert webp to jpg', 'webp to jpeg converter', 'change webp to jpg online', 'open webp as jpg'],
    features: [
      'Fixes compatibility issues with legacy photo viewers and older software',
      'Converts transparent WebP to clean white-background JPG',
      'Instant local browser processing',
      'Batch conversion with 1-click ZIP export'
    ],
    howToSteps: [
      { name: 'Upload WebP Files', text: 'Select the WebP images you downloaded from the internet.' },
      { name: 'Convert to JPG', text: 'Our engine renders and converts the WebP stream into a standard JPEG.' },
      { name: 'Download JPG', text: 'Open and share your universal JPEG anywhere.' }
    ],
    faqs: [
      {
        question: 'Why won\'t my image viewer open WebP files?',
        answer: 'Older operating systems, desktop applications, and document editors may not support Google\'s WebP format natively. Converting to JPG ensures 100% universal compatibility across every computer, phone, and TV.'
      }
    ],
    articleContent: [
      {
        heading: 'Solving the WebP Compatibility Challenge',
        paragraphs: [
          'Many websites now serve images in WebP format for performance reasons. When users download these images for use in Microsoft Word, PowerPoint, or legacy image editors, they often encounter "Unsupported File Format" errors. Converting to JPG resolves this instantly.'
        ]
      }
    ],
    relatedToolSlugs: ['png-to-jpg', 'compress-webp', 'compress-jpg', 'resize-image']
  }
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '');
  return ALL_TOOLS.find((t) => t.slug === normalized);
}
