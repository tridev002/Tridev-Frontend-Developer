import React from 'react';

import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"


function Tokenomics() {
  return (
    <section className="tokenomics-section" id="tokenomics">
      <h2>Tokenomics</h2>
      <div className="token-distribution">
        <div className="pie-chart"> {/* Pie Chart Placeholder */} </div>
        <div className="token-details">
          <ul>
            <li>Liquidity Pool: 60%</li>
            <li>Team: 20%</li>
            <li>Marketing: 15%</li>
            <li>Reserved: 5%</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
