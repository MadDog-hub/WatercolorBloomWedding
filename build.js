#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Building wedding website for static deployment...');

try {
  // Run vite build which outputs to dist/public
  execSync('vite build', { stdio: 'inherit', cwd: __dirname });
  console.log('✅ Build completed successfully!');
  console.log('📁 Output directory: dist/public');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}