import { plans } from '../data/pricing.js'

export default function Pricing() {
  return (
    <section>
      <h1>Pricing</h1>
      <p className="lead">Simple plans that grow with you.</p>
      <div className="grid">
        {plans.map((p) => (
          <div className={`card plan${p.highlighted ? ' plan-highlighted' : ''}`} key={p.name}>
            {p.highlighted && <span className="badge">Most popular</span>}
            <h3>{p.name}</h3>
            <div className="price">
              {p.price === null ? 'Custom' : `$${p.price}`}
              {p.price !== null && <small>/{p.period}</small>}
            </div>
            <ul>
              {p.perks.map((perk) => (
                <li key={perk}>✓ {perk}</li>
              ))}
            </ul>
            <button className={`btn${p.highlighted ? ' btn-primary' : ''}`}>{p.cta}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
