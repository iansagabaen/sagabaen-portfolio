import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  ArrowUpRight,
  GraduationCap,
  Quote
} from 'lucide-react';

// ─── Shared fade-in animation preset ───────────────────────────────────────
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

// ─── Section label + heading ────────────────────────────────────────────────
const SectionHeader = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-14">
    <motion.span
      {...fadeIn}
      className="text-[10px] uppercase tracking-[0.25em] text-amber-400/80 font-semibold block mb-3"
    >
      {label}
    </motion.span>
    <motion.h2
      {...fadeUp}
      className="text-4xl md:text-5xl font-light tracking-tight text-stone-100"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {title}
    </motion.h2>
  </div>
);

// ─── Work experience row ─────────────────────────────────────────────────────
const ExperienceItem = ({
  role,
  company,
  period,
  description
}: {
  role: string;
  company: string;
  period: string;
  description: string;
}) => (
  <motion.div
    {...fadeUp}
    className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-12 border-b border-stone-800 last:border-0"
  >
    <div>
      <span className="text-sm font-medium text-stone-500 block mb-1">{period}</span>
      <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">{company}</span>
    </div>
    <div>
      <h4 className="text-2xl font-light text-stone-100 mb-4">{role}</h4>
      <p className="text-stone-400 leading-relaxed max-w-2xl">{description}</p>
    </div>
  </motion.div>
);

// ─── Story card (products / case studies) ───────────────────────────────────
const StoryCard = ({
  eyebrow,
  title,
  body,
  tags
}: {
  eyebrow: string;
  title: string;
  body: string;
  tags: string[];
}) => (
  <motion.div
    {...fadeUp}
    className="p-8 bg-stone-800/50 border border-stone-700/60 rounded-3xl flex flex-col gap-6"
  >
    <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/70 font-semibold">{eyebrow}</span>
    <h3 className="text-2xl font-medium text-stone-100">{title}</h3>
    <p className="text-stone-400 leading-relaxed text-sm flex-grow">{body}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-stone-900/60 text-stone-400 text-[10px] font-semibold rounded-full uppercase tracking-wider border border-stone-700/50"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

// ─── Root App ────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-400 selection:text-stone-950" style={{ '--serif-font': "'Cormorant Garamond', serif" } as React.CSSProperties}>

      {/* ── Navigation ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
          scrolled
            ? 'bg-stone-950/90 backdrop-blur-xl border-b border-stone-800 py-3'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center text-stone-950 font-bold text-xs">
              IS
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight text-stone-100 block">Ian Sagabaen: Designer · Builder · Mentor</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Work', href: '#work' },
              { label: 'Building', href: '#building' },
              { label: 'Teaching', href: '#teaching' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'Contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-widest text-stone-100 hover:text-amber-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:iansagabaen@gmail.com"
            className="px-5 py-2 border border-amber-400/70 text-amber-400 text-xs font-bold rounded-full hover:bg-amber-400 hover:text-stone-950 transition-all duration-200"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-44 pb-36 px-6 overflow-hidden" style={{ backgroundColor: '#686861' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-block px-4 py-1.5 bg-amber-400/10 text-amber-400 text-[10px] font-bold uppercase tracking-widest rounded-full mb-8 border border-amber-400/20">
                Designer · Builder · Mentor
              </span>

              <div className="mb-3">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05] text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Ian Sagabaen
                </h1>
              </div>

              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-[1.1] mb-10 text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                I've spent the last decade at Google learning how to simplify{' '}
                <span className="text-amber-400">enterprise chaos.</span>
              </h2>

              <p className="text-xl text-stone-100 font-light leading-relaxed mb-4">
                Along the way, I made a choice: keep climbing at the company, or step sideways into building and teaching. I chose both.
              </p>

              <p className="text-base text-stone-200 leading-relaxed mb-8">
                At Google, I lead UX on systems that touch tens of millions of people. But the work that actually sustains me is the other side: building products from scratch, mentoring designers through the hardest decisions, teaching art to kids who remind me why clarity matters. They're not separate careers, just the same practice applied at different scales.
              </p>

              <p className="text-base text-stone-200 leading-relaxed mb-8">
                What keeps me going is understanding genuinely hard problems and sharing what I learn as broadly as I can. That looks like enterprise work some days, a side project the next, a conversation about creative risk with someone just starting out. I'm comfortable with that stretch because the underlying thing—the actual work of design—is the same in all of it.
              </p>

              <p className="text-base text-stone-200 leading-relaxed mb-14">
                I also speak — at conferences, universities, and workshops on design thinking, AI strategy, and UX mentorship. I've lectured through{' '}
                <a
                  href="https://buildyourfuture.withgoogle.com/programs/tech-exchange"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2"
                >
                  Google Tech Exchange
                </a>
                , led design sprints for cross-functional teams, and hosted campus tours for hundreds of UX practitioners. If you're looking for a speaker who's still in the work — not just talking about it — I'm available.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="px-6 py-3 bg-amber-400 text-stone-950 text-sm font-bold rounded-full hover:bg-amber-300 transition-colors duration-200"
                >
                  See my work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-stone-700 text-stone-300 text-sm font-medium rounded-full hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200"
                >
                  Get in touch
                </a>
              </div>
            </motion.div>

            {/* Headshot column — blended into background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden rounded-3xl" style={{ background: '#686861' }}>
                {/* Soft vignette edges — blends portrait into background */}
                <div className="absolute inset-0 z-10 rounded-3xl"
                  style={{
                    boxShadow: 'inset 0 0 80px 40px #686861'
                  }}
                />
                <img
                  src="/images/headshot-ian.jpg"
                  alt="Ian Sagabaen"
                  className="w-full h-full object-cover object-top"
                  style={{ opacity: 0.9, filter: 'contrast(0.95) brightness(0.95)' }}
                />
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10" style={{ background: 'linear-gradient(to top, #686861, transparent)' }} />
                {/* Top gradient fade */}
                <div className="absolute top-0 left-0 right-0 h-1/5 z-10" style={{ background: 'linear-gradient(to bottom, #686861, transparent)' }} />
                {/* Left edge fade */}
                <div className="absolute top-0 left-0 bottom-0 w-1/4 z-10" style={{ background: 'linear-gradient(to right, #686861, transparent)' }} />
                {/* Right edge fade */}
                <div className="absolute top-0 right-0 bottom-0 w-1/4 z-10" style={{ background: 'linear-gradient(to left, #686861, transparent)' }} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle warm glow */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-rose-500/5 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* ── Google Work: What I've Actually Done ── */}
      <section id="work" className="py-32 px-6 bg-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="At Scale" title="What I've done at Google" />

          {/* Data Migration — centerpiece story */}
          <motion.div
            {...fadeUp}
            className="mb-12 p-10 bg-stone-800/60 border border-stone-700/60 rounded-3xl"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/70 font-semibold block mb-4">
              Centerpiece · Data Migration
            </span>
            <h3 className="text-3xl font-medium text-stone-100 mb-6">
              The work I'm most proud of isn't the flashiest
            </h3>
            <div className="space-y-4 text-stone-400 leading-relaxed max-w-3xl">
              <p>
                Enterprise cloud migrations are some of the most thankless UX problems out there. A company decides to move years of files and workflows to a new platform, and the person responsible is usually an IT admin buried in a multi-step setup process that feels designed for engineers, not people.
              </p>
              <p>
                My job was to redesign that process. What came out of it was a simplified 3-step flow that hid the technical complexity without eliminating the control. The feedback from IT admins was that it finally felt like a product built for them. That's a harder outcome to measure than a conversion rate, but it's the one that sticks with me.
              </p>
              <p>
                The thing I learned is that simplicity is a design decision, not a given. You have to make a hundred small choices about what to show, what to defer, and what to get rid of entirely, and most of those choices are uncomfortable because someone, somewhere, will complain that you hid their favorite setting. You do it anyway because the alternative is a product that's technically complete and actually unusable.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {['Onboarding', 'Simplicity', 'Enterprise IT', 'Growth'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-stone-900/60 text-stone-400 text-[10px] font-semibold rounded-full uppercase tracking-wider border border-stone-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Other work items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StoryCard
              eyebrow="Security · 2024–Present"
              title="Zero Trust Admin Experience"
              body="Designed the UX strategy for Private Service Connect, which lets enterprise admins configure network security without needing a networking degree. The challenge was making 30M+ user configurations feel legible when the underlying concepts are genuinely complex."
              tags={['Security', 'Architecture', 'Admin UX']}
            />
            <StoryCard
              eyebrow="Sales Tools · 2023–2024"
              title="Enterprise Sales Platform"
              body="Unified three separate internal tools that sales teams were cobbling together into workarounds. The challenge wasn't the interface design — it was figuring out which workflows actually mattered and which ones only existed because no one had questioned them yet."
              tags={['Internal Tools', 'Sales', 'Systems Thinking']}
            />
            <StoryCard
              eyebrow="Support · 2018–2023"
              title="Enterprise Support at Scale"
              body="Led design for the unified support experience across Google Cloud and Workspace. Supporting enterprise teams managing thousands of users, the challenge was building something that could handle their scale without requiring them to become Google experts just to get help."
              tags={['Support', 'Enterprise', 'Multi-product']}
            />
            <StoryCard
              eyebrow="Partners · 2018"
              title="Partner Directory & Certification"
              body="Built the tools that helped hundreds of Google Cloud partners manage their certifications and marketplace presence. Not glamorous work, but the kind of invisible infrastructure that makes an ecosystem actually function."
              tags={['Ecosystem', 'Partners', 'Certification']}
            />
          </div>

          <motion.div
            {...fadeUp}
            className="mt-12 p-8 bg-stone-800/40 border border-stone-700/40 rounded-2xl"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400/70 font-semibold block mb-4">
              What this actually taught me
            </p>
            <p className="text-stone-300 leading-relaxed">
              Working at enterprise scale for this long means I've seen the same problem pattern enough times to recognize it: something that should be straightforward got complicated because each team added their piece without asking whether the whole thing still made sense. Most of my work is figuring out where that happened and making a case for cutting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What I'm Building ── */}
      <section id="building" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Side Projects" title="What I'm building" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Calendar Scout */}
            <motion.div
              {...fadeUp}
              className="p-10 bg-stone-800/50 border border-stone-700/60 rounded-3xl hover:border-amber-400/30 transition-colors duration-400"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/70 font-semibold block mb-4">
                Calendar Intelligence
              </span>
              <h3 className="text-2xl font-medium text-stone-100 mb-6">Calendar Scout</h3>
              <div className="space-y-4 text-stone-400 leading-relaxed text-sm">
                <p>
                  Newsletters often bury events in dense text — conference dates, submission deadlines, meetup times. Extracting them manually is tedious: copy the date, open calendar, click new event, paste details, repeat. If a newsletter has 5 dates, that's 5 manual steps.
                </p>
                <p>
                  Calendar Scout flips the workflow: forward the email, and it parses all dates automatically using AI, surfacing them in a single reply. One-time setup, then it runs invisibly in the background. It handles shared calendars so family or team schedules stay in sync without asking anyone to do the manual work.
                </p>
                <p>
                  The tool uses Gemini to read context (event name, time, day of week) and converts dense email prose into actionable calendar entries. It's the kind of automation that's only valuable if it's reliable — I've focused on accuracy over feature count.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8 mb-6">
                {['Email Parsing', 'Calendar AI', 'Shared Scheduling'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-stone-900/60 text-stone-400 text-[10px] font-semibold rounded-full uppercase tracking-wider border border-stone-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://calendarscout.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-stone-950 text-sm font-semibold rounded-lg hover:bg-amber-300 transition-colors"
              >
                Visit Calendar Scout <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Localemaps */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="p-10 bg-stone-800/50 border border-stone-700/60 rounded-3xl hover:border-amber-400/30 transition-colors duration-400"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/70 font-semibold block mb-4">
                Community Discovery
              </span>
              <h3 className="text-2xl font-medium text-stone-100 mb-6">Localemaps</h3>
              <div className="space-y-4 text-stone-400 leading-relaxed text-sm">
                <p>
                  While traveling globally, I discovered a real market gap: faith community and worship location data exists but is fragmented and nearly impossible to navigate. Searching for congregations in unfamiliar cities meant scattered Facebook groups, outdated lists, and word-of-mouth referrals. That's a structural problem for diaspora communities worldwide.
                </p>
                <p>
                  I built Localemaps initially to solve my own friction. But instead of a static database, I evolved it into a conversational AI bot — recognizing that the use case isn't passive lookup. It's active travel planning, relocation support, and finding communities that align with your specific faith practice and spiritual calendar. The bot handles context: the difference between a short visit and relocating, between routine gatherings and special observances.
                </p>
                <p>
                  What makes this work isn't the technology. It's the deep community knowledge (1,304+ faith community locations across continents, understanding worship patterns and observances, trusted access to community networks) combined with the friction-free interface. It's a niche-vertical play that combines community strategy with technical execution — identifying an underserved market and using AI to make navigation invisible.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8 mb-6">
                {['AI Filtering', 'Local Community', 'Maps'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-stone-900/60 text-stone-400 text-[10px] font-semibold rounded-full uppercase tracking-wider border border-stone-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://localemaps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-stone-950 text-sm font-semibold rounded-lg hover:bg-amber-300 transition-colors"
              >
                Visit Localemaps <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Greatest Sign Maker */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-10 bg-stone-800/50 border border-stone-700/60 rounded-3xl hover:border-amber-400/30 transition-colors duration-400"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/70 font-semibold block mb-4">
                Design Philosophy Case Study
              </span>
              <h3 className="text-2xl font-medium text-stone-100 mb-6">The Greatest Sign Maker</h3>
              <div className="space-y-4 text-stone-400 leading-relaxed text-sm">
                <p>
                  I won a Twitter contest in 2012 to throw the first pitch at an Oakland A's game. I promised friends I'd get them on TV, so I created professional 20x30 foam core signs designed for broadcast legibility at 400+ feet away. When MLB.com published "Ian Sagabaen has to be greatest sign-maker in MLB history" on their Cut4 blog, the title stuck — and I've leaned into it ever since.
                </p>
                <p>
                  What matters isn't nostalgia. When{' '}
                  <a
                    href="https://medium.com/greatest-sign-maker/how-i-came-to-be-the-greatest-sign-maker-838ebff0cc00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2"
                  >
                    MLB.com featured my signs
                  </a>
                  , I realized I'd turned a cultural moment into authentic credibility. 13+ years as a season ticket holder, official A's FanFest appearances, eventually commissioned work directly from the A's. I didn't approach this as a fan making poster board, but as a designer who understood broadcast camera distance, typography, and what real content strategy means: niche enough to be clever, broad enough to resonate.
                </p>
                <p>
                  That same instinct—recognizing moments, working within constraints, building credibility through sustained effort—shows up in everything I design. It's the only method I know.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8 mb-6">
                {['Constraint Design', 'Visual Communication', 'Clarity Over Perfection'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-stone-900/60 text-stone-400 text-[10px] font-semibold rounded-full uppercase tracking-wider border border-stone-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://greatestsignmaker.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-stone-950 text-sm font-semibold rounded-lg hover:bg-amber-300 transition-colors"
              >
                Visit Greatest Sign Maker <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            className="p-8 bg-stone-800/40 border border-stone-700/40 rounded-2xl"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400/70 font-semibold block mb-4">
              The common thread
            </p>
            <p className="text-stone-300 leading-relaxed">
              Every project here started because I was frustrated with something. Calendar Scout, Localemaps, my work at Google—they all came from a real problem I couldn't solve any other way. There's no market research filter between the problem and the solution. When you're the first user, you can't hide behind strategy. That constraint has shaped everything I build. It forces you to think like a skeptic instead of an optimist. It's the only way I know to ship things that actually work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Teaching & Mentorship ── */}
      <section id="teaching" className="relative py-32 px-6 overflow-hidden">
        {/* Google Sunnyvale photo as full-width background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/speaking-google-sunnyvale.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.45 }}
          />
          {/* Dark gradient overlay — heavier at top and bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/70 to-stone-950/90" />
          {/* Extra left-side overlay for text column readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeader label="Values" title="Giving Back" />

          {/* Podcast Feature — Full Width Card */}
          <motion.div
            {...fadeUp}
            className="mb-16 p-8 bg-stone-800/50 border border-stone-700/60 rounded-3xl flex gap-8 items-start"
          >
            {/* Podcast Graphic */}
            <a
              href="https://lnkd.in/gtSjPqGK"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 overflow-hidden rounded-2xl border border-stone-700/40 hover:border-amber-400/40 transition-colors duration-300 w-48 h-48"
            >
              <img
                src="/images/1747897015528.jpeg"
                alt="Roots: Episode 89 - International Man of Mystery featuring Ian Sagabaen"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
              />
            </a>

            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400/70 font-semibold block mb-3">
                Featured
              </p>
              <p className="text-stone-300 leading-relaxed text-sm mb-4">
                I was featured on <span className="font-semibold text-stone-100">Roots: A Podcast on Filipino Designers</span>, where I talked about my journey from being the quiet kid from San Jose, to studying abroad in Japan, to building my practice across Silicon Valley tech companies. The episode covers design thinking, overcoming imposter syndrome, and why constraint-based design matters.
              </p>
              <a
                href="https://lnkd.in/gtSjPqGK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium inline-flex items-center gap-2 w-fit"
              >
                Listen now <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Text + Teaching Photos */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
            <div className="lg:col-span-2">
              <div className="space-y-6 text-stone-300 leading-relaxed">
                <p className="text-lg text-stone-200">
                  I grew up being taught by people who were generous with what they knew. I don't take that for granted, and I try to pay it forward as directly as I can.
                </p>
                <p>
                  A year abroad in Japan changed everything for me. Through{' '}
                  <a
                    href="https://goabroad.sjsu.edu/index.cfm?FuseAction=Programs.ViewProgramAngular&id=34759"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2"
                  >
                    San Jose State University's EPOK program
                  </a>
                  , I was dropped into rural Okayama with no language and no safety net. That forced me to ask for help constantly, to navigate ambiguity, to figure things out alone. I was incredibly shy. I wasn't the same person when I left. I bring that lesson directly to everyone I mentor: you don't need perfect clarity to start. You just need courage and the willingness to ask for help. That's why I consistently push mentees to study or work abroad — there's no substitute for the growth that comes from being genuinely lost.
                </p>
                <p>
                  For the past several years I've been an art docent across the elementary school district, which means going into classrooms and talking about art history in ways that seven-year-olds can actually track. It's the most challenging teaching I do, and I love it. You can't hide behind jargon with kids. You have to actually know what you're talking about and then find the version of it that lands.
                </p>
                <p>
                  I bring the same instinct to mentoring designers. I've worked with people through{' '}
                  <a
                    href="https://adplist.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2"
                  >
                    ADPList
                  </a>{' '}
                  and internal Google programs, and the common thread is that most people don't need more information — they need someone to help them figure out what they already know and what question to ask next.
                </p>
                <p>
                  Some of this work has grown into something more structured. Through{' '}
                  <a
                    href="https://thesagafoundation.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2"
                  >
                    The Saga Foundation
                  </a>
                  , I'm building the infrastructure to do this at a larger scale — scholarships, mentorship pipelines, and resources for people who don't have easy access to the design world. There's a specific focus on Filipino and Asian empowerment in tech. I want to be a healthy role model for pinoy UXers and builders who are trying to figure out their path. It's the next chapter of this work.
                </p>
              </div>
            </div>

            {/* Speaking photo — SJSU + CSU Long Beach */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col gap-4 lg:col-span-3"
            >
              {/* Hero speaking photo — SJSU (top, full width) */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-stone-700/40 bg-stone-800/40">
                <img
                  src="/images/speaking-sjsu.png"
                  alt="Ian speaking at San Jose State University UX·UI Association career talk"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-5 text-xs text-stone-300 font-medium">
                  San Jose State University · UX·UI Association
                </p>
              </div>

              {/* CSU Long Beach photo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-700/40 bg-stone-800/40">
                <img
                  src="/images/speaking-csu-longbeach.jpg"
                  alt="Ian speaking at CSU Long Beach"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 text-[10px] text-stone-300 font-medium leading-snug">
                  CSU Long Beach
                </p>
              </div>
            </motion.div>
          </div>

          {/* Teaching subsections — full width card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Workshops & Content */}
            <motion.div
              {...fadeUp}
              className="p-6 bg-stone-800/40 border border-stone-700/40 rounded-2xl"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100 mb-3">
                Workshops & Content
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                Building curriculum around the designer-to-founder path. Practical, not inspirational. What do you actually do on day one.
              </p>
            </motion.div>

            {/* 2. Design Mentorship */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="p-6 bg-stone-800/40 border border-stone-700/40 rounded-2xl"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100 mb-3">
                Design Mentorship
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                Working with emerging designers through ADPList and Google programs. Focus on career decisions, not just craft.
              </p>
            </motion.div>

            {/* 3. Community Building */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-6 bg-stone-800/40 border border-stone-700/40 rounded-2xl"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100 mb-3">
                Community Building
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                ERGs, collaborative workshops, spaces where people can experiment without being experts first. You don't need permission or credentials to participate.
              </p>
            </motion.div>

            {/* 4. Art Docent */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-6 bg-stone-800/40 border border-stone-700/40 rounded-2xl"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100 mb-3">
                Art Docent
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                Teaching art history across elementary school district classrooms. The constraint of making it land with kids makes me a sharper teacher everywhere else.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="What People Say" title="From the people I've worked with" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "Ian has a rare gift for asking the question that reframes everything. He doesn't just give you an answer — he helps you see the problem differently. My career shifted after one conversation.",
                name: "Constanza Sanchez",
                context: "UX Designer · ADPList Mentee"
              },
              {
                quote: "What I appreciate most about Ian is his honesty. He told me what I needed to hear, not what I wanted to hear. That kind of directness, delivered with real care, is hard to find in a mentor.",
                name: "Abdullah Rehman",
                context: "Product Designer · Mentee"
              },
              {
                quote: "Ian is one of the most thoughtful systems thinkers I've worked alongside. He sees where complexity comes from before most people even notice it's there.",
                name: "Ye Ji Lee",
                context: "UX Researcher · Google"
              },
              {
                quote: "The way Ian approaches teaching is the same way he approaches design — he strips away everything unnecessary and goes straight to what matters. I've learned more from his workshops than from formal courses.",
                name: "Jasmine Ke",
                context: "Designer · Workshop Attendee"
              },
              {
                quote: "Ian gets the builder mindset. He's one of the few designers I've met who thinks about product and business constraints the same way he thinks about user needs. That's a rare combination.",
                name: "Enrico F-Léon",
                context: "Founder · Product Collaborator"
              },
              {
                quote: "Working with Ian raised the bar for how I think about design decisions. He's generous with his thinking and precise in his feedback — exactly what you want in a collaborator.",
                name: "Peixin Fu",
                context: "UX Designer · Collaborator"
              }
            ].map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="p-8 bg-stone-800/50 border border-stone-700/60 rounded-3xl flex flex-col gap-6"
              >
                <Quote size={20} className="text-amber-400/40 flex-shrink-0" />
                <p className="text-stone-300 leading-relaxed text-sm flex-grow">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-stone-700/50">
                  <p className="text-sm font-semibold text-stone-100">{t.name}</p>
                  <p className="text-xs text-stone-500 mt-0.5">{t.context}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Professional Timeline ── */}
      <section id="journey" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Timeline" title="Where I've worked" />

          <div>
            <ExperienceItem
              period="2018 — Present"
              company="Google"
              role="UX Design Lead"
              description="Leading UX strategy for systems serving 30M+ enterprise users across Workspace Security and Cloud. Shaped design patterns adopted across 40+ product teams, standardizing the approach to complex admin workflows. Worked on everything from security dashboards handling thousands of configurations to AI-driven support systems, to customer migrations. Eight years of this has taught me one consistent thing: complexity usually isn't necessary, it's just inherited."
            />
            <ExperienceItem
              period="2015 — 2016"
              company="Facebook"
              role="Product Design Contractor"
              description="Shipped customer sales tools features for the Facebook sales teams, contributing to a 35% increase in feature adoption through rapid prototyping and UX validation cycles. Conducted persona research through user interviews and created rapid prototypes for real-user testing. Built style guide integrating new components with Facebook's developer library. Led design for hackathon projects shipping outside normal scope — proving rapid iteration without the burden of polish-first thinking."
            />
            <ExperienceItem
              period="2013 — 2015"
              company="SugarSync"
              role="Principal Product Designer"
              description="Led product design for cloud storage when consumer skepticism was high. Designed core sharing and sync experience across desktop, web, mobile. Drove product-market fit signals: 45% increase in user retention post-redesign, secured 25+ SMB pilot customers validating product fit. Helped the team build reliable access patterns that became defensible against larger competitors."
            />
            <ExperienceItem
              period="2008 — 2012"
              company="CompareNetworks"
              role="Senior Graphic Designer"
              description="Led the design for niche medical, biotech, dental, and publication B2B marketplace pages across verticals. Increased lead conversions through skeptic-targeting design patterns that prioritized specs and accuracy over aesthetic flourish. Managed design systems supporting 6M+ monthly impressions. Learned how to design for audiences that distrust marketing — a skill that proved invaluable across my career."
            />
          </div>
        </div>
      </section>

      {/* ── Education & Contact ── */}
      <section id="contact" className="py-32 px-6 bg-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Education */}
            <div>
              <SectionHeader label="Foundation" title="Education" />
              <motion.div
                {...fadeUp}
                className="flex gap-6 items-start"
              >
                <div className="p-4 bg-stone-800/60 border border-stone-700/40 rounded-2xl">
                  <GraduationCap size={28} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-stone-100 mb-1">San Jose State University</h4>
                  <p className="text-stone-400">BA Graphic Design, Minor in Photography</p>
                </div>
              </motion.div>
            </div>

            {/* Contact */}
            <div>
              <SectionHeader label="Contact" title="Let's figure something out" />
              <motion.div
                {...fadeUp}
                className="space-y-4"
              >
                <p className="text-stone-400 leading-relaxed mb-8">
                  I'm open to speaking at conferences, collaborating on products where design is actually hard, and mentoring designers at any stage. If you're not sure whether it's worth reaching out, it probably is.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:iansagabaen@gmail.com"
                    className="flex items-center justify-between p-6 bg-stone-800/50 border border-stone-700/60 rounded-2xl hover:border-amber-400/40 hover:bg-stone-800/80 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-4">
                      <Mail size={18} className="text-amber-400" />
                      <span className="text-sm font-semibold text-stone-200">Email me</span>
                    </div>
                    <ArrowUpRight size={16} className="text-stone-500 group-hover:text-amber-400 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/iansagabaen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 bg-stone-800/50 border border-stone-700/60 rounded-2xl hover:border-amber-400/40 hover:bg-stone-800/80 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-4">
                      <Linkedin size={18} className="text-amber-400" />
                      <span className="text-sm font-semibold text-stone-200">LinkedIn</span>
                    </div>
                    <ArrowUpRight size={16} className="text-stone-500 group-hover:text-amber-400 transition-colors" />
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6 border-t border-stone-800">
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
