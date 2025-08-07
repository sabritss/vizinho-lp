import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Shield, CheckCircle } from "lucide-react";

export function FeaturesSection() {
  const situations = [
    {
      icon: Shield,
      situation: "Seu ar condicionado quebrou no calor",
      problem: "Você precisa de alguém urgente, mas não sabe em quem confiar",
      solution: "Veja quem seus vizinhos recomendam e contrate na hora",
      image: "https://images.unsplash.com/photo-1635274575500-dff2d56e354a?w=500&h=300&fit=crop",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Clock,
      situation: "Precisa de uma diarista para a casa dos seus pais",
      problem: "Você quer alguém de confiança, mas não conhece ninguém na região",
      solution: "Veja avaliações reais de vizinhos e contrate com segurança",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop",
      bgColor: "bg-green-50", 
      borderColor: "border-green-200"
    },
    {
      icon: CheckCircle,
      situation: "Quer fazer uma festa de aniversário especial",
      problem: "Precisa de vários fornecedores (doces, decoração, DJ) mas não sabe quem é confiável",
      solution: "Encontre todos os profissionais já aprovados pelos seus vizinhos",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=300&fit=crop",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-black mb-6">
            O <span className="font-bold">Vizinho APP</span> resolve sua vida
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            Imagine situações reais do dia a dia onde você precisa de um profissional de confiança. 
            O Vizinho APP transforma essas necessidades em soluções rápidas e seguras.
          </p>
        </div>

        {/* Situations */}
        <div className="space-y-12">
          {situations.map((item, index) => (
            <div key={index} className={`${item.bgColor} ${item.borderColor} border rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300`}>
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-black" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6 leading-tight">
                      {item.situation}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/80 rounded-2xl p-6 border border-red-100">
                      <p className="text-red-700 font-bold mb-3 text-lg">😰 O problema</p>
                      <p className="text-black/80 text-lg leading-relaxed">{item.problem}</p>
                    </div>

                    <div className="bg-white/80 rounded-2xl p-6 border border-green-200">
                      <p className="text-green-700 font-bold mb-3 text-lg">✅ Com o Vizinho APP</p>
                      <p className="text-black/80 text-lg leading-relaxed">{item.solution}</p>
                    </div>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-3 bg-yellow-100 rounded-full px-4 py-2 w-fit">
                    <span className="text-yellow-800 font-medium">Resolução simples e confiável</span>
                    <CheckCircle className="w-5 h-5 text-yellow-800" />
                  </div>
                </div>

                {/* Image */}
                <div className={`h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <ImageWithFallback
                    src={item.image}
                    alt={item.situation}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-black rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-400/5" />
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-4">
                Pare de arriscar com desconhecidos
              </h3>
              <p className="text-yellow-200/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                Quando você precisa de alguém, confie em quem seus vizinhos já aprovaram. 
                É mais que uma recomendação: é a tranquilidade de saber que você está fazendo a escolha certa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}