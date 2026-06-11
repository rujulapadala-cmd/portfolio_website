const THEMES = {
  projxon: { accent: '#E18AAA', soft: '#F5DCE0', lavender: '#DCCFED' },
  sustain: { accent: '#8b9cf6', soft: '#EFCFD4', lavender: '#DCCFED' },
  josyam: { accent: '#E18AAA', soft: '#2B2B2B', lavender: '#DCCFED' },
  mindwell: { accent: '#E18AAA', soft: '#F8F4F5', lavender: '#DCCFED' },
}

export function VisualArtifact({ type, projectId, label, caption }) {
  const theme = THEMES[projectId] || THEMES.projxon

  return (
    <figure className="cs-artifact">
      {label && <figcaption className="cs-artifact-label">{label}</figcaption>}
      <div className="cs-artifact-frame" style={{ '--art-accent': theme.accent, '--art-soft': theme.soft, '--art-lavender': theme.lavender }}>
        {type === 'dashboard' && <DashboardMockup />}
        {type === 'map' && <MapMockup />}
        {type === 'cards' && <CardsMockup />}
        {type === 'wellness' && <WellnessMockup />}
        {type === 'wireframe' && <WireframeMockup />}
        {type === 'flow' && <FlowMockup projectId={projectId} />}
        {type === 'design-system' && <DesignSystemMockup />}
        {type === 'process-board' && <ProcessBoardMockup />}
        {type === 'before-after' && <BeforeAfterMockup />}
        {type === 'mobile-desktop' && <DeviceMockup />}
        {type === 'persona' && <PersonaMockup projectId={projectId} />}
      </div>
      {caption && <p className="cs-artifact-caption">{caption}</p>}
    </figure>
  )
}

function DashboardMockup() {
  return (
    <div className="mock-dashboard">
      <div className="mock-dashboard-sidebar">
        <div className="mock-dash-nav-item mock-dash-nav-item--active" />
        <div className="mock-dash-nav-item" />
        <div className="mock-dash-nav-item" />
        <div className="mock-dash-nav-item" />
      </div>
      <div className="mock-dashboard-main">
        <div className="mock-dash-header">
          <div className="mock-dash-title-bar" />
          <div className="mock-dash-actions">
            <span /><span />
          </div>
        </div>
        <div className="mock-dash-stats">
          <div className="mock-stat-card"><div className="mock-stat-num" /><div className="mock-stat-label" /></div>
          <div className="mock-stat-card"><div className="mock-stat-num" /><div className="mock-stat-label" /></div>
          <div className="mock-stat-card"><div className="mock-stat-num" /><div className="mock-stat-label" /></div>
        </div>
        <div className="mock-dash-table">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="mock-table-row">
              <span className="mock-table-dot" />
              <span className="mock-table-line mock-table-line--long" />
              <span className="mock-table-line mock-table-line--short" />
              <span className="mock-table-badge" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MapMockup() {
  return (
    <div className="mock-map">
      <div className="mock-map-overlay">
        <div className="mock-map-panel">
          <div className="mock-map-score">87</div>
          <div className="mock-map-score-label">Sustainability Score</div>
        </div>
      </div>
      <div className="mock-map-pins">
        <span className="mock-pin mock-pin--a" />
        <span className="mock-pin mock-pin--b" />
        <span className="mock-pin mock-pin--c" />
      </div>
      <div className="mock-map-legend">
        <span /><span /><span />
      </div>
    </div>
  )
}

function CardsMockup() {
  return (
    <div className="mock-cards">
      <div className="mock-card mock-card--back" />
      <div className="mock-card mock-card--mid" />
      <div className="mock-card mock-card--front">
        <div className="mock-card-symbol">✦</div>
        <div className="mock-card-lines"><span /><span /><span /></div>
      </div>
    </div>
  )
}

function WellnessMockup() {
  return (
    <div className="mock-wellness">
      <div className="mock-wellness-greeting">
        <span className="mock-wellness-emoji">☀</span>
        <div><span className="mock-line mock-line--sm" /><span className="mock-line mock-line--md" /></div>
      </div>
      <div className="mock-mood-row">
        {['😊', '😐', '😔', '😰'].map((e) => (
          <span key={e} className="mock-mood">{e}</span>
        ))}
      </div>
      <div className="mock-journal">
        <span className="mock-line mock-line--full" />
        <span className="mock-line mock-line--full" />
        <span className="mock-line mock-line--half" />
      </div>
      <div className="mock-wellness-insight">
        <span className="mock-insight-dot" />
        <span className="mock-line mock-line--md" />
      </div>
    </div>
  )
}

function WireframeMockup() {
  return (
    <div className="mock-wireframe">
      <div className="mock-wf-nav"><span /><span /><span /><span /></div>
      <div className="mock-wf-body">
        <div className="mock-wf-sidebar">
          {[1, 2, 3, 4, 5].map((i) => <div key={i} className="mock-wf-block" />)}
        </div>
        <div className="mock-wf-content">
          <div className="mock-wf-header-block" />
          <div className="mock-wf-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => <div key={i} className="mock-wf-cell" />)}
          </div>
        </div>
      </div>
      <div className="mock-wf-annotation mock-wf-annotation--1">Navigation hierarchy</div>
      <div className="mock-wf-annotation mock-wf-annotation--2">Primary content area</div>
    </div>
  )
}

function FlowMockup({ projectId }) {
  const flows = {
    projxon: ['Discover', 'Track SFR', 'Update Status', 'Onboard'],
    sustain: ['Search Location', 'Analyze Data', 'Compare', 'Decide'],
    josyam: ['Enter Experience', 'Select Cards', 'Reveal Reading', 'Reflect'],
    mindwell: ['Check In', 'Journal', 'View Insights', 'Explore Resources'],
  }
  const steps = flows[projectId] || flows.projxon

  return (
    <div className="mock-flow">
      {steps.map((step, i) => (
        <div key={step} className="mock-flow-step-wrap">
          <div className="mock-flow-step">
            <span className="mock-flow-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="mock-flow-label">{step}</span>
          </div>
          {i < steps.length - 1 && <div className="mock-flow-arrow" aria-hidden="true">→</div>}
        </div>
      ))}
    </div>
  )
}

function DesignSystemMockup() {
  return (
    <div className="mock-ds">
      <div className="mock-ds-swatches">
        {['#FFF9FA', '#F5DCE0', '#E18AAA', '#DCCFED', '#2B2B2B'].map((c) => (
          <div key={c} className="mock-ds-swatch" style={{ background: c }} />
        ))}
      </div>
      <div className="mock-ds-type">
        <span className="mock-ds-heading">Heading</span>
        <span className="mock-ds-body">Body text for interface copy and descriptions.</span>
      </div>
      <div className="mock-ds-components">
        <span className="mock-ds-btn mock-ds-btn--primary">Primary</span>
        <span className="mock-ds-btn mock-ds-btn--secondary">Secondary</span>
        <span className="mock-ds-input" />
      </div>
    </div>
  )
}

function ProcessBoardMockup() {
  return (
    <div className="mock-board">
      <div className="mock-sticky mock-sticky--1">User pain points</div>
      <div className="mock-sticky mock-sticky--2">IA mapping</div>
      <div className="mock-sticky mock-sticky--3">Status labels</div>
      <div className="mock-sticky mock-sticky--4">Onboarding flow</div>
      <div className="mock-board-sketch" />
    </div>
  )
}

function BeforeAfterMockup() {
  return (
    <div className="mock-before-after">
      <div className="mock-ba-panel mock-ba-panel--before">
        <span className="mock-ba-tag">Before</span>
        <div className="mock-ba-chaos">
          {[1, 2, 3, 4, 5, 6].map((i) => <div key={i} className="mock-ba-box" />)}
        </div>
      </div>
      <div className="mock-ba-panel mock-ba-panel--after">
        <span className="mock-ba-tag">After</span>
        <div className="mock-ba-clean">
          <div className="mock-ba-unified" />
        </div>
      </div>
    </div>
  )
}

function DeviceMockup() {
  return (
    <div className="mock-devices">
      <div className="mock-desktop">
        <div className="mock-desktop-bar" />
        <div className="mock-desktop-screen" />
      </div>
      <div className="mock-phone">
        <div className="mock-phone-notch" />
        <div className="mock-phone-screen" />
      </div>
    </div>
  )
}

function PersonaMockup({ projectId }) {
  const personas = {
    projxon: { name: 'Operations Manager', trait: 'Needs cross-team visibility' },
    sustain: { name: 'Sustainability Analyst', trait: 'Compares regional data daily' },
    josyam: { name: 'Cultural Explorer', trait: 'Seeks meaningful digital rituals' },
    mindwell: { name: 'Stressed Student', trait: 'Wants gentle, low-pressure tools' },
  }
  const p = personas[projectId] || personas.projxon

  return (
    <div className="mock-persona">
      <div className="mock-persona-avatar" />
      <div className="mock-persona-info">
        <span className="mock-persona-name">{p.name}</span>
        <span className="mock-persona-trait">{p.trait}</span>
      </div>
      <div className="mock-persona-tags">
        <span>Goals</span><span>Frustrations</span><span>Behaviors</span>
      </div>
    </div>
  )
}
