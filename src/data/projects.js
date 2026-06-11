export const PROJECTS = [
  {
    id: 'projxon',
    title: 'PROJXON Operations Dashboard',
    subtitle:
      'Transforming fragmented workflows into a unified operational system for 80+ employees across 6 teams.',
    category: 'Product Design',
    role: 'UI/UX Designer & Workspace Manager Intern',
    timeline: '2026',
    tools: [
      'Google Sheets',
      'Looker Studio',
      'Lovable',
      'Gemini API',
      'HTML Widgets',
    ],
    gradient: 'linear-gradient(135deg, #F5DCE0 0%, #DCCFED 100%)',
    impact: [
      'Supported 80+ employees',
      'Unified 7 systems',
      'Reduced retrieval time by 40%',
      'Improved data quality by 65%',
    ],
    problem: {
      points: [
        'Fragmented information across 7 systems',
        'Inconsistent request tracking',
        'Duplicated data',
        'Difficult onboarding experiences',
        'Lack of visibility between teams',
        'Excessive time spent searching for information',
      ],
    },
    research: {
      findings: [
        'Users spent excessive time locating information',
        'Data fields varied between teams',
        'Status labels lacked consistency',
        'New members struggled to navigate resources',
      ],
    },
    story: {
      heroVisual: 'dashboard',
      heroCaption: 'Unified operations dashboard — executive and team views',
      hook: 'Seven tools. Six teams. One problem — nobody could find what they needed.',
      opener:
        'When I joined PROJXON as a Workspace Manager Intern, I noticed something immediately: operational knowledge lived everywhere and nowhere at once. Spreadsheets, Looker dashboards, docs, and trackers each held a piece of the puzzle. My mission was to design a single source of truth that felt intuitive for 80+ people — not just functional, but genuinely usable.',
      myRole:
        'I led the end-to-end UX for consolidating PROJXON\'s operational ecosystem. Beyond interface design, I audited existing trackers, mapped information architecture, standardized SFR workflows, and built custom HTML widgets and dashboards in Looker Studio and Lovable. I worked directly with team leads and operations managers to validate every design decision.',
      challengeTitle: 'Scaling chaos across growing teams',
      challengeNarrative:
        'As PROJXON expanded, each team built their own workarounds. What started as flexibility became fragmentation — duplicated entries, mismatched status labels, and onboarding paths that confused new members. Operational UX wasn\'t a nice-to-have; it was becoming a bottleneck.',
      challengeCaption: 'Mapping 7 disconnected systems before consolidation',
      keyContributions: [
        'Audited and documented all existing operational trackers',
        'Designed unified information architecture for SFRs and onboarding',
        'Built executive, team, and SFR management dashboard views',
        'Standardized status labels and data fields across 6 teams',
        'Created custom widgets and onboarding experiences',
      ],
      flowCaption: 'End-to-end operational workflow after redesign',
      researchNarrative:
        'I shadowed team leads and interviewed new interns to understand where friction lived. The pattern was clear: people weren\'t failing to work hard — they were failing to find things. I mapped pain points across every existing tool and used those insights to prioritize what the unified system needed to surface first.',
      wireframeCaption: 'Early dashboard hierarchy and navigation explorations',
      decisionsIntro:
        'Every design choice was weighed against one question: will this reduce retrieval time for someone who\'s never seen this system before?',
      designDecisions: [
        {
          title: 'Role-based dashboard views',
          rationale: 'Executives need summaries; team leads need detail. Splitting views by role prevented information overload while keeping a shared data layer.',
        },
        {
          title: 'Standardized status taxonomy',
          rationale: 'Teams used different labels for the same states. A unified status system eliminated confusion and made cross-team reporting possible.',
        },
        {
          title: 'Progressive disclosure in SFR tracking',
          rationale: 'Not every user needs every field. Core info surfaces first; advanced details expand on demand — reducing cognitive load for new members.',
        },
      ],
      systemCaption: 'Consistent components, colors, and status indicators across all views',
      solutionTitle: 'One ecosystem, every team',
      solutionNarrative:
        'The final system brought SFR tracking, onboarding resources, and team operations into a cohesive dashboard. Custom widgets surfaced the right data at the right time, and navigation finally reflected how people actually worked — not how the tools were originally built.',
      outcomeStats: [
        { value: '80+', label: 'Employees supported' },
        { value: '7→1', label: 'Systems unified' },
        { value: '40%', label: 'Faster retrieval' },
        { value: '65%', label: 'Better data quality' },
      ],
      challenges: [
        {
          title: 'Balancing simplicity with depth',
          description: 'Power users needed granular controls while new members needed guardrails. Iterating on progressive disclosure was essential.',
        },
        {
          title: 'Aligning 6 teams on one system',
          description: 'Each team had entrenched habits. Design alone couldn\'t solve adoption — I paired interface changes with workflow documentation and training.',
        },
      ],
      lessonsLearned: [
        'Operational UX is invisible until it breaks — then it\'s everything.',
        'Design systems for operations must scale with the org, not just the current team size.',
        'Standardization is a design decision, not just a technical one.',
      ],
      closingQuote:
        'This project taught me that the best operational design doesn\'t add features — it removes the need to search.',
    },
  },
  {
    id: 'sustain',
    title: 'sustAIn',
    subtitle:
      'Helping organizations identify sustainable data center locations through AI-powered decision support.',
    category: 'UX/UI',
    role: 'UX/UI Designer',
    timeline: 'Hackathon Project',
    tools: ['Figma', 'React', 'Tailwind', 'Mapbox'],
    gradient: 'linear-gradient(135deg, #EFCFD4 0%, #DCCFED 50%, #F8F4F5 100%)',
    impact: [
      'Simplified complex geographic datasets',
      'Improved decision confidence',
      'Reduced analysis time',
    ],
    problem: {
      points: [
        'Compare regions efficiently',
        'Understand sustainability metrics',
        'Evaluate infrastructure readiness',
        'Interpret geographic datasets',
      ],
    },
    research: {
      findings: [
        'Information overload',
        'Difficult comparisons',
        'Poor visual hierarchy',
      ],
    },
    story: {
      heroVisual: 'map',
      heroCaption: 'Interactive sustainability map with AI-powered scoring',
      hook: 'Choosing where to build shouldn\'t require a PhD in GIS.',
      opener:
        'Data center site selection involves dozens of variables — renewable energy access, fiber connectivity, grid infrastructure, environmental impact. During a 48-hour hackathon, our team set out to make this decision feel human again: visual, comparable, and confident.',
      myRole:
        'As the sole UX/UI designer, I owned user research synthesis, journey mapping, wireframing, visual design, and the interactive map interface. I translated complex sustainability metrics into scannable visual layers and designed the AI scoring system\'s presentation.',
      challengeTitle: 'Complexity without clarity',
      challengeNarrative:
        'Existing GIS and sustainability tools buried critical insights under dense interfaces. Planners spent hours cross-referencing spreadsheets and maps — and still lacked confidence in their final recommendation.',
      challengeCaption: 'Competitive analysis of existing sustainability mapping tools',
      keyContributions: [
        'Mapped the full location decision journey',
        'Designed map exploration and filtering interactions',
        'Created sustainability score visualizations',
        'Built location comparison views',
        'Established visual hierarchy for geographic datasets',
      ],
      flowCaption: 'From location search to confident decision',
      researchNarrative:
        'I analyzed existing sustainability mapping tools and GIS dashboards to identify where users dropped off. The pattern: too much data, too little guidance. I focused design on progressive disclosure — show the score first, let users drill into the why.',
      wireframeCaption: 'Map exploration, filters, and scoring dashboard iterations',
      decisionsIntro:
        'With 48 hours on the clock, every design decision had to reduce time-to-insight.',
      designDecisions: [
        {
          title: 'AI score as the entry point',
          rationale: 'A single sustainability score gave users an immediate anchor before diving into granular metrics — reducing analysis paralysis.',
        },
        {
          title: 'Side-by-side location comparison',
          rationale: 'Decision-makers think in contrasts. A dedicated comparison view let users evaluate regions without switching contexts.',
        },
        {
          title: 'Layered map interactions',
          rationale: 'Renewable energy, fiber, and grid data each got their own toggleable layer — users control complexity instead of being overwhelmed by it.',
        },
      ],
      systemCaption: 'Sustainability indicators, score badges, and map layer controls',
      solutionTitle: 'See the whole picture, decide with confidence',
      solutionNarrative:
        'sustAIn combines an interactive map, AI-generated sustainability scores, and side-by-side comparisons into one decision support tool. Users move from broad exploration to specific recommendation without leaving the interface.',
      outcomeStats: [
        { value: '4', label: 'Decision stages mapped' },
        { value: '3', label: 'Map layers designed' },
        { value: '48hr', label: 'Hackathon sprint' },
      ],
      challenges: [
        {
          title: 'Visualizing massive datasets',
          description: 'Geographic data is inherently dense. I had to ruthlessly prioritize which metrics surfaced first and which stayed behind interactions.',
        },
        {
          title: 'Time constraints vs. polish',
          description: 'A hackathon forces tradeoffs. I focused on the core decision flow and used consistent components to maintain visual quality under pressure.',
        },
      ],
      lessonsLearned: [
        'Decision-support tools should guide, not dump data.',
        'Visual hierarchy matters more when the content is inherently complex.',
        'A single strong score can unlock an entire exploration flow.',
      ],
      closingQuote:
        'Good data visualization doesn\'t show everything — it shows what matters for the decision at hand.',
    },
  },
  {
    id: 'josyam',
    title: 'Josyam',
    subtitle:
      'Reimagining traditional storytelling through interactive digital experiences.',
    category: 'Product Design',
    role: 'Lead UX/UI Designer',
    timeline: '2026',
    tools: ['React', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Gemini API'],
    gradient: 'linear-gradient(135deg, #2B2B2B 0%, #DCCFED 40%, #E18AAA 100%)',
    impact: [
      'Preserved cultural authenticity in digital form',
      'Created emotionally engaging interactions',
      'Built immersive storytelling experience',
    ],
    problem: {
      points: [
        'Preserving wonder and ritual in digital form',
        'Maintaining emotional connection',
        'Creating meaningful interactive experiences',
      ],
    },
    research: {
      findings: [
        'Ritual and pacing matter as much as visuals',
        'Personalization deepens emotional engagement',
        'Animation timing affects perceived authenticity',
      ],
    },
    story: {
      heroVisual: 'cards',
      heroCaption: 'Interactive card deck with celestial reveal animations',
      hook: 'Some traditions deserve more than a scroll — they deserve a ritual.',
      opener:
        'Josyam draws from Indian parrot fortune-telling — a practice rooted in wonder, patience, and personal revelation. The challenge wasn\'t building an app. It was translating centuries of cultural storytelling into a digital experience that still feels sacred.',
      myRole:
        'As Lead UX/UI Designer, I directed the full experience — from cultural research and interaction design to visual direction and animation timing. I designed the card selection flow, reveal sequences, and AI-powered conversation interface, ensuring every touchpoint honored the tradition it came from.',
      challengeTitle: 'Digital without losing the soul',
      challengeNarrative:
        'Cultural traditions lose their magic when rushed into conventional app patterns. Swipe, tap, done. Josyam needed pacing, anticipation, and space — the same qualities that make the physical ritual meaningful.',
      challengeCaption: 'Storytelling framework and interaction concept mapping',
      keyContributions: [
        'Researched cultural context and storytelling traditions',
        'Designed card selection and reveal interaction flows',
        'Created celestial visual direction and motion system',
        'Built AI chatbot experience for personalized readings',
        'Directed animation timing for emotional authenticity',
      ],
      flowCaption: 'From entry to reflection — a guided ritual',
      researchNarrative:
        'I studied how users engage with cultural and spiritual digital experiences. The insight: people don\'t want speed — they want meaning. Every design decision prioritized emotional pacing over efficiency.',
      wireframeCaption: 'Card flow, reveal states, and chatbot interaction wireframes',
      decisionsIntro:
        'Each interaction was designed to feel intentional — never gimmicky.',
      designDecisions: [
        {
          title: 'Layered card reveal animation',
          rationale: 'Physical fortune-telling builds anticipation. Staggered card reveals with celestial motion recreate that sense of unfolding mystery.',
        },
        {
          title: 'AI as conversational guide, not oracle',
          rationale: 'The chatbot reflects and asks — it doesn\'t lecture. This preserves agency and makes readings feel personal rather than algorithmic.',
        },
        {
          title: 'Dark celestial visual language',
          rationale: 'Deep tones and soft glows create intimacy. The interface feels like a night sky — contemplative, not clinical.',
        },
      ],
      systemCaption: 'Celestial color palette, typography, and motion principles',
      solutionTitle: 'Wonder, translated — not replaced',
      solutionNarrative:
        'Josyam combines an interactive card deck, animated reveal sequences, and AI-powered conversations into a cohesive ritual. Users select cards, receive personalized readings, and reflect through guided dialogue — all within an atmosphere that feels intentional and warm.',
      outcomeStats: [
        { value: '3', label: 'Core interaction flows' },
        { value: '5', label: 'Animation sequences' },
        { value: '100%', label: 'Cultural intent preserved' },
      ],
      challenges: [
        {
          title: 'Respecting tradition in a digital medium',
          description: 'Every animation speed, color choice, and copy tone was tested against one question: does this honor the source or trivialize it?',
        },
        {
          title: 'Balancing AI with authenticity',
          description: 'AI can feel cold. I designed the conversation flow to be reflective and warm — more companion than chatbot.',
        },
      ],
      lessonsLearned: [
        'Emotional design requires pacing, not just aesthetics.',
        'Cultural storytelling demands research before pixels.',
        'The best interactive experiences feel like invitations, not instructions.',
      ],
      closingQuote:
        'Designing for emotion means designing for time — giving users space to feel, not just act.',
    },
  },
  {
    id: 'mindwell',
    title: 'MindWell',
    subtitle:
      'Designing a calmer and more supportive mental health experience.',
    category: 'UX/UI',
    role: 'Product Designer',
    timeline: '2026',
    tools: ['Figma', 'User Research', 'Prototyping'],
    gradient: 'linear-gradient(135deg, #F8F4F5 0%, #EFCFD4 50%, #DCCFED 100%)',
    impact: [
      'Reduced cognitive overwhelm',
      'Encouraged sustainable wellness habits',
      'Created emotionally safe interactions',
    ],
    problem: {
      points: [
        'Maintaining habits',
        'Tracking emotions',
        'Finding resources',
        'Feeling motivated to engage',
      ],
    },
    research: {
      findings: [
        'Simplicity matters',
        'Emotional safety matters',
        'Consistency is difficult',
      ],
    },
    story: {
      heroVisual: 'wellness',
      heroCaption: 'Gentle daily check-ins and journaling experience',
      hook: 'Mental health tools shouldn\'t feel like homework.',
      opener:
        'Most wellness apps overwhelm before they help — streak counters, aggressive notifications, clinical interfaces. MindWell started with a different question: what if checking in felt like a gentle conversation with yourself?',
      myRole:
        'I led product design from research through final UI — conducting competitive analysis of journaling and mood tracking apps, mapping user flows, building wireframes, and creating a calming design system with accessible interactions and supportive microcopy.',
      challengeTitle: 'Support without pressure',
      challengeNarrative:
        'Students and young adults managing stress don\'t need another app demanding their attention. They need a space that feels safe, simple, and sustainable — one they\'ll actually return to.',
      challengeCaption: 'Competitive audit of journaling and mood tracking platforms',
      keyContributions: [
        'Conducted research on mental wellness product landscape',
        'Designed mood tracking → journaling → insights user flow',
        'Created calming visual design system',
        'Wrote supportive, accessible microcopy',
        'Prototyped daily check-in and resource hub experiences',
      ],
      flowCaption: 'A gentle loop — check in, reflect, grow',
      researchNarrative:
        'I studied why people abandon wellness apps. The top reasons: guilt from broken streaks, clinical aesthetics, and feature bloat. MindWell\'s design principles emerged directly from these insights — no streaks, warm tones, one action at a time.',
      wireframeCaption: 'Home dashboard, journal, and mood tracking wireframes',
      decisionsIntro:
        'Every screen was evaluated for cognitive load and emotional safety.',
      designDecisions: [
        {
          title: 'No streak mechanics',
          rationale: 'Streaks create guilt, not wellbeing. MindWell celebrates showing up — even after a gap — with warm, non-judgmental copy.',
        },
        {
          title: 'Single-action home screen',
          rationale: 'One primary action per visit reduces decision fatigue. Check in first; explore resources when ready.',
        },
        {
          title: 'Soft, accessible color system',
          rationale: 'Calming blush and lavender tones with WCAG-compliant contrast. The interface feels gentle without sacrificing readability.',
        },
      ],
      systemCaption: 'Calming palette, typography, and supportive component library',
      solutionTitle: 'A space that meets you where you are',
      solutionNarrative:
        'MindWell combines daily mood check-ins, guided journaling, progress insights, and a curated resource hub into a cohesive experience. Each interaction is designed to feel supportive — never demanding.',
      outcomeStats: [
        { value: '4', label: 'Core experience flows' },
        { value: '0', label: 'Streak guilt mechanics' },
        { value: 'AA', label: 'Contrast compliance' },
      ],
      challenges: [
        {
          title: 'Designing for vulnerability',
          description: 'Users share sensitive emotions. Every word, color, and animation had to feel safe — I tested copy tone extensively.',
        },
        {
          title: 'Feature scope vs. calm',
          description: 'It\'s tempting to add more tools. I held the line on simplicity, knowing that fewer, better interactions drive consistency.',
        },
      ],
      lessonsLearned: [
        'Emotional wellbeing products must reduce load, not add it.',
        'Microcopy is a design material — especially in sensitive contexts.',
        'Accessibility and emotional safety are the same priority.',
      ],
      closingQuote:
        'The best mental health design disappears — leaving only the feeling of being supported.',
    },
  },
]
