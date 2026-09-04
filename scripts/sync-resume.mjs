import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFParse } from 'pdf-parse';
import { parseResumeText } from '../src/lib/parseResume.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const PDF_PATH = path.join(rootDir, 'public', 'CameronRiceResume.pdf');
const FALLBACK_PDF_PATH = path.join(rootDir, 'public', 'resume.pdf');
const OUTPUT_PATH = path.join(rootDir, 'src', 'data', 'resumeData.json');

export async function syncResume() {
  const pdfFile = fs.existsSync(PDF_PATH)
    ? PDF_PATH
    : fs.existsSync(FALLBACK_PDF_PATH)
    ? FALLBACK_PDF_PATH
    : null;

  if (!pdfFile) {
    console.warn(
      `[sync-resume] Warning: No PDF found at ${PDF_PATH}. Keeping existing resume data if present.`
    );
    if (!fs.existsSync(OUTPUT_PATH)) {
      console.error(`[sync-resume] Error: No existing ${OUTPUT_PATH} found.`);
    }
    return;
  }

  try {
    const fileBuffer = fs.readFileSync(pdfFile);
    const parser = new PDFParse({ data: fileBuffer });
    await parser.load();
    const result = await parser.getText();
    const parsedData = parseResumeText(result.text);
    await parser.destroy();

    const outputDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(parsedData, null, 2), 'utf-8');
    console.log(`[sync-resume] Successfully parsed ${pdfFile} -> ${OUTPUT_PATH}`);
  } catch (err) {
    console.error('[sync-resume] Error parsing PDF:', err);
    if (!fs.existsSync(OUTPUT_PATH)) {
      throw err;
    }
  }
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  syncResume();
}
