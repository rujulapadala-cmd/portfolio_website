// Every project follows the same five-step research process, written in
// plain first person (or "we" for shared work). The `visual` blocks only
// restate the written facts as diagrams.

export const PHASES = [
  { id: 'discover', label: 'Discover' },
  { id: 'research', label: 'Research' },
  { id: 'define', label: 'Define' },
  { id: 'design', label: 'Design' },
  { id: 'test', label: 'Test & reflect' },
]

const ALL = [
  {
    id: 'projxon-sfr',
    name: 'PROJXON · SFR System',
    category: 'Operational UX & Systems Design',
    line: 'Redesigned how seven teams submitted, tracked, and reviewed internal requests.',
    layout: 'workspace',
    image: null,
    siteLabel: 'projxon · sfr tracker',
    role: 'UI/UX Designer, Workspace Manager Intern',
    timeline: 'Jan – Jul 2026',
    tools: ['Google Forms', 'Google Sheets', 'Looker Studio'],
    summary:
      'One request form and tracker replaced seven spreadsheets, with a dashboard on top.',
    overview:
      'As a UI/UX Designer and Workspace Manager Intern, I helped consolidate seven request trackers into one workflow. The previous setup spread requests across team spreadsheets, making it harder to find ownership, deadlines, and status.',
    myRole:
      'I ran discovery interviews and affinity-mapping sessions, standardized the request form and tracker fields, built the Service Feature Request (SFR) tracker, and designed the Looker Studio dashboard.',
    contributions: [
      'Ran discovery interviews and affinity mapping',
      'Standardized fields such as priority, status, category, due date and assignee',
      'Built the Service Feature Request (SFR) tracker in Google Forms and Sheets',
      'Designed the Looker Studio dashboard for completed and overdue requests',
    ],
    process: {
      discover: {
        body:
          'Each team tracked requests in its own spreadsheet. To see how many were still open, someone had to filter the sheet by hand. New team members didn’t always know which tracker to use.',
        pointsLabel: 'What was going wrong',
        points: [
          'Inconsistent request tracking and duplicated data',
          'No visibility between teams',
          'Slow, confusing onboarding',
        ],
        visual: {
          type: 'compare',
          before: {
            title: 'Before',
            items: ['Requests spread across seven data sources', 'Different columns and labels per team', 'Totals meant manual filtering'],
          },
          after: {
            title: 'After',
            items: ['One tracker feeding the dashboards', 'Shared field names', 'Charts for status and trends'],
          },
        },
      },
      research: {
        body:
          'I talked to the people who used the trackers and reviewed the spreadsheets to see which fields teams used and where the sheets overlapped.',
        pointsLabel: 'What I found',
        points: [
          'People spent too long finding information',
          'Data fields varied from team to team',
          'Status labels weren’t consistent',
          'New members struggled to find their way around',
        ],
        visual: {
          type: 'flow',
          caption: 'How I ran the audit',
          steps: ['Interview the people who use it', 'Affinity-map the pain points', 'Audit the trackers', 'Turn findings into wireframes'],
        },
      },
      define: {
        pointsLabel: 'Goals for the redesign',
        points: [
          'Make ownership, deadlines and status easy to find',
          'Make the data easy to read, with charts and summary numbers instead of long rows',
          'Keep field names and layout consistent across teams',
          'Give every team a view built for them',
          'Cut the time people spend searching',
        ],
      },
      design: {
        body:
          'Requests now move through a single path. Google Forms and Sheets standardize the fields people fill in, so every request carries the same information. A Looker Studio dashboard then reads from the tracker and shows what has been completed, what is overdue, how long requests take on average, and how often they land on time.',
        visual: [
          {
            type: 'flow',
            caption: 'The request workflow',
            steps: ['Submission', 'Intake', 'Categorization', 'Prioritization', 'Assignment', 'Execution', 'Review'],
          },
          {
            type: 'chips',
            label: 'Standardized fields',
            items: ['Priority', 'Status', 'Category', 'Due date', 'Assignee'],
          },
          {
            type: 'shot',
            src: '/images/work/sfr-dashboard.jpg',
            alt: 'The Operations SFR dashboard in Looker Studio, with request totals and charts',
            caption: 'The Operations SFR dashboard (Looker Studio export)',
            light: true,
          },
        ],
        decisions: [
          {
            title: 'A view for each team',
            rationale:
              'Legal and Workshops need different views. One shared dashboard would have hidden what each team cares about.',
          },
          {
            title: 'The same layout everywhere',
            rationale:
              'If you know the Operations dashboard, the Legal one feels familiar: same charts, different data.',
          },
          {
            title: 'Charts instead of rows',
            rationale:
              'Completed and overdue counts, completion time and on-time rates are easier to read as visuals than as filtered columns.',
          },
        ],
      },
      test: {
        body: 'I worked with stakeholders throughout and judged the result on retrieval speed and data quality.',
        visual: {
          type: 'flow',
          caption: 'How the work was sequenced',
          steps: ['Build the SFR tracker', 'Design the shared layout', 'Review with stakeholders', 'Adjust for each team'],
        },
        challenges: [
          {
            title: 'Same enough, different enough',
            description: 'Teams wanted consistency, but not a copy-paste job.',
          },
          {
            title: 'Dashboards, not one-offs',
            description: 'Designing the shared layout first let me reuse it for every team.',
          },
        ],
        lessons: [
          'Understand how people actually work before designing the tool.',
          'Spreadsheets aren’t the problem. They just aren’t built for overview questions.',
          'Sometimes the fix is making data readable, not replacing the tool.',
        ],
      },
    },
    outcomes: [
      { value: '7', label: 'Request trackers unified' },
      { value: '40%', label: 'Less time retrieving info' },
      { value: '65%', label: 'Better data quality' },
    ],
  },

  {
    id: 'glasshouse',
    name: 'Glasshouse',
    category: 'Interactive prototype',
    line: 'An interactive social feed that reveals how the posts we’re shown shape what we assume about someone.',
    layout: 'glass',
    image: '/images/work/glasshouse-home.jpg',
    siteLabel: 'glasshouse-flame.vercel.app',
    event: '2026 Design-a-thon · Panopticon prompt',
    team: 'Rujula Padala and Niva Malthankar',
    role: '',
    roleLabel: 'Our work',
    timeline: '',
    tools: ['FigJam', 'Figma Design', 'Figma Make', 'Adobe', 'Cursor', 'VS Code + Claude'],
    links: [
      { label: 'Explore the prototype', href: 'https://glasshouse-flame.vercel.app/', primary: true },
      { label: 'Watch the walkthrough', href: 'https://vimeo.com/1246988951' },
    ],
    summary:
      'We designed it for college students and young adults who use social media regularly. Visitors answer three questions about a fictional student, and the posts they see next depend on their answers.',
    overview:
      'Glasshouse is our response to the 2026 Design-a-thon’s Panopticon prompt: an interactive social feed that shows how the posts we’re shown shape what we assume about someone.',
    myRole: 'We worked on it together, from the first interviews to the finished site.',
    contributions: [
      'Mapped Alex’s relationships and the branching in FigJam',
      'Designed the screens and a reusable component library in Figma',
      'Explored the glasshouse environment and visibility states in Figma Make',
      'Built the site in code, with Cursor and Claude',
    ],
    process: {
      discover: {
        body:
          'A social feed can show a small slice of someone’s life and still make it feel like we know the whole story.',
        visual: {
          type: 'compare',
          before: {
            title: 'What a feed shows',
            items: ['A few chosen posts', 'Highlights and quiet nights', 'Comments from the same friends'],
          },
          after: {
            title: 'What it leaves out',
            items: ['The work before a night out', 'Why a friend went quiet', 'Everything else that was posted'],
          },
        },
      },
      research: {
        method: 'Early interviews · reciprocal-sharing concept',
        body:
          'Our first idea was about reciprocal sharing. Early interviews pulled us toward something more specific: how people interpret a friend’s absence, how they fill in missing context, and how differently sure they feel about a first impression.',
        pointsLabel: 'What kept coming up',
        points: [
          'A friend’s absence gets interpreted, not just noticed',
          'People fill in missing context on their own',
          'How sure people feel about a first impression varies a lot',
        ],
        visual: {
          type: 'flow',
          caption: 'How the idea evolved',
          steps: ['Reciprocal sharing', 'Early interviews', 'Absence, context, certainty', 'One fictional character'],
        },
      },
      define: {
        body:
          'We narrowed the experience to one fictional college student, Alex, so visitors could follow how their own interpretation shaped a single story. She is 21, balancing design projects, friendships and time to herself, with her friend Jamie, roommate Maya and design partner Priya around her.',
        pointsLabel: 'What we set out to do',
        points: [
          'Ground the story in friendship, academic pressure and social plans',
          'Let each answer shape what appears next',
          'Show the withheld context at the end, along with the visitor’s own choices',
        ],
        visual: {
          type: 'shot',
          src: '/images/work/glasshouse-alex.jpg',
          alt: 'The Meet Alex slide from the pitch deck, with Alex’s profile card',
          caption: 'Meet Alex: the profile at the center of the experience (from our pitch deck)',
        },
      },
      design: {
        body:
          'Visitors enter a fogged glasshouse and browse five introductory posts from Alex’s profile. They answer three questions about a missed birthday, the pressure around an exhibition, and why Alex hasn’t been in class. Each answer determines the next three posts, which appear to support the visitor’s interpretation. The glass clears as they progress, creating the feeling that they’re seeing more of Alex’s life.',
        visual: [
          {
            type: 'shot',
            src: '/images/work/glasshouse-journey.jpg',
            alt: 'The user journey slide: eight steps from a fogged screen to the archive',
            caption: 'The user journey, from a fogged screen to the archive (from our pitch deck)',
          },
          {
            type: 'shot',
            src: '/images/work/glasshouse-archive.jpg',
            alt: 'Step 8, the archive: 14 posts presented and 18 previously withheld',
            caption: 'The reveal: 14 posts presented, 18 previously withheld',
            narrow: true,
          },
        ],
        decisions: [
          {
            title: 'Three questions, three posts each',
            rationale:
              'Every answer picks three posts from a fixed collection that seem to back it up, so the choice feels like it matters.',
          },
          {
            title: 'Glass that clears',
            rationale:
              'The fog lifts as visitors go, so it feels like they’re seeing more of Alex’s life, even though the feed is still selective.',
          },
          {
            title: 'The reveal',
            rationale:
              'A single path shows 14 of 32 posts. The final pullback shows the 18 that were withheld next to the visitor’s choices, and the people they were observing look back, so their own choices become something that can be interpreted.',
          },
        ],
      },
      test: {
        body: 'Testing is still planned. We want to find out:',
        pointsLabel: 'Planned testing',
        points: [
          'Can people navigate without help?',
          'Do the choices reflect what they actually think?',
          'Are the transitions comfortable?',
          'Does the final archive make it clear why certain posts were withheld?',
        ],
      },
    },
    outcomes: [
      { value: '32', label: 'Posts in the collection' },
      { value: '14', label: 'Shown on a single path' },
      { value: '18', label: 'Withheld until the reveal' },
      { value: '3', label: 'Questions that shape the path' },
    ],
  },

  {
    id: 'projxon-orka',
    name: 'PROJXON · OrkaOS Design System',
    category: 'Design system',
    line: 'Built reusable design foundations and interface components for PROJXON’s internal tools.',
    layout: 'system',
    image: '/images/work/orka-home.jpg',
    siteLabel: 'orka-design-system.vercel.app',
    role: 'UI/UX Designer',
    timeline: 'PROJXON · 2026',
    tools: ['Figma'],
    links: [{ label: 'Explore the design system', href: 'https://orka-design-system.vercel.app/', primary: true }],
    summary:
      'A Figma component library and a set of reusable patterns for PROJXON’s internal tools.',
    overview:
      'OrkaOS focused on making internal tools feel consistent as new screens and dashboards were designed. I worked on a Figma component library and reusable patterns for navigation, cards, tables, modals, and dashboard layouts.',
    myRole: 'I worked on the Figma component library and the reusable patterns built from it.',
    contributions: [
      'Foundations: design tokens for color, type and spacing',
      'Components: navigation, cards, tables and modals',
      'Patterns: dashboard and data-heavy layouts',
    ],
    parts: [
      {
        id: 'foundations',
        label: 'Foundations',
        lead: 'Design tokens for color, type, and spacing.',
        points: [
          'A 60 / 30 / 10 split of navy, deep navy and one blue accent',
          'Named swatches with hex values, ready to hand off',
          'A matching dark-mode palette',
        ],
        shot: '/images/work/orka-tokens.jpg',
        alt: 'The OrkaOS design tokens page showing the brand proportion bar and the named color swatches',
        caption: 'Token example: the brand palette and its proportions',
      },
      {
        id: 'components',
        label: 'Components',
        lead: 'Reusable UI such as navigation, cards, tables, and modals.',
        points: [
          'KPI cards in default, positive, warning and empty states',
          'Graph cards in default, loading and empty states',
          'Navigation, tables, forms and notifications documented alongside',
        ],
        shot: '/images/work/orka-components.jpg',
        alt: 'KPI cards and revenue graph cards shown in their different states',
        caption: 'Component example: KPI and graph cards, each with its states',
      },
      {
        id: 'patterns',
        label: 'Patterns',
        lead: 'How those pieces come together in dashboard and data-heavy layouts.',
        points: [
          'A side navigation, breadcrumb and search bar frame the page',
          'KPI cards sit above a chart for the main read',
          'The same language runs across OrkaOS Hub, OrkaChat, OrkaHR and the other apps',
        ],
        shot: '/images/work/orka-patterns.jpg',
        alt: 'The OrkaOS Hub overview screen: side navigation, breadcrumb, search, KPI cards and a revenue chart',
        caption: 'Composed layout: the OrkaOS Hub overview',
      },
    ],
    supports: [
      'A consistent experience across the OrkaOS apps',
      'Faster front-end work from reusable components',
      'Easier handoff between design and engineering',
      'Light and dark themes',
      'Accessible contrast and keyboard focus states',
      'Room for new screens and dashboards to be added',
    ],
    process: {
      discover: {
        body:
          'OrkaOS is an ecosystem of connected micro-apps for internal operations, covering things like chat, HR, files, SOPs, AI and finance. Each app does a different job, but they all have to feel like they belong to the same product.',
        pointsLabel: 'The risk',
        points: [
          'Each new screen could drift from the last',
          'Designers and developers would keep redrawing the same pieces',
        ],
      },
      research: {
        method: 'Brand assets · reference products',
        body:
          'The logo, brand colors and type guidelines already existed, so the system had to extend them rather than replace them. For polish, the references were products like Notion, Linear, Slack, Discord and Google Workspace.',
        visual: {
          type: 'flow',
          caption: 'Where the system started',
          steps: ['Existing brand assets', 'Reference products', 'What every app needs', 'Shared foundations'],
        },
      },
      define: {
        pointsLabel: 'What it had to do',
        points: [
          'Keep the experience consistent across products',
          'Make front-end work faster and handoff simpler',
          'Support light and dark themes',
          'Meet accessible contrast and keyboard focus needs',
        ],
      },
      design: {
        body:
          'I worked in that order so each layer builds on the one before it: tokens feed the components, and the components make up the patterns.',
        visual: {
          type: 'flow',
          caption: 'How the system is layered',
          steps: ['Tokens', 'Components', 'Patterns', 'Screens'],
        },
        decisions: [
          {
            title: 'States designed in',
            rationale: 'Default, loading and empty states ship with the component, so screens don’t improvise them later.',
          },
          {
            title: 'Dark mode as a real theme',
            rationale: 'The demo switches the whole system between light and dark, so both are designed rather than inverted.',
          },
          {
            title: 'Patterns for data-heavy screens',
            rationale: 'Dashboards are where inconsistency shows most, so they get their own layouts.',
          },
        ],
      },
      test: {
        body: 'The system is documented in a live demo that can be reviewed screen by screen.',
        pointsLabel: 'Built to meet',
        points: [
          'Accessible contrast',
          'Keyboard focus states',
          'Light and dark themes',
          'Desktop, tablet and mobile layouts',
        ],
      },
    },
    outcomes: [
      { value: '3', label: 'Parts: foundations, components, patterns' },
      { value: '2', label: 'Themes: light and dark' },
      { value: '10', label: 'Documented sections in the demo' },
    ],
  },

  {
    id: 'sustain',
    name: 'SustAIn',
    category: 'AI Sustainability Platform',
    line: 'A map that scores possible data-center sites for sustainability.',
    layout: 'map',
    image: '/images/work/sustain-home.png',
    siteLabel: 'sustain-data-centers.vercel.app',
    url: 'https://sustain-data-centers.vercel.app/',
    role: 'UX/UI Designer',
    timeline: '4-hour hackathon · Texas Venture Group x cOmpiled',
    tools: ['Figma', 'React', 'Tailwind', 'Mapbox'],
    summary:
      'A map tool that scores possible data-center sites for sustainability, so planners can compare regions without wading through dense data. Prototyped in a four-hour hackathon.',
    overview:
      'Choosing a data-center site means weighing energy, water and fiber connectivity, among other things. At the Texas Venture Group x cOmpiled hackathon, our team had four hours to make that decision easier to see and compare. I was the only designer.',
    myRole:
      'I owned the research synthesis, journey mapping, wireframes, visual design and the map interface, and designed how the AI score is presented.',
    contributions: [
      'Mapped the location decision journey',
      'Designed map exploration and filters',
      'Combined five data inputs into one score',
      'Built the location comparison view',
      'Set the visual hierarchy for dense map data',
    ],
    process: {
      discover: {
        body:
          'GIS and sustainability tools buried the important parts under dense screens. Planners ended up cross-referencing spreadsheets and maps, and still weren’t sure about their pick.',
        pointsLabel: 'What planners needed to do',
        points: [
          'Compare regions quickly',
          'Understand the sustainability metrics',
          'Judge infrastructure readiness',
          'Make sense of geographic data',
        ],
        visual: {
          type: 'compare',
          before: {
            title: 'Typical tools',
            items: ['Many layers on at once', 'Numbers scattered across screens', 'Spreadsheets on the side'],
          },
          after: {
            title: 'SustAIn',
            items: ['One score up front', 'Layers you switch on yourself', 'Regions side by side'],
          },
        },
      },
      research: {
        method: 'Benchmarking · journey mapping',
        body:
          'With four hours, research meant benchmarking against Google Data Centers, AWS Infrastructure and GIS platforms, and finding where a new user would get stuck. The pattern was the same everywhere: too much data and not enough guidance.',
        pointsLabel: 'What I found',
        points: ['Information overload', 'Comparing regions was hard', 'Poor visual hierarchy'],
        visual: {
          type: 'flow',
          caption: 'How I got to the design rule',
          steps: ['Benchmark Google, AWS and GIS tools', 'Find where users get lost', 'Spot the pattern', 'Set the design rule'],
        },
      },
      define: {
        body:
          'The design rule: put a single score up front, then let people open up the reasons behind it.',
        pointsLabel: 'What that meant in practice',
        points: [
          'Give people one anchor before the granular metrics',
          'Let them compare regions side by side',
          'Let them decide how much data they see',
        ],
        visual: {
          type: 'flow',
          caption: 'The decision journey I designed for',
          steps: ['Explore the map', 'Switch on layers', 'Read the score', 'Compare regions'],
        },
      },
      design: {
        body:
          'The map shows energy, water and fiber connectivity data as separate layers. I combined five sustainability data inputs into one composite score with progressive disclosure, and a comparison view puts regions next to each other.',
        visual: {
          type: 'wire',
          variant: 'map',
          caption: 'Simplified sketch of the map, layers and score',
        },
        decisions: [
          {
            title: 'The AI score comes first',
            rationale:
              'One score gives people somewhere to start before they dig into the numbers, which cuts down on analysis paralysis.',
          },
          {
            title: 'Regions side by side',
            rationale:
              'Decisions are made by comparing, so a dedicated view saves people from switching back and forth.',
          },
          {
            title: 'Layers you control',
            rationale:
              'Energy, water and fiber each get a toggle, so people choose how much complexity to see.',
          },
        ],
      },
      test: {
        body: 'A hackathon forces trade-offs, so I picked what mattered most and held the rest back.',
        visual: {
          type: 'flow',
          caption: 'How I spent the four hours',
          steps: ['Core decision flow first', 'Reusable components', 'Polish what was left'],
        },
        challenges: [
          {
            title: 'Dense geographic data',
            description: 'I had to decide which metrics show first and which stay behind a click.',
          },
          {
            title: 'Time versus polish',
            description: 'I focused on the core flow and reused components to keep it consistent.',
          },
        ],
        lessons: [
          'A decision tool should guide people, not dump data on them.',
          'Visual hierarchy matters more when the content is complicated.',
          'One strong score can open up the whole exploration flow.',
        ],
      },
    },
    outcomes: [
      { value: '4', label: 'Decision stages mapped' },
      { value: '5', label: 'Data inputs in one score' },
      { value: '3', label: 'Map layers designed' },
      { value: '4hr', label: 'Hackathon sprint' },
    ],
  },

  {
    id: 'josyam',
    name: 'Josyam',
    category: 'Interactive Cultural Storytelling',
    line: 'A web experience where you choose cards and talk through a reading with an AI guide.',
    layout: 'deck',
    image: '/images/work/josyam-home.png',
    siteLabel: 'josyam.vercel.app',
    url: 'https://josyam.vercel.app/',
    role: 'Lead UX/UI Designer',
    timeline: '24-hour hackathon · HackTX',
    tools: ['React', 'Gemini', 'Tailwind', 'Node.js', 'Framer Motion', 'Canva/Figma'],
    summary:
      'A 4-step web experience based on Indian parrot fortune-telling, where you choose cards and talk through a reading with an AI guide. Designed in a 24-hour hackathon at HackTX.',
    overview:
      'Josyam is based on Indian parrot fortune-telling, a tradition built on patience and anticipation. The challenge was to bring that into a digital experience without turning it into a swipe-and-done app.',
    myRole:
      'As lead designer I directed the whole experience: cultural research, wireframes, mockups and prototypes, visual direction and animation timing, and I worked closely with engineers to integrate Gemini AI.',
    contributions: [
      'Researched the cultural context',
      'Designed card selection and reveal flows',
      'Created the celestial look and motion',
      'Designed the AI conversation for readings',
      'Set animation timing',
    ],
    process: {
      discover: {
        body:
          'Standard app patterns are swipe, tap, done. The real ritual depends on pacing and anticipation, so rushing it would strip out what makes it meaningful.',
        pointsLabel: 'The challenge',
        points: [
          'Keep the sense of wonder in a digital form',
          'Keep people emotionally connected',
          'Make the interactions mean something',
        ],
        visual: {
          type: 'compare',
          before: {
            title: 'A typical app flow',
            items: ['Swipe', 'Tap', 'Instant result'],
          },
          after: {
            title: 'The Josyam ritual',
            items: ['Choose your cards', 'Watch them reveal slowly', 'Talk through the reading'],
          },
        },
      },
      research: {
        method: 'Cultural research · study of spiritual digital experiences',
        body:
          'I researched the cultural context and storytelling behind the practice, and looked at how people use cultural and spiritual digital experiences.',
        pointsLabel: 'What I found',
        points: [
          'Ritual and pacing matter as much as the visuals',
          'Personalizing a reading deepens the connection',
          'Animation timing changes how authentic it feels',
        ],
        visual: {
          type: 'flow',
          caption: 'What fed into the design',
          steps: ['Cultural context', 'Spiritual and cultural apps', 'Pacing and timing insights'],
        },
      },
      define: {
        body: 'So every decision favored emotional pacing over efficiency, guided by three principles.',
        pointsLabel: 'Principles',
        points: [
          'Pace the experience like the physical ritual',
          'Personalize without lecturing',
          'Respect the source instead of trivializing it',
        ],
      },
      design: {
        body:
          'The ritual runs in four steps: you choose cards, watch them turn over, and then talk through your reading with a Gemini-powered AI guide. Each interaction is paced so it feels deliberate, never gimmicky.',
        visual: {
          type: 'wire',
          variant: 'cards',
          caption: 'Simplified sketch of the card reveal and chat',
        },
        decisions: [
          {
            title: 'Cards that reveal in layers',
            rationale:
              'A physical reading builds anticipation. Staggered reveals with celestial motion bring that feeling back.',
          },
          {
            title: 'An AI guide, not an oracle',
            rationale:
              'The chatbot reflects and asks questions instead of lecturing, so readings feel personal.',
          },
          {
            title: 'A light, celestial look',
            rationale:
              'Moonlit blues with gold accents feel intimate without being heavy or clinical, and the colors and typography are chosen to stay accessible.',
          },
        ],
      },
      test: {
        body:
          'I checked animation speeds, colors and wording against one question: does this respect where it comes from?',
        visual: {
          type: 'flow',
          caption: 'What I checked each time',
          steps: ['Animation timing', 'Color choices', 'Tone of the copy', 'Does it respect the source?'],
        },
        challenges: [
          {
            title: 'Respecting tradition in a digital medium',
            description: 'Anything that felt like it trivialized the source got changed.',
          },
          {
            title: 'Keeping AI warm',
            description: 'I wrote the conversation to be reflective, more companion than chatbot.',
          },
        ],
        lessons: [
          'Emotional design needs pacing, not just good looks.',
          'Research the culture before designing the pixels.',
          'The best interactions feel like invitations, not instructions.',
        ],
      },
    },
    outcomes: [
      { value: '3', label: 'Core interaction flows' },
      { value: '5', label: 'Animation sequences' },
      { value: '100%', label: 'Cultural intent preserved' },
    ],
  },

  {
    id: 'mindwell',
    name: 'MindWell',
    category: 'Mental Health Product Design',
    line: 'A mood check-in and journaling app with no streaks and one action per screen.',
    layout: 'soft',
    image: '/images/work/mindwell-home.png',
    siteLabel: 'mindwell · prototype',
    role: 'Product Designer · Personal project',
    timeline: '2026',
    tools: ['Figma', 'User Research', 'Prototyping'],
    summary:
      'A mood check-in and journaling app designed to feel calm: no streaks, one action per screen, soft colors.',
    overview:
      'Most wellness apps stress people out before they help, with streak counters, loud notifications and clinical screens. I wanted a check-in that feels like a quiet conversation with yourself.',
    myRole:
      'This was a personal project, so I did it end to end: a trauma-informed check-in and journaling flow audit, a comparison of four wellness apps, user flows, a calming design system and supportive microcopy.',
    contributions: [
      'Researched the wellness app landscape',
      'Designed the mood → journal → insights flow',
      'Created a calm visual system',
      'Wrote supportive, accessible microcopy',
      'Prototyped the check-in and resource hub',
    ],
    process: {
      discover: {
        body:
          'Students and young adults dealing with stress don’t need another app asking for attention. They need something simple and safe enough that they’ll actually come back to it.',
        pointsLabel: 'What people struggle with',
        points: [
          'Keeping up habits',
          'Tracking how they feel',
          'Finding resources',
          'Staying motivated to engage',
        ],
        visual: {
          type: 'compare',
          before: {
            title: 'A typical wellness app',
            items: ['Streak counters', 'Pushy notifications', 'Clinical screens'],
          },
          after: {
            title: 'MindWell',
            items: ['Showing up is enough', 'A quiet, warm tone', 'One thing to do at a time'],
          },
        },
      },
      research: {
        method: 'Competitive audit · Daylio, Reflectly, Headspace, Apple Health',
        body:
          'I audited a trauma-informed check-in and journaling flow and compared four wellness platforms (Daylio, Reflectly, Headspace and Apple Health) to find patterns that make people feel guilty or unsafe. Three reasons kept coming up: guilt from broken streaks, a clinical look, and too many features.',
        pointsLabel: 'What I found',
        points: ['Simplicity matters', 'Emotional safety matters', 'Consistency is hard to keep'],
        visual: {
          type: 'flow',
          caption: 'From research to rules',
          steps: ['Compare four wellness apps', 'Find why people leave', 'Turn the reasons into rules'],
        },
      },
      define: {
        body: 'The rules came straight out of the reasons people gave up on other apps.',
        pointsLabel: 'Rules',
        points: ['No streaks', 'Warm tones', 'One action at a time'],
      },
      design: {
        body:
          'A daily mood check-in leads into guided journaling, progress insights and a small resource hub. I judged every screen by how much it asks of you and how safe it feels.',
        visual: {
          type: 'wire',
          variant: 'phone',
          caption: 'Simplified sketch of the daily check-in screen',
        },
        decisions: [
          {
            title: 'No streaks',
            rationale:
              'Streaks create guilt, not wellbeing. MindWell welcomes people back after a gap with warm, non-judgmental copy.',
          },
          {
            title: 'One main action on the home screen',
            rationale:
              'One clear action per visit reduces decision fatigue. Check in first, explore when you’re ready.',
          },
          {
            title: 'Soft colors with strong contrast',
            rationale:
              'Blush and lavender tones keep it gentle, and the contrast meets WCAG so it stays readable.',
          },
        ],
      },
      test: {
        body: 'People share sensitive feelings here, so I iterated on the microcopy and design system with peer feedback.',
        visual: {
          type: 'flow',
          caption: 'What I checked on every screen',
          steps: ['Peer feedback', 'Tone of the copy', 'Color and animation', 'Does it feel safe?'],
        },
        challenges: [
          {
            title: 'Designing for vulnerability',
            description: 'Every word, color and animation had to feel safe.',
          },
          {
            title: 'Features versus calm',
            description: 'I held the line on simplicity, since fewer, better interactions keep people coming back.',
          },
        ],
        lessons: [
          'A wellbeing product should lower the load, not add to it.',
          'Microcopy is a design material, especially in sensitive moments.',
          'Accessibility and emotional safety are the same priority.',
        ],
      },
    },
    outcomes: [
      { value: '4', label: 'Core experience flows' },
      { value: '0', label: 'Streak guilt mechanics' },
      { value: 'AA', label: 'Contrast compliance' },
    ],
  },
]

const ORDER = ['glasshouse', 'projxon-sfr', 'projxon-orka', 'sustain', 'josyam', 'mindwell']
export const WORK = ORDER.map((id) => ALL.find((p) => p.id === id))

export const WORK_BY_ID = Object.fromEntries(WORK.map((p) => [p.id, p]))
