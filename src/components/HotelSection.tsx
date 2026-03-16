import { Hotel, Waves, Wine, Sparkles, Clock, Shield } from 'lucide-react';

export default function HotelSection() {
  const benefits = [
    {
      icon: Hotel,
      title: 'Guest Entertainment',
      description: 'Keep your guests delighted with high-quality live music'
    },
    {
      icon: Waves,
      title: 'Poolside Ambiance',
      description: 'Perfect summer vibes for pool and beach areas'
    },
    {
      icon: Wine,
      title: 'Elegant Dining',
      description: 'Sophisticated music to enhance the dining experience'
    },
    {
      icon: Sparkles,
      title: 'Special Events',
      description: 'Memorable performances for themed nights and celebrations'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Available for regular bookings or seasonal contracts'
    },
    {
      icon: Shield,
      title: 'Professional Reliability',
      description: 'Punctual, prepared, and fully insured'
    }
  ];

  return (
    <section id="hotels" className="py-24 bg-gradient-to-b from-purple-950/40 via-blue-950/30 to-purple-950/40 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ideal for Hotels & Resorts</h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elevate your guests' experience with professional live entertainment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="feature-card text-center card-hover"
            >
              <benefit.icon className="gradient-text mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="gradient-primary bg-opacity-5 border-2 border-purple-500/50 rounded-xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Perfect for Costa Blanca Hotels</h3>
            <p className="text-xl text-gray-300 mb-6">
              Serving Benidorm, Torrevieja, Alicante, and surrounding areas
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-900/30 px-4 py-2 rounded-full text-gray-300">5-Star Hotels</span>
              <span className="bg-purple-900/30 px-4 py-2 rounded-full text-gray-300">Beach Resorts</span>
              <span className="bg-purple-900/30 px-4 py-2 rounded-full text-gray-300">Boutique Hotels</span>
              <span className="bg-purple-900/30 px-4 py-2 rounded-full text-gray-300">All-Inclusive Resorts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
