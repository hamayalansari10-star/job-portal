const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'job-portal-resumes',
    resource_type: 'raw', // PDF/documents ke liye zaroori (image nahi hai)
    allowed_formats: ['pdf', 'doc', 'docx'],
  },
});

const upload = multer({ storage });

module.exports = upload;