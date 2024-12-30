import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const PATH = path.resolve(__dirname, 'files', 'fresh.txt');
  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      throw new Error('FS operation failed');
    } else if (err.code === 'ENOENT') {
      fs.writeFile(PATH, 'I am fresh and young', () => { });
    }
  }, () => { });
};

await create();
