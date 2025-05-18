import React from 'react'

function Reasons() {
  const reasons = [
    {
      title: 'Cancel or switch plans anytime',
      icon: 'icons8-handshake-64.png'
    },
    {
      title: 'A safe place just for kids',
      icon: 'icons8-heart-with-pulse-50.png'
    },
    {
      title: 'Watch on your favourite devices',
      icon: 'icons8-my-computer-64.png'
    },
    {
      title: 'Stories tailored to your taste',
      icon: 'icons8-scissors-50.png'
    }
  ]

  return (
    <section className="reasons-section">
      <h2>More reasons to join</h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div className="reason-card">
            <h3>{reason.title}</h3>
            <img src={`/assets/${reason.icon}`} alt={reason.title} className="card-icon" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reasons 