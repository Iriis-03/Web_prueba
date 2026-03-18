import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-950/30 to-purple-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacto</h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Disponible para actuaciones en hoteles, resorts y eventos</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 text-center mb-12 leading-relaxed">
            Si buscas entretenimiento en vivo profesional para tu hotel, resort, evento o celebración especial, estoy disponible para dialogar sobre tus necesidades y crear una propuesta a medida. Soy flexible, comprometido y siempre listo para ofrecer mi mejor actuación.
          </p>

          <div className="space-y-8">
            <div className="feature-card">
              <div className="flex items-start">
                <div className="gradient-primary p-4 rounded-lg mr-6 flex-shrink-0">
                  <Mail className="text-white" size={28} />
                </div>
                <div className="w-full">
                  <p className="text-white font-semibold text-lg mb-2">Email</p>
                  <a href="mailto:marco.sanchez@example.com" className="text-purple-400 hover:text-purple-300 transition-colors text-lg break-all">
                    marco.sanchez@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="flex items-start">
                <div className="gradient-primary p-4 rounded-lg mr-6 flex-shrink-0">
                  <Phone className="text-white" size={28} />
                </div>
                <div className="w-full">
                  <p className="text-white font-semibold text-lg mb-2">Teléfono / WhatsApp</p>
                  <a href="tel:+34612345678" className="text-purple-400 hover:text-purple-300 transition-colors text-lg">
                    +34 612 345 678
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Disponible para llamadas y mensajes de WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="flex items-start">
                <div className="gradient-primary p-4 rounded-lg mr-6 flex-shrink-0">
                  <MapPin className="text-white" size={28} />
                </div>
                <div className="w-full">
                  <p className="text-white font-semibold text-lg mb-2">Ubicación</p>
                  <p className="text-gray-300">Costa Blanca, España</p>
                  <p className="text-gray-400 text-sm mt-2">Disponible para actuar en Benidorm, Torrevieja, Alicante y alrededores</p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="flex items-start">
                <div className="gradient-primary p-4 rounded-lg mr-6 flex-shrink-0">
                  <Calendar className="text-white" size={28} />
                </div>
                <div className="w-full">
                  <p className="text-white font-semibold text-lg mb-2">Disponibilidad</p>
                  <p className="text-gray-300">Temporada estival y todo el año</p>
                  <p className="text-gray-400 text-sm mt-2">Abierto a bookings flexibles y colaboraciones</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-8">
            <p className="text-white text-lg font-semibold mb-3">
              ¿Buscas entretenimiento de calidad para tu evento?
            </p>
            <p className="text-gray-300">
              Contáctame sin compromiso. Estoy disponible para discutir tus necesidades, ver videos de mis actuaciones y ajustar una propuesta personalizada para tu venue.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-24 border-t border-purple-500/20 pt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">
            © 2024 Marco Sánchez - Cantante de Música en Vivo
          </p>
        </div>
      </footer>
    </section>
  );
}
