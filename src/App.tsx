import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Repertoire from './components/Repertoire';
import ShowFormats from './components/ShowFormats';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <VideoSection />
      <Repertoire />
      <ShowFormats />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
