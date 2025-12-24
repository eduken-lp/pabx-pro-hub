import { ShoppingCart, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import kxNt560 from "@/assets/kx-nt560.jpg";
import kxNs500 from "@/assets/kx-ns500.jpg";
import kxTde600 from "@/assets/kx-tde600.jpg";

const Equipment = () => {
  const equipment = [

    // Centrais
  {
      name: "Panasonic KX-NS500",
      description: "Central PABX híbrida para pequenas e médias empresas, com suporte completo a VoIP.",
      features: ["Sistema híbrido", "Até 288 ramais", "VoIP integrado", "Expansível"],
      image: kxNs500,
      category: "Centrais PABX",
    },


    {
      name: "Panasonic KX-NT560",
      description: "Telefone IP de alta qualidade com tela colorida, ideal para ambientes corporativos.",
      features: ["Tela LCD colorida", "Suporte VoIP", "Múltiplas linhas", "Qualidade HD"],
      image: kxNt560,
      category: "Telefones IP",
    },
    {
      name: "Panasonic KX-NS500",
      description: "Central PABX híbrida para pequenas e médias empresas, com suporte completo a VoIP.",
      features: ["Sistema híbrido", "Até 288 ramais", "VoIP integrado", "Expansível"],
      image: kxNs500,
      category: "Centrais PABX",
    },
    {
      name: "Panasonic KX-TDE600",
      description: "Central de comunicação empresarial para grandes empresas com recursos avançados.",
      features: ["Alta capacidade", "Integração avançada", "Redundância", "Escalável"],
      image: kxTde600,
      category: "Centrais PABX",
    },
    {
      name: "Panasonic KX-HDV430",
      description: "Telefone IP de alto desempenho, ideal para call centers e ambientes de alta demanda.",
      features: ["Full HD Voice", "6 linhas SIP", "Tela grande", "Alta performance"],
      image: kxNt560,
      category: "Telefones IP",
    },
    {
      name: "Panasonic KX-NS1000",
      description: "Sistema de comunicação unificado para empresas de todos os tamanhos.",
      features: ["Comunicação unificada", "Até 2500 ramais", "Cloud ready", "Mobilidade"],
      image: kxNs500,
      category: "Centrais PABX",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="equipment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Equipamentos para Revenda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma linha completa de equipamentos Panasonic originais com garantia e
            suporte técnico especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 bg-secondary/30 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {item.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button onClick={scrollToContact} className="w-full" variant="hero">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Precisa de Outro Equipamento?
          </h3>
          <p className="text-muted-foreground mb-6">
            Trabalhamos com toda a linha Panasonic. Entre em contato para consultar
            disponibilidade de outros modelos.
          </p>
          <Button onClick={scrollToContact} size="lg" variant="hero">
            Solicitar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
