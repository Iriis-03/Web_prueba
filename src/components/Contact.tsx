import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-950/30 to-purple-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Book a Performance</h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Available for summer bookings in hotels, resorts and events</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're planning regular entertainment for your hotel, a special event, or seasonal programming,
              I'd love to discuss how we can create memorable musical experiences for your guests.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="gradient-primary p-3 rounded-lg mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <a href="mailto:booking@marcosanchez.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                    booking@marcosanchez.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="gradient-primary p-3 rounded-lg mr-4">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Phone / WhatsApp</p>
                  <a href="tel:+34612345678" className="text-purple-400 hover:text-purple-300 transition-colors">
                    +34 612 345 678
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="gradient-primary p-3 rounded-lg mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Location</p>
                  <p className="text-gray-400">Costa Blanca, Spain</p>
                  <p className="text-gray-500 text-sm">Serving Benidorm, Torrevieja, Alicante & surrounding areas</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="gradient-primary p-3 rounded-lg mr-4">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Availability</p>
                  <p className="text-gray-400">Summer Season 2024</p>
                  <p className="text-gray-500 text-sm">Year-round bookings available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Hotel / Venue</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Hotel name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Phone</label>
                <input
                  type="tel"
                  className="input-field"
                  placeholder="+34..."
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Tell me about your event or entertainment needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Booking Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-8">
          <p className="text-white text-lg font-semibold mb-2">
            Ready to elevate your hotel entertainment?
          </p>
          <p className="text-gray-300">
            Contact me today to discuss availability and create a customized entertainment package for your venue
          </p>
        </div>
      </div>

      <footer className="mt-24 border-t border-purple-500/20 pt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">
            © 2024 Marco Sánchez - Professional Live Entertainment
          </p>
        </div>
      </footer>
    </section>
  );
}
