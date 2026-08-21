const express = require('express');
const router = express.Router();
const {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, createJob).get(getJobs);
router.route('/:id').get(getJobById).put(protect, updateJob).delete(protect, deleteJob);

module.exports = router;