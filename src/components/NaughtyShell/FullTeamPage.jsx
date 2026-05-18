import React from 'react';
import { departmentLeads, hiringRoles, members } from './Team';

const MemberNode = ({ member, featured = false }) => (
  <div className={`relative w-full ${featured ? 'max-w-sm border-accent/50 bg-accent/10 shadow-[0_0_35px_rgba(255,69,0,0.16)]' : 'border-white/15 bg-white/[0.03]'} border rounded-xl p-6 text-center overflow-hidden`}>
    <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl bg-accent/15 pointer-events-none" />
    <div className="mx-auto w-24 h-24 rounded-full border border-accent/60 overflow-hidden flex items-center justify-center mb-5 bg-accent/10">
      {member.image ? (
        <img src={member.image} alt={member.name} className={`w-full h-full ${member.imageClass || 'object-cover object-top'}`} />
      ) : (
        <span className="font-display font-black text-2xl text-accent">{member.initials}</span>
      )}
    </div>
    <p className="text-accent font-display text-[10px] uppercase tracking-[0.45em] mb-4">{member.role}</p>
    <h2 className="text-white font-display font-black uppercase tracking-widest text-xl leading-tight">{member.name}</h2>
    <div className="w-10 h-[2px] bg-accent mx-auto my-4" />
    <p className="text-gray-500 text-xs uppercase tracking-widest leading-relaxed">{member.title}</p>
  </div>
);

const DepartmentNode = ({ label }) => (
  <div className="w-full border border-accent/25 bg-dark-800/70 rounded-xl p-5 text-center">
    <p className="text-accent font-display text-[10px] uppercase tracking-[0.45em] mb-2">Department</p>
    <h3 className="text-white font-display font-black uppercase tracking-widest text-base leading-relaxed">{label}</h3>
    <span className="inline-flex mt-4 text-accent border border-accent/30 bg-accent/10 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-display">
      Hiring
    </span>
  </div>
);

const FullTeamPage = () => {
  const coFounders = members
    .filter((m) => !m.accent)
    .sort((a, b) => (a.name === 'Raghav Arora' ? -1 : b.name === 'Raghav Arora' ? 1 : 0));

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

        <div className="border border-white/10 bg-black/20 rounded-2xl p-6 md:p-10 overflow-hidden">
          <div className="flex flex-col items-center">
            <MemberNode member={members.find((member) => member.accent)} featured />

            <div className="w-[1px] h-12 bg-accent/40" />
            <div className="hidden md:block w-full max-w-5xl h-[1px] bg-accent/30" />

            <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl mt-0 md:mt-8">
              {coFounders.map((member) => {
                const lead = departmentLeads.find((item) => item.name === member.name);
                const roles = hiringRoles.filter((role) => role.lead === member.name);

                return (
                  <div key={member.name} className="relative flex flex-col items-center">
                    <div className="hidden md:block absolute left-1/2 -top-8 w-[1px] h-8 bg-accent/30" />

                    <MemberNode member={member} />

                    <div className="w-[1px] h-8 bg-white/20" />

                    <DepartmentNode label={lead?.label} />

                    <div className="w-[1px] h-8 bg-white/20" />
                    <div className="relative w-full">
                      <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
                      <div className="space-y-4">
                        {roles.map((role, index) => (
                          <article key={role.title} className="relative border border-white/10 bg-black/20 rounded-lg p-5 hover:border-accent/50 transition-colors">
                            <div className="hidden sm:block absolute left-1/2 -top-4 w-[1px] h-4 bg-white/20" />
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FullTeamPage;
