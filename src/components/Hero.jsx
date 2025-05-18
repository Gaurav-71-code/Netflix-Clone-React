import React from 'react'

function Hero() {
  return (
    <div className="hero-section">
      <div className="background-container">
        <div className="pinkoverlay"></div>
      </div>
      <section className="hero-overlay">
        <div className="banner-container">
          <div className="hero-text">
            <h1>Unlimited movies, TV shows</h1>
            <h1>and more</h1>
            <h2>Starts at ₹149. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="email-form">
              <input type="email" placeholder="Email address" />
              <button type="submit" className="btn btn-lg">Get Started &gt;</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero 