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

const VIDEO_ID = 'ZWHXCgcPTP0';
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const CHANNEL_URL = 'https://www.youtube.com/@INCRadioDZEM954';

export default function MediaHowWeUseAIPage() {
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
              How We Use A.I.
            </h1>
            <p className="text-xl text-amber-400 font-light tracking-wide mb-8">INCRadio DZEM954 — Silicon Valley, CA · March 22, 2025</p>
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
            <p className="text-sm text-stone-400">Station: INCRadio DZEM954 · Aired March 22, 2025</p>
          </motion.div>

          <motion.div {...fadeUp} className="w-full aspect-video rounded-2xl overflow-hidden border border-stone-800">
            <iframe
              className="w-full h-full"
              src={EMBED_URL}
              title="How We Use A.I. - INCRadio DZEM954"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>

          <motion.div {...fadeUp} className="space-y-6 prose prose-invert max-w-none">
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                This earlier segment set up the AI conversation from scratch for INCRadio
                DZEM954's Silicon Valley audience, hosted by Brother Miguel alongside Sister Jill
                Navasta and Brother Gleen (from the Salinas congregation), with Ian joining as a
                newer panelist. He introduced himself as someone born and raised in Silicon
                Valley, a design graduate, and working full-time in UX design at a major tech
                company — professionally immersed in AI tools as part of his day-to-day work,
                which was the reason he was there to help demystify the topic for an audience
                that, by his own read, ranged from curious to genuinely wary of it.
              </p>

              <p>
                Asked to explain AI in plain terms, he reached for an analogy: a child who's told
                directions once, then adjusts their own behavior the next time based on what they
                learned from that experience — AI systems work on a similar principle, picking up
                on patterns over repeated exposure (his example was a smart device that starts
                noticing you make coffee at 6:45 every morning and eventually anticipates it). On
                why AI suddenly felt like a mainstream "hot topic" rather than something brand
                new, his own read was two-fold: the underlying computing hardware got cheaper and
                more efficient, and — speaking as a UX designer — the tools themselves finally
                became approachable and user-friendly rather than intimidatingly technical, which
                is why so many companies rushed to build things like AI image generation into
                ordinary products.
              </p>

              <p>
                His stated top tip, repeated more than once, was to treat AI as a tool for a first
                draft, not a finished answer: his own workflow is prompting it for a starting
                point on a document, then reviewing, correcting, and rewriting the result in his
                own voice — which he said is the real reason colleagues sometimes ask how he turns
                work around so quickly. He was candid about the ethical tension this creates,
                especially for students using AI to fully write essays or exams instead of doing
                the work themselves: his position is that whoever's name is attached to a piece of
                work is accountable for it regardless of what tool helped make it, so reviewing
                and owning the final result isn't optional. He offered a personal, unglamorous
                example of the "good" use of that same instinct — using an AI tool late at night
                to help parse dense HOA legal paperwork when he was too mentally fatigued to get
                through it himself, treating the AI's summary as a starting point to sanity-check
                rather than a final answer.
              </p>

              <p>
                On keeping AI use in check, his framing was to keep using it, but respectfully —
                not for scams, cheating, or harmful content — and to stay mindful that AI tools
                learn from how people use them, so misuse or bad-faith prompting doesn't stay
                isolated to one interaction. Asked how to tell real information from
                AI-generated misinformation or deepfakes, his advice was to trust the same
                instincts people already use to spot other scams — an AI tool that cites its
                actual sources is safer to rely on than one that doesn't, and anything that
                already feels "off," like a celebrity seemingly promoting cryptocurrency, deserves
                the same skepticism as any other scam. He agreed with a viewer's comment that AI's
                value in healthcare — helping doctors and nurses move faster for patients — was an
                underrated example next to flashier uses like image generation, and shared that
                he's personally used AI as a low-stakes sounding board to talk through a problem
                out loud, saying that typing it out and getting objective follow-up questions back
                (with none of a person's built-in bias) sometimes helped him think an issue
                through further than he would have alone. Asked for his single favorite everyday
                use of AI, he landed on something practical: role-playing a tense email exchange
                with an AI tool before sending it — asking it to respond in the voice of the
                actual recipient (in his example, a neighbor in his HOA) — as a way to catch an
                overly raw or "stern" tone before it goes out.
              </p>

              <p>
                This page is a summary, not a transcript. The full segment — including the
                specific examples and back-and-forth discussion — belongs to INCRadio DZEM954 and
                is best experienced via the embedded video above or the YouTube link.
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
