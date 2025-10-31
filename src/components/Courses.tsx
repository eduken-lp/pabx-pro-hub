import { Youtube, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      title: "Configuração Básica KX-NS500",
      description: "Aprenda a configurar e programar o sistema PABX KX-NS500 do zero.",
      duration: "45 min",
      views: "15K",
    },
    {
      title: "Manutenção Preventiva em PABX",
      description: "Técnicas essenciais para manter seus equipamentos em perfeito estado.",
      duration: "30 min",
      views: "12K",
    },
    {
      title: "Instalação de Ramais IP",
      description: "Passo a passo completo para instalação e configuração de ramais IP.",
      duration: "35 min",
      views: "18K",
    },
    {
      title: "Troubleshooting Avançado",
      description: "Resolução de problemas complexos em sistemas Panasonic PABX.",
      duration: "50 min",
      views: "10K",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Youtube className="h-12 w-12 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Cursos no YouTube
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compartilho conhecimento através de cursos gratuitos sobre manutenção e configuração
            de sistemas PABX Panasonic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-primary to-accent h-48 flex items-center justify-center">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{course.duration}</span>
                  <span>{course.views} visualizações</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="hero"
            onClick={() => window.open("https://youtube.com", "_blank")}
          >
            <Youtube className="mr-2 h-5 w-5" />
            Acessar Canal no YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
