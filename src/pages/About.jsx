import { site } from '../data/site.js'
import { team } from '../data/team.js'

export default function About() {
  return (
    <section>
      <h1>About us</h1>
      <p className="lead">
        {site.name} was founded to make cloud infrastructure boring — in the best way.
      </p>
      <h2>Our team</h2>
      <div className="grid">
        {team.map((m) => (
          <div className="card team-card" key={m.name}>
            <div className="avatar">{m.name.split(' ').map((n) => n[0]).join('')}</div>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
