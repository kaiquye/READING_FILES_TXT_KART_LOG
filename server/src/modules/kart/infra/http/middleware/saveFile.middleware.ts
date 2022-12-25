import multer from 'multer';
import crypto from 'crypto';

export const storage = multer.diskStorage({
  destination: 'files',
  filename(req: any, file, callback) {
    const typeFile = file.originalname.split('.')[1];

    const nameFile = crypto.randomBytes(64).toString('hex');

    file.filename = nameFile;
    file.fieldname = typeFile;
    callback(null, `${nameFile}.${typeFile}`);
  },
});
