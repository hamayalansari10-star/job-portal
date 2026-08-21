import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, Upload, ArrowLeft, Loader2, CheckCircle2, FileText } from 'lucide-react';
import API from '../api/axios';

const Apply = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

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

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!resumeFile) {
      setError('Please select a resume file to upload.');
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('jobId', id);
      formData.append('resume', resumeFile);

      await API.post('/applications', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit application.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <Loader2 className="w-8 h-8 text-[#B08D57] animate-spin" />
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-10 text-center max-w-md">
          <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="font-display text-2xl font-medium text-[#0B1220] mb-2">Application Sent</h2>
          <p className="text-slate-500 mb-8">
            Your application for <strong>{job?.title}</strong> has been submitted successfully.
          </p>
          <Link
            to="/dashboard"
            className="inline-block bg-gradient-to-r from-[#D4B678] to-[#c9a866] text-[#0B1220] font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12 px-4">
      <div className="max-w-xl mx-auto">
        <Link
          to={`/jobs/${id}`}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#B08D57] text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to job
        </Link>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#0B1220] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 text-[#D4B678]" />
            </div>
            <div>
              <h1 className="font-display text-xl font-medium text-[#0B1220]">Apply for {job?.title}</h1>
              <p className="text-sm text-slate-500">{job?.postedBy?.company || job?.postedBy?.name}</p>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-medium px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Upload Resume</label>

              <label
                htmlFor="resume-upload"
                className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-xl py-10 px-4 cursor-pointer hover:border-[#D4B678] hover:bg-[#D4B678]/5 transition-colors"
              >
                {resumeFile ? (
                  <>
                    <FileText className="w-8 h-8 text-[#B08D57]" />
                    <span className="text-sm font-semibold text-[#0B1220]">{resumeFile.name}</span>
                    <span className="text-xs text-slate-400">Click to change file</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-slate-400" />
                    <span className="text-sm font-semibold text-slate-600">Click to upload your resume</span>
                    <span className="text-xs text-slate-400">PDF, DOC, or DOCX (max 5MB)</span>
                  </>
                )}
              </label>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4B678] to-[#c9a866] text-[#0B1220] font-semibold text-base py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60"
            >
              {submitting && <Loader2 className="w-5 h-5 animate-spin" />}
              {submitting ? 'Uploading...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;