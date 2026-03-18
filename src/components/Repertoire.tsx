import { Music2, Heart, Sun, Sparkles } from 'lucide-react';

export default function Repertoire() {
  const genres = [
    {
      icon: Music2,
      title: 'Pop Actual',
      songs: ['Ed Sheeran', 'Bruno Mars', 'Adele', 'The Weeknd', 'Dua Lipa']
    },
    {
      icon: Heart,
      title: 'Clásicos Atemporales',
      songs: ['Frank Sinatra', 'The Beatles', 'Queen', 'Eagles', 'David Bowie']
    },
    {
      icon: Sun,
      title: 'Música de Verano',
      songs: ['Latin Pop', 'Reggaeton', 'Éxitos de Playa', 'Temas Animados', 'Hits Bailables']
    },
    {
      icon: Sparkles,
      title: 'Baladas Románticas',
      songs: ['Interpretaciones Españolas', 'Perfectas para Cenas', 'Ambiente Elegante', 'Éxitos Atemporales']
    }
  ];

  return (
    <section id="repertoire" className="py-24 bg-gradient-to-b from-purple-950/30 to-blue-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Repertorio</h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Amplio repertorio musical adaptable a cualquier tipo de evento y público.
            Flexible y abierto a solicitudes específicas según las necesidades del lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="feature-card card-hover"
            >
              <genre.icon className="gradient-text mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">{genre.title}</h3>
              <ul className="space-y-2">
                {genre.songs.map((song, i) => (
                  <li key={i} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></span>
                    {song}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <p className="text-xl text-white mb-2">
            <span className="gradient-text font-semibold">Interpretaciones en Dos Idiomas</span>
          </p>
          <p className="text-gray-300">
            Canciones en español e inglés, perfecto para públicos nacionales e internacionales
          </p>
        </div>
      </div>
    </section>
  );
}
