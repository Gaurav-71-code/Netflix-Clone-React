import React from 'react'

function Trending() {
  const trendingShows = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image: `/assets/T${i + 1}.JPG`,
    alt: `Trending Show ${i + 1}`
  }))

  return (
    <section className="trending-section">
      <div className="container">
        <h2 className="section-title">Top 10 in India Today</h2>
        <div className="trending-container">
          {trendingShows.map((show) => (
            <div className="trending-card">
              <img src={show.image} alt={show.alt} />
              <div className="trending-info">
                <span className="ranking-number">{show.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending 