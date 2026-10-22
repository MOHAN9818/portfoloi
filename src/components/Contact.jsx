import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  Info
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = personalInfo.email ? personalInfo.email : 'contact@example.com';
    const emailSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // If no real email is set in portfolioData.js, inform user truthfully
    if (!personalInfo.email) {
      // Copy message to clipboard for convenience
      navigator.clipboard?.writeText(formData.message);
      setStatusMessage({
        type: 'info',
        text: 'Recipient email is not yet configured in src/data/portfolioData.js. Your drafted message has been copied to your clipboard.'
      });
    } else {
      // Direct mailto trigger
      window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
      setStatusMessage({
        type: 'success',
        text: 'Opening your default email client...'
      });
    }
  };

  const handleCopyEmail = () => {
    if (personalInfo.email) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setStatusMessage({
        type: 'info',
        text: 'Please configure your email in src/data/portfolioData.js to enable 1-click copying.'
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div 
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let's Build Something Great Together.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I'm open to internship opportunities, entry-level software development roles, and opportunities to collaborate on interesting technology projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Connect Directly
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Based in</div>
                    <div className="text-sm font-semibold text-white">Amaravati, Andhra Pradesh, India</div>
                    <div className="text-xs text-slate-400">VIT-AP University</div>
                  </div>
                </div>

                {/* Email Channel */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400">Email Inquiries</div>
                    {personalInfo.email ? (
                      <div className="flex items-center gap-2 mt-0.5">
                        <a 
                          href={`mailto:${personalInfo.email}`}
                          className="text-sm font-semibold text-cyan-300 hover:underline"
                        >
                          {personalInfo.email}
                        </a>
                        <button 
                          onClick={handleCopyEmail}
                          className="text-slate-400 hover:text-white"
                          title="Copy email"
                        >
                          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ) : (
                      <div className="text-xs font-mono text-slate-400 mt-1">
                        Configure in <code className="text-cyan-300 bg-white/5 px-1 py-0.5 rounded">src/data/portfolioData.js</code>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Professional Profiles
                </div>

                <div className="flex flex-col gap-2">
                  {/* GitHub Button */}
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-white" />
                      <span className="text-xs font-semibold">GitHub (@MOHAN9818)</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </a>

                  {/* LinkedIn Placeholder */}
                  {personalInfo.linkedinUrl ? (
                    <a
                      href={personalInfo.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 text-slate-200 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <LinkedinIcon className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-semibold">LinkedIn Profile</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </a>
                  ) : (
                    <div 
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-dashed border-white/10 text-slate-400 text-xs font-mono"
                      title="Add your LinkedIn profile URL in portfolioData.js"
                    >
                      <div className="flex items-center gap-2.5">
                        <LinkedinIcon className="w-4 h-4 text-slate-500" />
                        <span>LinkedIn (Configure in portfolioData.js)</span>
                      </div>
                      <span className="text-[10px] text-cyan-400">Ready</span>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Quick response note */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">
                Currently actively looking for summer 2025/2026 internships and software development collaborations. Feel free to reach out directly.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below. This generates an instant pre-addressed email message.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-dark-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full bg-dark-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Project collaboration"
                    className="w-full bg-dark-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Mohan Sai, I saw your portfolio and would like to discuss..."
                    className="w-full bg-dark-950/80 border border-white/10 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                {statusMessage && (
                  <div className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                    statusMessage.type === 'info'
                      ? 'bg-blue-950/40 text-blue-300 border border-blue-500/30'
                      : 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    <Info className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="leading-relaxed">{statusMessage.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 shadow-md shadow-blue-600/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
