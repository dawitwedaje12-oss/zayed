import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import VideosPage from './components/VideosPage';
import { NavigationContext, Page } from './NavigationContext';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page, sectionId?: string) => {
    setCurrentPage(page);
    
    // Handle scrolling after render
    setTimeout(() => {
        if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 100);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
        <div className="bg-navy-dark min-h-screen text-white font-sans selection:bg-gold selection:text-navy-dark">
          <Navbar />
          <main>
            {currentPage === 'home' ? (
                <>
                    <Hero />
                    <About />
                    <Services />
                    <Contact />
                </>
            ) : currentPage === 'services' ? (
                <ServicesPage />
            ) : currentPage === 'videos' ? (
                <VideosPage />
            ) : null}
          </main>
          <Footer />
        </div>
    </NavigationContext.Provider>
  );
}

export default App;