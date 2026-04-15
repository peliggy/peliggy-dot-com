import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)')
const motionOverride = new URLSearchParams(window.location.search).get('motion')

function updateMotionPreference() {
  const shouldAnimate = motionOverride !== 'off'

  document.documentElement.dataset.motion = shouldAnimate ? 'on' : 'off'
}

updateMotionPreference()
if (motionOverride === null) {
  motionMediaQuery.addEventListener?.('change', updateMotionPreference)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
