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

export default function PodcastPage() {
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
            <Link to="/" className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium mb-6 inline-flex items-center gap-1">
              Back to portfolio
            </Link>
          </motion.div>

          <motion.div {...fadeUp}>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-4 text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Roots Podcast
            </h1>
            <p className="text-xl text-amber-400 font-light tracking-wide mb-8">Episode 089: International Man of Mystery</p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://rootspodcast.design/podcast/iansagabaen"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-amber-400 text-stone-950 text-sm font-bold rounded-full hover:bg-amber-300 transition-colors duration-200 inline-flex items-center gap-2"
              >
                Listen on Roots Podcast <ArrowUpRight size={16} />
              </a>
              <a
                href="https://traffic.libsyn.com/secure/rootsdesign/Ian_Sagabaen.mp3"
                className="px-6 py-3 border border-stone-700 text-stone-300 text-sm font-medium rounded-full hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200 inline-flex items-center gap-2"
              >
                Download MP3 <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transcript */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-stone-300 leading-relaxed">
          <motion.div {...fadeUp} className="space-y-4">
            <h2 className="text-2xl font-semibold text-stone-100">Transcript</h2>
            <p className="text-sm text-stone-400">Host: Alexis Collado</p>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-6 prose prose-invert max-w-none">
            <div>
              <h3 className="text-lg font-semibold text-stone-100 mb-3">Introduction & Core Philosophy</h3>
              <div className="space-y-4 text-sm">
                <p><strong>Alexis:</strong> On episode 89, we're talking to the international man of mystery. This is Roots, a podcast on Philippine designers. I'm your host, Alexis Collado.</p>

                <p><strong>Ian:</strong> Personally, I absorbed knowledge as I went along and elevated my experience. You have to be a self-advocate anyway, right? No one is going to really promote you or say it officially, but if you go in, claim it, and personally believe in yourself—that this is truly your title—no one is going to doubt you as long as you have that confidence. So that's what I was trying to do, proclaiming myself as an interaction designer.</p>

                <p><strong>Alexis:</strong> Ian Sagabaen is a UX designer at Google, building Google Cloud's enterprise tools. If you've ever been described as shy and need that nudge to break out of your comfortable shell, Ian's travel stories might motivate you. He started as a quiet kid from San Jose, went on a whim, challenged himself to live on the other side of the world, then applied his newfound courage he discovered while abroad to build up his body of work at different Silicon Valley tech companies.</p>

                <p>In this episode, we talk about progressing from graphic to interaction design, moving to Japan to study, designing for internal tools, enterprise versus consumer design, UX mentoring, and so much more. Thank you for tuning in and I hope you enjoy the episode.</p>

                <p><strong>Alexis:</strong> Hey Ian, welcome to Roots.</p>

                <p><strong>Ian:</strong> Hi Alexis, thanks for having me.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-100 mb-3">Growing Up in San Jose & The Spark for Design</h3>
              <div className="space-y-4 text-sm">
                <p><strong>Alexis:</strong> I'm so excited to have you, Ian. Can you please introduce yourself to everyone?</p>

                <p><strong>Ian:</strong> I'm Ian Sagabaen. You're going to read it on paper and want to pronounce it as Ian—and you'd be right, it is Ian. My dad had creative liberties with coming up with my name when I was born. I actually asked him if there was some sort of romantic reason why I was called Ian, and he said it sounded cool, so nothing special.</p>

                <p><strong>Alexis:</strong> Yes, Ian. Thank you. It rhymes with lion.</p>

                <p><strong>Ian:</strong> Lion—that's very important, guys, remember that. I am a UX designer currently at Google, specifically at Google Cloud, creating support tools for people that are doing Google Cloud things, basically.</p>

                <p>I'm from San Jose, California, born and raised—to my detriment. I only say that because I've really never left the Bay Area. I grew up in East Side San Jose. San Jose is huge and wide, mostly suburban, and East Side San Jose was not a really wholesome place to grow up, but it was totally normal for me. I didn't grow up with huge aspirations.</p>

                <p>For those that have visited San Jose, if you go to the downtown area, one of the tallest buildings in downtown San Jose is actually the Adobe building. Growing up in the 80s and the 90s, me being simple-minded and seeing the tallest building, I thought—some people aspire to be astronauts or firefighters, but for me, seeing that tall building made me think I'm gonna work there because I want to work on the top floors.</p>

                <p>Later in my life, around middle school or high school, I discovered what Adobe actually was and made the association. I had my PC, came across Photoshop, and saw friends making cool banners. I realized, I know where they made that software—it's like two miles away from where I live and you can see it from our house. I guess that's the inception of the whole bug of wanting to become related to the visual space and becoming a visual designer.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-100 mb-3">The Turning Point in Japan</h3>
              <div className="space-y-4 text-sm">
                <p><strong>Ian:</strong> This whole belief system and way of thinking developed before that. As I mentioned earlier, I thought I'd never leave the Bay Area and would be in San Jose all my life, but I thought that's not a good way to go. While I was at San Jose State, I challenged myself to leave the Bay Area, even if just for a little bit. San Jose State happens to have an exchange program. I had a few options and ultimately landed on wanting to move to Japan.</p>

                <p>I decided to just pick up and go. I was twenty years old at the time, super young, and I didn't do much planning. I didn't think about it; I was just really excited to leave. To a fault—once I landed in Japan, I realized I didn't speak Japanese. I didn't know how to get to my homestay area.</p>

                <p>Okayama University certainly did not have as many English speakers as major cities like Tokyo. Being thrown into the deep end is the best way to learn something because I quickly had to learn how to read Japanese—especially a Japanese menu, so I knew what to eat, how to find the bathroom, how to ask for food, or even how to pay my electric bill. When it comes down to your livelihood and comfort, that's a real way to nudge yourself to learn things quickly.</p>

                <p>The reason I bring up this whole Japan story is because during that year in Japan, a switch flipped. If you ask my family how they would describe Ian as a young kid, they would describe me as the shy kid who kept to himself. Post-Japan, something happened where I was more outgoing and more adventurous. It turns out I was just psyching myself out, thinking it's best to be safe and do things that are totally expected. Challenging myself to go to Japan was the best decision I've ever made in my life.</p>

                <p>One of the questions you're probably going to ask me, Alexis, is if there's any advice I would love to give listeners—to the Filipinos that are listening. I have to say: break out of your comfort zone. For me, challenging myself to leave the country and live in Japan for a year totally opened me up, and my temperament completely changed. It was like waking a sleeping dragon.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-100 mb-3">Enterprise Design & Wireframing at Google</h3>
              <div className="space-y-4 text-sm">
                <p><strong>Alexis:</strong> What's your day-to-day like as an enterprise designer at Google?</p>

                <p><strong>Ian:</strong> Well, especially during COVID, it's just a lot of sitting through meetings. My team supports a huge suite of different products, so there's a lot of project management that goes along with being a UX designer. I have to make sure my time is spent properly across the different teams that I'm supporting. It involves me negotiating with product teams and my engineers to see what needs to be built.</p>

                <p>Ideally, if they need some sort of visual representation of what needs to be built, I'll go in and wireframe or mock up some concepts just to get conversations started. People have different mental models of how something should behave, so this is where I go in and do something really cheaply—by that I mean doing a super low-fidelity wireframe. If I sit with the engineers and the business side, they have a strong visual understanding of what needs to be built.</p>

                <p>I've dodged a lot of bullets that way because there are a lot of assumptions. Even though Google is really good about writing documentation, at the same time we make a lot of assumptions. The best thing I can deliver as a UX designer is wireframes because it removes ambiguity across the team.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-100 mb-3">Mentorship & Family Roots</h3>
              <div className="space-y-4 text-sm">
                <p><strong>Alexis:</strong> Are there any projects outside of work that you'd like to share with the audience?</p>

                <p><strong>Ian:</strong> Recently, I've been doing a lot of UX mentoring. Shout out to UX Coffee Hours—uxcoffeehours.com I believe is their URL. It's a collection of tech company UX people, mostly Googlers, who volunteer their time to offer one-hour sessions to chat about UX and UX careers. I've been doing that once a week, sitting down with people who sign up to share the knowledge.</p>

                <p>The reason why I've been recently passionate about sharing my knowledge goes back to being in the Bay Area. We have a big family around here, and our ancestral home was in Sunnyvale, which is one or two towns north of San Jose. Just by chance, I was driving past the old house. My Tatang—which is a Tagalog or Ilocano word (I grew up learning both and don't always know the difference)—lived there on a corner lot.</p>

                <p>Coming to that reflection point made me want to start proactively sharing knowledge myself. Doing this UX mentoring for people who are willing to sit down and chat with me is completely rewarding, especially if it helps motivate people, whether it's in UX or those who want to study abroad.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-100 mb-3">Final Advice</h3>
              <div className="space-y-4 text-sm">
                <p><strong>Alexis:</strong> Well, Ian, thank you for everything you've shared. I have one final question for you: what is your advice to all the budding Filipino designers listening to us right now?</p>

                <p><strong>Ian:</strong> Go out, challenge yourself, and break out of your comfort zone. My watershed moment was pushing myself to live in Japan for a year without knowing the language, and that immersion completely revolutionized my way of thinking and the trajectory of my life. Go out and find your own personal "living in Japan" story.</p>

                <p><strong>Alexis:</strong> Yes, let's all go to Japan, watch a lot of anime, and step out of our comfort zones. Thank you so much for your time, Ian. Where can people find you online?</p>

                <p><strong>Ian:</strong> You can find me at iansagabaen.com. The link will probably need to be in the podcast description since my last name can be tough to spell. You can also find me and my peers through uxcoffeehours.com. Slots fill up fast because it's a popular platform, but all of the mentors on there are incredibly knowledgeable.</p>

                <p><strong>Alexis:</strong> Awesome. Thank you so much, Ian, it was great having you on the show.</p>

                <p><strong>Ian:</strong> Thanks for having me, it was a lot of fun.</p>
              </div>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div {...fadeUp} className="mt-16 pt-8 border-t border-stone-800 space-y-6">
            <h3 className="text-lg font-semibold text-stone-100">Listen & Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://rootspodcast.design"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-stone-800/50 border border-stone-700/60 rounded-2xl hover:border-amber-400/40 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-stone-100">Roots Podcast Official</p>
                    <p className="text-xs text-stone-400 mt-1">Full episode and show notes</p>
                  </div>
                  <ArrowUpRight size={16} className="text-amber-400" />
                </div>
              </a>
              <a
                href="https://traffic.libsyn.com/secure/rootsdesign/Ian_Sagabaen.mp3"
                className="p-4 bg-stone-800/50 border border-stone-700/60 rounded-2xl hover:border-amber-400/40 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-stone-100">Download MP3</p>
                    <p className="text-xs text-stone-400 mt-1">Direct audio file</p>
                  </div>
                  <ArrowUpRight size={16} className="text-amber-400" />
                </div>
              </a>
              <a
                href="https://uxcoffeehours.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-stone-800/50 border border-stone-700/60 rounded-2xl hover:border-amber-400/40 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-stone-100">UX Coffee Hours</p>
                    <p className="text-xs text-stone-400 mt-1">Mentorship sessions</p>
                  </div>
                  <ArrowUpRight size={16} className="text-amber-400" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/iansagabaen/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-stone-800/50 border border-stone-700/60 rounded-2xl hover:border-amber-400/40 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-stone-100">LinkedIn</p>
                    <p className="text-xs text-stone-400 mt-1">Connect with Ian</p>
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
