import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Loader2 } from 'lucide-react';
import API from '../api/axios';

const statusStyles = {
  Pending: 'bg-amber-50 text-amber-700 border-amber-200',
  Reviewed: 'bg-blue-50 text-blue-700 border-blue-200',
  Accepted: 'bg-green-50 text-green-700 border-green-200',
  Rejected: 'bg-red-50 text-red-700 border-red-200',
};

const SeekerDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await API.get('/applications/my');
        setApplications(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#0B1220] py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-3xl font-medium text-white mb-2">My Applications</h1>
          <p className="text-slate-400">Track the status of every role you've applied to</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-[#B08D57] animate-spin" />
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
            <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-4" />
            <h3 className="font-display text-xl text-[#0B1220] mb-2">No applications yet</h3>
            <p className="text-slate-500 mb-6">Start applying to jobs to see them here.</p>
            <Link
              to="/jobs"
              className="inline-block bg-gradient-to-r from-[#D4B678] to-[#c9a866] text-[#0B1220] font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div
                key={app._id}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-display text-lg font-medium text-[#0B1220] mb-1">
                    {app.job?.title || 'Job no longer available'}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    {app.job?.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {app.job.location}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" /> Applied {new Date(app.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-sm font-semibold px-4 py-1.5 rounded-full border w-fit ${statusStyles[app.status]}`}
                >
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SeekerDashboard;