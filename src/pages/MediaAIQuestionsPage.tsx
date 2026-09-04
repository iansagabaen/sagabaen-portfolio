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
            <p className="text-sm text-stone-400 italic">
              A recap of my segment, in my own words, not a full transcript. Watch the video below
              for the whole conversation.
            </p>
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
                This episode was a live Q&amp;A. Glian and Jill Navasca hosted again from the
                Redwood City congregation, and I joined them to help answer AI questions we didn't
                get to on our last broadcast, along with new ones from that night's chat.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">On AI and Jobs</h3>

              <p>
                One of the first questions was about the downside of AI, and job loss is a real,
                legitimate concern. But I think the better way to look at it is augmentation, not
                replacement. Self-checkout at the grocery store is the example I keep coming back
                to: the repetitive task got automated, but you still need people there for the
                moments when something breaks and someone has to troubleshoot it, and those staff
                get to do higher-level work instead. Some places have gone fully cashierless now,
                but for a lot of jobs, AI is shifting what people spend their time on rather than
                eliminating them outright.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Who Owns What AI Creates</h3>

              <p>
                Someone asked who actually owns a photo or image an AI tool generates, and I
                looked that one up beforehand because I didn't want to get it wrong. Under current
                US law, you don't own the copyright on something purely AI generated. It functions
                more like public domain, though what you're allowed to do with it can still depend
                on the specific tool's license. My advice, which I keep coming back to, is "don't
                use it at face value, use it as a launching point to something bigger." I'll ask it
                a prompt and it gets me maybe 60% of the way there, and that's the point where I
                take over and build on it myself. I'm not a lawyer, so I can't tell you the exact
                threshold where something becomes truly your own work, but from my design school
                background, the rule of thumb used to be around 80% original before you could call
                a layout genuinely yours. The law is still catching up to the technology, so my
                advice is to do your own homework and stay cautious.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Privacy and Sharing Information</h3>

              <p>
                We also got a question about the security implications of asking AI tools about
                church information specifically. My answer was direct: treat anything you type
                into an AI tool as if it becomes public the moment you submit it, because there's
                no pulling it back out once it's in there. Whether it's church information or
                anything else you'd consider private, just be mindful of what you're inputting,
                since it's there for good.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Where AI Already Does Real Work</h3>

              <p>
                Beyond the obvious chatbot use cases, I talked through a few places AI is already
                handling real tasks: spam filtering, reading medical charts and X-rays with high
                reported confidence, and mapping and directions, the kind of thing that used to
                mean pulling a paper map out of your glovebox. I also shared a personal one from my
                year in Japan, using AI to help me rehearse a formal, apologetic way to explain a
                problem to a train station attendant, breaking the phrase down so I could actually
                get it right.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Will AI Replace Design Jobs?</h3>

              <p>
                My cousin Marlon asked whether AI will eventually replace design work, which hits
                close to home since that's my day job. My honest answer was "eventually," and
                probably sooner than I originally expected, maybe within the next couple of years.
                Right now though, I use it to augment my workload, mostly as a sounding board to
                validate ideas I'm already building, not to generate finished work outright. I'll
                ask it to lay out a feature and it gives me the structure in text, but I'm still
                the one translating that into an actual interface with real buttons and layout. I
                also brought up a recent ad campaign where the concept and animation were entirely
                AI generated. It fell flat and drew real backlash for feeling soulless, which to me
                proves the human individuality that makes something stand out is exactly what AI
                still can't replicate.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Telling Real Answers From Hallucinations</h3>

              <p>
                The last question was about telling when AI is hallucinating versus giving you the
                right answer, which comes up constantly. My method is simple: test it on things you
                already know the answer to. In my experience it's right about 70% of the time, but
                when it's wrong, it can be confidently, badly wrong. My standing advice: keep
                using it, but scrutinize everything and never take an answer at face value.
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
