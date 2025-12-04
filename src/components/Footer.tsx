import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-secondary-light animate-heartbeat" />
            <span className="font-display text-lg font-semibold text-primary-foreground">
              Dr(a). [Seu Nome]
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-primary-foreground/70 text-center">
            © {currentYear} Dr(a). [Seu Nome]. Todos os direitos reservados.
          </p>

          {/* CRM */}
          <p className="font-body text-sm text-primary-foreground/70">
            CRM [Seu CRM] - [Sua Especialidade]
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <p className="font-body text-xs text-primary-foreground/50 text-center max-w-3xl mx-auto">
            [Adicione aqui um disclaimer médico ou informações legais necessárias. 
            Ex: As informações contidas neste site são de caráter informativo e não 
            substituem uma consulta médica. Agende sua avaliação para um diagnóstico correto.]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
