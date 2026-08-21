const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['seeker', 'employer'],
      required: true,
    },
    resume: {
      type: String, // Cloudinary URL (job seekers ke liye)
    },
    company: {
      type: String, // Company name (employers ke liye)
    },
  },
  { timestamps: true } // createdAt aur updatedAt automatically add ho jayenge
);

module.exports = mongoose.model('User', userSchema);