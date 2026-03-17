import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 5 + 'px'
        cursorRef.current.style.top = e.clientY - 5 + 'px'
      }
    }

    const animRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x - 18 + 'px'
        ringRef.current.style.top = ring.current.y - 18 + 'px'
      }
      rafRef.current = requestAnimationFrame(animRing)
    }

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animRing)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} style={{
        position: 'fixed', width: 10, height: 10,
        background: 'var(--accent)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9999,
        mixBlendMode: 'screen', transition: 'transform 0.1s ease'
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', width: 36, height: 36,
        border: '1px solid var(--accent)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9998,
        transition: 'all 0.15s ease', opacity: 0.5
      }} />
    </>
  )
}
