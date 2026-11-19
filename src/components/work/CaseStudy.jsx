import {
  DeckLayout,
  GlassLayout,
  MapLayout,
  SoftLayout,
  SystemLayout,
  WorkspaceLayout,
} from './layouts'
import './case.css'

const LAYOUTS = {
  workspace: WorkspaceLayout,
  glass: GlassLayout,
  map: MapLayout,
  deck: DeckLayout,
  soft: SoftLayout,
  system: SystemLayout,
}

export default function CaseStudy({ project, onClose }) {
  const Layout = LAYOUTS[project.layout]
  return <Layout project={project} onClose={onClose} />
}
