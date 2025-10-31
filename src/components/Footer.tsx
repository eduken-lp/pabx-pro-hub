import { Phone, Mail, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Phone className="h-6 w-6" />
              <span className="font-bold text-lg">PABX Solutions</span>
            </div>
            <p className="text-background/80 text-sm">
              Especialista em manutenção e revenda de equipamentos PABX Panasonic com mais de 15
              anos de experiência.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              {["Início", "Sobre", "Serviços", "Equipamentos"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Manutenção Preventiva</li>
              <li>Instalação e Configuração</li>
              <li>Suporte Técnico</li>
              <li>Revenda de Equipamentos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+5511999999999"
                  className="text-background/80 hover:text-background transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +55 (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@pabxsolutions.com.br"
                  className="text-background/80 hover:text-background transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contato@pabxsolutions.com.br
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/80">
          <p>© {currentYear} PABX Solutions. Todos os direitos reservados.</p>
          <p className="mt-2">Especialista Certificado Panasonic</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
