import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  const [categories] = useState([
    {
      name: 'about',
      description: "My name is Caleb Day, I am a web developer. In 2020, I decided to change careers from video editing to programming, but what I didn't relize was I was going to find my passion.",
      photo: '',
    },
    { name: 'projects', description: 'This is a collection of my web applications I have created/helped create.' },
    { name: 'contact', description: 'Contact me and we can move forward together.' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentPage, setCurrentPage] = useState('About');

  function choosePage(page) {
    if (page === 'About') {
      return <About />;
    }
    if (page === 'Project') {
      return <Project />;
    }
    if (page === 'Contact') {
      return <Contact />;
    }
  }

  const handlePage = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Nav handlePage={handlePage} />
      {choosePage(currentPage)}
    </div>
  );
}

export default App;
