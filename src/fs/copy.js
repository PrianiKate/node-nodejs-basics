import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const PATH = path.resolve(__dirname, 'files');
  const COPY_PATH = path.resolve(__dirname, 'files_copy');

  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      fs.stat(COPY_PATH, function (err, stat) {
        if (err === null) {
          throw new Error('FS operation failed');
        } else if (err.code === 'ENOENT') {
          fs.mkdir(COPY_PATH, () => {
            fs.readdir(PATH, (err, files) => {
              files.forEach((file) => {
                fs.copyFile(`${PATH}/${file}`, `${COPY_PATH}/${file}`, () => { });
              })
            });
          });
        }
      }, () => { });
    } else if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }, () => { });
};

await copy();
