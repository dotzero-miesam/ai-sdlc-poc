import { useState } from 'react'
import { site } from '../data/site.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Static demo: no backend, the form just shows a confirmation.
  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="narrow">
      <h1>Contact</h1>
      <p className="lead">
        Questions? Email us at <a href={`mailto:${site.email}`}>{site.email}</a> or use the form.
      </p>
      {sent ? (
        <div className="card success">Thanks! We'll get back to you soon.</div>
      ) : (
        <form className="card form" onSubmit={handleSubmit}>
          <label>
            Name
            <input required name="name" />
          </label>
          <label>
            Email
            <input required type="email" name="email" />
          </label>
          <label>
            Message
            <textarea required name="message" rows="4" />
          </label>
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>
      )}
    </section>
  )
}
