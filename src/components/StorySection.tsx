import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Users, Star, ArrowRight } from "lucide-react";

export function StorySection() {
  const benefits = [
    {
      icon: Shield,
      title: "Confiança Real",
      description: "Indicações de vizinhos que realmente testaram os serviços",
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=400&h=250&fit=crop",
      highlight: "Sem reviews falsas"
    },
    {
      icon: Users,
      title: "Comunidade Local", 
      description: "Profissionais que já conhecem e atendem sua vizinhança",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
      highlight: "Conhecem sua região"
    },
    {
      icon: Star,
      title: "Qualidade Garantida",
      description: "Avaliações honestas de pessoas sem conflito de interesse",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=250&fit=crop",
      highlight: "Honestidade total"
    }
  ];

  return (
    <section id="porque-usar" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light text-black mb-4">
            Por que o <span className="font-bold">Vizinho APP?</span>
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            A diferença está na confiança que só a comunidade pode oferecer
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative bg-gray-50 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-black" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-black/70 leading-relaxed mb-4">
                  {benefit.description}
                </p>

                {/* Highlight */}
                <div className="inline-flex items-center gap-2 bg-yellow-50 rounded-lg px-3 py-2 border border-yellow-200">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-800 font-medium text-sm">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 max-w-3xl mx-auto">
            <p className="text-lg text-black/80">
              <strong className="text-black">Simples assim:</strong> seus vizinhos recomendam, 
              você contrata com confiança, e a comunidade cresce mais unida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}