const Application = require('../models/Application');
const Job = require('../models/Job');

// @desc    Apply to a job
// @route   POST /api/applications
// @access  Private (Seeker only)
exports.applyToJob = async (req, res) => {
  try {
    if (req.user.role !== 'seeker') {
      return res.status(403).json({ message: 'Only job seekers can apply to jobs' });
    }

    const { jobId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Resume file is required' });
    }

    const resumeUrl = req.file.path; // Cloudinary automatically ye de deta hai

    // Check if already applied
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: req.user._id,
    });

    if (existingApplication) {
      return res.status(400).json({ message: 'You have already applied to this job' });
    }

    const application = await Application.create({
      job: jobId,
      applicant: req.user._id,
      resumeUrl,
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get logged-in user's applications
// @route   GET /api/applications/my
// @access  Private (Seeker)
exports.getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.user._id })
      .populate('job', 'title location salary')
      .sort({ createdAt: -1 });

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get applications for a specific job (for employer)
// @route   GET /api/applications/job/:jobId
// @access  Private (Employer - job owner only)
exports.getApplicationsForJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.postedBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized to view these applications' });
    }

    const applications = await Application.find({ job: req.params.jobId })
      .populate('applicant', 'name email resume')
      .sort({ createdAt: -1 });

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update application status (accept/reject)
// @route   PUT /api/applications/:id
// @access  Private (Employer only)
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const application = await Application.findById(req.params.id).populate('job');

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Check ke logged-in employer hi is job ka owner hai
    if (application.job.postedBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    application.status = status;
    await application.save();

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};