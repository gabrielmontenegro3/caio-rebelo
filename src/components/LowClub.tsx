import { motion } from "framer-motion"
import { ArrowRight, Info, Rocket, Bot, DollarSign, ArrowUp, ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"

interface Notification {
  id: number
  app: string
  title: string
  message: string
  position: { top?: string; bottom?: string; left?: string; right?: string }
  delay: number
  zIndex: number
}

const Elevve = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notifications] = useState<Notification[]>([
    // Notificações em cima - Atrás do corpo (z-index menor)
    {
      id: 1,
      app: "PIX",
      title: "Transferência PIX Recebida",
      message: "Você recebeu uma transferência de R$25",
      position: { top: "25%", left: "8%" },
      delay: 0,
      zIndex: 10,
    },
    {
      id: 2,
      app: "PIX",
      title: "Transferência Recebida",
      message: "Você recebeu uma transferência",
      position: { top: "15%", right: "2%" },
      delay: 0.05,
      zIndex: 10,
    },
    // Notificações abaixo - Na frente do corpo (z-index maior) - Centralizadas sobre a foto
    {
      id: 3,
      app: "PIX",
      title: "Transferência PIX Recebida",
      message: "Você recebeu uma transferência de R$800",
      position: { bottom: "-5%", left: "28%" },
      delay: 0.1,
      zIndex: 30,
    },
    {
      id: 4,
      app: "PIX",
      title: "Transferência Recebida",
      message: "Você recebeu uma transferência de R$1.200",
      position: { bottom: "00%", right: "18%" },
      delay: 0.15,
      zIndex: 30,
    },
  ])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Primeira Seção - Hero com Logo, Texto e Imagem */}
      <div className="bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Componente de carrossel no topo */}
          <ElevvePatternBackground />

          {/* Logo Caio Rebelo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
                Caio
              </h1>
              <div className="h-12 w-[2px] bg-[#D4AF37]"></div>
              <h2 className="text-2xl md:text-3xl font-normal text-[#D4AF37]">
                Rebelo
              </h2>
            </div>
          </motion.div>

          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-4xl"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Eu posso te ajudar a <span className="text-[#D4AF37]">escalar</span> suas <span className="text-[#D4AF37]">vendas</span> e <span className="text-[#D4AF37]">aumentar</span> seus <span className="text-[#D4AF37]">lucros</span> com <span className="text-[#D4AF37]">estratégias</span> <span className="text-[#D4AF37]">validadas</span> de <span className="text-[#D4AF37]">anúncios online</span>
            </p>
          </motion.div>

          {/* Botão com animação de líquido */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 flex justify-center"
          >
            <LiquidButton />
          </motion.div>

          {/* Área da imagem com notificações */}
          <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden pb-8">
            {/* Notificações em cima - Atrás do corpo */}
            {notifications.filter(n => n.position.top && n.zIndex === 10).map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}

            {/* Imagem - No meio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative z-20 matheus-image-container"
            >
              {/* Container da imagem */}
              <div className="relative matheus-image-wrapper matheus-image-wrapper-fade">
                <img
                  src="/imgmatheus.png"
                  alt="Caio Rebelo"
                  className="matheus-image max-w-full h-auto max-h-[500px] object-contain"
                />
              </div>
            </motion.div>

            {/* Notificações abaixo - Na frente do corpo */}
            {notifications.filter(n => n.position.bottom && n.zIndex === 30).map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>

          {/* Componente de carrossel abaixo da foto */}
          <ElevvePatternBackground />
        </div>
      </div>

      {/* Fade de transição entre preto e branco */}
      <div className="h-24 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] via-[#2a2a2a] via-[#3a3a3a] via-[#4a4a4a] via-[#5a5a5a] to-gray-100"></div>

      {/* Seção Superior - Fundo Cinza Claro */}
      <div className="bg-gray-100 text-black">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Vou elevar seu business
            </h1>
          </motion.div>

          {/* Subtítulo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            O marketing completo pro seu negócio            </p>
          </motion.div>

          {/* Boxes de Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 max-w-2xl mx-auto"
          >
            <FeatureBox
              icon={<Rocket className="w-8 h-8" />}
              text="Como encontrar as ofertas mais escaladas"
            />
            <FeatureBox
              icon={<Bot className="w-8 h-8" />}
              text="Como montar uma operação com BOT no X1"
            />
            <FeatureBox
              icon={<div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center"><DollarSign className="w-6 h-6" /></div>}
              text="Como testar e escalar com pouca verba"
            />
            <FeatureBox
              icon={<div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center"><ArrowUp className="w-6 h-6" /></div>}
              text="Sem enrolação! Apenas aplicar e lucrar"
            />
          </motion.div>
        </div>
      </div>

      {/* Seção de Transição - Cards de Lucro */}
      <div className="bg-gradient-to-b from-gray-100 via-gray-50 to-[#0a0a0a] py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-md mx-auto"
          >
            <ProfitCard amount="331,93" />
            <ProfitCard amount="873,21" />
            <ProfitCard amount="492,81" />
          </motion.div>
        </div>
      </div>

      {/* Seção de Call to Action - Parte de baixo */}
      <div className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            {/* Título */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37]">
              Não vai ter outra chance
            </h2>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-white">
              Uma única chance. Se perder, já era.
            </p>

            {/* Botão CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center pt-4 relative z-0"
            >
              <LiquidButtonCTA />
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-12 mt-12 border-t border-gray-800"
            >
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
                Caio Rebelo © 2025 - Todos os direitos reservados.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Componente do botão
const LiquidButton = () => {
  return (
    <div className="relative inline-block">
      {/* Efeito de luz dourada neon atrás do botão */}
      <div className="absolute inset-0 bg-[#D4AF37] blur-3xl opacity-80 rounded-full -z-10 scale-125"></div>
      
      <button className="relative px-16 py-6 rounded-full font-bold text-white text-lg md:text-xl overflow-hidden">
        {/* Base sólida do botão - Efeito de luz dourada neon */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] opacity-95"></div>
        
        {/* Conteúdo do botão */}
        <span className="relative z-20 flex items-center gap-3 tracking-wider">
          <span className="ultra-cinematic-text-glow">QUERO A CONSULTORIA ONLINE</span>
          <ArrowRight className="w-5 h-5" />
        </span>
      </button>
    </div>
  )
}

// Componente de Feature Box
const FeatureBox = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="feature-box group relative rounded-lg p-5 flex items-center justify-between cursor-pointer transition-all duration-300 hover:scale-[1.01]">
      {/* Linha ouro vertical à esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] rounded-l-lg"></div>
      
      {/* Container principal */}
      <div className="flex items-center justify-between w-full pl-6">
        {/* Lado esquerdo: Ícone e texto */}
        <div className="flex flex-col items-start gap-3 flex-1">
          {/* Ícone centralizado no topo */}
          <div className="flex justify-center w-full">
            <div className="text-[#D4AF37]">
              {icon}
            </div>
          </div>
          {/* Texto abaixo do ícone */}
          <p className="text-black font-medium text-base md:text-lg leading-tight text-left">
            {text}
          </p>
        </div>
        
        {/* Seta à direita */}
        <div className="flex-shrink-0 ml-4">
          <ArrowLeft className="w-5 h-5 text-black group-hover:-translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  )
}

// Componente de Card de Lucro
const ProfitCard = ({ amount }: { amount: string }) => {
  const [isInView, setIsInView] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      transition={{ duration: 0.6 }}
      className={`profit-card bg-[#1a1a1a] rounded-lg p-5 relative min-h-[120px] border border-gray-800 transition-all duration-500 ${
        isInView ? "profit-card-visible" : "profit-card-blurred"
      }`}
    >
      {/* "Lucro" no topo-esquerda */}
      <span className="absolute top-5 left-5 text-[#D4AF37] font-semibold text-base">
        Lucro
      </span>
      
      {/* Valor e ícone no canto inferior-direito */}
      <div className="absolute bottom-5 right-5 flex items-center gap-3">
        <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
          R$ {amount}
        </p>
        <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
          <Info className="w-3 h-3 text-white" />
        </div>
      </div>
    </motion.div>
  )
}

// Componente de botão CTA
const LiquidButtonCTA = () => {
  return (
    <div className="relative inline-block z-0">
      {/* Efeito de luz dourada neon atrás do botão */}
      <div className="absolute inset-0 bg-[#D4AF37] blur-3xl opacity-80 rounded-full scale-125" style={{ zIndex: -1 }}></div>
      
      <button className="relative px-16 py-6 rounded-full font-bold text-white text-lg md:text-xl overflow-visible z-10">
        {/* Base sólida do botão - Efeito de luz dourada neon */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] opacity-95 rounded-full"></div>
        
        {/* Conteúdo do botão */}
        <span className="relative z-20 flex items-center gap-3 tracking-wider">
          <span className="ultra-cinematic-text-glow">QUERO A CONSULTORIA ONLINE</span>
          <ArrowRight className="w-5 h-5" />
        </span>
      </button>
    </div>
  )
}

// Componente de fundo com ELEVVE repetido
const ElevvePatternBackground = () => {
  const itemsPerRow = 6;
  const row1Items = Array.from({ length: itemsPerRow });
  const row2Items = Array.from({ length: itemsPerRow });
  
  // Criar múltiplas cópias para loop infinito perfeito
  const row1Duplicated = [...row1Items, ...row1Items, ...row1Items];
  const row2Duplicated = [...row2Items, ...row2Items, ...row2Items];
  
  return (
    <div className="relative w-full py-4 overflow-hidden bg-[#0a0a0a]">
      <div className="relative z-5 space-y-0.2 md:space-y-1">
        {/* Linha de cima - move para direita */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10 md:gap-6 px-4 md:px-6"
            animate={{
              x: ['0%', '-33.333%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: '300%',
            }}
          >
            {row1Duplicated.map((_, i) => (
              <motion.div
                key={`row1-${i}`}
                className="text-center flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
              >
                <span 
                  className="text-sm md:text-base lg:text-lg font-bold text-[#D4AF37] whitespace-nowrap"
                  style={{
                    textShadow: '0 0 6px rgba(212, 175, 55, 0.6), 0 0 12px rgba(212, 175, 55, 0.4)',
                    letterSpacing: '0.1em',
                    fontWeight: 700
                  }}
                >
                  ELEVE
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Linha de baixo - move para esquerda */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10 md:gap-6 px-4 md:px-6"
            animate={{
              x: ['-33.333%', '0%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: '300%',
            }}
          >
            {row2Duplicated.map((_, i) => (
              <motion.div
                key={`row2-${i}`}
                className="text-center flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
              >
                <span 
                  className="text-sm md:text-base lg:text-lg font-bold text-[#D4AF37] whitespace-nowrap"
                  style={{
                    textShadow: '0 0 6px rgba(212, 175, 55, 0.6), 0 0 12px rgba(212, 175, 55, 0.4)',
                    letterSpacing: '0.1em',
                    fontWeight: 700
                  }}
                >
                  ELEVE
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Componente de notificação
const NotificationCard = ({ notification }: { notification: Notification }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Mostra imediatamente, com delay mínimo apenas para animação suave
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, notification.delay * 1000)

    return () => clearTimeout(timer)
  }, [notification.delay])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const isPix = notification.app === "PIX"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={
        isVisible
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: [0, -2, 2, -2, 0],
            }
          : {}
      }
      transition={{
        duration: 0.4,
        delay: notification.delay,
        rotate: {
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        },
      }}
      className={`notification-card-3d absolute rounded-lg p-4 md:p-5 max-w-[280px] md:max-w-[320px] overflow-hidden ${notification.position.top ? `top-[${notification.position.top}]` : ""} ${notification.position.left ? `left-[${notification.position.left}]` : ""} ${notification.position.right ? `right-[${notification.position.right}]` : ""}`}
      style={{
        top: notification.position.top,
        bottom: notification.position.bottom ? (isMobile ? '15%' : notification.position.bottom) : undefined,
        left: notification.position.left,
        right: notification.position.right ? (notification.id === 4 && !isMobile ? '25%' : notification.position.right) : undefined,
        zIndex: notification.zIndex || 10,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Fade à esquerda */}
      <div className="absolute inset-0 notification-fade-left pointer-events-none z-10"></div>
      
      {/* Conteúdo */}
      <div className="relative z-0 flex items-start gap-3 md:gap-4">
        <div
          className={`w-12 h-12 md:w-14 md:h-14 rounded flex items-center justify-center flex-shrink-0 ${
            isPix ? "bg-[#D4AF37]/20" : "bg-gray-700"
          }`}
        >
          {isPix ? (
            <div className="text-[#D4AF37] font-bold text-lg md:text-xl">∞</div>
          ) : (
            <div className="text-gray-300 font-bold text-lg md:text-xl">KVN</div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm md:text-base font-semibold text-white mb-1.5 md:mb-2">
            {notification.title}
          </p>
          <p className="text-xs md:text-sm text-gray-400 leading-tight">
            {notification.message}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Elevve

