// Liquid Gold Dragon — the teacup cannot hold it.
// Copies the entry image to the output directory, byte for byte.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDirectory, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDirectory, 'entry.png'));
