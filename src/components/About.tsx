import { Award, Users, Globe, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-950/30 via-purple-950/20 to-blue-950/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="accent-line mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="group">
            <img
              src="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Singer performing"
              className="rounded-xl smooth-shadow w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed">
              With over 1000 years of experience performing at luxury hotels, resorts, and events across Spain's Costa Blanca, I specialize in creating unforgettable musical experiences for international audiences.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              My versatile repertoire spans from classic hits to modern pop, romantic ballads to summer anthems, performed in both English and Spanish. I understand the unique needs of hotel entertainment and pride myself on professionalism, reliability, and the ability to create the perfect atmosphere for any occasion.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              Whether it's an elegant dinner setting, a lively poolside event, or sophisticated lounge entertainment, I adapt my performance to perfectly complement your venue and delight your guests.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="feature-card text-center">
            <Award className="gradient-text mx-auto mb-4" size={48} />
            <h3 className="text-white font-semibold text-lg mb-2">Professional</h3>
            <p className="text-gray-400">Reliable and experienced performer</p>
          </div>

          <div className="feature-card text-center">
            <Users className="gradient-text mx-auto mb-4" size={48} />
            <h3 className="text-white font-semibold text-lg mb-2">Guest Focused</h3>
            <p className="text-gray-400">Creating memorable experiences</p>
          </div>

          <div className="feature-card text-center">
            <Globe className="gradient-text mx-auto mb-4" size={48} />
            <h3 className="text-white font-semibold text-lg mb-2">International</h3>
            <p className="text-gray-400">Multilingual repertoire</p>
          </div>

          <div className="feature-card text-center">
            <Star className="gradient-text mx-auto mb-4" size={48} />
            <h3 className="text-white font-semibold text-lg mb-2">Premium Quality</h3>
            <p className="text-gray-400">High-end entertainment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
