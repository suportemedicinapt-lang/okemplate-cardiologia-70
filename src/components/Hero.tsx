import { motion } from "framer-motion";
import { Heart, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicHero from "@/assets/clinic-hero.jpg";
import doctorImage from "@/assets/doctor-placeholder.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={clinicHero}
          alt="Consultório de cardiologia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-card"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Heart className="w-4 h-4 text-secondary-light animate-heartbeat" />
              <span className="text-sm font-medium">Cardiologista</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Dr(a). <span className="text-secondary-light">[Seu Nome Aqui]</span>
            </h1>

            <p className="font-body text-lg md:text-xl opacity-90 mb-4">
              [Sua Especialidade] · CRM [Seu CRM]
            </p>

            <p className="font-body text-base md:text-lg opacity-80 mb-8 max-w-xl">
              [Escreva aqui uma breve descrição sobre você, sua experiência e sua abordagem no cuidado com os pacientes. Este texto deve transmitir confiança e acolhimento.]
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary-light" />
                <span className="text-sm">[X] anos de experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary-light" />
                <span className="text-sm">Atendimento humanizado</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Agendar Consulta
              </Button>
              <Button variant="heroOutline" size="xl">
                Conhecer Mais
              </Button>
            </div>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-card/10 rounded-full blur-3xl" />
              
              {/* Image container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-card/20">
                <img
                  src={doctorImage}
                  alt="[Seu Nome] - Cardiologista"
                  className="w-80 h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-card/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
