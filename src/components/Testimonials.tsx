import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Marco's performances have been a highlight for our guests. Professional, talented, and always delivers an exceptional show. Highly recommended for any hotel entertainment program.",
      author: "Laura Martínez",
      role: "Entertainment Manager",
      venue: "5-Star Beach Resort, Benidorm"
    },
    {
      text: "Our guests consistently praise the live music during dinner service. Marco creates the perfect ambiance and his repertoire appeals to our international clientele.",
      author: "James Thompson",
      role: "Hotel Director",
      venue: "Luxury Hotel, Alicante"
    },
    {
      text: "Reliable, professional, and incredibly talented. Marco understands exactly what works for hotel entertainment and always exceeds expectations. A pleasure to work with.",
      author: "Carmen Rodríguez",
      role: "Events Coordinator",
      venue: "Resort & Spa, Torrevieja"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-purple-950/40 via-blue-950/30 to-purple-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Clients Say</h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Trusted by hotels and resorts across Costa Blanca</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="feature-card card-hover relative"
            >
              <Quote className="gradient-text absolute top-4 right-4 opacity-20" size={48} />

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-purple-400 fill-purple-400" size={20} />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-purple-500/20 pt-4">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="gradient-text text-sm font-medium">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
