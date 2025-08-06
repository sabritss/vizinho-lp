import { Button } from "./ui/button";
import { Apple, Play, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from 'figma:asset/a197a8cf338010d7241f971d69857d1a4ea2030b.png';

export function FinalCallSection() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-yellow-400/5 bg-[radial-gradient(circle_at_center,_transparent_1px,_rgba(255,235,59,0.08)_1px)] bg-[length:32px_32px]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img src={logo} alt="Vizinho App Logo" className="h-12 w-auto mx-auto filter brightness-0 invert" />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-yellow-400 mb-8 leading-tight">
          A confiança que você precisa está 
          <span className="font-bold"> na sua vizinhança</span>
        </h2>

        {/* Download CTAs */}
        <div className="mb-12">
          <p className="text-yellow-400 font-bold text-xl mb-6">
            Baixe agora e comece a descobrir:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px] font-bold"
            >
              <Apple className="w-6 h-6" />
              <span>Baixar para iPhone</span>
            </Button>
            <Button 
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px] font-bold"
            >
              <Play className="w-6 h-6" />
              <span>Baixar para Android</span>
            </Button>
          </div>

          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full flex items-center gap-3 mx-auto"
          >
            <Users className="w-6 h-6" />
            <span>Sou profissional - Quero me cadastrar</span>
          </Button>
        </div>

        {/* Community preview */}
        <div className="bg-yellow-400/10 rounded-3xl p-8 border border-yellow-400/20">
          <div className="flex justify-center mb-4">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
                "https://images.unsplash.com/photo-1494790108755-2616c2c20c11?w=50&h=50&fit=crop",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop"
              ].map((src, index) => (
                <div key={index} className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400">
                  <ImageWithFallback
                    src={src}
                    alt={`Membro da comunidade ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-yellow-200/70 text-lg">
            <strong className="text-yellow-400">Faça parte dessa comunidade</strong> de vizinhos que descobriram uma forma mais confiável de encontrar serviços
          </p>
        </div>
      </div>
    </section>
  );
}