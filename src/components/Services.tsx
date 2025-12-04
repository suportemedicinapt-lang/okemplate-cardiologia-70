import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  Monitor, 
  Syringe, 
  ClipboardList 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: HeartPulse,
      title: "[Nome do Serviço 1]",
      description: "[Descrição breve do serviço, explicando o que é e como ajuda os pacientes. Seja claro e objetivo.]",
    },
    {
      icon: Activity,
      title: "[Nome do Serviço 2]",
      description: "[Descrição breve do serviço. Ex: Teste ergométrico para avaliação da capacidade cardíaca durante exercício.]",
    },
    {
      icon: Stethoscope,
      title: "[Nome do Serviço 3]",
      description: "[Descrição do serviço. Ex: Consulta cardiológica completa com avaliação de fatores de risco.]",
    },
    {
      icon: Monitor,
      title: "[Nome do Serviço 4]",
      description: "[Descrição do serviço. Ex: Monitoramento cardíaco contínuo para detecção de arritmias.]",
    },
    {
      icon: Syringe,
      title: "[Nome do Serviço 5]",
      description: "[Descrição do serviço. Ex: Procedimentos minimamente invasivos para tratamento de doenças cardíacas.]",
    },
    {
      icon: ClipboardList,
      title: "[Nome do Serviço 6]",
      description: "[Descrição do serviço. Ex: Check-up cardiológico preventivo para identificação precoce de problemas.]",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-accent">
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
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tratamentos e <span className="text-gradient">Procedimentos</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            [Escreva aqui uma introdução sobre os serviços que você oferece e como eles 
            beneficiam seus pacientes. Destaque sua abordagem e expertise.]
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-6 rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl w-fit mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
