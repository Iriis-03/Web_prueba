import { Mic2, Music, Utensils, PartyPopper } from 'lucide-react';

export default function ShowFormats() {
  const formats = [
    {
      icon: Mic2,
      title: 'Acústico',
      description: 'Actuaciones íntimas con guitarra, perfectas para ambientes sofisticados',
      duration: '45-90 minutos',
      ideal: 'Lounges, terrazas, espacios íntimos'
    },
    {
      icon: Music,
      title: 'Show Completo',
      description: 'Presentación con energía y acompañamiento de backing tracks profesional',
      duration: '60-120 minutos',
      ideal: 'Escenarios principales, entretenimiento nocturno'
    },
    {
      icon: Utensils,
      title: 'Música para Cena',
      description: 'Música elegante de fondo creando atmósfera perfecta para la comida',
      duration: '2-3 horas',
      ideal: 'Restaurante, cenas de gala'
    },
    {
      icon: PartyPopper,
      title: 'Set Animado',
      description: 'Show energético e interactivo para animar y hacer disfrutar al público',
      duration: '60-90 minutos',
      ideal: 'Fiestas en piscina, shows nocturnos'
    }
  ];

  return (
    <section id="formats" className="py-24 bg-gradient-to-b from-blue-950/30 via-purple-950/20 to-blue-950/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Formatos de Actuación</h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Opciones flexibles adaptadas a tu espacio, público y necesidades específicas
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
                  <span className="gradient-text font-semibold mr-2">Duración:</span>
                  <span className="text-gray-400">{format.duration}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="gradient-text font-semibold mr-2">Ideal para:</span>
                  <span className="text-gray-400">{format.ideal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-8">
          <p className="text-white text-lg mb-2">
            Todos los formatos incluyen equipo de sonido profesional y se adaptan a tus requerimientos
          </p>
          <p className="text-gray-400">
            Disponible para sesiones prolongadas y bookings flexibles
          </p>
        </div>
      </div>
    </section>
  );
}
