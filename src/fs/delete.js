import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const PATH = path.resolve(__dirname, 'files', 'fileToRemove.txt');
  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      fs.unlink(PATH, (err) => console.log(err));
    } else if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }, () => { });

};

await remove();
