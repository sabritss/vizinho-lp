import { Search, Users, Star, CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Busque o que precisa",
      description: "Digite o serviço que você procura ou navegue pelas categorias organizadas"
    },
    {
      number: "2", 
      icon: Users,
      title: "Veja as indicações",
      description: "Encontre profissionais recomendados pelos seus vizinhos com avaliações reais"
    },
    {
      number: "3",
      icon: Star,
      title: "Escolha com confiança",
      description: "Compare perfis, leia comentários e escolha quem tem a melhor reputação"
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Contrate e avalie",
      description: "Entre em contato direto e compartilhe sua experiência para ajudar outros vizinhos"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-black mb-6">
            Como <span className="font-bold">funciona?</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Em poucos passos, você encontra o profissional perfeito para suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-yellow-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">
                {step.title}
              </h3>
              
              <p className="text-black/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Pronto para começar?
            </h3>
            <p className="text-black/70 mb-6 text-lg">
              Junte-se à comunidade de vizinhos que já descobriram uma forma mais confiável 
              de encontrar profissionais
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h4 className="font-medium text-black mb-1">Para quem busca serviços</h4>
                <p className="text-sm text-black/60">Encontre profissionais recomendados</p>
              </div>
              <div id="profissional" className="bg-yellow-100 rounded-2xl p-4 border border-yellow-200">
                <h4 className="font-medium text-black mb-1">Para profissionais</h4>
                <p className="text-sm text-black/60">Cadastre-se e ganhe visibilidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}