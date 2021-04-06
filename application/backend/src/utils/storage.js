const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'public/',
  filename: (req, file, cb) => {
    cb(null, req.body.img_path);
  },
  limits: { fieldSize: 25 * 1024 * 1042 },
});

const upload = multer({ storage: storage });

module.exports = upload;
