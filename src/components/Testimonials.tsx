import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "[Nome do Paciente 1]",
      role: "[Profissão ou contexto, ex: Empresário, 52 anos]",
      content: "[Depoimento do paciente sobre a experiência. Ex: 'O Dr. foi muito atencioso e me explicou tudo com clareza. Me senti muito seguro durante todo o tratamento.']",
      rating: 5,
    },
    {
      name: "[Nome do Paciente 2]",
      role: "[Profissão ou contexto]",
      content: "[Depoimento do paciente. Ex: 'Excelente profissional! A consulta foi muito completa e saí de lá com todas as minhas dúvidas esclarecidas.']",
      rating: 5,
    },
    {
      name: "[Nome do Paciente 3]",
      role: "[Profissão ou contexto]",
      content: "[Depoimento do paciente. Ex: 'Encontrei no Dr. um médico que realmente se importa. O acompanhamento é impecável e me sinto muito bem cuidado.']",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que dizem os <span className="text-gradient">Pacientes</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            [Introdução sobre a importância do feedback dos pacientes e como você 
            valoriza a confiança que depositam em você.]
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card p-6 rounded-2xl card-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 p-2 bg-secondary rounded-full">
                <Quote className="w-4 h-4 text-card" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-card font-semibold text-sm">
                    {testimonial.name.charAt(1)}
                  </span>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
