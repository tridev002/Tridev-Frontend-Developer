import React from 'react';


function Roadmap() {
  const roadmapData = [
    { phase: "Kicking Off", details: "Launch of EthAI, Development of AI Agents..." },
    { phase: "Bigger Insights", details: "Introducing advanced AI agents, expanding partnerships..." },
    { phase: "Full Power", details: "Release of additional features and global integrations." },
  ];

  return (
    <section className="roadmap-section" id="roadmap">
      <h2>Roadmap</h2>
      {roadmapData.map((item, index) => (
        <div key={index} className="roadmap-phase">
          <h3>{item.phase}</h3>
          <p>{item.details}</p>
        </div>
      ))}
    </section>
  );
}

export default Roadmap;
