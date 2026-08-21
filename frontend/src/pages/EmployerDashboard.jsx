import { useState, useEffect } from 'react';
import { Plus, Briefcase, MapPin, Users, X, Loader2, Trash2 } from 'lucide-react';
import API from '../api/axios';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [posting, setPosting] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [applicantsLoading, setApplicantsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    salary: '',
    jobType: 'Full-time',
  });

  const triggerRefresh = () => setRefreshKey((prev) => prev + 1);

  useEffect(() => {
    let isMounted = true;

    const fetchMyJobs = async () => {
      try {
        const res = await API.get('/jobs');
        const userStr = localStorage.getItem('userName');
        // Filter jobs posted by logged-in employer
        const myJobs = res.data.filter((job) => job.postedBy?.name === userStr);
        if (isMounted) setJobs(myJobs);
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMyJobs();

    return () => {
      isMounted = false;
    };
  }, [refreshKey]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePostJob = async (e) => {
    e.preventDefault();
    setPosting(true);
    try {
      await API.post('/jobs', { ...formData, salary: Number(formData.salary) });
      setFormData({ title: '', description: '', category: '', location: '', salary: '', jobType: 'Full-time' });
      setShowForm(false);
      triggerRefresh();
    } catch (err) {
      console.error(err);
    } finally {
      setPosting(false);
    }
  };

  const handleDeleteJob = async (jobId) => {
    if (!confirm('Delete this job posting?')) return;
    try {
      await API.delete(`/jobs/${jobId}`);
      triggerRefresh();
    } catch (err) {
      console.error(err);
    }
  };

  const viewApplicants = async (job) => {
    setSelectedJob(job);
    setApplicantsLoading(true);
    try {
      const res = await API.get(`/applications/job/${job._id}`);
      setApplicants(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setApplicantsLoading(false);
    }
  };

  const updateStatus = async (appId, status) => {
    try {
      await API.put(`/applications/${appId}`, { status });
      setApplicants((prev) => prev.map((a) => (a._id === appId ? { ...a, status } : a)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#0B1220] py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-medium text-white mb-2">My Job Postings</h1>
            <p className="text-slate-400">Manage your listings and review applicants</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-[#D4B678] to-[#c9a866] text-[#0B1220] font-semibold px-5 py-3 rounded-xl hover:shadow-lg transition-all"
          >
            <Plus className="w-5 h-5" />
            Post a Job
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-[#B08D57] animate-spin" />
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
            <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-4" />
            <h3 className="font-display text-xl text-[#0B1220] mb-2">No jobs posted yet</h3>
            <p className="text-slate-500">Click "Post a Job" to create your first listing.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job._id} className="bg-white rounded-2xl border border-slate-100 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-medium text-[#0B1220] mb-1">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span>{job.jobType}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => viewApplicants(job)}
                      className="flex items-center gap-2 text-sm font-semibold text-[#0B1220] border border-slate-200 px-4 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <Users className="w-4 h-4" /> View Applicants
                    </button>
                    <button
                      onClick={() => handleDeleteJob(job._id)}
                      className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Post Job Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-medium text-[#0B1220]">Post a New Job</h2>
              <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handlePostJob} className="space-y-4">
              <input
                type="text" name="title" required placeholder="Job Title"
                value={formData.title} onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4B678]"
              />
              <textarea
                name="description" required placeholder="Job Description" rows={4}
                value={formData.description} onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4B678]"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text" name="category" required placeholder="Category"
                  value={formData.category} onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4B678]"
                />
                <input
                  type="text" name="location" required placeholder="Location"
                  value={formData.location} onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4B678]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number" name="salary" required placeholder="Salary"
                  value={formData.salary} onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4B678]"
                />
                <select
                  name="jobType" value={formData.jobType} onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4B678]"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Remote</option>
                  <option>Contract</option>
                </select>
              </div>
              <button
                type="submit" disabled={posting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4B678] to-[#c9a866] text-[#0B1220] font-semibold py-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-60"
              >
                {posting && <Loader2 className="w-5 h-5 animate-spin" />}
                {posting ? 'Posting...' : 'Post Job'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Applicants Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-medium text-[#0B1220]">
                Applicants for {selectedJob.title}
              </h2>
              <button onClick={() => setSelectedJob(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            {applicantsLoading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="w-6 h-6 text-[#B08D57] animate-spin" />
              </div>
            ) : applicants.length === 0 ? (
              <p className="text-slate-500 text-center py-10">No applicants yet.</p>
            ) : (
              <div className="space-y-3">
                {applicants.map((app) => (
                  <div key={app._id} className="border border-slate-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-[#0B1220]">{app.applicant?.name}</p>
                      <select
                        value={app.status}
                        onChange={(e) => updateStatus(app._id, e.target.value)}
                        className="text-xs font-semibold border border-slate-200 rounded-lg px-2 py-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Reviewed">Reviewed</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                    <p className="text-sm text-slate-500 mb-1">{app.applicant?.email}</p>

                    {app.resumeUrl && (
                      <a
                        href={app.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-[#B08D57] font-medium hover:underline block mt-2"
                      >
                        View Resume →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployerDashboard;