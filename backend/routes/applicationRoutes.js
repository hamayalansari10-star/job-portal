const express = require('express');
const router = express.Router();
const {
  applyToJob,
  getMyApplications,
  getApplicationsForJob,
  updateApplicationStatus,
} = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.post('/', protect, upload.single('resume'), applyToJob);
router.get('/my', protect, getMyApplications);
router.get('/job/:jobId', protect, getApplicationsForJob);
router.put('/:id', protect, updateApplicationStatus);

module.exports = router;