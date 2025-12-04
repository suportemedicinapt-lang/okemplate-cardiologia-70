import { motion } from "framer-motion";
import { Shield, Clock, Heart, Award, Users, Sparkles } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Shield,
      title: "[Diferencial 1]",
      description: "[Ex: Atendimento seguro e confidencial, seguindo os mais altos padrões de ética médica.]",
    },
    {
      icon: Clock,
      title: "[Diferencial 2]",
      description: "[Ex: Consultas com tempo adequado para ouvir e entender cada paciente individualmente.]",
    },
    {
      icon: Heart,
      title: "[Diferencial 3]",
      description: "[Ex: Abordagem humanizada que considera o paciente como um todo, não apenas os sintomas.]",
    },
    {
      icon: Award,
      title: "[Diferencial 4]",
      description: "[Ex: Formação em instituições de referência e atualização constante em congressos internacionais.]",
    },
    {
      icon: Users,
      title: "[Diferencial 5]",
      description: "[Ex: Equipe multidisciplinar para um cuidado completo e integrado à sua saúde cardiovascular.]",
    },
    {
      icon: Sparkles,
      title: "[Diferencial 6]",
      description: "[Ex: Tecnologia de ponta para diagnósticos precisos e tratamentos mais eficazes.]",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-medium mb-4">
            Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher <span className="text-gradient">[Seu Nome]</span>?
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            [Escreva aqui o que faz você se destacar como profissional. 
            O que seus pacientes podem esperar ao escolher você como cardiologista.]
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                  <item.icon className="w-6 h-6 text-card" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {item.description}
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

export default Differentials;
