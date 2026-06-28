import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Code2,
  Users,
  Zap,
  Shield,
  BookOpen,
  Briefcase,
  ArrowUpRight,
  GraduationCap
} from 'lucide-react';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold block mb-2"
    >
      {subtitle || "Section"}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900"
    >
      {title}
    </motion.h2>
  </div>
);

const AchievementCard = ({ title, date, description, icon: Icon, tags }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
  >
    <div className="mb-6 flex justify-between items-start">
      <div className="p-3 bg-zinc-50 rounded-2xl group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500">
        <Icon size={24} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{date}</span>
    </div>
    <h3 className="text-xl font-medium mb-4 text-zinc-900">
      {title}
    </h3>
    <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag: string) => (
        <span key={tag} className="px-3 py-1 bg-zinc-50 text-zinc-500 text-[10px] font-semibold rounded-full uppercase tracking-wider">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ExperienceItem = ({ role, company, period, description }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-12 border-b border-zinc-100 last:border-0">
    <div>
      <span className="text-sm font-medium text-zinc-400 block mb-1">{period}</span>
      <span className="text-xs uppercase tracking-widest text-zinc-900 font-bold">{company}</span>
    </div>
    <div>
      <h4 className="text-2xl font-light text-zinc-900 mb-4">{role}</h4>
      <p className="text-zinc-600 leading-relaxed max-w-2xl">{description}</p>
    </div>
  </div>
);

const CaseStudyCard = ({ title, description, metrics, approach }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <h3 className="text-2xl font-medium mb-4 text-zinc-900">{title}</h3>
    <p className="text-zinc-600 text-sm leading-relaxed mb-6">{description}</p>

    <div className="mb-6 space-y-4">
      <div>
        <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">Design Approach</h4>
        <p className="text-sm text-zinc-600">{approach}</p>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">Key Metrics</h4>
        <ul className="text-sm text-zinc-600 space-y-1">
          {metrics.map((m: string) => (
            <li key={m} className="flex items-start gap-2">
              <span className="text-zinc-900 mt-1">•</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-100 py-3' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">IS</div>
            <span className="text-sm font-semibold tracking-tight">Ian Sagabaen</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {['Complexity', 'Building', 'Teaching', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href="mailto:iansagabaen@gmail.com" className="px-5 py-2 bg-zinc-900 text-white text-xs font-bold rounded-full hover:bg-zinc-800 transition-all">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-8">
                Founder → Designer → Mentor
              </span>
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-12 text-zinc-900">
                Building products that solve <span className="font-medium">real problems</span> for real people.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl mb-12">
                15+ years designing enterprise systems at scale. Now building micro-SaaS products and mentoring the next generation of makers.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                  <Briefcase size={16} />
                  <span>Founder</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                  <Code2 size={16} />
                  <span>Designer & Builder</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                  <BookOpen size={16} />
                  <span>Teaching Always</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-zinc-200 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-zinc-300 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* Comfortable with Complexity */}
      <section id="complexity" className="py-32 px-6 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Comfortable with Complexity" subtitle="At Scale" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AchievementCard
              title="Workspace Zero Trust"
              date="2024 — Present"
              description="Architected UX strategy for Private Service Connect, enabling consumer-grade admin experiences for 30M+ users navigating enterprise security."
              icon={Shield}
              tags={["Security", "Architecture", "Scale"]}
            />
            <AchievementCard
              title="Data Migration Ecosystem"
              date="2024 — 2025"
              description="Redesigned OneDrive→Workspace migration. Reduced a complex 9-step flow into a strategic 3-step 'Simple Setup' that improves adoption."
              icon={Zap}
              tags={["Growth", "Onboarding", "Simplicity"]}
            />
            <AchievementCard
              title="Agentic Enterprise UI"
              date="2024 — Present"
              description="Pioneering proactive AI-driven admin support. Selected for CHI 2026. Demonstrates how AI can move beyond 'Learn More' to intelligent stewardship."
              icon={Users}
              tags={["AI", "Innovation", "Research"]}
            />
            <AchievementCard
              title="Cloud Sales Tools"
              date="2023 — 2024"
              description="Designed Cloud Connect, unifying disparate sales tools. Boosted productivity and established platform standards across teams."
              icon={Code2}
              tags={["Sales", "Productivity", "Systems"]}
            />
            <AchievementCard
              title="Support at Enterprise Scale"
              date="2018 — 2023"
              description="Led design of unified support for GCP + Workspace. Streamlined workflows for customers like Verizon managing thousands of users."
              icon={BookOpen}
              tags={["Support", "Enterprise", "Strategy"]}
            />
            <AchievementCard
              title="Partner Ecosystem UX"
              date="2018"
              description="Improved Cloud partner experience in the Unified Partner Directory. Built certification management tools used by hundreds of partners."
              icon={Briefcase}
              tags={["Partners", "Learning", "Automation"]}
            />
          </div>

          <div className="mt-20 p-8 bg-white border border-zinc-100 rounded-3xl">
            <p className="text-zinc-600 leading-relaxed">
              <span className="font-medium text-zinc-900">Why this matters:</span> Building systems at enterprise scale taught me how to navigate complexity without losing sight of what users actually need. I don't design for designers—I design for the person trying to solve their job, even when that job is intricate.
            </p>
          </div>
        </div>
      </section>

      {/* Building Now */}
      <section id="building" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Building Now" subtitle="Founder Products" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Calendar Scout"
              description="A smarter calendar for busy professionals. Extracts meeting details from email forwarding and surfaces the intelligence you actually need."
              approach="Started by asking: What if your calendar told you what matters? Designed for zero friction—one-time setup via email forwarding, then passive intelligence delivered to your inbox."
              metrics={[
                "Email-to-event extraction with 95%+ accuracy",
                "Multi-user household calendars (spouse + family)",
                "Focuses on the signal that actually helps you decide"
              ]}
            />
            <CaseStudyCard
              title="Localemaps"
              description="Finding community in new cities. An AI-powered guide to local spaces, events, and people who share your interests."
              approach="Design principle: Discovery without overwhelm. Use AI to surface the 10% that matters to YOU, not 1000 generic results. Built for travelers, relocators, and community seekers."
              metrics={[
                "AI-powered filtering by vibe and interests",
                "Maps + community integration",
                "Designed for exploration over exhaustion"
              ]}
            />
          </div>

          <div className="mt-12 p-8 bg-white border border-zinc-100 rounded-3xl">
            <p className="text-zinc-600 leading-relaxed">
              <span className="font-medium text-zinc-900">Design philosophy:</span> Every product solves a problem I actually have. I'm not chasing hype—I'm building things that earn recurring use because they genuinely help. That obsession with solving real problems comes from 15 years of working at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching & Mentorship */}
      <section id="teaching" className="py-32 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader title="Teaching is Non-Negotiable" subtitle="Community & Growth" />
              <p className="text-zinc-300 text-lg font-light leading-relaxed mb-8">
                My core motivation isn't just building products—it's building the people who'll build the next wave of products. Teaching, mentorship, and community are how I think about long-term impact.
              </p>

              <div className="space-y-6">
                {[
                  { label: "Mentorship", desc: "5+ years mentoring through ADPList and internal programs. Help emerging designers navigate careers and find their voice." },
                  { label: "Content & Craft", desc: "Share what I've learned through articles, talks, and workshops. Make design thinking accessible." },
                  { label: "Community Building", desc: "Created spaces—printmaking studios, design circles, collaborative workshops—where makers can experiment and grow together." },
                  { label: "Strategic Teaching", desc: "Help founders and designers think about problems differently. Passive income from products funds this work forever." }
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-1">{item.label}</h4>
                      <p className="text-sm text-zinc-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square bg-zinc-800 rounded-[40px] overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-zinc-900 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen size={64} className="text-white/40 mx-auto mb-4" />
                  <p className="text-white/60 font-light">Teaching creates exponential impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section id="journey" className="py-32 px-6 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold block mb-2">Timeline</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Professional Journey</h2>
          </div>

          <div className="divide-y divide-zinc-100">
            <ExperienceItem
              period="2018 — Present"
              company="Google"
              role="UX Design Lead"
              description="Architecting design strategies across Workspace Security, Cloud Sales, and Support ecosystems. Leading shifts in Zero Trust UX and agentic AI interfaces for 30M+ users."
            />
            <ExperienceItem
              period="2015 — 2016"
              company="Facebook"
              role="Product Design Contractor"
              description="Contributed to product design initiatives. Learned how to ship at Facebook scale."
            />
            <ExperienceItem
              period="2013 — 2015"
              company="SugarSync"
              role="Principal Product Designer"
              description="Led design for cloud storage solutions. Learned to balance technical complexity with consumer-grade usability."
            />
            <ExperienceItem
              period="2008 — 2012"
              company="CompareNetworks"
              role="Senior Graphic Designer"
              description="Managed multimedia production and online marketplace design for scientific and industrial sectors."
            />
          </div>
        </div>
      </section>

      {/* Education & Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader title="Education" subtitle="Foundation" />
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-zinc-50 rounded-2xl">
                  <GraduationCap size={32} className="text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-zinc-900">San Jose State University</h4>
                  <p className="text-zinc-500">BA Graphic Design, Minor in Photography</p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader title="Let's Connect" subtitle="Contact" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="mailto:iansagabaen@gmail.com" className="flex items-center justify-between p-6 bg-zinc-50 rounded-3xl hover:bg-zinc-900 hover:text-white transition-all group">
                  <div className="flex items-center gap-4">
                    <Mail size={20} />
                    <span className="text-sm font-semibold">Email</span>
                  </div>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="https://www.linkedin.com/in/iansagabaen/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-zinc-50 rounded-3xl hover:bg-zinc-900 hover:text-white transition-all group">
                  <div className="flex items-center gap-4">
                    <Linkedin size={20} />
                    <span className="text-sm font-semibold">LinkedIn</span>
                  </div>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Ian Sagabaen
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Design</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Founder</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Mentor</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
