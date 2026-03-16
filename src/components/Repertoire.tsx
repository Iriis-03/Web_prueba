import { Music2, Heart, Sun, Sparkles } from 'lucide-react';

export default function Repertoire() {
  const genres = [
    {
      icon: Music2,
      title: 'International Pop',
      songs: ['Ed Sheeran', 'Bruno Mars', 'Adele', 'The Weeknd', 'Dua Lipa']
    },
    {
      icon: Heart,
      title: 'Classic Hits',
      songs: ['Frank Sinatra', 'Elvis Presley', 'The Beatles', 'Queen', 'Eagles']
    },
    {
      icon: Sun,
      title: 'Summer Vibes',
      songs: ['Latin Pop', 'Reggaeton', 'Beach Classics', 'Party Anthems', 'Dance Hits']
    },
    {
      icon: Sparkles,
      title: 'Romantic Ballads',
      songs: ['Spanish & English', 'Perfect for Dinners', 'Intimate Settings', 'Love Songs']
    }
  ];

  return (
    <section id="repertoire" className="py-24 bg-gradient-to-b from-purple-950/30 to-blue-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Repertoire</h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse selection of music to suit any audience and occasion.
            All repertoire can be adapted to your hotel's specific requirements.
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
            <span className="gradient-text font-semibold">Bilingual Performances</span>
          </p>
          <p className="text-gray-300">
            Songs performed in English and Spanish, perfect for international hotel guests
          </p>
        </div>
      </div>
    </section>
  );
}
