import { Mic2, Music, Utensils, PartyPopper } from 'lucide-react';

export default function ShowFormats() {
  const formats = [
    {
      icon: Mic2,
      title: 'Acoustic Show',
      description: 'Intimate acoustic performances with guitar, perfect for sophisticated venues',
      duration: '45-90 minutes',
      ideal: 'Lounges, terraces, intimate settings'
    },
    {
      icon: Music,
      title: 'Full Production',
      description: 'High-energy performance with backing tracks and professional sound',
      duration: '60-120 minutes',
      ideal: 'Main stages, evening entertainment'
    },
    {
      icon: Utensils,
      title: 'Dinner Music',
      description: 'Elegant background music creating the perfect dining atmosphere',
      duration: '2-3 hours',
      ideal: 'Restaurant, gala dinners'
    },
    {
      icon: PartyPopper,
      title: 'Party Set',
      description: 'Upbeat, interactive show to get guests dancing and engaged',
      duration: '60-90 minutes',
      ideal: 'Pool parties, night shows'
    }
  ];

  return (
    <section id="formats" className="py-24 bg-gradient-to-b from-blue-950/30 via-purple-950/20 to-blue-950/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Show Formats</h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible performance options tailored to your venue and audience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {formats.map((format, index) => (
            <div
              key={index}
              className="feature-card card-hover"
            >
              <format.icon className="gradient-text mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-3">{format.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{format.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <span className="gradient-text font-semibold mr-2">Duration:</span>
                  <span className="text-gray-400">{format.duration}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="gradient-text font-semibold mr-2">Ideal for:</span>
                  <span className="text-gray-400">{format.ideal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-8">
          <p className="text-white text-lg mb-2">
            All formats include professional sound equipment and can be customized to your needs
          </p>
          <p className="text-gray-400">
            Multiple sets available for extended bookings
          </p>
        </div>
      </div>
    </section>
  );
}
