import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Plataforma E-commerce",
      description:
        "Solução completa de comércio eletrônico com painel administrativo avançado",
      tags: ["React", "TypeScript", "Node.js"],
      image: "bg-gradient-to-br from-primary/20 to-primary/5",
    },
    {
      title: "App Mobile",
      description:
        "Aplicativo móvel com design moderno e funcionalidades avançadas",
      tags: ["React Native", "TypeScript"],
      image: "bg-gradient-to-br from-secondary/20 to-secondary/5",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Painel de controle com visualizações de dados em tempo real",
      tags: ["React", "D3.js", "Python"],
      image: "bg-gradient-to-br from-accent/20 to-accent/5",
    },
    {
      title: "Sistema de Gestão",
      description:
        "Plataforma completa para gestão empresarial com múltiplos módulos",
      tags: ["Next.js", "PostgreSQL", "AWS"],
      image: "bg-gradient-to-br from-primary/20 to-accent/5",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfólio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projetos que demonstram excelência em design e desenvolvimento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`h-48 ${project.image} relative`}>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-4xl font-bold text-primary/30">
                      {project.title.charAt(0)}
                    </div>
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

