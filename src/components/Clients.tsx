import { Building2, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  const clients = [
    {
      name: "Empresa Tech Solutions Ltda",
      sector: "Tecnologia",
      testimonial:
        "Serviço excepcional! Nosso sistema PABX está funcionando perfeitamente há anos.",
    },
    {
      name: "Hospital São Lucas",
      sector: "Saúde",
      testimonial:
        "Confiabilidade e rapidez no atendimento. Fundamental para nossa operação 24/7.",
    },
    {
      name: "Indústria Metalúrgica ABC",
      sector: "Indústria",
      testimonial:
        "Profissionalismo exemplar. Sempre disponível para manutenção e suporte.",
    },
    {
      name: "Banco Regional do Sul",
      sector: "Financeiro",
      testimonial:
        "Expertise incomparável em PABX Panasonic. Recomendamos fortemente.",
    },
    {
      name: "Universidade Federal XYZ",
      sector: "Educação",
      testimonial:
        "Atende toda nossa infraestrutura de comunicação com excelência.",
    },
    {
      name: "Rede de Hotéis Premium",
      sector: "Hotelaria",
      testimonial:
        "Manutenção preventiva que realmente funciona. Zero problemas em 3 anos.",
    },
  ];

  return (
    <section id="clients" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Clientes Atendidos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas de diversos setores confiam em nossos serviços especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {client.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{client.sector}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{client.testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-card border border-border rounded-lg p-8">
            <div className="text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-lg text-foreground">
              Empresas atendidas em mais de 15 anos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
