/* EDIT CONTENT HERE. Event photos can be dropped into assets/events/ . */
window.PORTFOLIO_DATA = {
  identity: {
    name: 'Ronak Shah',
    role: 'Developer • Data Explorer • Creative Problem-Solver',
    email: 'ronak.ps@somaiya.edu',
    github: 'https://github.com/ronakshah167',
    linkedin: 'https://www.linkedin.com/in/ronak-shah-570823329',
    resume: './Ronak_s_Resume.pdf',
  },
  projects: [
    { id:'all-in', number:'01', title:'ALL IN', kicker:'AI coding, but make it personal', category:'AI / WEB', accent:'lime', stamp:'AI!', year:'2025', description:'An AI-powered competitive programming companion that evaluates submissions with Gemini, gives actionable feedback, and makes practice more engaging with a leaderboard.', stack:['Next.js','Gemini API','Firebase','TypeScript'], github:'https://github.com/ronakshah167/Competitive_Programmingchecker_gdg', live:'https://cptracker-gdg.vercel.app/', featured:true },
    { id:'aquamind', number:'02', title:'AQUAMIND 2.0', kicker:'Better decisions, less water', category:'AI / DATA', accent:'blue', stamp:'FLOW!', year:'In progress', description:'A predictive digital twin for industrial water management, forecasting demand and optimizing quality-constrained freshwater and recycled-water allocation.', stack:['Python','FastAPI','Machine Learning','OR-Tools'], github:null, live:null, note:'Private / in-progress project', featured:true },
    { id:'class-buddy', number:'03', title:'CLASS BUDDY', kicker:'An upgrade for the classroom', category:'WEB / SYSTEMS', accent:'orange', stamp:'ZAP!', year:'2025', description:'A smart timetable and classroom scheduling system with role-based dashboards, adaptive scheduling, classroom allocation, and lecture updates.', stack:['Next.js','React','Firebase','TypeScript'], github:'https://github.com/ronakshah167/sih2025', live:'https://sih2025-coral.vercel.app/', featured:true },
    { id:'spotify', number:'04', title:'SPOTIFY PULSE', kicker:'Music, translated into data', category:'DATA / DESIGN', accent:'pink', stamp:'BEAT!', year:'2026', description:'An interactive music analytics dashboard that makes multilingual Spotify trends, artists, and listening patterns easy to explore.', stack:['React','Recharts','PapaParse','JavaScript'], github:'https://github.com/ronakshah167/Spotifycasestudy', live:null, featured:true },
    { id:'hacktrack', number:'05', title:'HACKTRACK', kicker:'Attendance, reimagined', category:'WEB / SYSTEMS', accent:'violet', stamp:'SCAN!', year:'2025', description:'An attendance platform combining class schedules with student and teacher experiences, QR-based check-ins, selfie review, and attendance insights.', stack:['React','TypeScript','Vite','Node.js'], github:'https://github.com/ronakshah167/HackTrack-devsemble', live:'https://studiq-flowfinal.vercel.app/', featured:true },
    { id:'crowdflow', number:'06', title:'CROWDFLOW', kicker:'The stadium gets a digital twin', category:'WEB / SYSTEMS', accent:'blue', stamp:'GO!', year:'2026', description:'A stadium-oriented digital experience built around event discovery, interactive venue selection, rich visual interfaces, and supporting services.', stack:['Next.js','Three.js','Framer Motion','MongoDB'], github:'https://github.com/ronakshah167/crowdflow', live:null, featured:false },
    { id:'agri', number:'07', title:'AGRI ADVISORY', kicker:'Smarter farming, clearer decisions', category:'WEB / DATA', accent:'lime', stamp:'GROW!', year:'2026', description:'A farmer-facing agriculture portal for advisory requests, soil information, weather, agricultural products, and user feedback.', stack:['PHP','MySQL','JavaScript','CSS'], github:'https://github.com/ronakshah167/AgriAdvisory', live:null, featured:false },
    { id:'finance', number:'08', title:'FINANCIAL FILE ENGINE', kicker:'Messy spreadsheets to structured insights', category:'DATA / FINANCE', accent:'orange', stamp:'ZIP!', year:'2026', description:'A Flask-based financial data workflow that accepts CSV files, parses financial information, previews outputs, and generates formatted Excel workbooks.', stack:['Python','Flask','CSV','Excel'], github:'https://github.com/ronakshah167/automated-file-conversion', live:null, featured:false },
    { id:'stock', number:'09', title:'MARKET LENS', kicker:'From numbers to narratives', category:'DATA / FINANCE', accent:'pink', stamp:'UP!', year:'2026', description:'A stock-sector analysis project comparing cables and wires companies using financial datasets, interactive charts, and company-level visualizations.', stack:['JavaScript','Python','HTML / CSS','Financial Data'], github:'https://github.com/ronakshah167/Stock-Analysis-Cables-Wires', live:null, featured:false },
    { id:'lab', number:'10', title:'DJANGO VIRTUAL LAB', kicker:'Learn by actually trying', category:'WEB / SYSTEMS', accent:'violet', stamp:'TRY!', year:'2026', description:'An educational virtual lab for Django URL mapping, dynamic path parameters, interactive simulations, and hands-on exercises.', stack:['Django','Python','HTML / CSS','JavaScript'], github:'https://github.com/ronakshah167/virtual-lab-fsdl', live:null, featured:false }
  ],
  experience: [
    {role:'Investment & Equity Intern',org:'DSP Asset Management',date:'JUN — AUG 2026',type:'industry',index:'01',summary:'Where code met the markets.',details:['Built Python scrapers and automated Excel/CSV processing and financial-data cleaning workflows.','Developed stock-trend analysis and machine-learning models with Pandas, NumPy, and Scikit-learn.','Researched equity markets, company fundamentals, investment strategies, and macroeconomic trends.'],tags:['Python','Equity Research','Machine Learning'],document:{label:'VIEW CERTIFICATE',url:'assets/documents/dsp-certificate.pdf'}},
    {role:'Finance Secretary',org:'Computer Society of India · CSI KJSSE',date:'2026 — PRESENT',type:'leadership',index:'02',summary:'Making the ideas possible behind the scenes.',details:['Manage event budgets, financial planning, sponsorship outreach, and coordination for technical events and hackathons.'],tags:['Budgeting','Sponsorship','Leadership']},
    {role:'Frontend Development Intern',org:'Navodita Infotech',date:'APR — MAY 2026',type:'industry',index:'03',summary:'Designing things people actually use.',details:['Created interactive website experiences and contributed to user-interface and user-experience work on the company website.'],tags:['Frontend','UI/UX','Web Development'],document:{label:'VIEW CERTIFICATE',url:'assets/documents/navodita-certificate.pdf'}},
    {role:'Marketing Team Member',org:'KJSCE ACM Student Chapter',date:'AUG 2025 — PRESENT',type:'leadership',index:'04',summary:'Turning technical events into stories worth sharing.',details:['Delivered the BTC talk “How Do Tech Councils Work?” to 120 attendees.','Supported Artemis and Aftermath with PR, operations, marketing, and sponsor deliverables, including reel creation and editing.','Attended GOLD, an all-Mumbai ACM meet, as the only second-year student representing the chapter.'],tags:['Marketing','Outreach','Events'],document:{label:'VIEW LOA',url:'assets/documents/acm-loa.pdf'}},
    {role:'Campus Ambassador',org:'XTCY Energy Drinks',date:'DATE TO CONFIRM',type:'community',index:'05',summary:'Taking a brand from the screen onto campus.',details:['Supported campus activations, sponsorship coordination, photography, and distribution of 360 promotional cans.','Coordinated a brand collaboration with an influencer to extend XTCY\'s reach.','Organized a Hackday activation and gave away 60 cans to participants.'],tags:['Brand Activations','Campus Marketing']},
    {role:'Student Ambassador',org:'Sunburn Festival',date:'DATE TO CONFIRM',type:'community',index:'06',summary:'Building the buzz.',details:['Supported event marketing, audience outreach, public relations, and promotional campaigns across Mumbai.'],tags:['PR','Audience Outreach']},
    {role:'PR Head',org:'Illuminati',date:'DATE TO CONFIRM',type:'leadership',index:'07',summary:'Getting the word out, and people in.',details:['Led PR for Quill Quest, a clue-based treasure hunt.','Independently ideated and organized Trivia Night, securing a sponsor and a ₹3,000 prize pool.'],tags:['PR','Event Promotion','Communications'],document:{label:'VIEW LOA',url:'assets/documents/illuminati-loa.pdf'}},
    {role:'Marketing Intern',org:'Corizo Edutech',date:'NOV 2025 — JAN 2026',type:'industry',index:'08',summary:'Driving visibility, outreach, and sales.',details:['Worked as a marketing intern from November 2025 to January 2026.','Managed marketing initiatives and brand outreach to engage potential customers and partners.','Generated sales for the company through promotional efforts and direct outreach.'],tags:['Marketing','Brand Outreach','Sales'],document:{label:'VIEW CERTIFICATE',url:'assets/documents/corizo-certificate.pdf'}},
    {role:'Freelance Work',org:'Independent',date:'IN PROGRESS',type:'industry',index:'09',summary:'Currently building a tuition-centre application.',details:['Developing an application for a tuition centre, tailored to its day-to-day needs and workflows.'],tags:['Application Development','Client Work']}
  ],

  // Verified from the uploaded resume. Add further results and links here when confirmed.
  achievements: [
    {
      id: 'finance-case-study',
      category: 'FINANCE / CASE STUDY',
      title: 'Finance Domain Case Study',
      result: '1ST PLACE',
      image: 'assets/events/case-quest.webp',
      symbol: '01',
      accent: 'lime',
      description: 'Secured first place in a finance-focused case study competition. The team photograph from Case Quest belongs to this case-study feature.'
    },
    {
      id: 'the-big-short',
      category: 'QUANTITATIVE TRADING',
      title: 'The Big Short',
      result: '3RD PLACE',
      symbol: '03',
      accent: 'violet',
      description: 'Placed third in a quantitative trading event focused on machine learning.'
    },
    {
      id: 'climate-hack',
      category: 'CLIMATE / HACKATHON',
      title: 'Climate Hack',
      result: 'HACKATHON WINNER',
      image: 'assets/events/climate-hack.webp',
      symbol: '★',
      accent: 'blue',
      description: 'Won a climate-focused hackathon.'
    }
  ],
  // Participation is deliberately separate from awards and competition wins.
  // Curated face-visible intro photographs. Exclude back-facing shots, posters
  // and the earlier Marvel-shirt auditorium photograph from the intro only.
  introCarouselImages: [
    'assets/events/reel-02-team.webp',
    'assets/events/reel-03-group.webp',
    'assets/events/reel-04-speaker.webp',
    'assets/events/reel-05-collaboration.webp',
    'assets/events/reel-06-speaking.webp',
    'assets/events/reel-07-alpine.webp',
    'assets/events/reel-10-paris.webp',
  ],
  participatedEvents: [
    {id:'climate-hackathon',title:'Climate Hackathon',type:'Hackathon',certificate:{type:'pdf',url:'assets/documents/climate-hackathon-certificate.pdf'}},
    {id:'sih-2025',title:'SIH 2025',type:'Hackathon'},
    {id:'nexolve',title:'Nexolve',type:'Hackathon',certificate:{type:'pdf',url:'assets/documents/nexolve-certificate.pdf'}},
    {id:'gdg',title:'GDG',type:'Event'},
    {id:'thinksprint',title:'Thinksprint',type:'Event'},
    {id:'case-study-competition',title:'Case Study Competition',type:'Case competition'},
    {id:'case-quest',title:'Case Quest',type:'Case competition',certificate:{type:'pdf',url:'assets/documents/case-quest-certificate.pdf'}},
    {id:'the-big-short',title:'The Big Short',type:'Competition'},
    {id:'sih-2026',title:'SIH 26',type:'Hackathon'},
    {id:'adobe-hackathon',title:'Adobe Hackathon',type:'Hackathon',certificate:{type:'pdf',url:'assets/documents/adobe-hackathon-participation.pdf'}},
    {id:'unstop-week-of-wins',title:'Unstop Week of Wins',type:'Event',certificate:{type:'pdf',url:'assets/documents/week-of-wins-certificate.pdf'}}
  ],
  events: [
    {"id":"btc","era":"second","name":"BEYOND THE CLASSROOM (BTC)","type":"Campus Tech Talk","org":"KJSCE ACM Student Chapter","role":"Speaker · PR · marketing · operations · sponsor deliverables","description":"Spoke on “How Do Tech Councils Work?” to a packed 120-attendee seminar hall. Handled outreach, event operations, sponsor deliverables, and filming and editing promotional reels.","accent":"orange","image":"assets/events/beyond-the-classroom.webp","position":"50% 36%","label":"BEYOND THE CLASSROOM"},
    {"id":"artemis","era":"second","name":"ARTEMIS · ABHYANTRIKI","type":"Frontend-Only Hackathon","org":"KJSCE ACM · Abhyantriki","role":"Marketing · PR · sponsor content · event support","description":"Helped organize a frontend-only hackathon through marketing, PR, and sponsor content. Interest exceeded the original capacity, so additional labs were arranged.","accent":"violet","image":"assets/events/artemis.webp","position":"50% 38%","label":"BUILD THE FRONTEND"},
    {"id":"aftermath","era":"second","name":"AFTERMATH","type":"24-Hour Hackathon","org":"KJSCE ACM Student Chapter","role":"Operations · PR · marketing · reel production","description":"Worked across on-ground operations, public relations, and marketing for a 24-hour hackathon. Created and edited reels to deliver sponsor-facing content.","accent":"blue","image":"assets/events/aftermath.jpg","label":"24 HOURS. ALL IN."},
    {"id":"quill-quest","era":"second","name":"QUILL QUEST","type":"Clue-Based Treasure Hunt","org":"Team Illuminati · Literary Council","role":"PR Head · promotion & outreach","description":"Led PR for a treasure-hunt-style event in which participants solved clues, unlocked new challenges, and collected points.","accent":"pink","image":"assets/events/quill-quest.jpg","label":"FOLLOW THE CLUES"},
    {"id":"trivia-night","era":"second","name":"TRIVIA NIGHT","type":"Campus Quiz Night","org":"Team Illuminati · Literary Council","role":"Independent ideation · organization · sponsor acquisition","description":"Independently conceived and ran Illuminati’s first standalone event—and its first with a prize pool. Secured a sponsor and arranged ₹3,000 in prizes.","accent":"lime","image":"assets/events/trivia-night.jpg","label":"₹3,000 PRIZES"},
    {"id":"gemini-hackday","era":"third","name":"GEMINI HACKDAY 2.0","type":"Hackathon · MLH Collaboration","org":"Campus organizers · Major League Hacking (MLH)","role":"Organizing support & coordination","description":"Helped organize Gemini Hackday 2.0 in collaboration with Major League Hacking, with a ₹10,000 prize pool.","accent":"blue","image":"assets/events/gemini-hackday.webp","label":"BUILD WITH AI"},
    {"id":"rtp-5","era":"third","name":"RTP 5.0 · ROAD TO PROGRAMMING","type":"Programming Event","org":"CSI KJSSE","role":"Sponsorship outreach · PR · operations · team coordination","description":"Managed sponsor outreach, public relations, and event operations while coordinating teams and council activities. The event filled a 250-seat auditorium.","accent":"orange","image":"assets/events/rtp-5.webp","position":"50% 46%","label":"250 SEATS. FULL."},
    {"id":"renaissance","era":"third","name":"RENAISSANCE","type":"Mini Buildathon","org":"CSI KJSSE · Abhyantriki","role":"Original concept · event name · planning & execution","description":"Personally initiated the buildathon concept, came up with the name Renaissance, and helped drive planning and execution. The event featured ₹15,000 in cash prizes.","accent":"lime","image":"assets/events/renaissance.webp","label":"₹15,000 AT STAKE"},
    {"id":"hermes-workshop","era":"third","name":"HERMES AI AGENT WORKSHOP","type":"AI Agent Workshop","org":"CSI KJSSE · Abhyantriki","role":"Workshop organization & coordination","description":"Helped organize a hands-on workshop on RMe’s AI agent, held ahead of the Renaissance buildathon.","accent":"violet","image":"assets/events/hermes-workshop.jpg","label":"BUILD AN AGENT"},
    {"id":"council-handover","era":"third","name":"COUNCIL HANDOVER","type":"Council Transition","org":"CSI KJSSE","role":"Handover organization & coordination","description":"Organized the transition from the outgoing council tenure to the incoming council team.","accent":"pink","image":"assets/events/council-handover.webp","position":"50% 46%","label":"PASSING THE TORCH"},
    {"id":"dough-and-demo","era":"third","name":"DOUGH & DEMO","type":"Campus Community Event","org":"CSI KJSSE · ChatGPT-focused collaboration","role":"Event organization · partner coordination","description":"Helped organize Dough & Demo, where every participant received complimentary ChatGPT Plus access.","accent":"lime","image":"assets/events/dough-and-demo.webp","position":"50% 39%","label":"DOUGH. DEMO. IDEAS."},
    {"id":"ibm-workshop","era":"third","name":"IBM WORKSHOP","type":"Department Workshop","org":"Computer Engineering Department · IBM","role":"Workshop organization & logistics","description":"Helped organize an IBM workshop for the Computer Engineering department.","accent":"blue","image":"assets/events/ibm-workshop.jpg","label":"INDUSTRY INSIGHTS"},
    {"id":"7weekscp","era":"third","name":"7 WEEKS OF CP","type":"Online Competitive Programming Series","org":"KJSCE ACM Student Chapter","role":"PR · campaign promotion · poster design","description":"Managed public relations and designed the event poster for an online initiative helping students learn and practice competitive programming.","accent":"orange","image":"assets/events/7-weeks-of-cp.webp","label":"7 WEEKS. KEEP CODING."},
  ]
};
