import { Music } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-indigo-900/70 to-blue-950/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-gradient-primary/20 border border-purple-500/30 backdrop-blur">
            <Music className="text-purple-400 glow-text" size={64} strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          MARCO SÁNCHEZ
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl gradient-text mb-4 font-semibold tracking-wide">
          Cantante de Música en Vivo
        </p>

        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Entretenimiento Profesional para Hoteles y Eventos
        </p>

        <button
          onClick={scrollToContact}
          className="btn-primary text-lg"
        >
          Contáctame
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gradient-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
