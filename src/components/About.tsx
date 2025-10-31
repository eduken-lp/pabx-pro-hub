import { Award, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    {
      icon: Clock,
      value: "15+",
      label: "Anos de Experiência",
    },
    {
      icon: Users,
      value: "500+",
      label: "Clientes Atendidos",
    },
    {
      icon: Award,
      value: "100%",
      label: "Satisfação",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Com mais de 15 anos de experiência no mercado de telecomunicações, sou especialista
            certificado em sistemas PABX Panasonic. Minha missão é fornecer soluções de
            comunicação empresarial de alta qualidade, oferecendo serviços de manutenção
            preventiva e corretiva, além de revenda de equipamentos originais.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acredito que a comunicação eficiente é fundamental para o sucesso de qualquer
            empresa. Por isso, trabalho com comprometimento e dedicação para garantir que seus
            sistemas de PABX operem com máxima eficiência e confiabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-lg transition-shadow"
            >
              <CardContent className="flex flex-col items-center justify-center p-8">
                <stat.icon className="h-12 w-12 text-primary mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-center">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
