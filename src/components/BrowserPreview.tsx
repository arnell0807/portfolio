import { useEffect, useRef, useState } from 'react'

const FRAME_WIDTH = 1280
const FRAME_HEIGHT = 800

type Props = {
  url: string
  title: string
}

// Renders the live site at desktop size and scales it down to fit the card.
export function BrowserPreview({ url, title }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.4)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / FRAME_WIDTH)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const host = new URL(url).host

  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="browser-url">{host}</span>
      </div>
      <div
        ref={viewportRef}
        className="browser-viewport"
        style={{ aspectRatio: `${FRAME_WIDTH} / ${FRAME_HEIGHT}` }}
      >
        {!loaded && <div className="browser-loading">Loading preview…</div>}
        <iframe
          src={url}
          title={`${title} live preview`}
          loading="lazy"
          tabIndex={-1}
          onLoad={() => setLoaded(true)}
          style={{
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            transform: `scale(${scale})`,
            opacity: loaded ? 1 : 0,
          }}
        />
        <a className="browser-overlay" href={url} target="_blank" rel="noreferrer">
          <span>Open live site ↗</span>
        </a>
      </div>
    </div>
  )
}
