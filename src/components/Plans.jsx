import React from 'react'

function Plans() {
  const plans = [
    {
      type: 'Mobile',
      resolution: '480p',
      features: ['✓ Fair video quality', '✓ For your phone or tablet'],
      price: '149'
    },
    {
      type: 'Basic',
      resolution: '720p',
      features: ['✓ Good video quality', '✓ For your phone, tablet, laptop and TV'],
      price: '199'
    },
    {
      type: 'Standard',
      resolution: '1080p',
      features: ['✓ Great video quality', '✓ For your phone, tablet, laptop and TV'],
      price: '499'
    },
    {
      type: 'Premium',
      resolution: '4K + HDR',
      features: ['✓ Best video quality', '✓ Immersive sound', '✓ Immersive sound'],
      price: '649'
    }
  ]

  return (
    <section className="plans">
      <h2>A plan to suit your needs</h2>
      <div className="plan-cards">
        {plans.map((plan) => (
          <div className={`plan ${plan.type.toLowerCase()}`}>
            <h3>{plan.type}</h3>
            <div className="price">{plan.price}</div>
            <ul>
              {plan.features.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans 