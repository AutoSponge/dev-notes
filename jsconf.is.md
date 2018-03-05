paint.jsconf.is = paint harpa
https://www.sli.do/ audience interaction

magni

# Anna Henningsen
@addaleax

- async_hooks replaces domains
  - would benefit from d3 graphs
- fs/promises in node 10
- web assembly
- Buffer constructor deprecated

# Dan Abramov
Beyond React 16

- async rendering for better CPU + IO (repsonsive)
- async DOM updates > debounce > sync and remains interactive
- priority as a feature of setState (deferSetState)
- time slicing: similar to git rebase a branch
- "suspense": fetcher, spinner
- dynamic code splitting with fetcher and import
? - how is the spinner defined, could blur-up be added
? - can fetcher be aborted (e.g., cancel image download)
- reactjs.org/blog

# David Khourshid
simplify complex UIs

- xstate
- https://css-tricks.com/robust-react-user-interfaces-with-finite-state-machines/
- action + state => event
- fsm and statecharts (to simplify UI dev)
- easy to add analytics
- then easy to generate "happy path" or all paths from algorithm
- easy to demo/visualize bugs (like race conditions)
- harel statecharts
  - fsm with actions, guards, nested/parallel states, history
- looks good for interaction designers
- statecharts.github.io

# Nicole Chung
WebRTC

- Interledger, PEER5, (hyperledger?)
- shim = adapter.js
- Making a connection requires server
- ICE get around FW and router NAT (STUN and TURN)
- simplepeer lib for easy peering

# Carolyn Stransky
Documentation

- goals = user case driven documentation (helps answer how/why)
- typical docs (information-based)
  - information oriented (acturate and complete)
  - referential
  - still don't know how to accomplish anything with the tool
- goal > __use case__ > func req > design > implementation
- most docs start with impl
- {ex: create a login workflow}
- doc consumers are generally clueless or frustrated
- bad docs: disorienting, alienating, or confusing
- Disorienting
  - poor structure (lack of affordances)
  - unexpected errors/mistakes (options for help)
- Alienating
  - insensitive language (alex.js helps with polarizing writing)
  - avoid 'simple' or 'easy' -- it's relative  (use comparisons)
  - bloated language (hemingway)
- Confusing
  - (honor experience, be transparent, assure fit)
- aim to be honest, helpful, and human

# Dominik Kundel
security

- #onesiejs
- jwt change algo to none and drop signature
  - httpOnly, signed jwt, whitelist algo
- xsrf ("see-surf") - target=_blank links
  - rel=noopener noreferrer
  - csurf lib (hidden token param)
- xss (sammy) inline css with javascript in the background url/eval
  - sanitize!
- jsonp + xss hack to install service worker
  - CSP can help (report-uri for alerts)
- clickjacking
  - X-Frame-Options: deny
  - hide versions of front-end libs
  - check input types
- audits, greenkeeper, snyk

# Andy Mockler
shopify typescript

# Burke Holland
UX/NLP

- Digit (convo AI for spending habits)
- aka.ms/luis-ai

# Istvan Szmozsanszky (flaki)

- cld.by/dino /invaders /workshop
- talk.tlak.is/play/jsconfis

# Martin Jurča
a11y select

- https://github.com/jurca/szn-select

# Laurens Aarnoudse
refugee code school (hackyourfuture.net) in netherlands
(e.g., annie cannons)

- volunteers teach 1/week + slack support
- federalized/franchised
  - convenient location
  - laptops (chrome books?)
  - director
  - mentors/volunteers
  - students (basic english skills, motivated)
  - github.com/hackyourfuture/startacodeschool

# Kristján Oddsson
Probot

- automate workflow with github (based on webhooks)
- (might be good for hinting developers for fix)

# Catherine Meade
sparkbox

1. No one merges their own code
1. Never push directly to master
1. If you are working with UI, get a design review
1. If you're working on copy, get a copy review
1. Never, ever push directly to master

Tips

1. write good stories
- requirements
- solution
- PR: summary, link to issues, screenshots, testing instructions
- write in the context of the person reviewing
- gif: recordit.co (or gifox for mac $5, or getkap.co)
- video: vidyard.com/govideo (chrome ext) create for timezones
- skitch from evernote for providing notes on screenshots
- be nice/say nice things about the PR too
1. github issue templates
1. tiny.cc/github-issue-templates

tiny.cc/cmeade-grp-repo

# Arun Michael Dsouza

- CSS.registerProperty
  - type support
  - default values
  - scoped
- CSSStyleValue
  - create types
  - elm.styleMap get/set
  - bit.ly/typed-om-polyfill
- Worklets
  - hooks into the paint/layout/animation processes
  - off main thread

# Armagan Amcalar
WebAudio

- pedals.io
- @dashersw
- converting data to audio
- cheaper than commercial hardware solutions
- ?has anyone made a flow-based composition of webaudio nodes?
- analyzer node (with splitter/merger) cool!
- AudioWorker has separate threads for better perf
- pedalboard.js OSS webaudio framework for guitar effects
- Web MIDI api connects instruments and DJ gear to computer
  - !!! could be used for AT !!!

# Nara Kasbergen
mental health

- osmihelp.org
- relocation: support structures, stressful, friends are hard
- allow remote, support workers who relocate with intros
- remote: flexible, helps with therapy appts, meds, breaks, quiet
- remote: isolation, strong relationships, work-life balance
- co-working spaces, fly in remotes, integrate remotes
- open plan considerations
- leanpub.io/osmi
- mhfainternational.org
- "empathy is the antidote to shame"
- nara@nara.codes

# Martin Kleppe

# Sarah Drasner

- navigator.online
- service worker + sync event

# Jobs

catherine.meade [4:11 PM]
This channel is a little quiet, but the great company I work for, Sparkbox, is going to be hiring a few JavaScript developers this year! If you live in the U.S., or have the ability to work in the U.S., check it out. Remote is acceptable! If you have questions, send me a DM.

https://seesparkbox.com/jobs

Andy Mockler [5:01 PM]
We are also hiring for lots of roles at Shopify right now. Feel free to DM me or find me next week if you have any questions about any of the roles :slightly_smiling_face:

https://jobs.lever.co/shopify?lever-via=RXISYQiEga

julie [7:06 PM]
The company I work for is looking for a new FE developer, so if you want to come to Berlin we're hiring! http://jobs.etventure.com/job/senior-berlin/

Gidi [9:00 AM]
Hey,
If any of you are interested in XP (100% Pair programming, true agile etc.), 20% time (one day a week, work on whatever you're interested in, no approval needed), true scale (millions of requests a minute), true generalism (we all get to work across the FE & BE, in JS, Java, and more) and would consider living in London - come talk to me. I work at Unruly and we're hiring. :slightly_smiling_face:

Sarrah Vesselov [11:32 PM]
Hello Everyone :wave:  GitLab is hiring for a number of roles (Backend, Support, Director level Engineering). We are a 100% distributed team and hire all over the world. You can take a peek at our openings at the link below. Please feel free to come up and chat with me about GitLab and what it is like to work there (spoiler alert: I love it).  https://about.gitlab.com/jobs/

Kris Gray [10:04 AM]
Do you fancy applying your coding knowledge to further biological understanding? Come and work for the European Bioinformatics Institute (EMBL-EBI). We are hiring (https://www.ebi.ac.uk/about/jobs) :smiley_cat:.

armagan [11:16 AM]
We are looking for frontend developers, backend developers, fullstack developers and devops engineers at unu GmbH, an electric scooter company from Berlin (www.unumotors.com). As the head of software engineering, I’m a proud member of Women Techmakers Berlin, and I also lead a non-profit software craftsmanship school for women. Hence at unu we make sure we have an equal representation of all genders.

It was an amazing experience to see such a diverse community here in Iceland. If any of you would consider a move to Berlin, find our open positions here (hint: there are design and product positions as well!) https://jobs.lever.co/unu