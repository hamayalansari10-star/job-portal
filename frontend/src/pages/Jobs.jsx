import { useState, useEffect } from 'react';
import { Search, MapPin, SlidersHorizontal, Loader2 } from 'lucide-react';
import API from '../api/axios';
import JobCard from '../components/JobCard';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await API.get('/jobs', {
        params: { keyword, location },
      });
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  fetchJobs();
}, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header + Search */}
      <div className="bg-[#0B1220] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-3xl font-medium text-white mb-2">
            Find your next role
          </h1>
          <p className="text-slate-400 mb-8">{jobs.length} verified opportunities waiting</p>

          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl shadow-xl p-2 flex flex-col sm:flex-row gap-2 max-w-3xl"
          >
            <div className="flex items-center flex-1 px-4 py-2.5">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Job title or keyword"
                className="w-full outline-none text-slate-800 text-base placeholder:text-slate-400"
              />
            </div>
            <div className="hidden sm:block w-px bg-slate-200 my-2" />
            <div className="flex items-center flex-1 px-4 py-2.5">
              <MapPin className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="w-full outline-none text-slate-800 text-base placeholder:text-slate-400"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4B678] to-[#c9a866] text-[#0B1220] font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all whitespace-nowrap"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="w-8 h-8 text-[#B08D57] animate-spin mb-3" />
            <p className="text-slate-500">Loading opportunities...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <SlidersHorizontal className="w-10 h-10 text-slate-300 mb-4" />
            <h3 className="font-display text-xl text-[#0B1220] mb-2">No jobs found</h3>
            <p className="text-slate-500">Try adjusting your search or check back soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;