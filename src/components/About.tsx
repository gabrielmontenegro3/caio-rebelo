import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Palette, Zap, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "React, TypeScript, Node.js e tecnologias modernas",
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX sofisticado com foco em experiência do usuário",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização e velocidade em todas as soluções",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Foco em entregar valor e resultados mensuráveis",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Especialista em criar soluções digitais que combinam tecnologia
            avançada com design excepcional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4"
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About

