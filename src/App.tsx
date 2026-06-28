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
              <span className="text-[10px] text-stone-500 tracking-wide">rhymes with Lion</span>
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
                className="text-xs font-semibold uppercase tracking-widest text-stone-500 hover:text-amber-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:iansagabaen@gmail.com"
            className="px-5 py-2 border border-amber-400/40 text-amber-400 text-xs font-bold rounded-full hover:bg-amber-400 hover:text-stone-950 transition-all duration-200"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-44 pb-36 px-6 overflow-hidden">
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
                <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05] text-stone-100">
                  Ian Sagabaen
                </h1>
                <p className="text-lg text-amber-400/70 font-light tracking-wide mt-2 mb-8">
                  (rhymes with Lion)
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-[1.1] mb-10 text-stone-100">
                I've spent the last decade at Google learning how to simplify{' '}
                <span className="text-amber-400">enterprise chaos.</span>
              </h2>

              <p className="text-xl text-stone-400 font-light leading-relaxed mb-4">
                Now I'm building products on the side and mentoring designers who are figuring out their next move. The two feel more connected than they might look.
              </p>

              <p className="text-base text-stone-500 leading-relaxed mb-8">
                At Google, I lead UX on systems that touch tens of millions of people. What keeps me going is the same thing it's always been: understanding genuinely hard problems and sharing what I learn as broadly as I can.
              </p>

              <p className="text-base text-stone-400 leading-relaxed mb-14">
                I also speak — at conferences, universities, and workshops. I've lectured through Google Tech Exchange, led design sprints for cross-functional teams, and hosted campus tours for hundreds of UX practitioners. If you're looking for a speaker who's still in the work — not just talking about it — I'm available.
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

            {/* Headshot column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative hidden lg:flex justify-center items-center"
            >
              {/* Headshot placeholder — replace src with /images/headshot-ian.jpg once saved */}
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-stone-700/40 bg-stone-800/40 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 to-rose-500/5" />
                <div className="text-center p-8 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-amber-400/10 border border-amber-400/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-light text-amber-400/60">IS</span>
                  </div>
                  <p className="text-stone-500 text-sm">Headshot coming soon</p>
                  <p className="text-stone-600 text-xs mt-1">Replace with /images/headshot-ian.jpg</p>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 -m-4 rounded-[2rem] border border-amber-400/5 pointer-events-none" />
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
              eyebrow="AI · 2024–Present"
              title="Agentic Enterprise Support"
              body="Working on what it looks like when AI does more than answer questions. Instead of a chatbot that says 'learn more,' the system anticipates admin problems before they file a ticket. This work was accepted to CHI 2026, which I'm still a little surprised about."
              tags={['AI', 'Research', 'Proactive Systems']}
            />
            <StoryCard
              eyebrow="Sales Tools · 2023–2024"
              title="Cloud Connect"
              body="Unified three separate internal tools that sales teams were duct-taping together into workarounds. The challenge wasn't the interface design, it was figuring out which workflows actually mattered and which ones only existed because no one had questioned them yet."
              tags={['Internal Tools', 'Sales', 'Systems Thinking']}
            />
            <StoryCard
              eyebrow="Support · 2018–2023"
              title="Enterprise Support at Scale"
              body="Led design for the unified support experience across Google Cloud and Workspace. Customers like Verizon, managing thousands of users, needed something that could handle their scale without requiring them to become Google experts just to get help."
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
      <section id="teaching" className="py-32 px-6 bg-stone-900/60">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Community & Knowledge" title="Teaching is the part I care most about" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="space-y-6 text-stone-400 leading-relaxed mb-12">
                <p className="text-lg text-stone-300">
                  I grew up being taught by people who were generous with what they knew. I don't take that for granted, and I try to pay it forward as directly as I can.
                </p>
                <p>
                  For the past several years I've been an art docent at an elementary school, which means going into classrooms and talking about art history in ways that seven-year-olds can actually track. It's the most challenging teaching I do, and I love it. You can't hide behind jargon with kids. You have to actually know what you're talking about and then find the version of it that lands.
                </p>
                <p>
                  I bring the same instinct to mentoring designers. I've worked with people through ADPList and internal Google programs, and the common thread is that most people don't need more information, they need someone to help them figure out what they already know and what question to ask next. That's what I try to do.
                </p>
                <p>
                  I've also been building out content and workshops around the design-to-founder path, because I think there are a lot of designers who have the instincts to build products but feel like that world isn't meant for them. I want to be useful to those people specifically.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: 'Art Docent',
                    desc: "Teaching art history in elementary school classrooms. The constraint of making it land with kids makes me a sharper teacher everywhere else."
                  },
                  {
                    label: 'Design Mentorship',
                    desc: 'Working with emerging designers through ADPList and Google programs. Focus on career decisions, not just craft.'
                  },
                  {
                    label: 'Community Building',
                    desc: "ERGs, collaborative workshops, spaces where people can experiment without being experts first. I've always tried to lower the entry cost."
                  },
                  {
                    label: 'Workshops & Content',
                    desc: 'Building curriculum around the designer-to-founder path. Practical, not inspirational. What do you actually do on day one.'
                  }
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    {...fadeUp}
                    className="flex gap-4"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-stone-200 mb-1">
                        {item.label}
                      </h4>
                      <p className="text-sm text-stone-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Speaking photo gallery */}
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

              {/* Two smaller photos side by side */}
              <div className="grid grid-cols-2 gap-4">
                {/* Google Sunnyvale */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-700/40 bg-stone-800/40">
                  <img
                    src="/images/speaking-google-sunnyvale.png"
                    alt="Ian at Google Sunnyvale speaking to high school students"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 text-[10px] text-stone-300 font-medium leading-snug">
                    Google Sunnyvale
                  </p>
                </div>

                {/* Group photo — CSU Long Beach placeholder / group event */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-700/40 bg-stone-800/40">
                  <img
                    src="/images/group-tech-event.png"
                    alt="Group photo from a tech community event"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 text-[10px] text-stone-300 font-medium leading-snug">
                    Tech Community
                  </p>
                </div>
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
              description="Leading design across Workspace Security, Cloud Sales, and Support. The range has been useful: I've worked on everything from admin dashboards to AI-driven support systems to onboarding flows for customers switching from Microsoft. Each one taught me something different about where complexity comes from and how to reduce it."
            />
            <ExperienceItem
              period="2015 — 2016"
              company="Facebook"
              role="Product Design Contractor"
              description="Short stint that was mostly about learning what shipping at Facebook scale felt like. Fast, high-stakes, humbling. Valuable."
            />
            <ExperienceItem
              period="2013 — 2015"
              company="SugarSync"
              role="Principal Product Designer"
              description="Led design for a cloud storage product at a time when most people were still figuring out what cloud storage was. Learned how to make technically complex things feel simple, which turned out to be useful preparation for everything that came after."
            />
            <ExperienceItem
              period="2008 — 2012"
              company="CompareNetworks"
              role="Senior Graphic Designer"
              description="Designed for scientific and industrial marketplaces. Not glamorous, but it taught me how to design for audiences that care about accuracy above everything else, which is its own discipline."
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
