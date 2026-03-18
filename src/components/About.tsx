import { Award, Users, Globe, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-950/30 via-purple-950/20 to-blue-950/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre mí</h2>
          <div className="accent-line mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="group">
            <img
              src="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Marco Sánchez actuando en directo"
              className="rounded-xl smooth-shadow w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed">
              Soy cantante profesional especializado en actuaciones en vivo con una sólida experiencia en diferentes escenarios y ambientes. He actuado en bares, eventos privados, celebraciones y espacios públicos, desarrollando una conexión genuina con el público y la capacidad de adaptar mi música a cualquier ocasión.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              Mi repertorio abarca desde clásicos atemporales hasta éxitos contemporáneos, baladas románticas y canciones de verano, interpretadas en inglés y español. Entiendo que cada actuación es única y me esfuerzo por crear la atmósfera perfecta para el momento, ya sea una cena elegante, un ambiente relajado de terraza o un show con más energía.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              Mi fortaleza principal es la conexión con el público, mi versatilidad musical y mi profesionalismo en directo. Soy una persona con facilidad para trabajar en equipo, puntual y completamente disponible para ajustarme a los requerimientos específicos de cada proyecto.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="feature-card text-center">
            <Award className="gradient-text mx-auto mb-4" size={48} />
            <h3 className="text-white font-semibold text-lg mb-2">Profesionalismo</h3>
            <p className="text-gray-400">Puntual, preparado y confiable</p>
          </div>

          <div className="feature-card text-center">
            <Users className="gradient-text mx-auto mb-4" size={48} />
            <h3 className="text-white font-semibold text-lg mb-2">Conexión con Público</h3>
            <p className="text-gray-400">Genera momentos memorables</p>
          </div>

          <div className="feature-card text-center">
            <Globe className="gradient-text mx-auto mb-4" size={48} />
            <h3 className="text-white font-semibold text-lg mb-2">Versátil</h3>
            <p className="text-gray-400">Repertorio en dos idiomas</p>
          </div>

          <div className="feature-card text-center">
            <Star className="gradient-text mx-auto mb-4" size={48} />
            <h3 className="text-white font-semibold text-lg mb-2">Adaptabilidad</h3>
            <p className="text-gray-400">Se ajusta a cada ambiente</p>
          </div>
        </div>
      </div>
    </section>
  );
}
