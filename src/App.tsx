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
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    className="p-8 bg-stone-800/50 border border-stone-700/60 rounded-3xl flex flex-col gap-6 hover:border-amber-400/30 transition-colors duration-400"
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
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-400 selection:text-stone-950">

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
              <span className="text-sm font-semibold tracking-tight text-stone-100 block">Ian Sagabaen</span>
              <span className="text-[10px] text-stone-300 tracking-wide">rhymes with Lion</span>
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
                <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05] text-white">
                  Ian Sagabaen
                </h1>
                <p className="text-lg text-amber-400 font-light tracking-wide mt-2 mb-8">
                  (rhymes with Lion)
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-[1.1] mb-10 text-white">
                I've spent the last decade at Google learning how to simplify{' '}
                <span className="text-amber-400">enterprise chaos.</span>
              </h2>

              <p className="text-xl text-stone-100 font-light leading-relaxed mb-4">
                Now I'm building products on the side and mentoring designers who are figuring out their next move. The two feel more connected than they might look.
              </p>

              <p className="text-base text-stone-200 leading-relaxed mb-8">
                At Google, I lead UX on systems that touch tens of millions of people. What keeps me going is the same thing it's always been: understanding genuinely hard problems and sharing what I learn as broadly as I can.
              </p>

              <p className="text-base text-stone-200 leading-relaxed mb-14">
                I also speak — at conferences, universities, and workshops. I've lectured through{' '}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <p className="text-stone-400 leading-relaxed">
              <span className="font-medium text-stone-200">What this actually taught me:</span> Working at enterprise scale for this long means I've seen the same problem pattern enough times to recognize it: something that should be straightforward got complicated because each team added their piece without asking whether the whole thing still made sense. Most of my work is figuring out where that happened and making a case for cutting.
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
                  I started building Calendar Scout because I kept losing track of things I'd already said yes to. You get a conference registration email, an event invite from a friend, a pickup reminder, and they all live in different places until they don't — because you missed one of them.
                </p>
                <p>
                  The idea is straightforward: forward the email to Calendar Scout and it figures out what to put on your calendar and when. One-time setup, then it runs quietly in the background. It handles multi-user calendars so shared schedules stay in sync without anyone having to do anything after the initial setup.
                </p>
                <p>
                  It extracts event details from email with enough accuracy that I actually trust it, and I'm still refining it. But it's the kind of tool that earns its place by being invisible when it's working.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {['Email Parsing', 'Calendar AI', 'Shared Scheduling'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-stone-900/60 text-stone-400 text-[10px] font-semibold rounded-full uppercase tracking-wider border border-stone-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
                  The problem with most "find things near you" apps is that they return everything near you, which is not the same as what you're actually looking for. If you just moved to a new city and you want to find people who are into printmaking, or a gym that does Muay Thai, or a community garden that isn't a six-month waitlist, you're going to do a lot of clicking before you find anything useful.
                </p>
                <p>
                  Localemaps is an attempt to fix that by being opinionated about filtering. Instead of returning a hundred options, it returns the ten that actually match what you care about. I built the AI layer to do the filtering work rather than putting it on the user, which is the only design decision that makes sense here. Nobody wants to refine their search thirty times.
                </p>
                <p>
                  I'm building this partly because I've moved enough times to know how long it takes to feel like you belong somewhere, and partly because I think local community is worth caring about even when it's not a hot startup category.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {['AI Filtering', 'Local Community', 'Maps'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-stone-900/60 text-stone-400 text-[10px] font-semibold rounded-full uppercase tracking-wider border border-stone-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            className="p-8 bg-stone-800/40 border border-stone-700/40 rounded-2xl"
          >
            <p className="text-stone-400 leading-relaxed">
              <span className="font-medium text-stone-200">Why I build on the side:</span> Both of these started as problems I had, not market research. I think that's the only honest way to start a product, at least at this stage. The design instincts I've developed at Google do transfer, but the thing that actually changes is how much closer you are to the person you're designing for, because that person is you.
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
          <SectionHeader label="Community & Knowledge" title="Where I actually spend my time" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="space-y-6 text-stone-300 leading-relaxed mb-12">
                <p className="text-lg text-stone-200">
                  I grew up being taught by people who were generous with what they knew. I don't take that for granted, and I try to pay it forward as directly as I can.
                </p>
                <p>
                  For the past several years I've been an art docent at an elementary school, which means going into classrooms and talking about art history in ways that seven-year-olds can actually track. It's the most challenging teaching I do, and I love it. You can't hide behind jargon with kids. You have to actually know what you're talking about and then find the version of it that lands.
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
                  , I'm building the infrastructure to do this at a larger scale — scholarships, mentorship pipelines, and resources for people who don't have easy access to the design world. It's the next chapter of this work.
                </p>
              </div>

              {/* Teaching subsections — reordered */}
              <div className="space-y-8">
                {/* 1. Workshops & Content */}
                <motion.div
                  {...fadeUp}
                  className="flex gap-4"
                >
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100 mb-1">
                      Workshops & Content
                    </h4>
                    <p className="text-sm text-stone-300 leading-relaxed mb-3">
                      Building curriculum around the designer-to-founder path. Practical, not inspirational. What do you actually do on day one.
                    </p>
                    <a
                      href="https://thesagafoundation.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      View at The Saga Foundation <ArrowUpRight size={12} />
                    </a>
                  </div>
                </motion.div>

                {/* 2. Design Mentorship */}
                <motion.div
                  {...fadeUp}
                  className="flex gap-4"
                >
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100 mb-1">
                      Design Mentorship
                    </h4>
                    <p className="text-sm text-stone-300 leading-relaxed">
                      Working with emerging designers through ADPList and Google programs. Focus on career decisions, not just craft.
                    </p>
                  </div>
                </motion.div>

                {/* 3. Community Building */}
                <motion.div
                  {...fadeUp}
                  className="flex gap-4"
                >
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100 mb-1">
                      Community Building
                    </h4>
                    <p className="text-sm text-stone-300 leading-relaxed">
                      ERGs, collaborative workshops, spaces where people can experiment without being experts first. You don't need permission or credentials to participate — that's always been the point.
                    </p>
                  </div>
                </motion.div>

                {/* 4. Art Docent */}
                <motion.div
                  {...fadeUp}
                  className="flex gap-4"
                >
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100 mb-1">
                      Art Docent
                    </h4>
                    <p className="text-sm text-stone-300 leading-relaxed">
                      Teaching art history in elementary school classrooms. The constraint of making it land with kids makes me a sharper teacher everywhere else.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Speaking photo — SJSU + CSU Long Beach */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col gap-4"
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
                className="p-8 bg-stone-800/50 border border-stone-700/60 rounded-3xl flex flex-col gap-6 hover:border-amber-400/20 transition-colors duration-400"
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
              description="Leading design across Workspace Security, Cloud Sales, and Support — a portfolio that touches 30M+ users across enterprise and government accounts. I've worked on everything from admin dashboards handling thousands of configurations to AI-driven support systems, to onboarding flows for customers migrating from Microsoft. Eight years of this has taught me one consistent thing: complexity usually isn't necessary, it's just inherited."
            />
            <ExperienceItem
              period="2015 — 2016"
              company="Facebook"
              role="Product Design Contractor"
              description="Spent a year at Facebook shipping consumer features with a 50+ person cross-functional team. The pace was real — high-stakes decisions made fast, with a lot of eyeballs on the outcome. What I actually took away wasn't about speed. It was about how much you can get done when everyone's aligned on what matters. I also learned that 'move fast' only works if the design decisions are already solid."
            />
            <ExperienceItem
              period="2013 — 2015"
              company="SugarSync"
              role="Principal Product Designer"
              description="Led product design for a cloud storage platform at a time when most consumers were still skeptical of storing files anywhere other than their hard drive. Shipped the core sharing and sync experience, worked across desktop, web, and mobile, and helped the team find product-market fit with small business users who needed reliable access across devices."
            />
            <ExperienceItem
              period="2008 — 2012"
              company="CompareNetworks"
              role="Senior Graphic Designer"
              description="Designed for scientific and industrial B2B marketplaces — buyers who cared about specs and accuracy above everything else. Built and maintained design systems across multiple niche verticals, shipped hundreds of product pages and lead-generation flows, and learned how to design for audiences that distrust anything that looks like marketing. That turned out to be more useful than I expected."
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
