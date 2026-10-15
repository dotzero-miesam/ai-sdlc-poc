import { features } from '../data/features.js'

export default function Features() {
  return (
    <section>
      <h1>Features</h1>
      <p className="lead">Everything you need to build, ship and scale.</p>
      <div className="grid">
        {features.map((f) => (
          <div className="card" key={f.title}>
            <div className="card-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
