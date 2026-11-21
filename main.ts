// gta6-meme-x-01 entrypoint: copies the X post record (POST.json) to /output so the judges can verify the meme post.
// The meme image itself is meme.png (8-bit pixel art); this program only ships the post record.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';

const source = new URL('./POST.json', import.meta.url);
try {
  if (!existsSync(source)) {
    console.error('POST.json is missing. Place it next to main.ts and try again.');
    process.exitCode = 1;
  } else {
    mkdirSync('/output', { recursive: true });
  copyFileSync(source, '/output/POST.json');
  }
} catch (error) {
  console.error('Unable to copy POST.json:', error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
