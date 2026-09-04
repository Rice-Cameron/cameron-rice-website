import fs from 'fs';
import path from 'path';
import os from 'os';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { syncResume } from './sync-resume.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const MARKDOWN_PATH = path.join(rootDir, 'resume.md');
const PUBLIC_PDF_PATH = path.join(rootDir, 'public', 'CameronRiceResume.pdf');
const DOCS_PDF_PATH = '/home/cameronri/Documents/CameronRiceResume.pdf';

function mdToHtml(md) {
  const lines = md.split('\n');
  let bodyContent = '';
  let inList = false;
  let inHeader = false;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine) continue;

    // Name Header
    if (rawLine.startsWith('# ')) {
      if (inList) { bodyContent += '</ul>\n'; inList = false; }
      bodyContent += `<div class="header">\n  <h1>${rawLine.slice(2)}</h1>\n`;
      inHeader = true;
      continue;
    }

    // Section Header (e.g. WORK EXPERIENCE, PROJECTS)
    if (rawLine.startsWith('## ')) {
      if (inList) { bodyContent += '</ul>\n'; inList = false; }
      bodyContent += `<h2>${rawLine.slice(3)}</h2>\n`;
      continue;
    }

    // Entry Titles (Job, Project, School, Skills Category)
    if (rawLine.startsWith('### ')) {
      if (inList) { bodyContent += '</ul>\n'; inList = false; }
      const text = rawLine.slice(4);
      if (text.endsWith(':')) {
        bodyContent += `<div class="skills-category">${text}</div>\n`;
      } else {
        bodyContent += `<div class="entry-title">${text}</div>\n`;
      }
      continue;
    }

    // Horizontal Rule
    if (rawLine === '---') {
      if (inList) { bodyContent += '</ul>\n'; inList = false; }
      if (inHeader) {
        bodyContent += '</div>\n';
        inHeader = false;
      }
      bodyContent += '<hr>\n';
      continue;
    }

    // List Bullets
    if (rawLine.startsWith('* ') || rawLine.startsWith('- ')) {
      if (!inList) {
        bodyContent += '<ul>\n';
        inList = true;
      }
      let content = rawLine.slice(2);
      content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
      bodyContent += `  <li>${content}</li>\n`;
      continue;
    }

    // Other plain text lines
    if (inList) { bodyContent += '</ul>\n'; inList = false; }
    let parsedLine = rawLine.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    if (inHeader) {
      bodyContent += `  <div class="contact-line">${parsedLine}</div>\n`;
    } else {
      bodyContent += `  <div class="subline">${parsedLine}</div>\n`;
    }
  }

  if (inList) bodyContent += '</ul>\n';
  if (inHeader) bodyContent += '</div>\n';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Cameron Rice - Resume</title>
<style>
  @page {
    size: letter;
    margin: 0.45in 0.55in;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Times New Roman", Times, "Liberation Serif", serif;
    color: #000;
    margin: 0;
    padding: 0;
    line-height: 1.25;
    font-size: 10pt;
    -webkit-print-color-adjust: exact;
  }
  .header {
    text-align: center;
    margin-bottom: 6px;
  }
  h1 {
    margin: 0 0 4px 0;
    font-size: 24pt;
    font-weight: bold;
    letter-spacing: -0.2px;
  }
  .contact-line {
    font-size: 10pt;
    margin: 2px 0;
  }
  a {
    color: #000;
    text-decoration: underline;
  }
  hr {
    border: none;
    border-top: 1px solid #777;
    margin: 6px 0 6px 0;
  }
  h2 {
    font-size: 11pt;
    font-weight: bold;
    text-transform: uppercase;
    margin: 6px 0 4px 0;
    letter-spacing: 0.5px;
  }
  .entry-title {
    font-size: 10.5pt;
    font-weight: bold;
    margin: 4px 0 1px 0;
  }
  .subline {
    font-size: 9.8pt;
    margin: 0 0 3px 0;
  }
  ul {
    margin: 0 0 4px 0;
    padding-left: 20px;
    list-style-type: disc;
  }
  li {
    font-size: 9.8pt;
    line-height: 1.32;
    margin-bottom: 2px;
  }
  .skills-category {
    font-size: 10.5pt;
    font-weight: bold;
    margin: 4px 0 1px 0;
  }
</style>
</head>
<body>
${bodyContent}
</body>
</html>`;
}

export async function generateResumePdf() {
  if (!fs.existsSync(MARKDOWN_PATH)) {
    throw new Error(`Markdown file not found at ${MARKDOWN_PATH}`);
  }

  const markdownContent = fs.readFileSync(MARKDOWN_PATH, 'utf-8');
  const htmlContent = mdToHtml(markdownContent);

  const tmpHtmlPath = path.join(os.tmpdir(), `resume-${Date.now()}.html`);
  const tmpPdfPath = path.join(os.tmpdir(), `resume-${Date.now()}.pdf`);

  fs.writeFileSync(tmpHtmlPath, htmlContent, 'utf-8');

  try {
    // Render using Chrome headless (Skia/PDF engine matching user's original PDF format)
    execFileSync('google-chrome-stable', [
      '--headless',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--print-to-pdf=${tmpPdfPath}`,
      tmpHtmlPath
    ]);

    // Copy to public directory
    fs.copyFileSync(tmpPdfPath, PUBLIC_PDF_PATH);
    console.log(`[generate-resume-pdf] Wrote PDF to ${PUBLIC_PDF_PATH}`);

    // Also copy to ~/Documents if available
    try {
      fs.copyFileSync(tmpPdfPath, DOCS_PDF_PATH);
      console.log(`[generate-resume-pdf] Wrote PDF to ${DOCS_PDF_PATH}`);
    } catch (e) {
      // ignore
    }

    // Clean up temporary files
    fs.unlinkSync(tmpHtmlPath);
    fs.unlinkSync(tmpPdfPath);

    // Sync parsed resume data for the website
    await syncResume();
  } catch (err) {
    console.error('[generate-resume-pdf] Error:', err);
    throw err;
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateResumePdf().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
