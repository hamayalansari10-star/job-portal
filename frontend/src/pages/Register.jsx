import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Mail, Lock, User, Building2, Loader2 } from 'lucide-react';
import API from '../api/axios';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seeker',
    company: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await API.post('/auth/register', formData);
      login(res.data);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-br from-[#D4B678] to-[#B08D57] p-3 rounded-2xl shadow-lg mb-4">
            <Briefcase className="w-7 h-7 text-[#0B1220]" strokeWidth={2.5} />
          </div>
          <h1 className="font-display text-3xl font-medium text-white">Create your account</h1>
          <p className="text-slate-400 mt-1.5">Join JobConnect today</p>
        </div>

        {/* Card */}
        <div className="bg-[#111A2E] rounded-2xl shadow-2xl shadow-black/30 border border-white/10 p-8">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Role Selector */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: 'seeker' })}
              className={`py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                formData.role === 'seeker'
                  ? 'border-[#D4B678] bg-[#D4B678]/10 text-[#D4B678]'
                  : 'border-white/10 text-slate-400 hover:border-white/20'
              }`}
            >
              🔍 Job Seeker
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: 'employer' })}
              className={`py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                formData.role === 'employer'
                  ? 'border-[#D4B678] bg-[#D4B678]/10 text-[#D4B678]'
                  : 'border-white/10 text-slate-400 hover:border-white/20'
              }`}
            >
              🏢 Employer
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4B678] focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4B678] focus:border-transparent transition"
                />
              </div>
            </div>

            {formData.role === 'employer' && (
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4B678] focus:border-transparent transition"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                <input
                  type="password"
                  name="password"
                  required
                  minLength={6}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4B678] focus:border-transparent transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4B678] to-[#c9a866] text-[#0B1220] font-semibold text-base py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-[#D4B678] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;