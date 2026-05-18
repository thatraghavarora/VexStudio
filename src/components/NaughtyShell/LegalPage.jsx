import React from 'react';

const legalContent = {
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    updated: 'Last updated: May 19, 2026',
    intro: 'Vex Studios respects your privacy. This page explains what information we collect through this website and how we use it.',
    sections: [
      {
        title: 'Information We Collect',
        body: 'When you use the contact form, we may collect your name, email address, and message so we can respond to your inquiry. We may also receive basic technical information such as browser type, device type, and approximate usage data from hosting or analytics tools.'
      },
      {
        title: 'How We Use Information',
        body: 'We use submitted information to reply to messages, discuss projects, improve the website, and protect the site from misuse. We do not sell your personal information.'
      },
      {
        title: 'Third-Party Services',
        body: 'The website may use third-party services for form delivery, hosting, social links, embedded media, or analytics. These services may process data under their own privacy policies.'
      },
      {
        title: 'Data Retention',
        body: 'We keep contact messages only as long as needed for communication, project records, legal compliance, or operational needs.'
      },
      {
        title: 'Your Choices',
        body: 'You can contact us to request access, correction, or deletion of personal information you have submitted, subject to reasonable verification and legal requirements.'
      },
      {
        title: 'Contact',
        body: 'For privacy questions, contact us at contact@vexstudio.xyz.'
      }
    ]
  },
  terms: {
    eyebrow: 'Terms of Use',
    title: 'Terms & Conditions',
    updated: 'Last updated: May 19, 2026',
    intro: 'By accessing or using the Vex Studios website, you agree to these terms. If you do not agree, please do not use the site.',
    sections: [
      {
        title: 'Use of the Website',
        body: 'You may browse the website, view portfolio work, and contact Vex Studios for legitimate personal or business purposes. You agree not to misuse the site, attempt unauthorized access, or interfere with its operation.'
      },
      {
        title: 'Intellectual Property',
        body: 'All brand assets, project materials, images, videos, text, design, and documents on this website are owned by Vex Studios or their respective creators unless otherwise stated. You may not copy, redistribute, sell, or claim them as your own without permission.'
      },
      {
        title: 'Portfolio And GDD Materials',
        body: 'Game design documents, project previews, and development materials are shared for presentation and reference. They do not grant any license to reproduce game concepts, assets, mechanics, documents, or branding.'
      },
      {
        title: 'External Links',
        body: 'The website may link to third-party platforms such as social networks, community pages, or document viewers. Vex Studios is not responsible for external websites or their content.'
      },
      {
        title: 'No Warranty',
        body: 'The website is provided as-is. We try to keep information accurate and available, but we do not guarantee that the site will always be error-free, secure, or uninterrupted.'
      },
      {
        title: 'Contact',
        body: 'For questions about these terms, contact us at contact@vexstudio.xyz.'
      }
    ]
  }
};

const LegalPage = ({ type = 'privacy' }) => {
  const content = legalContent[type] || legalContent.privacy;

  return (
    <main className="min-h-screen bg-dark-900 pt-28 pb-20">
      <section className="max-w-4xl mx-auto px-6 md:px-12">
        <a href="/" className="inline-flex items-center gap-2 text-accent hover:text-white uppercase tracking-widest text-xs font-display mb-10 transition-colors">
          <span aria-hidden="true">&lt;-</span>
          Back to Home
        </a>

        <p className="text-accent uppercase tracking-[0.45em] text-xs font-display mb-4">{content.eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-widest text-white mb-5">
          {content.title}
        </h1>
        <p className="text-gray-500 uppercase tracking-widest text-xs mb-8">{content.updated}</p>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-2 border-accent/70 pl-5 mb-12">
          {content.intro}
        </p>

        <div className="space-y-8">
          {content.sections.map((section) => (
            <article key={section.title} className="border-t border-white/10 pt-8">
              <h2 className="text-xl md:text-2xl text-white font-display font-bold uppercase tracking-widest mb-4">
                {section.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LegalPage;
