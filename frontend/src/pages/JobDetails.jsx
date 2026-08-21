import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign, Building2, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import API from '../api/axios';
import { useAuth } from '../context/AuthContext';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await API.get(`/jobs/${id}`);
        setJob(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <Loader2 className="w-8 h-8 text-[#B08D57] animate-spin" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <p className="text-slate-500">Job not found.</p>
      </div>
    );
  }

  const handleApplyClick = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    navigate(`/apply/${job._id}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="bg-[#0B1220] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#D4B678] text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to jobs
          </Link>

          <div className="flex items-start gap-5">
            <div className="bg-gradient-to-br from-[#D4B678] to-[#B08D57] w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
              <Building2 className="w-7 h-7 text-[#0B1220]" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-medium text-white mb-2">{job.title}</h1>
              <p className="text-slate-400 text-lg">{job.postedBy?.company || job.postedBy?.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8">
            <h2 className="font-display text-xl font-medium text-[#0B1220] mb-4">Job Description</h2>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{job.description}</p>
          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 h-fit">
            <div className="space-y-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-[#D4B678]/10 p-2 rounded-lg">
                  <MapPin className="w-4.5 h-4.5 text-[#B08D57]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-[#0B1220]">{job.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#D4B678]/10 p-2 rounded-lg">
                  <DollarSign className="w-4.5 h-4.5 text-[#B08D57]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Salary</p>
                  <p className="text-sm font-semibold text-[#0B1220]">Rs. {job.salary?.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#D4B678]/10 p-2 rounded-lg">
                  <Briefcase className="w-4.5 h-4.5 text-[#B08D57]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Category</p>
                  <p className="text-sm font-semibold text-[#0B1220]">{job.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#D4B678]/10 p-2 rounded-lg">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#B08D57]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Job Type</p>
                  <p className="text-sm font-semibold text-[#0B1220]">{job.jobType}</p>
                </div>
              </div>
            </div>

            {(!user || user.role === 'seeker') && (
              <button
                onClick={handleApplyClick}
                className="w-full bg-gradient-to-r from-[#D4B678] to-[#c9a866] text-[#0B1220] font-semibold py-3 rounded-xl hover:shadow-lg transition-all"
              >
                Apply Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;