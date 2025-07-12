import React from 'react';
import './Header.css';
import dexIcon from './dexIcon.png';  // place your Dex Screener icon here

export default function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="https://t.me/YOUR_TG_PLACEHOLDER" target="_blank" rel="noopener noreferrer">
          GABO
        </a>
      </div>
      <div className="links">
        <a href="https://x.com/GABOonSOL" target="_blank" rel="noopener noreferrer">
          X
        </a>
        <a href="https://dexscreener.com/solana/ep7yqgpw6xc3cjhjpqs77tpvfvhm7uoifb9u4kgm4uof" target="_blank" rel="noopener noreferrer">
          <img src={dexIcon} alt="Dex Screener" className="nav-icon" />
        </a>
        <a
          className="buy-btn"
          href="https://jup.ag/swap/So11111111111111111111111111111111111111112-93FZGB8Hwc4JuVh35cV4iCArvHMhhnjmwLdhRtYKbonk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy GABO
        </a>
      </div>
    </nav>
  );
}
