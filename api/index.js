// api/index.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'mantenimiento.html');
  const html = fs.readFileSync(filePath, 'utf8');
  res.status(503).setHeader('Content-Type', 'text/html').send(html);
}