import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { features } from '../data/features.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>{site.tagline}</h1>
        <p>{site.description}</p>
        <div className="hero-actions">
          <Link to="/pricing" className="btn btn-primary">See pricing</Link>
          <Link to="/features" className="btn">Explore features</Link>
        </div>
      </section>
      <section>
        <h2>Why teams choose {site.name}</h2>
        <div className="grid">
          {features.slice(0, 3).map((f) => (
            <div className="card" key={f.title}>
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
