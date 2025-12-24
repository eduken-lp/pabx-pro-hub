import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pabx.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToEquipment = () => {
    const element = document.getElementById("equipment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="PABX Solutions Professional Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <img src={logo} alt="Nova Teleinformática" className="h-32 md:h-40 mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Especialista em <span className="text-primary">PABX Panasonic</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Manutenção profissional, revenda de equipamentos e treinamentos especializados
            para sistemas de comunicação empresarial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="hero"
              onClick={scrollToContact}
              className="text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToEquipment}
              className="text-lg border-2"
            >
              Ver Equipamentos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
