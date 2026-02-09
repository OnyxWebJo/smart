import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-light-bg">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
