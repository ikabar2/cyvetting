import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ── SECURITY HARDENING ──

// 1. Disable right-click
document.addEventListener('contextmenu', e => e.preventDefault())

// 2. Block DevTools keyboard shortcuts
document.addEventListener('keydown', e => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I','J','C','K'].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault()
    e.stopPropagation()
    return false
  }
})

// 3. Detect DevTools open — redirect or warn
;(function devToolsDetect() {
  const threshold = 160
  const check = () => {
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) {
      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#050a0f;font-family:monospace;color:#aaff00;font-size:1rem;">Access restricted.</div>'
    }
  }
  window.addEventListener('resize', check)
})()

// 4. Disable text selection on sensitive elements
document.addEventListener('selectstart', e => {
  if (e.target.closest('nav, footer, .logo')) e.preventDefault()
})

// 5. Console warning
console.clear()
console.log('%c⚠ Stop!', 'color:#aaff00;background:#050a0f;font-size:32px;font-weight:bold;padding:8px 16px;')
console.log('%cThis browser console is for developers only. Do not paste code here — it could compromise your security.', 'color:#ff3b6e;font-size:14px;')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
