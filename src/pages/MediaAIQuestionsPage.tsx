import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

const VIDEO_ID = 'XZMOGfboVLM';
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const CHANNEL_URL = 'https://www.youtube.com/@INCRadioDZEM954';

export default function MediaAIQuestionsPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-400 selection:text-stone-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-xl border-b border-stone-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/images/Generated Image June 29, 2026 - 12_09AM.png"
              alt="Ian Sagabaen"
              className="w-8 h-8 flex-shrink-0"
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <span className="text-sm font-semibold tracking-tight text-stone-100">Ian Sagabaen: Designer · Builder · Mentor</span>
          </Link>
          <a
            href="mailto:iansagabaen@gmail.com"
            className="px-5 py-2 border border-amber-400/70 text-amber-400 text-xs font-bold rounded-full hover:bg-amber-400 hover:text-stone-950 transition-all duration-200"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-stone-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <Link to="/" className="px-4 py-2 border border-stone-700 text-amber-400 hover:border-amber-400 hover:text-amber-300 transition-all duration-200 text-sm font-medium mb-6 inline-flex items-center gap-1 rounded-full">
              Back to portfolio
            </Link>
          </motion.div>

          <motion.div {...fadeUp}>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-4 text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              A.I. Questions Answered
            </h1>
            <p className="text-xl text-amber-400 font-light tracking-wide mb-8">INCRadio DZEM954 — Silicon Valley, CA Satellite Studio</p>
            <div className="flex gap-4 flex-wrap">
              <a
                href={WATCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-amber-400 text-stone-950 text-sm font-bold rounded-full hover:bg-amber-300 transition-colors duration-200 inline-flex items-center gap-2"
              >
                Watch on YouTube <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary + Video */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-stone-300 leading-relaxed">
          <motion.div {...fadeUp} className="space-y-4">
            <h2 className="text-2xl font-semibold text-stone-100">Summary</h2>
            <p className="text-sm text-stone-400">Station: INCRadio DZEM954</p>
          </motion.div>

          <motion.div {...fadeUp} className="w-full aspect-video rounded-2xl overflow-hidden border border-stone-800">
            <iframe
              className="w-full h-full"
              src={EMBED_URL}
              title="A.I. Questions Answered - INCRadio DZEM954"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>

          <motion.div {...fadeUp} className="space-y-6 prose prose-invert max-w-none">
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                INCRadio DZEM954 is the YouTube presence of INC Radio (DZEM 954), the broadcast
                arm connected to the Iglesia ni Cristo community. Its Silicon Valley satellite
                studio produces regular live segments for INC congregations across the wider Bay
                Area and Central Coast — the station's own broadcast tags for this segment list
                San Jose, Redwood City, Fremont, Milpitas, Salinas, Monterey, and Gilroy among the
                communities it reaches.
              </p>

              <p>
                This particular segment aired live on Friday, April 18, 2025, structured as an
                open Q&amp;A: per the station's own description, it was framed as a chance to
                "discuss how we use A.I. and answer some questions the brethren had about it" —
                i.e. congregation members had submitted real questions about artificial
                intelligence ahead of time, and the broadcast worked through them live rather than
                following a scripted interview format. Ian joined as a guest to help field those
                questions, bringing the perspective of someone who works with AI-adjacent tools
                professionally as a UX designer at Google Cloud, alongside his ongoing UX
                mentoring work outside of it.
              </p>

              <p>
                This page summarizes the segment rather than reproducing it — the broadcast itself
                is owned by INCRadio DZEM954. For the actual questions asked and how they were
                answered, the video embedded above (or the YouTube link below) is the real source.
              </p>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div {...fadeUp} className="mt-16 pt-8 border-t border-stone-800 space-y-6">
            <h3 className="text-lg font-semibold text-stone-100">Watch & Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href={WATCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-stone-800/50 border border-stone-700/60 rounded-2xl hover:border-amber-400/40 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-stone-100">Watch on YouTube</p>
                    <p className="text-xs text-stone-400 mt-1">Full segment</p>
                  </div>
                  <ArrowUpRight size={16} className="text-amber-400" />
                </div>
              </a>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-stone-800/50 border border-stone-700/60 rounded-2xl hover:border-amber-400/40 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-stone-100">INCRadio DZEM954</p>
                    <p className="text-xs text-stone-400 mt-1">YouTube channel</p>
                  </div>
                  <ArrowUpRight size={16} className="text-amber-400" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-stone-800 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-600 font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Ian Sagabaen
          </p>
          <div className="flex gap-8">
            {['Designer', 'Founder', 'Mentor'].map((label) => (
              <span key={label} className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-700">
                {label}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
