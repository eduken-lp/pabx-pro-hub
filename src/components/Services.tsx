import { Wrench, Settings, HeadphonesIcon, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import serviceBanner from "@/assets/service-banner.jpg";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description:
        "Inspeções regulares e ajustes para garantir o funcionamento contínuo e prevenir falhas nos sistemas PABX Panasonic.",
    },
    {
      icon: Settings,
      title: "Instalação e Configuração",
      description:
        "Instalação profissional e configuração personalizada de sistemas PABX para atender às necessidades específicas da sua empresa.",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Técnico",
      description:
        "Atendimento rápido e eficiente para solução de problemas, dúvidas e otimização de sistemas de comunicação.",
    },
    {
      icon: ShieldCheck,
      title: "Manutenção Corretiva",
      description:
        "Reparo especializado de equipamentos PABX com diagnóstico preciso e peças originais Panasonic.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Serviços Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para garantir que seus sistemas PABX
            Panasonic operem com máxima eficiência.
          </p>
        </div>

        {/* Banner Image */}
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-12">
          <img
            src={serviceBanner}
            alt="Professional PABX maintenance services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Especialista Certificado Panasonic
              </h3>
              <p className="text-lg md:text-xl">
                Atendimento de excelência para sua empresa
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-secondary/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Equipamentos Especializados
          </h3>
          <p className="text-muted-foreground mb-4">
            Trabalho com todos os modelos da linha Panasonic, incluindo:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "KX-NSX 1000/2000",
              "KX-NS500/1000",
              "KX-TDE600",
              "KX-HDV430",
              "KX-NS1000",
              "E muitos outros modelos",
            ].map((model, index) => (
              <li key={index} className="flex items-center text-foreground">
                <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                {model}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
