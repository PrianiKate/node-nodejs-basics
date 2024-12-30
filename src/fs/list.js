import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const PATH = path.resolve(__dirname, 'files');
  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      fs.readdir(PATH, (err, files) => {
        console.log(files);
      });
    } else if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }, () => { });
};

await list();
