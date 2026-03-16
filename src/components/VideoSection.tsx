import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="video" className="py-24 bg-gradient-to-b from-blue-950/30 to-purple-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Live Performance</h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Experience the energy and professionalism</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group cursor-pointer rounded-xl overflow-hidden smooth-shadow aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20">
            <img
              src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Live performance"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-all flex items-center justify-center">
              <div className="gradient-primary p-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="text-white ml-1" size={32} fill="white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-lg">Hotel Performance Highlights</p>
            </div>
          </div>

          <div className="relative group cursor-pointer rounded-xl overflow-hidden smooth-shadow aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20">
            <img
              src="https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Live performance"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-all flex items-center justify-center">
              <div className="gradient-primary p-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="text-white ml-1" size={32} fill="white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-lg">Summer Event Showcase</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Watch full performances on YouTube</p>
          <a
            href="#contact"
            className="inline-block text-purple-400 hover:text-purple-300 font-semibold transition-colors"
          >
            Request demo videos →
          </a>
        </div>
      </div>
    </section>
  );
}
