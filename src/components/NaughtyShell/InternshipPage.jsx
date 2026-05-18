import React, { useState } from 'react';

const roles = [
  'Social Media Manager',
  'Game Script Writer',
  'Game UI / UX Designer',
  'Sound / Effect Designer',
  'Vibe Coder (For Web)',
  'Game Developer',
  'HR Manager'
];

const benefits = [
  'Experience working with a startup team',
  'Network with people from the industry',
  'Grow your portfolio through real projects',
  'Build communication, teamwork, and production skills'
];

const InternshipPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: roles[0],
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    const subject = `Vex Studios Internship Application - ${formData.role}`;
    const message = [
      `Role: ${formData.role}`,
      `From: ${formData.email}`,
      '',
      formData.message
    ].join('\n');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '3adc978e-80fb-4332-b199-fd9c3805b112',
          subject,
          from_name: formData.name,
          email: formData.email,
          role: formData.role,
          message
        })
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', role: roles[0], message: '' });
      } else {
        throw new Error('Form service failed');
      }
    } catch (err) {
      window.location.href = `mailto:rishabhchobey95@gmail.com?bcc=thatcyberarora@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${formData.name}\n${message}`)}`;
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', role: roles[0], message: '' });
    }
  };

  return (
    <main className="min-h-screen bg-dark-900 pt-28">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(255,69,0,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-accent font-display text-xs uppercase tracking-[0.45em] mb-5">
              Remote Internship
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-widest text-white leading-tight mb-6">
              Unpaid Internship Program
            </h1>
            <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-3xl">
              Join Vex Studios remotely, work with a startup team, build your portfolio, and grow your network through real creative and technical projects.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">
              <span className="px-4 py-2 border border-accent/60 bg-accent/10 text-accent font-display text-xs uppercase tracking-widest rounded">
                Location: Remote
              </span>
              <span className="px-4 py-2 border border-white/20 bg-white/5 text-white font-display text-xs uppercase tracking-widest rounded">
                Type: Unpaid
              </span>
              <span className="px-4 py-2 border border-white/20 bg-white/5 text-white font-display text-xs uppercase tracking-widest rounded">
                Applications Open
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-[1fr_0.9fr] gap-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-widest text-white mb-8">
            Posts Available
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {roles.map((role, index) => (
              <div key={role} className="border border-white/10 bg-white/[0.03] rounded-lg p-5 hover:border-accent/60 transition-colors">
                <p className="text-accent font-display text-xs uppercase tracking-widest mb-3">
                  0{index + 1}
                </p>
                <h3 className="text-white font-display font-bold uppercase tracking-wider text-sm leading-relaxed">
                  {role}
                </h3>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-widest text-white mb-8">
            You Will Get
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-4 border-l border-accent/60 pl-5 py-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_14px_rgba(255,69,0,0.9)]" />
                <p className="text-gray-300 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28 self-start border border-white/10 bg-gradient-to-br from-dark-800/90 to-dark-900 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-widest text-white mb-8">
            Apply Now
          </h2>

          {status.submitted ? (
            <div className="border border-accent/40 bg-accent/10 rounded-xl p-6">
              <p className="text-accent font-display font-bold uppercase tracking-widest mb-3">
                Application Sent
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your internship application has been sent to Vex Studios.
              </p>
              <button
                onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                className="mt-6 text-xs font-display uppercase tracking-widest text-accent hover:text-white transition-colors"
              >
                Send Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <input
                type="text"
                required
                placeholder="NAME // ALIAS"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600 font-display tracking-widest uppercase text-sm"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status.submitting}
              />
              <input
                type="email"
                required
                placeholder="EMAIL // COMMLINK"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600 font-display tracking-widest uppercase text-sm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status.submitting}
              />
              <select
                required
                className="w-full bg-dark-900 border border-white/20 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors font-display tracking-widest uppercase text-sm"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                disabled={status.submitting}
              >
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
              <textarea
                required
                rows={5}
                placeholder="WHY DO YOU WANT TO JOIN?"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600 font-display tracking-widest uppercase text-sm resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={status.submitting}
              />
              <button
                type="submit"
                disabled={status.submitting}
                className="relative overflow-hidden bg-white text-black font-display font-bold uppercase tracking-widest px-8 py-4 clip-diagonal clip-diagonal-hover transition-all duration-300 group disabled:opacity-50 disabled:cursor-wait text-center"
              >
                <span className="relative z-10">{status.submitting ? 'Sending...' : 'Submit Application'}</span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default InternshipPage;
