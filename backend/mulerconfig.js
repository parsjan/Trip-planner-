import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads'); // Save files in the 'uploads' directory
    },
    filename: function (req, file, cb) {
      // Use the current timestamp + file original name as the new file name
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage });

   export default upload