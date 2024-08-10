import React, { Suspense, lazy, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Dynamically import the components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const Loading = () => <div>Loading...</div>;

const App = () => {
  const renderLoader = useCallback(() => <Loading />, []);

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <Suspense fallback={renderLoader()}>
          <About />
          <Experience />
          <Tech />
          <Works />
        </Suspense>

        <div className="relative z-0">
          <Suspense fallback={renderLoader()}>
            <Contact />
            <StarsCanvas />
            <Footer />
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
