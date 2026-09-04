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
            <p className="text-sm text-stone-400 italic">
              A recap of my segment, in my own words, not a full transcript. Watch the video above
              for the whole conversation.
            </p>
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
                This earlier segment introduced AI from scratch for the district. Brother Miguel
                hosted alongside Sister Jill Navasca and Brother Glian from the Salinas
                congregation, and I joined as a newer panelist. I gave a quick introduction: born
                and raised in Silicon Valley, a design degree, and a full-time UX design job at a
                big tech company, where I work with AI tools constantly. That's really why I was
                there, to help make the technology feel less intimidating for people who were
                curious but understandably wary of it.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">What AI Actually Is</h3>

              <p>
                When I was asked to define AI in plain terms, I used the analogy of a child
                learning directions: you tell them once, and they adjust their behavior next time
                based on what they picked up. AI works on a similar principle, learning from
                patterns over repeated exposure. My example was a smart device that starts
                noticing you make coffee at 6:45 every morning and eventually starts anticipating
                it for you.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Why AI Suddenly Felt Like a Big Deal</h3>

              <p>
                Someone asked why AI seemed to explode into the mainstream so suddenly, and my
                honest take is two things. First, the underlying technology got cheaper and more
                efficient. Second, and this is the UX designer in me talking, the tools themselves
                finally became user friendly. AI used to feel intimidatingly technical, and now it
                doesn't, which is exactly why every company is racing to build things like image
                generation into their products.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">How I Actually Use It</h3>

              <p>
                My top tip, which I probably repeated more than once that night, was "use it as a
                tool, not at face value." My own workflow is asking it for a first draft, whether
                that's a document or an email, then reviewing it, correcting what's off, and
                rewriting it in my own voice. That's honestly the reason people ask me how I get
                things done so fast. I also talked about the ethical side of that, especially for
                students using AI to write entire essays or exams instead of doing the work
                themselves. My take is that your name is attached to whatever you submit, so
                you're still accountable for it no matter what tool helped you get there. I gave a
                pretty unglamorous example of using it well: reviewing HOA legal documents at 11pm
                when my brain was fried, dropping a screenshot into Gemini and asking it to help me
                understand what I was actually looking at. It's a great starting point, but I still
                had to do the work of understanding it myself.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Staying Within Limits</h3>

              <p>
                On keeping AI use in check, my stance is simple: keep using it, but be a good
                citizen about it. Don't use it to scam people or cheat. It's worth remembering that
                AI learns from how we use it, so being careless or malicious with it doesn't stay
                contained to just that one interaction. On spotting misinformation or deepfakes, my
                advice is to trust your gut the same way you would with any other scam: check your
                sources, and tools like Gemini or ChatGPT will actually tell you where their
                information comes from if you ask. If something feels off, like a celebrity
                suddenly promoting cryptocurrency, treat it the same way you would any other red
                flag.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Where AI Genuinely Helps</h3>

              <p>
                I really liked a comment from the chat about AI in healthcare, helping doctors and
                nurses move faster for patients. That's an underrated use case compared to flashier
                stuff like image generation. I also shared that I've used AI as a sounding board
                for talking through a problem, typing it out and getting objective follow up
                questions back with none of the bias a person might bring. It's helped me think
                things through further than I would have on my own, though obviously it's not a
                replacement for real help when something is actually serious.
              </p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">My Favorite Everyday Use</h3>

              <p>
                When we wrapped up, I was asked for my favorite everyday use of AI, and mine is
                pretty practical. Before sending a tense email, I'll ask it to respond as if it
                were the other person, so I can catch myself before I send something too raw. I've
                used that with my HOA neighbors more than once.
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
