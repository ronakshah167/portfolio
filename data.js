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
    {role:'Investment & Equity Intern',org:'DSP Asset Management',date:'JUN — AUG 2026',type:'industry',index:'01',summary:'Where code met the markets.',details:['Built Python scrapers and automated Excel/CSV processing and financial-data cleaning workflows.','Developed stock-trend analysis and machine-learning models with Pandas, NumPy, and Scikit-learn.','Researched equity markets, company fundamentals, investment strategies, and macroeconomic trends.'],tags:['Python','Equity Research','Machine Learning']},
    {role:'Finance Secretary',org:'Computer Society of India · CSI KJSSE',date:'2026 — PRESENT',type:'leadership',index:'02',summary:'Making the ideas possible behind the scenes.',details:['Manage event budgets, financial planning, sponsorship outreach, and coordination for technical events and hackathons.'],tags:['Budgeting','Sponsorship','Leadership']},
    {role:'Frontend Development Intern',org:'Navodita Infotech',date:'APR — MAY 2026',type:'industry',index:'03',summary:'Designing things people actually use.',details:['Created interactive website experiences and contributed to user-interface and user-experience work on the company website.'],tags:['Frontend','UI/UX','Web Development']},
    {role:'Marketing Team Member',org:'KJSCE ACM Student Chapter',date:'AUG 2025 — PRESENT',type:'leadership',index:'04',summary:'Turning technical events into stories worth sharing.',details:['Worked on event marketing, promotional campaigns, and sponsor communications for AfterMath, Artemis, and Beyond the Classroom.'],tags:['Marketing','Outreach','Events']},
    {role:'Campus Ambassador',org:'XTCY Energy Drinks',date:'DATE TO CONFIRM',type:'community',index:'05',summary:'Taking a brand from the screen onto campus.',details:['Supported campus activations, sponsorship coordination, photography, and distribution of 360 promotional cans.'],tags:['Brand Activations','Campus Marketing']},
    {role:'Student Ambassador',org:'Sunburn Festival',date:'DATE TO CONFIRM',type:'community',index:'06',summary:'Building the buzz.',details:['Supported event marketing, audience outreach, public relations, and promotional campaigns across Mumbai.'],tags:['PR','Audience Outreach']},
    {role:'PR Head',org:'Illuminati',date:'DATE TO CONFIRM',type:'leadership',index:'07',summary:'Getting the word out, and people in.',details:['Led public-relations efforts and outreach for the Illuminati event. Specific metrics and dates can be added.'],tags:['PR','Event Promotion','Communications']},
    {role:'Experience · Details Pending',org:'Corizo Edutech',date:'DATE TO CONFIRM',type:'industry',index:'08',summary:'A chapter still being filled in.',details:['Role, responsibilities, and outcomes to be confirmed.'],tags:['Details to add']},
    {role:'Freelance Work',org:'Independent',date:'DATE TO CONFIRM',type:'industry',index:'09',summary:'Built outside the usual brief.',details:['Client names, deliverables, and links can be added here once confirmed.'],tags:['Independent Work','Details to add']}
  ],

  // Verified from the uploaded resume. Add further results and links here when confirmed.
  achievements: [
    {
      id: 'finance-case-study',
      category: 'FINANCE / CASE STUDY',
      title: 'Finance Domain Case Study',
      result: '1ST PLACE',
      symbol: '01',
      accent: 'lime',
      description: 'Secured first place in a finance-focused case study competition.'
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
      symbol: '★',
      accent: 'blue',
      description: 'Won a climate-focused hackathon.'
    }
  ],
  events: [
    {id:'renaissance',name:'RENAISSANCE',type:'Buildathon',org:'CSI KJSSE · Abhyantriki',role:'Organizing team / finance & outreach',description:'A buildathon built around bold ideas, problem-solving, and making projects under pressure. Contributed to organizing and partner outreach.',accent:'lime',image:'assets/events/renaissance.jpg',label:'IDEAS, REBORN'},
    {id:'illuminati',name:'ILLUMINATI',type:'Tech Event',org:'Campus event',role:'PR Head',description:'A technical event driven by student creativity and ambitious execution. Led PR and outreach to help give the experience its audience.',accent:'pink',image:'assets/events/illuminati.jpg',label:'LIGHT IT UP'},
    {id:'aftermath',name:'AFTERMATH',type:'Technical Event',org:'KJSCE ACM Student Chapter',role:'Marketing & promotion',description:'Supported campaign communication, promotions, and sponsor-facing outreach for this ACM chapter event.',accent:'blue',image:'assets/events/aftermath.jpg',label:'WHAT COMES NEXT?'},
    {id:'artemis',name:'ARTEMIS',type:'Technical Event',org:'KJSCE ACM Student Chapter',role:'Marketing & promotion',description:'Worked on promotional storytelling and marketing outreach for an ACM student chapter event.',accent:'violet',image:'assets/events/artemis.jpg',label:'AIM HIGH'},
    {id:'btc',name:'BEYOND THE CLASSROOM',type:'Community Event',org:'KJSCE ACM Student Chapter',role:'Marketing & promotion',description:'Contributed to communications and event promotion for a chapter initiative exploring learning beyond academics.',accent:'orange',image:'assets/events/beyond-the-classroom.jpg',label:'THINK BIGGER'},
    {id:'7weekscp',name:'7 WEEKS OF CP',type:'Online Programming Series',org:'KJSCE ACM Student Chapter',role:'Promotional creative work',description:'An online competitive-programming series. Developed promotional direction and creative materials for the event.',accent:'lime',image:'assets/events/7-weeks-of-cp.jpg',label:'CODE. REPEAT.'}
  ]
};