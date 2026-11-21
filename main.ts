// gta6-meme-x-01 entrypoint: copies the X post record (POST.json) to /output so the judges can verify the meme post.
// The meme image itself is meme.png (8-bit pixel art); this program only ships the post record.
import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('/output', { recursive: true });
copyFileSync(new URL('./POST.json', import.meta.url), '/output/POST.json');
