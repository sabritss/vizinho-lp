import { Heart, Target, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MissionSection() {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Conectar vizinhos a profissionais de confiança, fortalecendo a economia local e criando uma rede de recomendações genuínas.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: Eye,
      title: "Nossa Visão", 
      description: "Ser a plataforma preferida para encontrar serviços locais, onde cada indicação carrega a confiança de quem realmente conhece.",
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=400&h=300&fit=crop",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Heart,
      title: "Nossos Valores",
      description: "Confiança, proximidade e transparência. Acreditamos no poder das comunidades para gerar recomendações verdadeiras.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
      bgColor: "bg-green-50", 
      borderColor: "border-green-200"
    }
  ];

  return (
    <section id="essencia" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-black mb-6">
            Nossa <span className="font-bold">essência</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Conheça os valores que nos motivam a criar uma comunidade mais conectada e confiável
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className={`${value.bgColor} border ${value.borderColor} rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group`}>
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <value.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {value.title}
                  </h3>
                </div>
                
                <p className="text-black/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Acreditamos no poder das pessoas
                </h3>
                <p className="text-black/70 text-lg leading-relaxed mb-4">
                  Cada indicação no nosso app vem de alguém que realmente conhece o profissional. 
                  Não são reviews fake ou algoritmos. É a confiança real entre vizinhos.
                </p>
                <p className="text-black/60">
                  Assim construímos uma comunidade onde todos ganham: 
                  quem busca encontra qualidade, quem oferece ganha reconhecimento.
                </p>
              </div>
              
              <div className="h-64 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=300&fit=crop"
                  alt="Comunidade conectada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}