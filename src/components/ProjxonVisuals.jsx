import { useState } from 'react'

const ANNOTATIONS = [
  {
    text: '20+ fields needed to track a single request',
    style: { top: '6%', left: '4%' },
  },
  {
    text: 'Important request information buried in long rows',
    style: { top: '32%', right: '3%' },
  },
  {
    text: 'Different teams tracked requests differently',
    style: { top: '52%', left: '2%' },
  },
  {
    text: 'Managers manually filtered spreadsheets to find trends',
    style: { top: '70%', right: '4%' },
  },
  {
    text: 'No consistent workflow structure across departments',
    style: { bottom: '6%', left: '6%' },
  },
]

/** Drop your screenshot at public/images/projxon-sfr-spreadsheet.png */
const SCREENSHOT_SRC = '/images/projxon-sfr-spreadsheet.png'

export function SpreadsheetScreenshot() {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <figure className="px-real-screenshot">
      <div className="px-screenshot-wrap">
        {!failed && (
          <img
            src={SCREENSHOT_SRC}
            alt="Original PROJXON request tracker in Google Sheets, before dashboard redesign"
            className={`px-screenshot-img${loaded ? ' px-screenshot-img--loaded' : ''}`}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        )}

        {failed && (
          <div className="px-screenshot-fallback" role="img" aria-label="Spreadsheet screenshot placeholder">
            <p>Add your screenshot:</p>
            <code>public/images/projxon-sfr-spreadsheet.png</code>
          </div>
        )}

        {(loaded || failed) &&
          ANNOTATIONS.map((note) => (
            <div
              key={note.text}
              className="px-annotation"
              style={note.style}
            >
              <span className="px-annotation-dot" aria-hidden="true" />
              {note.text}
            </div>
          ))}
      </div>
      <figcaption className="px-screenshot-caption">
        The information existed. The challenge was finding it.
      </figcaption>
    </figure>
  )
}

const WORKFLOWS = [
  { name: 'Operations', tracker: 'Request tracker', dashboard: 'Team dashboard' },
  { name: 'Project Management', tracker: 'Request tracker', dashboard: 'PM dashboard' },
  { name: 'Wednesday Workshops', tracker: 'Request tracker', dashboard: 'Workshop dashboard' },
  { name: 'Leadership', tracker: 'Request tracker', dashboard: 'Leadership view' },
  { name: 'Executive', tracker: 'Request tracker', dashboard: 'Executive view' },
  { name: 'Legal', tracker: 'Request tracker', dashboard: 'Legal dashboard' },
  { name: 'Superlatives', tracker: 'Request tracker', dashboard: 'Superlatives view' },
]

export function SevenSystemsDiagram() {
  return (
    <figure className="px-visual px-visual--diagram">
      <div className="px-framework">
        <div className="px-framework-layer px-framework-layer--shared">
          <span className="px-framework-layer-label">What I kept consistent across all seven</span>
          <div className="px-framework-pillars">
            {[
              'Same core field names',
              'Matching dashboard layouts',
              'Clearer onboarding',
              'Easier to read at a glance',
            ].map((p) => (
              <span key={p} className="px-framework-pillar">{p}</span>
            ))}
          </div>
        </div>

        <div className="px-framework-connector" aria-hidden="true">
          {[...Array(7)].map((_, i) => (
            <span key={i} className="px-framework-line" />
          ))}
        </div>

        <div className="px-framework-workflows">
          {WORKFLOWS.map((wf) => (
            <div key={wf.name} className="px-workflow-stack">
              <div className="px-workflow-name">{wf.name}</div>
              <div className="px-workflow-layer px-workflow-layer--sfr">
                <span className="px-layer-tag">Tracker</span>
                {wf.tracker}
              </div>
              <div className="px-workflow-layer px-workflow-layer--dash">
                <span className="px-layer-tag">Dashboard</span>
                {wf.dashboard}
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="px-visual-caption">
        Seven separate request systems — each got its own tracker and dashboard, built with the same underlying structure
      </figcaption>
    </figure>
  )
}

export const OperationalFrameworkDiagram = SevenSystemsDiagram

export function DashboardPortfolio() {
  return (
    <figure className="px-visual px-visual--portfolio">
      <div className="px-dash-portfolio">
        {WORKFLOWS.slice(0, 6).map((wf, i) => (
          <div key={wf.name} className="px-mini-dash" style={{ '--i': i }}>
            <div className="px-mini-dash-header">{wf.dashboard}</div>
            <div className="px-mini-dash-kpis">
              <span /><span /><span />
            </div>
            <div className="px-mini-dash-chart" />
          </div>
        ))}
      </div>
      <figcaption className="px-visual-caption">
        A separate Looker dashboard for each team — same layout, different data
      </figcaption>
    </figure>
  )
}

export function DashboardFull({ variant = 'full', workflow = 'Operations' }) {
  if (variant === 'kpi') return <DashboardKPI workflow={workflow} />
  if (variant === 'status') return <DashboardChart type="status" />
  if (variant === 'types') return <DashboardChart type="types" />
  if (variant === 'trends') return <DashboardChart type="trends" />

  return (
    <figure className="px-visual px-visual--dashboard">
      <div className="px-dash">
        <div className="px-dash-topbar">
          <span className="px-dash-logo">PROJXON</span>
          <span className="px-dash-title">{workflow} Dashboard</span>
          <div className="px-dash-filters">
            <span>{workflow}</span>
            <span>2026</span>
          </div>
        </div>
        <div className="px-dash-kpis">
          {[
            { val: '247', label: 'Total Requests' },
            { val: '186', label: 'Completed' },
            { val: '42', label: 'In Progress' },
            { val: '19', label: 'Pending' },
          ].map((k) => (
            <div key={k.label} className="px-kpi-card">
              <span className="px-kpi-val">{k.val}</span>
              <span className="px-kpi-label">{k.label}</span>
            </div>
          ))}
        </div>
        <div className="px-dash-charts">
          <div className="px-chart-panel px-chart-panel--pie">
            <span className="px-chart-title">Status Distribution</span>
            <div className="px-pie">
              <div className="px-pie-ring" />
            </div>
          </div>
          <div className="px-chart-panel px-chart-panel--bar">
            <span className="px-chart-title">Request Types</span>
            <div className="px-bars">
              {[85, 72, 58, 45, 32].map((h, i) => (
                <div key={i} className="px-bar" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="px-chart-panel px-chart-panel--line">
            <span className="px-chart-title">Request Trends</span>
            <svg className="px-line-chart" viewBox="0 0 200 80" preserveAspectRatio="none">
              <polyline
                points="0,60 30,55 60,45 90,50 120,30 150,35 180,20 200,25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <div className="px-chart-panel px-chart-panel--donut">
            <span className="px-chart-title">By Category</span>
            <div className="px-donut">
              <div className="px-donut-ring" />
            </div>
          </div>
        </div>
      </div>
      <figcaption className="px-visual-caption">
        Example Looker dashboard — built once, then adapted for each team
      </figcaption>
    </figure>
  )
}

function DashboardKPI({ workflow = 'Operations' }) {
  return (
    <div className="px-closeup px-closeup--kpi">
      <span className="px-closeup-label">{workflow} — at a glance</span>
      <div className="px-dash-kpis px-dash-kpis--large">
        {[
          { val: '247', label: 'Total Requests', delta: '+12%' },
          { val: '186', label: 'Completed', delta: '75%' },
          { val: '42', label: 'In Progress', delta: '17%' },
          { val: '19', label: 'Pending', delta: '8%' },
        ].map((k) => (
          <div key={k.label} className="px-kpi-card px-kpi-card--emphasis">
            <span className="px-kpi-val">{k.val}</span>
            <span className="px-kpi-label">{k.label}</span>
            <span className="px-kpi-delta">{k.delta}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DashboardChart({ type }) {
  if (type === 'status') {
    return (
      <div className="px-closeup px-closeup--chart">
        <span className="px-chart-title">Where requests stand</span>
        <div className="px-pie px-pie--large">
          <div className="px-pie-ring" />
          <ul className="px-legend">
            <li><span style={{ background: '#E18AAA' }} />Completed</li>
            <li><span style={{ background: '#DCCFED' }} />In Progress</li>
            <li><span style={{ background: '#EFCFD4' }} />Pending</li>
          </ul>
        </div>
      </div>
    )
  }
  if (type === 'types') {
    return (
      <div className="px-closeup px-closeup--chart">
        <span className="px-chart-title">Most common request types</span>
        <div className="px-bars px-bars--large">
          {['Operations', 'Legal', 'Executive', 'Workshops', 'PM'].map((l, i) => (
            <div key={l} className="px-bar-group">
              <div className="px-bar" style={{ height: `${[90, 70, 55, 45, 38][i]}%` }} />
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="px-closeup px-closeup--chart">
      <span className="px-chart-title">Activity over time</span>
      <svg className="px-line-chart px-line-chart--large" viewBox="0 0 300 100" preserveAspectRatio="none">
        <polyline
          points="0,80 40,70 80,65 120,50 160,55 200,35 240,40 280,25 300,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}

export const DASHBOARD_MODULES = [
  {
    title: 'Summary numbers up top',
    rationale: 'Leaders open the dashboard and immediately see totals — no scrolling through rows first.',
  },
  {
    title: 'Status breakdown',
    rationale: 'A pie chart replaces manually counting how many requests are done vs. still open.',
  },
  {
    title: 'Request type chart',
    rationale: 'Shows which kinds of requests come in most — useful for staffing decisions.',
  },
  {
    title: 'Who owns what',
    rationale: 'Surfaces which roles are carrying the most requests right now.',
  },
  {
    title: 'Trends over time',
    rationale: 'Spots busy periods without exporting data and building a chart by hand.',
  },
  {
    title: 'Breakdown by department',
    rationale: 'Shows where work is concentrated across the organization.',
  },
]
