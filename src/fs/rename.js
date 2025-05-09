import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const PATH = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const RENAME_PATH = path.resolve(__dirname, 'files', 'properFilename.md');
  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      fs.stat(RENAME_PATH, function (err, stat) {
        if (err === null) {
          throw new Error('FS operation failed');
        } else if (err.code === 'ENOENT') {
          fs.rename(PATH, RENAME_PATH, () => { });
        }
      });
    } else if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }, () => { });
};

await rename();
