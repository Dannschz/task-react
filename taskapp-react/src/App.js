import React from 'react';
import './App.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Section from './components/Section';

function App() {
  return (
    <div className="main-app">
      <Header />
      <div className="content">
        <Sidebar />
        <Section />
      </div>
    </div>
  );
}

export default App;
