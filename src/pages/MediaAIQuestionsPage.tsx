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
            <p className="text-xl text-amber-400 font-light tracking-wide mb-8">INCRadio DZEM954 — Silicon Valley, CA Satellite Studio · April 18, 2025</p>
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
            <p className="text-sm text-stone-400">Station: INCRadio DZEM954 · Aired April 18, 2025</p>
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
                This episode was a live, audience-driven Q&amp;A: it followed up on questions from
                the station's earlier "How We Use A.I." broadcast that didn't get answered on air,
                plus fresh ones from that night's chat. Hosts Brother Gleon and Sister Jill
                Navasta, from the Redwood City congregation, were joined again by Ian, introduced
                to the audience as a UX designer at a major tech company, a career mentor, and a
                father — there specifically to help field the community's AI questions in plain,
                non-technical language.
              </p>

              <p>
                On whether AI threatens jobs, Ian argued the more accurate framing is augmentation
                rather than replacement: grocery-store self-checkout was his go-to example, where
                the repetitive task automated away but staff shifted toward higher-level
                troubleshooting and support rather than disappearing outright (though he noted
                some retailers have gone fully cashier-less). A related listener question — who
                owns a photo or image an AI tool generates — led him into copyright territory:
                under current US law, purely AI-generated output generally isn't something you can
                claim ownership over and functions closer to public domain, though what you're
                allowed to do with it can still depend on the specific AI tool's own license
                terms. He was upfront that he isn't a lawyer and that this area of law is moving
                fast, and offered a rule of thumb from his design-school background instead: treat
                AI output as a rough first draft to build on top of, not a finished product, and
                lean on how much of the final result is genuinely your own editing and judgment.
              </p>

              <p>
                Asked about the risk of feeding AI tools sensitive information — including
                anything church-related — his answer was direct: treat anything typed into an AI
                tool as effectively public the moment you submit it, since there's no real way to
                pull it back out once it's absorbed into the system. That "it's learning from what
                you feed it" idea ran through the episode as a broader caution. On where AI is
                already doing real work day to day, he pointed past the obvious chatbot examples
                to things like spam filtering, medical chart and imaging review (which he said AI
                already handles with high reported confidence), and turn-by-turn mapping and
                directions — the kind of task that used to mean pulling a paper map out of the
                glovebox. He also shared a personal use case from his time living in Japan: using
                an AI chat tool to help him rehearse a formal, apologetic way to explain a problem
                to a train station attendant in Japanese, breaking the phrase down piece by piece.
              </p>

              <p>
                On whether AI will eventually replace design work specifically — his own field —
                he said "eventually," and admitted the pace might be faster than he originally
                expected, possibly within the next couple of years. For now, though, he described
                using AI mainly as a sounding board to pressure-test ideas rather than to generate
                final work outright, which he credited for a real jump in his own productivity. He
                backed that up with a real-world example: an ad campaign built entirely by AI —
                concept and animation both — that drew public backlash for feeling generic and
                soulless, which he read as proof that human judgment and individuality still
                matter in creative work AI can't easily replicate. On separating good AI answers
                from confidently wrong ones, his practical test is spot-checking AI on questions
                he already knows the answer to; in his experience it's right most of the time, but
                when it's wrong, it can be wrong in a way that sounds just as confident — so his
                standing advice, repeated throughout the episode, was to keep using AI, but always
                verify rather than take any single answer at face value.
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
