import React from 'react'

function FAQ() {
  const faqs = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more.'
    },
    {
      question: 'How much does Netflix cost?',
      answer: 'Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee.'
    },
    {
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime, on an unlimited number of devices.'
    },
    {
      question: 'Is Netflix good for kids?',
      answer: 'The Netflix Kids experience is included in your membership to give parents control.'
    }
  ]

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <details>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
        <form className="email-form">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <input type="email" placeholder="Email address" />
          <button className="btn btn-lg" type="submit">Get Started &gt;</button>
        </form>
      </div>
    </section>
  )
}

export default FAQ 