import React from 'react';
import { departmentLeads, hiringRoles, members } from './Team';

const FullTeamPage = () => {
  return (
    <main className="min-h-screen bg-dark-900 pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <a href="/#team" className="inline-flex items-center gap-2 text-accent hover:text-white uppercase tracking-widest text-xs font-display mb-8 transition-colors">
              <span aria-hidden="true">&lt;-</span>
              Back to Team
            </a>
            <p className="text-accent font-display text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Vex Studios</p>
            <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-widest text-white">
              Full Team Graph
            </h1>
          </div>
          <a
            href="/internship"
            className="self-start md:self-end px-6 py-3 border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-black rounded-lg font-display text-xs uppercase tracking-widest transition-colors"
          >
            Apply for Internship
          </a>
        </div>

        <div className="border border-white/10 bg-black/20 rounded-2xl p-6 md:p-10">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm border border-accent/50 bg-accent/10 rounded-xl p-6 text-center shadow-[0_0_35px_rgba(255,69,0,0.16)]">
              <p className="text-accent font-display text-[10px] uppercase tracking-[0.45em] mb-3">Founder</p>
              <h2 className="text-white font-display font-black uppercase tracking-widest text-xl">Rishabh Chobey</h2>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-3">Creative Direction / Unreal Development</p>
            </div>

            <div className="w-[1px] h-10 bg-accent/40" />
            <div className="hidden md:block w-full max-w-2xl h-[1px] bg-accent/30" />
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mt-0 md:mt-6">
              {members
                .filter((m) => !m.accent)
                .sort((a, b) => (a.name === 'Raghav Arora' ? -1 : b.name === 'Raghav Arora' ? 1 : 0))
                .map((member) => (
                  <div key={member.name} className="relative border border-white/15 bg-white/[0.03] rounded-xl p-6 text-center">
                    <div className="hidden md:block absolute left-1/2 -top-6 w-[1px] h-6 bg-accent/30" />
                    <p className="text-accent font-display text-[10px] uppercase tracking-[0.45em] mb-3">Co-Founder</p>
                    <h3 className="text-white font-display font-black uppercase tracking-widest text-lg">{member.name}</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mt-3">{member.title}</p>
                  </div>
                ))}
            </div>

            <div className="w-[1px] h-12 bg-white/20" />
            <div className="w-full border border-white/10 bg-dark-900/80 rounded-xl p-5 md:p-6">
              <div className="mb-6">
                <p className="text-accent font-display text-[10px] uppercase tracking-[0.45em] mb-3">Department Graph</p>
                <h2 className="text-white font-display font-black uppercase tracking-widest text-2xl">Hiring Team Structure</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {departmentLeads.map((lead) => (
                  <div key={lead.name} className="relative border border-white/10 bg-dark-800/50 rounded-xl p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-5 border-b border-white/10">
                      <div>
                        <p className="text-accent font-display text-[10px] uppercase tracking-[0.45em] mb-2">Under</p>
                        <h3 className="text-white font-display font-black uppercase tracking-widest text-lg">{lead.name}</h3>
                        <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">{lead.label}</p>
                      </div>
                      <span className="self-start sm:self-center text-accent border border-accent/30 bg-accent/10 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-display">
                        Hiring
                      </span>
                    </div>

                    <div className="space-y-4">
                      {hiringRoles
                        .filter((role) => role.lead === lead.name)
                        .map((role, index) => (
                          <article key={role.title} className="border border-white/10 bg-black/20 rounded-lg p-5 hover:border-accent/50 transition-colors">
                            <div className="flex items-center justify-between gap-3 mb-4">
                              <span className="text-gray-600 font-display text-xs uppercase tracking-widest">0{index + 1}</span>
                              <span className="text-gray-500 font-display text-[10px] uppercase tracking-widest">Open Role</span>
                            </div>
                            <h4 className="text-white font-display font-black uppercase tracking-widest text-sm leading-relaxed mb-3">
                              {role.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                              {role.detail}
                            </p>
                          </article>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FullTeamPage;
