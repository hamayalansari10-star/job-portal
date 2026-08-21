import { Link } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign, Building2 } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <Link
      to={`/jobs/${job._id}`}
      className="block bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#B08D57]/50 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-[#0B1220] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
          <Building2 className="w-5 h-5 text-[#D4B678]" />
        </div>
        <span className="text-xs font-semibold text-[#B08D57] bg-[#D4B678]/10 px-3 py-1 rounded-full">
          {job.jobType}
        </span>
      </div>

      <h3 className="font-display text-lg font-medium text-[#0B1220] mb-1 line-clamp-1">
        {job.title}
      </h3>
      <p className="text-sm text-slate-500 mb-4">{job.postedBy?.company || job.postedBy?.name}</p>

      <p className="text-sm text-slate-600 mb-5 line-clamp-2 leading-relaxed">
        {job.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin className="w-4 h-4 text-slate-400" />
          {job.location}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <DollarSign className="w-4 h-4 text-slate-400" />
          {job.salary?.toLocaleString()}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <Briefcase className="w-4 h-4 text-slate-400" />
          {job.category}
        </div>
      </div>
    </Link>
  );
};

export default JobCard;