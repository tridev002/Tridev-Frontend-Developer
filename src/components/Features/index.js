import React from 'react';

function Features() {
  const featuresData = [
    { title: "Market Insight", description: "Data-driven forecasts for more intelligent trades." },
    { title: "Trade Optimizer", description: "Maximize profits and minimize risks with our AI-based tool." },
    { title: "Risk Guard", description: "Real-time alerts to prevent unexpected losses." },
    ];

  return (
    <section className="features-section">
      {featuresData.map((feature, index) => (
        <div key={index} className="feature-card">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
