const fs = require('fs');
const path = require('path');
// const glob = require('glob'); // Removed dependency

const SITE_URL = 'https://rz-digital-studio.vercel.app';

function generateSitemap() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const blogsDir = path.join(__dirname, '..', 'public', 'blogs');

  // 1. Static Pages
  const staticPages = [
    '',
    '/blogs',
    '/request',
    // Add other static pages here if you have them, e.g., '/about', '/contact'
  ];

  // 2. Dynamic Blog Pages
  const blogFiles = fs.readdirSync(blogsDir).filter(file => file.endsWith('.md'));
  const blogUrls = blogFiles.map(file => `/blogs/${file.replace('.md', '')}`);

  const allUrls = [...staticPages, ...blogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map((url) => {
      const route = url === '' ? '' : url;
      return `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url.includes('/blogs/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
</urlset>
`;

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap();
