import React from 'react';
import './App.css';
import Header from './components/Header';
import GaboBanner from './components/GaboBanner';
import ComicCard from './components/ComicCard';
import DexChart from './components/DexChart';
import Footer from './components/Footer';
import comics from './data/comics';

function App() {
  return (
    <div className="app">
      <Header />
      <GaboBanner />
      <main className="gallery">
        {comics.map(comic => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </main>
      <DexChart />
      <Footer />
    </div>
  );
}

export default App;