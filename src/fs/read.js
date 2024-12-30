import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const PATH = path.resolve(__dirname, 'files', 'fileToRead.txt');
  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      fs.readFile(PATH, 'utf-8', (err, data) => console.log(data));
    } else if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }, () => { });
};

await read();
