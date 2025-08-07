import { Search, Hammer } from "lucide-react";

export function TargetAudienceSection() {
  return (
    <section className="py-20 px-4 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">
            Para quem é o <span className="font-bold">Vizinho APP?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Para quem procura */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <Search className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black">Para quem procura</h3>
            </div>
            
            <div className="space-y-4 text-black/80">
              <p className="text-lg">
                <strong>Quem quer contratar com confiança</strong> e não sabe por onde começar.
              </p>
              <p className="text-lg">
                <strong>Quem já cansou de pesquisar no Google</strong> e preferia ouvir alguém dizendo: 
                <em> "eu já usei e recomendo"</em>.
              </p>
              <p className="text-lg">
                <strong>Quem valoriza a opinião dos vizinhos</strong> na hora de escolher um serviço.
              </p>
            </div>

            <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
              <p className="text-black font-medium italic">
                "Porque a melhor propaganda ainda é o boca a boca da vizinhança"
              </p>
            </div>
          </div>

          {/* Para quem oferece */}
          <div className="bg-black rounded-2xl p-8 shadow-lg border-2 border-yellow-400">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <Hammer className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">Para quem oferece</h3>
            </div>
            
            <div className="space-y-4 text-yellow-200/90">
              <p className="text-lg">
                <strong>Profissionais que vivem do próprio trabalho</strong>, mas não têm meios digitais para se divulgar.
              </p>
              <p className="text-lg">
                <strong>Pessoas que dependem da indicação</strong> de cliente para cliente — mas agora podem ser encontradas com mais facilidade.
              </p>
              <p className="text-lg">
                <strong>Prestadores que não têm site</strong>, não sabem usar Instagram, e muito menos Google Meu Negócio.
              </p>
            </div>

            <div className="mt-8 p-4 bg-yellow-400/20 rounded-lg border border-yellow-400/30">
              <p className="text-yellow-400 font-medium italic">
                "Visibilidade para quem trabalha por conta própria e vive de indicação"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}