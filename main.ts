import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('/output', { recursive: true });
copyFileSync(new URL('./POST.json', import.meta.url), '/output/POST.json');
