import React, { useState, useEffect } from 'react';

const ProjectDetailsModal = ({ project, onClose }) => {
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex justify-center items-center p-4 md:p-8 overflow-y-auto no-scrollbar animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-dark-900/95 border border-white/15 rounded-2xl p-6 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="sticky top-0 float-right z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 border border-white/20 text-white hover:text-accent hover:border-accent hover:rotate-90 transition-all duration-300"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 border border-accent text-accent text-xs font-bold uppercase tracking-wider bg-accent/10">
              {project.tag}
            </span>
            {project.badge && (
              <span className="px-3 py-1 border border-white/20 text-white/80 text-xs tracking-wider uppercase bg-white/5 font-medium">
                {project.badge}
              </span>
            )}
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            {project.title}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Project Info Pills */}
        {project.info && project.info.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 bg-white/5 p-6 rounded-xl border border-white/10">
            {project.info.map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-1">
                  {item.label}
                </span>
                <span className="text-white font-medium text-sm md:text-base">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Content Sections */}
        <div className="flex flex-col gap-12">
          {project.sections && project.sections.map((sec, idx) => (
            <div key={idx} className="section-container">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-6 bg-accent rounded-sm inline-block"></span>
                {sec.title}
              </h3>
              
              {sec.content && (
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  {sec.content}
                </p>
              )}

              {/* Text only */}
              {sec.type === 'text' && null}

              {/* Video Feature */}
              {sec.type === 'video-feature' && sec.video && (
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-xl">
                  <video 
                    src={sec.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full object-cover max-h-[500px]"
                  ></video>
                </div>
              )}

              {/* Bullets */}
              {sec.type === 'bullets' && sec.items && (
                <div className="grid gap-4 md:grid-cols-2">
                  {sec.items.map((item, i) => (
                    <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-accent/50 transition-colors">
                      <h4 className="text-accent font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Image Feature */}
              {sec.type === 'image-feature' && (
                <div className="flex flex-col gap-6">
                  {sec.image && (
                    <div 
                      className="rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-xl cursor-zoom-in"
                      onClick={() => setLightboxImg(sec.image)}
                    >
                      <img src={sec.image} alt={sec.title} className="w-full object-cover max-h-[500px]" />
                    </div>
                  )}
                  {sec.bullets && (
                    <div className="grid gap-4 md:grid-cols-2 mt-4">
                      {sec.bullets.map((b, i) => (
                        <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
                          <h4 className="text-accent font-bold text-base mb-1">{b.title}</h4>
                          <p className="text-gray-400 text-sm">{b.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Table */}
              {sec.type === 'table' && sec.headers && sec.rows && (
                <div className="overflow-x-auto border border-white/10 rounded-xl bg-white/5">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-black/30">
                        {sec.headers.map((h, i) => (
                          <th key={i} className="p-4 text-accent font-display text-sm uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {sec.rows.map((row, ri) => (
                        <tr key={ri} className="hover:bg-white/5 transition-colors">
                          <td className="p-4 text-white font-semibold text-sm w-1/3">{row[0]}</td>
                          <td className="p-4 text-gray-300 text-sm leading-relaxed">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Gallery */}
              {sec.type === 'gallery' && sec.images && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sec.images.map((img, i) => (
                    <div 
                      key={i} 
                      className="aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-accent transition-all duration-300 cursor-zoom-in group"
                      onClick={() => setLightboxImg(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${sec.title} ${i + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Blueprints */}
              {sec.type === 'blueprints' && sec.items && (
                <div className="flex flex-col gap-8">
                  {sec.items.map((item, i) => (
                    <div key={i} className="flex flex-col gap-4 bg-white/5 p-6 rounded-xl border border-white/10">
                      <div 
                        className="rounded-lg overflow-hidden border border-white/10 bg-black/50 cursor-zoom-in group max-h-[400px]"
                        onClick={() => setLightboxImg(item.image)}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
          <button 
            onClick={onClose} 
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-sm tracking-wider uppercase rounded-lg transition-colors"
          >
            Close Details
          </button>
          {project.gddLink && (
            <a 
              href={project.gddLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 bg-accent text-dark-900 font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors rounded-lg flex items-center gap-2"
            >
              View Full GDD
            </a>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-dark-900 text-2xl transition-all"
            onClick={() => setLightboxImg(null)}
          >
            ✕
          </button>
          <img 
            src={lightboxImg} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsModal;
