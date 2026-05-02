import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <footer style={{ 
        padding: '60px 80px', 
        textAlign: 'center', 
        fontSize: '13px', 
        color: '#a0a0a0',
        background: '#f8f1e7'
      }}>
        © 2025 Prodgest. Managed with total clarity.
      </footer>
    </div>
  );
}
