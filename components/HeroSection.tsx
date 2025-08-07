import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Apple, Play, Star, Users, Shield } from "lucide-react";
const logo = '/img/logo.png';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 px-4 py-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-black/3 bg-[radial-gradient(circle_at_center,_transparent_1px,_rgba(0,0,0,0.03)_1px)] bg-[length:32px_32px]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content - Left Side */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Logo - Bigger on mobile */}
            <div className="flex justify-center lg:justify-start">
              <img src={logo} alt="Vizinho App" className="h-14 md:h-12 w-auto" />
            </div>

            {/* Main Message - Better mobile hierarchy */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-black leading-[1.1]">
                <span className="font-light">Encontre</span><br />
                <span className="font-bold">profissionais de confiança</span><br />
                <span className="font-light">na sua vizinhança</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-black/80 max-w-lg mx-auto lg:mx-0 leading-tight">
                Indicações reais de vizinhos que já testaram e aprovaram
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center text-black/70">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Verificado</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span className="text-sm font-medium">Avaliado</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Comunidade</span>
              </div>
            </div>

            {/* Download CTAs - Enhanced mobile */}
            <div id="download" className="space-y-4">
              <div className="bg-black/5 rounded-2xl p-4 lg:p-6">
                <p className="text-lg lg:text-xl font-medium text-black mb-4">
                  Baixe grátis agora:
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-black text-yellow-400 hover:bg-black/90 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl flex items-center justify-center gap-3 min-w-[160px] lg:min-w-[180px] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Apple className="w-5 lg:w-6 h-5 lg:h-6" />
                    <span>App Store</span>
                  </Button>
                  <Button 
                    size="lg"
                    className="bg-black text-yellow-400 hover:bg-black/90 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl flex items-center justify-center gap-3 min-w-[160px] lg:min-w-[180px] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Play className="w-5 lg:w-6 h-5 lg:h-6" />
                    <span>Google Play</span>
                  </Button>
                </div>

                <p className="text-sm text-black/60 mt-3 text-center lg:text-left">
                  Disponível para iOS e Android
                </p>
              </div>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main phone mockup */}
            <div className="relative">
              <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] h-96 w-48 relative overflow-hidden">
                  {/* Phone content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <img src={logo} alt="Vizinho" className="h-6 w-auto" />
                      <div className="text-xs text-gray-500">09:41</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <h3 className="font-medium text-black text-sm">Eletricista</h3>
                        <p className="text-xs text-gray-600">3 indicações próximas</p>
                      </div>
                      
                      <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-200">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm font-medium text-black">João Silva</span>
                        </div>
                        <div className="flex text-yellow-500 text-xs mb-1">★★★★★</div>
                        <p className="text-xs text-gray-600">Recomendado por 5 vizinhos</p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                          <span className="text-sm font-medium text-black">Carlos Pereira</span>
                        </div>
                        <div className="flex text-yellow-500 text-xs mb-1">★★★★☆</div>
                        <p className="text-xs text-gray-600">Recomendado por 2 vizinhos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating testimonial cards */}
              <div className="absolute -left-8 top-12 bg-white/90 backdrop-blur rounded-xl p-3 shadow-lg max-w-[140px] transform rotate-[-5deg]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                      alt="Ana"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-black">Ana</span>
                </div>
                <p className="text-xs text-gray-600">"Encontrei o melhor diarista!"</p>
              </div>

              <div className="absolute -right-8 bottom-16 bg-white/90 backdrop-blur rounded-xl p-3 shadow-lg max-w-[140px] transform rotate-[5deg]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                      alt="Pedro"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-black">Pedro</span>
                </div>
                <p className="text-xs text-gray-600">"Super confiável e rápido!"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof - simplified */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-white/20 backdrop-blur rounded-2xl px-6 py-4">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
                "https://images.unsplash.com/photo-1494790108755-2616c2c20c11?w=40&h=40&fit=crop"
              ].map((src, index) => (
                <div key={index} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <ImageWithFallback
                    src={src}
                    alt={`Usuário ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-black/70 font-medium">
              Junte-se à comunidade de vizinhos que já descobriram profissionais incríveis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
