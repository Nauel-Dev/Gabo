import React from 'react';
import './DexChart.css';

export default function DexChart() {
  return (
    <div className="dex-wrapper">
      <style>
        {`#dexscreener-embed { position: relative; width: 100%; max-width: 800px; margin: 0 auto; padding-bottom: 60%; }
        @media (min-width: 1400px) { #dexscreener-embed { padding-bottom: 45%; } }
        #dexscreener-embed iframe { position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: 0; border-radius: 12px; }`}
      </style>
      <div id="dexscreener-embed">
        <iframe
          src="https://dexscreener.com/solana/EP7yQGPw6xc3CJHjPqS77tpvfVhM7UoifB9u4kgM4Uof?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
          title="GABO Dex Chart"
        />
      </div>
    </div>
  );
}