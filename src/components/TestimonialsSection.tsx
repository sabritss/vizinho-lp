import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      story: "Mudei para o bairro recentemente e estava perdida para encontrar uma diarista confiável. Pelo app, vi que a Maria tinha várias indicações de vizinhos e resolvi testar. Foi perfeito!",
      author: "Ana Carolina",
      location: "Vila Madalena",
      service: "Encontrou diarista",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      rating: 5
    },
    {
      story: "Como profissional, o app mudou minha vida. Antes dependia só do boca a boca. Agora tenho um perfil onde os vizinhos podem me encontrar facilmente. Minha agenda está sempre cheia!",
      author: "João Silva",
      location: "Eletricista • Pinheiros",
      service: "Profissional cadastrado",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      rating: 5
    },
    {
      story: "O que mais me impressiona é a qualidade das indicações. São sempre pessoas que os vizinhos realmente conhecem e confiam. Já usei para eletricista, encanador e até pet shop!",
      author: "Carla Mendes",
      location: "Itaim Bibi",
      service: "Usuária ativa",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light text-black mb-4">
            Histórias <span className="font-bold">reais</span> de quem já usa
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Descubra como o Vizinho APP está ajudando pessoas a encontrar soluções confiáveis
          </p>
        </div>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-yellow-200/50">
                      <div className="mb-4">
                        <div className="text-yellow-400 text-2xl mb-3">\"</div>
                        <p className="text-black/80 leading-relaxed text-sm mb-3">
                          {testimonial.story}
                        </p>
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-sm">★</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                            <ImageWithFallback
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-black text-sm mb-1">
                              {testimonial.author}
                            </h4>
                            <p className="text-xs text-black/60 mb-1">
                              {testimonial.location}
                            </p>
                            <p className="text-xs text-yellow-600 font-medium">
                              {testimonial.service}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-yellow-400' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-yellow-200/50">
                <div className="mb-4">
                  <div className="text-yellow-400 text-2xl mb-3">\"</div>
                  <p className="text-black/80 leading-relaxed mb-3">
                    {testimonial.story}
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-black mb-1">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-black/60 mb-1">
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-yellow-600 font-medium">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Simplified Trust message */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur rounded-2xl p-6 max-w-3xl mx-auto border border-yellow-200/50">
            <h3 className="font-bold text-black mb-3">
              Confiança • Proximidade • Qualidade
            </h3>
            <p className="text-black/70 text-sm">
              Indicações reais de vizinhos que conhecem e testaram os serviços na sua região
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}