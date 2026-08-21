import { Link } from 'react-router-dom';
import { Search, MapPin, ShieldCheck, TrendingUp, Users, Briefcase, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .delay-1 { animation-delay: 0.08s; }
        .delay-2 { animation-delay: 0.18s; }
        .delay-3 { animation-delay: 0.28s; }
        .delay-4 { animation-delay: 0.38s; }
        .font-display { font-family: 'Fraunces', serif; }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-[#0B1220] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-28 relative z-10">
          <div className="max-w-3xl">
            <div className="fade-up inline-flex items-center gap-2 border border-[#B08D57]/40 text-[#D4B678] text-sm font-medium px-4 py-1.5 rounded-full mb-8 tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              Verified employers only
            </div>
            <h1 className="fade-up delay-1 font-display text-5xl sm:text-6xl font-medium text-white leading-[1.08] mb-6">
              Work built on
              <br />
              <span className="italic text-[#D4B678]">trust</span>, not noise.
            </h1>
            <p className="fade-up delay-2 text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
              Every listing on JobConnect comes from a verified company. No ghost
              jobs, no recruiters fishing for resumes — just real roles, ready to fill.
            </p>

            {/* Search Bar */}
            <div className="fade-up delay-3 bg-white rounded-2xl shadow-2xl shadow-black/30 p-2 flex flex-col sm:flex-row gap-2 max-w-2xl">
              <div className="flex items-center flex-1 px-4 py-2.5">
                <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full outline-none text-slate-800 text-base placeholder:text-slate-400"
                />
              </div>
              <div className="hidden sm:block w-px bg-slate-200 my-2" />
              <div className="flex items-center flex-1 px-4 py-2.5">
                <MapPin className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full outline-none text-slate-800 text-base placeholder:text-slate-400"
                />
              </div>
              <Link
                to="/jobs"
                className="flex items-center justify-center gap-2 bg-[#0B1220] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1a2740] transition-colors whitespace-nowrap"
              >
                Search Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {[
              { icon: Briefcase, value: '2,400+', label: 'Active roles' },
              { icon: Users, value: '850+', label: 'Verified employers' },
              { icon: TrendingUp, value: '18,000+', label: 'Candidates placed' },
              { icon: ShieldCheck, value: '100%', label: 'Manually reviewed' },
            ].map(({ icon: Icon, value, label }, i) => (
              <div key={label} className={`fade-up delay-${i + 1}`}>
                <Icon className="w-5 h-5 text-[#B08D57] mb-3" strokeWidth={1.75} />
                <div className="font-display text-3xl font-medium text-[#0B1220]">{value}</div>
                <div className="text-sm text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="mb-16 max-w-xl">
          <span className="text-sm font-semibold tracking-widest text-[#B08D57] uppercase">
            How it works
          </span>
          <h2 className="font-display text-3xl font-medium text-[#0B1220] mt-3">
            Built for both sides of the hire
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-200 rounded-2xl p-9 hover:border-[#B08D57]/50 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
            <div className="bg-[#0B1220] w-11 h-11 rounded-lg flex items-center justify-center mb-6">
              <Search className="w-5 h-5 text-[#D4B678]" />
            </div>
            <h3 className="font-display text-xl font-medium text-[#0B1220] mb-2">Looking for work?</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Browse verified openings, apply in a couple of clicks, and track every
              application from one dashboard.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 text-[#0B1220] font-semibold hover:gap-3 transition-all"
            >
              Create your profile <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="border border-slate-200 rounded-2xl p-9 hover:border-[#B08D57]/50 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
            <div className="bg-[#0B1220] w-11 h-11 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="w-5 h-5 text-[#D4B678]" />
            </div>
            <h3 className="font-display text-xl font-medium text-[#0B1220] mb-2">Hiring talent?</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Post a role in minutes, review applicants in one place, and move fast
              on the candidates you want.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 text-[#0B1220] font-semibold hover:gap-3 transition-all"
            >
              Post your first job <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="bg-[#0B1220] rounded-3xl px-10 py-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
          <h2 className="font-display text-3xl font-medium text-white mb-3 relative z-10">
            Your next opportunity is <span className="italic text-[#D4B678]">one click away</span>
          </h2>
          <p className="text-slate-400 mb-8 relative z-10">Join thousands already using JobConnect.</p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-[#D4B678] text-[#0B1220] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#c9a866] transition-colors relative z-10"
          >
            Get Started Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;