import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Briefcase, LayoutDashboard, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0B1220]/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-gradient-to-br from-[#D4B678] to-[#B08D57] p-2.5 rounded-xl shadow-md group-hover:scale-105 transition-transform">
              <Briefcase className="w-5 h-5 text-[#0B1220]" strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl font-medium text-white tracking-tight">
              Job<span className="text-[#D4B678] italic">Connect</span>
            </span>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/jobs"
              className={`px-5 py-2.5 rounded-lg text-base font-medium tracking-tight transition-colors ${
                isActive('/jobs')
                  ? 'text-[#D4B678] bg-white/5'
                  : 'text-slate-300 hover:text-[#D4B678] hover:bg-white/5'
              }`}
            >
              Find Jobs
            </Link>

            {token && (
              <Link
                to="/dashboard"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-base font-medium tracking-tight transition-colors ${
                  isActive('/dashboard')
                    ? 'text-[#D4B678] bg-white/5'
                    : 'text-slate-300 hover:text-[#D4B678] hover:bg-white/5'
                }`}
              >
                <LayoutDashboard className="w-4.5 h-4.5" />
                Dashboard
              </Link>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {token ? (
              <>
                <div className="hidden sm:flex items-center gap-2.5 pl-3 pr-4 py-1.5 bg-white/5 rounded-full border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4B678] to-[#B08D57] flex items-center justify-center">
                    <User className="w-4 h-4 text-[#0B1220]" />
                  </div>
                  <span className="text-base font-medium text-slate-200">{userName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-base font-medium tracking-tight text-slate-300 hover:text-red-400 px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <LogOut className="w-4.5 h-4.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-base font-medium tracking-tight text-slate-300 hover:text-white px-5 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="text-base font-semibold tracking-tight text-[#0B1220] bg-gradient-to-r from-[#D4B678] to-[#c9a866] px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;