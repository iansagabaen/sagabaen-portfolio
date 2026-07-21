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
            <Link to="/" className="px-4 py-2 border border-stone-700 text-amber-400 hover:border-amber-400 hover:text-amber-300 transition-all duration-200 text-sm font-medium mb-6 inline-flex items-center gap-1 rounded-full">
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
            <h2 className="text-2xl font-semibold text-stone-100">Full Transcript</h2>
            <p className="text-sm text-stone-400">Host: Alexis Collado</p>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-6 prose prose-invert max-w-none">
            <div className="space-y-4 text-sm leading-relaxed">
              <p><strong>Alexis:</strong> On episode 89, we're talking to the international man of mystery. This is Roots, a podcast on Philippine designers. I'm your host, Alexis Collado.</p>

              <p><strong>Ian:</strong> Personally, I absorbed knowledge as I went along and elevated my experience. You have to be a self-advocate anyway, right? No one is going to really promote you or say it officially, but if you go in, claim it, and personally believe in yourself—that this is truly your title—no one is going to doubt you as long as you have that confidence. So that's what I was trying to do, proclaiming myself as an interaction designer.</p>

              <p><strong>Alexis:</strong> Ian Sagabaen is a UX designer at Google, building Google Cloud's enterprise tools. If you've ever been described as shy and need that nudge to break out of your comfortable shell, Ian's travel stories might motivate you. He started as a quiet kid from San Jose, went on a whim, challenged himself to live on the other side of the world, then applied his newfound courage he discovered while abroad to build up his body of work at different Silicon Valley tech companies.</p>

              <p>In this episode, we talk about progressing from graphic to interaction design, moving to Japan to study, designing for internal tools, enterprise versus consumer design, UX mentoring, and so much more. Thank you for tuning in and I hope you enjoy the episode.</p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Introduction</h3>

              <p><strong>Alexis:</strong> Hey Ian, welcome to Roots.</p>

              <p><strong>Ian:</strong> Hi Alexis, thanks for having me.</p>

              <p><strong>Alexis:</strong> I'm so excited to have you, Ian. Can you please introduce yourself to everyone?</p>

              <p><strong>Ian:</strong> I'm Ian Sagabaen. You're going to read it on paper and want to pronounce it as Ian—and you'd be right, it is Ian. My dad had creative liberties with coming up with my name when I was born. I actually asked him if there was some sort of romantic reason why I was called Ian, and he said it sounded cool, so nothing special.</p>

              <p><strong>Alexis:</strong> Yes, Ian. Thank you. It rhymes with lion.</p>

              <p><strong>Ian:</strong> Lion—that's very important, guys, remember that. I am a UX designer currently at Google, specifically at Google Cloud, creating support tools for people that are doing Google Cloud things, basically.</p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Growing Up in San Jose & The Spark for Design</h3>

              <p><strong>Ian:</strong> I'm from San Jose, California, born and raised—to my detriment. I only say that because I've really never left the Bay Area. I grew up in East Side San Jose. San Jose is huge and wide, mostly suburban, and East Side San Jose was not a really wholesome place to grow up, but it was totally normal for me. I didn't grow up with huge aspirations.</p>

              <p>For those that have visited San Jose, if you go to the downtown area, one of the tallest buildings in downtown San Jose is actually the Adobe building. Growing up in the 80s and the 90s, me being simple-minded and seeing the tallest building, I thought—some people aspire to be astronauts or firefighters, but for me, seeing that tall building made me think I'm gonna work there because I want to work on the top floors.</p>

              <p>Later in my life, around middle school or high school, I discovered what Adobe actually was and made the association. I had my PC, came across Photoshop, and saw friends making cool banners. I realized, I know where they made that software—it's like two miles away from where I live and you can see it from our house. I guess that's the inception of the whole bug of wanting to become related to the visual space and becoming a visual designer.</p>

              <p>I never left, even after high school. San Jose State was just right there out of convenience. I went to San Jose State, got my bachelor's, and just by chance San Jose State has a really good graphic design program. I graduated with a bachelor's in graphic design, which totally helped me out with the fundamentals of design. Even currently at Google, a lot of the knowledge I utilize is sampled from my college years—like composition, color theory, and typography.</p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Career Evolution & The Interview Learning Loop</h3>

              <p><strong>Alexis:</strong> After you graduated from San Jose State, what happened next?</p>

              <p><strong>Ian:</strong> After I graduated from San Jose State, just by virtue of being in the Bay Area and Silicon Valley—the capital of tech—I felt an urgency and a responsibility to be involved in tech somehow.</p>

              <p><strong>Alexis:</strong> There's this pressure generated by your area.</p>

              <p><strong>Ian:</strong> Yeah, exactly. I had colleagues and peers jumping off to different tech companies. At this time, in the early 2000s, it was small agencies, and I figured I'd do the same thing. This was during the heyday of Craigslist, long before LinkedIn, so I would just blast out my resume.</p>

              <p>Thankfully, because typography was a really big deal at San Jose State, my resume looked really fancy and great. It put my foot in many doors. By volume, I would blast my resume out to different companies and get a good return for callbacks.</p>

              <p>An early stage of my career was just me building up all this experience. Early on, I was actually a quote-unquote Photoshop jockey. Have you heard that term before?</p>

              <p><strong>Alexis:</strong> No, this is the first time I've heard of that.</p>

              <p><strong>Ian:</strong> Or Photoshop monkey, basically. The CEO of the company would have a sketch on a napkin, put it on my desk, and say, "Hey, make this look pretty." I would go to Photoshop—this is long before Sketch or Figma—and do mockups. My first version of Photoshop was 4.0. Post-college, to totally date myself, it was maybe Photoshop 7 or CS1. I would mock stuff up and was actually pretty happy with myself. I thought if my whole career was just this, I'd be totally fine. It was rewarding, I was doing great work, and I was building up a portfolio of polished mockups.</p>

              <p>Then someone introduced interaction design to me. In a nutshell, if I had to describe what it was to me at the time: high-fidelity mockups were static screens, but interaction design was the strategy, emotion, or feeling behind that static screen. That totally captivated me. What I was doing was getting a bit stale, and I wanted to elevate to the next step, which was interaction design.</p>

              <p>I Googled around to see if there were places where I could self-teach, and by chance, there was an eight-week course at San Francisco State that gave me the fundamentals of interaction design. I remember the book—it was a thick green book called About Face by Alan Cooper.</p>

              <p><strong>Alexis:</strong> Yes, Alan Cooper. For people wondering, I'm typing it into Google: About Face Interaction Design.</p>

              <p><strong>Ian:</strong> That thick green book was basically my bible, and I read it cover to cover a few times. Absolutely loved it. I completed the course and knew at that point I wanted to be an interaction designer.</p>

              <p>The whole strategy behind my career progression was a heuristics method where I absorbed knowledge as I went along, personally elevated my experience, and self-proclaimed it. You have to be a self-advocate anyway, right? No one is going to really promote you or say you're officially an interaction designer, even after finishing a course. But if you go in, claim it, and personally believe in yourself, no one is going to doubt you as long as you have that confidence.</p>

              <p>I updated my resume, which did a lot of heavy lifting for me, and blasted it out to agencies and jobs with the title of interaction designer. I would go to interviews—and I have to say, I'm one of the rare few that actually loves going to job interviews and being rejected. It was an opportunity to level up my knowledge and experience. Even if an interview was way over my head and I was totally not on that level, I would immediately walk out, take out my notebook, and write down the terms they were using, like heuristic evaluations or UX research studies.</p>

              <p>Eventually, I found a pattern. Whenever I got called into different interviews at different companies, people requested the same things. That signaled to me the things I needed to work on. When I went home, I would bone up on those aspects of interaction design and read blog posts about them. I would read it so much that you convince yourself you lived that reality, even though you didn't. You just read it secondhand through another person's experience. If you go to sleep believing you've had that experience, you can truly change your way of thinking.</p>

              <p>Whenever I went to a job interview and they asked me those same questions, I would say, "Oh yeah, I've had that experience," and rifle off what I learned from another person who had that experience. I tweaked the truth a bit and said that totally happened to me, and this is how I solved it. Being confident with the way I delivered those anecdotes to the hiring managers totally sold them on it. The fact that I was confident assured them they were making the right decision. That's how I got my foot into many different agencies and tech companies throughout the Bay Area.</p>

              <p><strong>Alexis:</strong> It's really interesting to me that you were confident about claiming your new identity as an interaction designer. You did the research, read About Face, read about the experiences of other people, and somehow made it your own during your job interviews. I think that's extremely clever and smart. Props to you, Ian.</p>

              <p><strong>Ian:</strong> I feel like a fraud and I'm kind of exposing myself—but it got me here.</p>

              <p><strong>Alexis:</strong> I think a lot of people are like that anyway, and most competent people feel that way, so it's awesome.</p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">The Turning Point in Japan</h3>

              <p><strong>Ian:</strong> This whole belief system and way of thinking developed before that. As I mentioned earlier, I thought I'd never leave the Bay Area and would be in San Jose all my life, but I thought that's not a good way to go. While I was at San Jose State, I challenged myself to leave the Bay Area, even if just for a little bit. San Jose State happens to have an exchange program. I had a few options and ultimately landed on wanting to move to Japan.</p>

              <p>I decided to just pick up and go. I was twenty years old at the time, super young, and I didn't do much planning. I didn't think about it; I was just really excited to leave. To a fault—once I landed in Japan, I realized I didn't speak Japanese. I didn't know how to get to my homestay area. You land in Tokyo, but my host university required another flight or an eight-hour train ride. Thankfully, I had the instructions written in English on how to do it, but only at that point did I realize I didn't know how to ask for things. At the airport, people certainly know how to speak English, but the university was in a place called Okayama—Okayama City.</p>

              <p>Okayama University certainly did not have as many English speakers as major cities like Tokyo. Being thrown into the deep end is the best way to learn something because I quickly had to learn how to read Japanese—especially a Japanese menu, so I knew what to eat, how to find the bathroom, how to ask for food, or even how to pay my electric bill. When it comes down to your livelihood and comfort, that's a real way to nudge yourself to learn things quickly.</p>

              <p>The reason I bring up this whole Japan story is because during that year in Japan, a switch flipped. If you ask my family how they would describe Ian as a young kid, they would describe me as the shy kid who kept to himself. Post-Japan, something happened where I was more outgoing and more adventurous. It turns out I was just psyching myself out, thinking it's best to be safe and do things that are totally expected. Challenging myself to go to Japan was the best decision I've ever made in my life.</p>

              <p>One of the questions you're probably going to ask me, Alexis, is if there's any advice I would love to give listeners—to the Filipinos that are listening. I have to say: break out of your comfort zone. For me, challenging myself to leave the country and live in Japan for a year totally opened me up, and my temperament completely changed. It was like waking a sleeping dragon.</p>

              <p>I take that deviation from my story because when I went back to jumping from job to job, I would harken back to those memories of being in Japan and challenging myself. It's not that bad. There are going to be some uncomfortable moments, but at the end you're going to be standing in glory. For me, conquering that whole year in Japan turned out to be the best year of my life. Going through all these job interviews, picking up knowledge along the way, and leveling up from job to job worked to my benefit.</p>

              <p><strong>Alexis:</strong> すごい (Amazing), Ian! Where is the restroom?</p>

              <p><strong>Ian:</strong> Here. Well, on that subject too—I remember my very first Japanese phrase that I learned in Japan was karaage teishoku onegai shimasu. That meant "this chicken rice dish, please." I remember I was sitting at the restaurant next to my university and our host came by and said this is an awesome fried chicken place next to our dorm. The whole menu was in Japanese, in kanji, and I couldn't read it. I would point to it, but because the city doesn't deal a lot with international people, the staff would get flustered and wouldn't know how to react.</p>

              <p>My host whispered in my ear and taught me: if you want to say you want this, repeat exactly what I'm saying—karaage teishoku onegai shimasu. I would point at that and the waitstaff would say, "Ah, okay, わかりました (I understand)," and walk off. As soon as she taught me that, I always carried around a notebook and I would write it out in romaji, in English letters.</p>

              <p>If you look at my notebook early on, the first part is written in English letters, and toward the end it is written exclusively in Japanese. It was kind of cool. Whenever I need a boost or a pick-me-up to recall those memories of being in Japan, I pick up my old notebook. Actually, it's this one right here.</p>

              <p><strong>Alexis:</strong> Oh wow, you still have it?</p>

              <p><strong>Ian:</strong> Yeah, I just actually happened to look it up. You can't see it because it's a podcast, but it's just regular English letters at first, and then it starts to get to the kanji counterpart. You can physically see my progression as you go through the notebook, and it serves as motivation for me. It reminds me that I can challenge myself, put myself out there, and break out of my comfort zone. There is a huge benefit to challenging yourself, and this notebook is physical proof of that.</p>

              <p>That's another piece of advice: if you have old artifacts that help boost you when you're having a down moment or experiencing imposter syndrome, use them to cheer yourself up. I've heard of people doing something similar with their emails—whenever you get a glowing review in your inbox, you file it into a specific folder. When you're feeling down, you review that folder and read through all the positive messages and ratings people have given you in the past to get a boost. For me, this notebook has done a lot.</p>

              <p>Because I found it recently, it actually inspired me to challenge myself to learn more Japanese. There is a language placement test called the JLPT that I want to pursue. There are five levels to it. At my peak, which was many years ago, I was certainly at the cusp of being conversational. It's kind of like riding a bike where you never really forget it, so I want to pick it back up.</p>

              <p>To relate it to my career at Google—we sometimes conduct UX research sessions with international people, including Japanese participants. Something I would love to do is act as a proctor for those sessions and conduct them entirely in Japanese. It's tricky because there are different levels of spoken Japanese. What I learned in college and during my time in Japan was more conversational and standard formal, but there's a business formal level that I've never touched. That's something totally brand new that I'd have to delve into, but I'm up for the challenge since it relates to my career goals.</p>

              <p><strong>Alexis:</strong> I super love everything that you've shared. I took a basic Japanese class in university, but when we got to kanji, I basically gave up.</p>

              <p><strong>Ian:</strong> Here is a trick for that, though it's easier said than done. Step one: move to Japan. Step two: take the train. You will learn so much kanji that way because you'll never figure out how to go home unless you know how to read the kanji for your home city.</p>

              <p><strong>Alexis:</strong> The stakes are higher.</p>

              <p><strong>Ian:</strong> Exactly. My train station stop was Okayama. I distinctly remember learning yama because it's one of the easier kanji to remember—it looks like a fork with three vertical sticks. That's the second character. The first character looks like a box without the bottom. I knew that combination meant Okayama. When you're sitting on the train, you might be looking out the window, but you're also looking at the signs passing by for different train stops. You learn so much kanji doing it that way. I can totally vouch for immersion learning because that's what got me to my level of understanding.</p>

              <p>Japan is a really safe and great place to be. There is a lot of visual learning involved. Even with kanji, it opens up new synapses and motivates you in a different way. That experience is where I realized I am most certainly a visual learner. Once I came to that realization, taking notes with illustrations became an easier way for information to stick in my mind. I harken back to that year-long experience in Japan because it unlocked knowledge about myself that turned out to be super useful for UX work.</p>

              <p><strong>Alexis:</strong> Wow, I'll definitely consider doing that now that you've shared so much.</p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Enterprise Design & Wireframing at Google</h3>

              <p><strong>Alexis:</strong> You did your exchange program at Okayama University while you were in college, then went through a bunch of jobs as a Photoshop jockey, discovered interaction design, did that immersive eight-week course at San Francisco State, and then tried applying for interaction design jobs. What happened after that?</p>

              <p><strong>Ian:</strong> It was a natural progression. There wasn't a single glorious moment where I suddenly breached the threshold into big tech companies; it just happened gradually. After I self-titled myself as an interaction designer, I found a role with that title and started building up my body of experience. My portfolio became more well-rounded.</p>

              <p>LinkedIn was becoming more widely adopted and accepted, especially in Silicon Valley. By passively updating my profile with the proper keywords—like UX design, UX research, prototyping, wireframing, and Sketch—recruiters started discovering me. Eventually, I was offered an opportunity to do a one-year contract at Facebook as an interaction designer. I signed on and stayed for a little over a year until the contract ended.</p>

              <p>Once I had Facebook experience on my resume, it put me on the radar for other major companies. Google contract agencies reached out and asked if I'd pursue something at Google. I did the same thing there, working as a contractor at Google for about a year and a half before going through the internal conversion process to become a full-time employee. I've been at Google for a few years now.</p>

              <p>I do a lot of UX mentoring, and a common question I get is whether there are any tricks to finding a job at Google. For me, the contract-to-hire path was the way to go. If you are going to go through the Google interview loop, the best asset you can have in your application is glowing reviews from full-time Googlers. The best way to get those is to work alongside them. Being a contractor allows you to build great relationships with different teams, and when it comes time for the conversion process, they can write strong recommendation letters to boost your chances.</p>

              <p><strong>Alexis:</strong> Ian, what's it like being a design contractor? You started out first at Facebook, right?</p>

              <p><strong>Ian:</strong> Usually, contractors are hired for a specific product, and for the most part, you have full autonomy. Often, companies hire UX contractors to maintain an existing product while the full-timers focus on more strategic initiatives. At Facebook, that meant I was responsible for maintaining a significant product, but they still included me in meetings, let me provide strategy, deliver mockups, wireframes, and provide consultations as needed. They treated me with the same weight as a full-time designer.</p>

              <p>Both Facebook and Google fully trusted their UX contractors to be successful. I made a lot of UX contractor friends at both companies who were highly career-driven and viewed the role as a stepping stone to something bigger, so we fed off each other's energy. I made some really good friends that I still keep in touch with regularly. Some of them are at Google now, and we still meet up to share our old battle stories.</p>

              <p><strong>Alexis:</strong> Battle stories—that's totally relevant.</p>

              <p><strong>Ian:</strong> Yeah. During COVID, we set up a bi-weekly coffee and lunchtime meetup. We talk about our current teams, but we also look back at how things were four or five years ago. It's a nice ritual with good friends.</p>

              <p><strong>Alexis:</strong> I'm so happy that you still get to talk to each other regularly.</p>

              <p><strong>Ian:</strong> It's a ritual, and it's really important for your mental state, especially when working from home. You miss out on those serendipitous water cooler moments or meeting up in the Google micro-kitchens, so you have to make the effort to reach out to your teams or old friends. It's never a waste of time. Every time I meet with friends to talk about non-work stuff, or even work stuff in a jovial way, it energizes me.</p>

              <p><strong>Alexis:</strong> So Ian, it looks like across your contract work, you focused a lot on internal tools and enterprise design. What can you tell us about what you've learned so far just being immersed in this space?</p>

              <p><strong>Ian:</strong> When people who are starting out in UX ask me about this, I tell them I can honestly only speak on the enterprise side because nearly all of my experience is there. It can help your career if you know early on that you want to be an enterprise designer because you can explicitly build up a body of work around internal tools and supporting business infrastructure.</p>

              <p>Having enterprise design as a keyword on my profile was a huge asset for me. Recruiters often have a specific mental model differentiating enterprise designers from consumer designers. Enterprise designers deal with unique challenges, like managing internal bureaucracy or designing tools for a highly specialized, minimal audience—like a critical tool built specifically for a legal team of four people. If you sense early on that this is what you want to pursue, you can craft your portfolio, resume, and LinkedIn profile to reflect that specialization.</p>

              <p>There's another interesting pattern here. Many new UX designers focus exclusively on customer-facing tools like Instagram, Facebook, or Discord because that's what they interact with daily. To them, that defines UX design. Consequently, internal enterprise tools are often neglected and don't get their fair share of design attention, meaning companies frequently deal with bloated internal tools that need significant care.</p>

              <p>If you can show a company or an agency that you specialize in building these specific internal tools better than the rest because of your past experience, they will absolutely love you for it. That was a major asset for me at Google. A lot of companies have these internal product issues, and not many designers want to tackle them, which means engineers end up handling them by default.</p>

              <p>What drives me at work is coming in, assessing the state of these unusual internal tools, and delivering work that might seem minimal to us but is completely revolutionary and highly appreciated by the users. Because we do UX work regularly, these solutions feel like second nature to us, but to the internal teams, it fixes a major daily pain point. That's the reward of being an enterprise designer: finding those low-hanging fruits, securing quick wins, and enjoying the appreciation that comes with it. These are tools people have to use every single day, and you're removing their daily frustrations using standard UX practices.</p>

              <p><strong>Alexis:</strong> You're taking away a lot of their pain just by doing your normal UX work.</p>

              <p><strong>Ian:</strong> I could never be a full-time UX researcher, though I do my best with guerrilla testing out of necessity. Working alongside properly trained UX researchers at Google has given me a huge respect for what they do. When I sit in on foundational research sessions and watch people navigate convoluted workflows, they often tell us at the end of the study that the tool is fine once you undergo training to learn it. But that's not a good user experience. As a UX designer, you want the tool to be intuitive enough that it doesn't require extensive training for simple tasks. There are so many opportunities like that in big tech for an enterprise designer that you're never bored at work.</p>

              <p><strong>Alexis:</strong> To summarize it—let's say I'm just starting out as an enterprise designer. What are the top things that would help me achieve the best results?</p>

              <p><strong>Ian:</strong> For me, it happened by chance. I was hired at a company to build a customer-facing marketing site to increase product signups, but they also asked me to look at an old internal payroll tool that needed an update. I ended up being more passionate about the obscure payroll tool because of the sheer amount of opportunity it presented. Fixing it brought a lot of accolades from that small team because a small amount of UX work yielded a massive organizational impact.</p>

              <p>When you are compiling your case studies, even if you have to describe the workflows in generalities to protect internal proprietary data, focus your portfolio on those enterprise themes. Having several consistent enterprise design case studies on your website establishes a clear narrative. Look for opportunities to fix those internal systems. For a budding designer, it's an excellent way to discover where your true passion lies—whether you're a consumer UXer or an enterprise UXer. I realized that the stuff that makes me passionate about UX is the work that not a lot of people get to see, but where the financial impact or day-to-day efficiency gains are massive. That kind of drives me.</p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Mentorship & Family Roots</h3>

              <p><strong>Alexis:</strong> That's totally fine. Are there any projects outside of work that you'd like to share with the audience?</p>

              <p><strong>Ian:</strong> Recently, I've been doing a lot of UX mentoring. Shout out to UX Coffee Hours—uxcoffeehours.com I believe is their URL. It's a collection of tech company UX people, mostly Googlers, who volunteer their time to offer one-hour sessions to chat about UX and UX careers. I've been doing that once a week, sitting down with people who sign up to share the knowledge.</p>

              <p>The reason why I've been recently passionate about sharing my knowledge goes back to being in the Bay Area. We have a big family around here, and our ancestral home was in Sunnyvale, which is one or two towns north of San Jose. Just by chance, I was driving past the old house. My Tatang—which is a Tagalog or Ilocano word (I grew up learning both and don't always know the difference)—lived there on a corner lot. When I drove past it, it looked totally different. I went around to the other side and realized it looked a lot smaller. After I got home, I figured out it's because the house is currently half the size it used to be.</p>

              <p>It was only at that point that I remembered how my Tatang had built the house out to make it twice as long. There was a backyard, but he converted it into another living space for one of my uncles. Between being born and growing up there, I thought that long layout was just a natural part of the house. It jogged my memory of how the very back part of the house was a collection of tools and these very unique racks and shelves that he crafted entirely by hand. I realized then that he was a really talented carpenter who built things totally from scratch.</p>

              <p>He died when I was young, but I was old enough that I could have asked questions about his past, how he got here, or even had him teach me carpentry. I realized I took it for granted. I should use every opportunity to learn from a craftsman or someone excellent at their craft, especially someone motivating and awe-inspiring. If I could talk to a young Ian, I would tell him to go and gather that knowledge—don't be shy, break out of your shell, and challenge yourself.</p>

              <p>Coming to that reflection point made me want to start proactively sharing knowledge myself. Doing this UX mentoring for people who are willing to sit down and chat with me is completely rewarding, especially if it helps motivate people, whether it's in UX or those who want to study abroad. I feel a brand new drive lately to go out and help people discover themselves through my own experiences.</p>

              <p><strong>Alexis:</strong> Awesome. I hope you continue the carpentry.</p>

              <p><strong>Ian:</strong> Well, after he was long gone, the people who bought the house just tore that extension down. They didn't understand the sentimentality—and why should they? My moment of regret was that it was lost. It's a shame because we have a big family and there were so many opportunities for that knowledge to be documented or passed down, but no one took the mantle to do it. It was a realization that I personally had to make.</p>

              <p><strong>Alexis:</strong> I see. I will definitely link to your UX Coffee Hours calendar slots so people listening can sign up to have you as a mentor.</p>

              <p><strong>Ian:</strong> I honestly look forward to those mentoring sessions. Even though people reach out to learn from me, it opens up my world to see the modern struggles of a budding UX designer. I completely sympathize with them. My goal in every session is to ensure that when they walk away, they have a highly positive outlook on the field. If they are on the fence, I try to sell them on why they should become a UXer because the profession has so many rewarding aspects. It ends up being a very fulfilling experience for me too.</p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Health Routines, Remote Work, and Future Challenges</h3>

              <p><strong>Alexis:</strong> Cool, thanks for sharing that. So Ian, you've shared a lot about breaking out of your shell, doing enterprise design, designing internal tools, going to Japan for exchange, and really reinventing yourself. What's next for you?</p>

              <p><strong>Ian:</strong> Primarily, just getting through this pandemic environment. We are all dealing with remote lockdowns, so a big part of it is just surviving and staying healthy. I've had to adapt my old daily gym routines and replace them with running every day to maintain my mental state. I'm also doing a social media cleanse right now, which honestly feels pretty good.</p>

              <p>I'm continuing to challenge myself mentally—whether that means prepping for the Japanese language placement test to see where I stand, meeting more mentors, or working with a program at Google called Tech Exchange. It provides an academic curriculum supporting Black and Latinx tech talent in human-computer interaction and UX. I'm going to be a teaching assistant for the upcoming semester to support the next cohort of students, which I'm incredibly excited about.</p>

              <p>We are doing all of this completely remotely right now. While I can't wait until we aren't restricted to working from home, I'm trying to make the absolute most of it. My advice to everyone out there is to just do the best you can with the resources you have. Don't bring yourself down, find what fixes your mood, and keep challenging yourself.</p>

              <p><strong>Alexis:</strong> And you forgot to mention one major thing: the boxing.</p>

              <p><strong>Ian:</strong> Oh, right. At Google, you've probably heard about the various workplace perks, and one of the things they offered on campus was a gym that hosted Muay Thai and boxing classes. I trained consistently in Muay Thai and boxing for about two years leading up to the lockdowns. It did wonders for my energy levels and mood.</p>

              <p>Of course, that routine took a hit when the gyms closed, so I had to pivot to running and doing boxing drills at home. It's not quite the same, and I am really looking forward to getting back into a real boxing gym. To be clear, I have no intentions of becoming a professional fighter, but I love being part of the boxing community because the fitness benefits are incredible.</p>

              <p>People are sometimes hesitant to try boxing because they worry about head trauma, but you can absolutely train, condition, and eat like a boxer without ever sparring. It builds incredible stamina and leg strength, which surprises people since they think it's just a punching sport. There are countless great tutorials online for beginners. If you're bored of the treadmill or walking around the neighborhood and want a fitness challenge that will make you sweat like crazy, look into boxing.</p>

              <p><strong>Alexis:</strong> That's so exciting. When we are all finally vaccinated, we should definitely try that.</p>

              <p><strong>Ian:</strong> If you're in the Bay Area, we can absolutely train together post-vaccine. I would love to meet up and hold pads for you.</p>

              <hr className="border-stone-700 my-8" />

              <h3 className="text-lg font-semibold text-stone-100 mt-8">Closing</h3>

              <p><strong>Alexis:</strong> Well, Ian, thank you for everything you've shared. I have one final question for you: what is your advice to all the budding Filipino designers listening to us right now?</p>

              <p><strong>Ian:</strong> Go out, challenge yourself, and break out of your comfort zone. My watershed moment was pushing myself to live in Japan for a year without knowing the language, and that immersion completely revolutionized my way of thinking and the trajectory of my life. Go out and find your own personal "living in Japan" story.</p>

              <p><strong>Alexis:</strong> Yes, let's all go to Japan, watch a lot of anime, and step out of our comfort zones. Thank you so much for your time, Ian. Where can people find you online?</p>

              <p><strong>Ian:</strong> You can find me at iansagabaen.com. The link will probably need to be in the podcast description since my last name can be tough to spell. You can also find me and my peers through uxcoffeehours.com. Slots fill up fast because it's a popular platform, but all of the mentors on there are incredibly knowledgeable.</p>

              <p><strong>Alexis:</strong> Awesome. Thank you so much, Ian, it was great having you on the show.</p>

              <p><strong>Ian:</strong> Thanks for having me, it was a lot of fun.</p>

              <p><strong>Alexis:</strong> That wraps up Episode 89 of Roots. If you love the show, please like our page and leave a review at facebook.com/rootspodcast.design or directly on your Apple Podcasts app. Thank you, and see you all on the next episode.</p>
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
