import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Heart } from "lucide-react";
import doctorImage from "@/assets/doctor-placeholder.jpg";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "[Sua Formação]",
      description: "[Instituição onde se formou]",
    },
    {
      icon: Award,
      title: "[Sua Especialização]",
      description: "[Título ou certificação relevante]",
    },
    {
      icon: Users,
      title: "[Membro de Sociedade]",
      description: "[Ex: Sociedade Brasileira de Cardiologia]",
    },
    {
      icon: Heart,
      title: "[Área de Atuação]",
      description: "[Ex: Cardiologia Clínica e Intervencionista]",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-secondary/10 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl" />
              
              {/* Main image */}
              <img
                src={doctorImage}
                alt="[Seu Nome] - Cardiologista"
                className="relative z-10 w-full rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-secondary font-medium mb-4">
              Sobre o Médico
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Dr(a). <span className="text-gradient">[Seu Nome Aqui]</span>
            </h2>

            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              [Escreva aqui sua história profissional. Conte sobre sua trajetória na medicina, 
              o que te motivou a escolher a cardiologia, e como você aborda o cuidado com seus 
              pacientes. Este é o espaço para criar conexão e confiança.]
            </p>

            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              [Adicione mais detalhes sobre sua filosofia de atendimento, compromisso com 
              atualização constante, e o que diferencia sua prática médica. Os pacientes 
              querem conhecer a pessoa por trás do profissional.]
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl card-shadow"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground text-sm">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
