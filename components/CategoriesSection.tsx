import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CategoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    {
      name: "Utilidades",
      icon: "🔧",
      color: "bg-blue-50 border-blue-200",
      services: ["Eletricista", "Encanador", "Faxineira", "Motorista", "Marceneiro", "Pintor", "Jardineiro", "Serralheiro"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop"
    },
    {
      name: "Saúde", 
      icon: "🩺",
      color: "bg-red-50 border-red-200",
      services: ["Gastroenterologista", "Oftalmologista", "Ginecologista", "Pediatra", "Dentista", "Fisioterapeuta", "Psicólogo", "Nutricionista"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    },
    {
      name: "Restaurantes",
      icon: "🍽️", 
      color: "bg-orange-50 border-orange-200",
      services: ["Jantar romântico", "Almoço família", "Happy hour", "Brunch", "Café especial", "Comida japonesa", "Pizza", "Hamburgueria"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop"
    },
    {
      name: "Beleza",
      icon: "✨",
      color: "bg-pink-50 border-pink-200", 
      services: ["Cabeleireiro", "Manicure", "Esteticista", "Massagista", "Barbeiro", "Micropigmentação", "Designer sobrancelha", "Podólogo"],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=200&fit=crop"
    },
    {
      name: "Delivery",
      icon: "🚚",
      color: "bg-green-50 border-green-200",
      services: ["Pizza", "Japonês", "Hambúrguer", "Açaí", "Farmácia", "Mercado", "Água", "Gás"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop"
    },
    {
      name: "Concierge",
      icon: "👑",
      color: "bg-purple-50 border-purple-200",
      services: ["Personal trainer", "Professor particular", "Organizador eventos", "Pet sitter", "Chef", "Consultor", "Fotógrafo", "DJ"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(categories.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(categories.length / 2)) % Math.ceil(categories.length / 2));
  };

  return (
    <section id="categorias" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light text-black mb-4">
            <span className="font-bold">Variedade</span> que você precisa
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Descubra a amplitude de categorias e serviços disponíveis no app
          </p>
        </div>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(categories.length / 2) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                    <div className="grid grid-cols-2 gap-3">
                      {categories.slice(slideIndex * 2, slideIndex * 2 + 2).map((category, index) => (
                        <div key={index} className={`${category.color} rounded-xl overflow-hidden border group`}>
                          {/* Header with image and icon */}
                          <div className="relative h-20 overflow-hidden">
                            <ImageWithFallback
                              src={category.image}
                              alt={category.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2">
                              <div className="bg-white/90 backdrop-blur rounded-full p-1 shadow-sm">
                                <span className="text-sm">{category.icon}</span>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-3">
                            <h3 className="font-bold text-black mb-2 text-sm">
                              {category.name}
                            </h3>

                            {/* Services grid */}
                            <div className="grid grid-cols-1 gap-1">
                              {category.services.slice(0, 3).map((service, serviceIndex) => (
                                <span key={serviceIndex} className="bg-white/70 text-black/70 text-xs px-2 py-1 rounded-full text-center">
                                  {service}
                                </span>
                              ))}
                              <span className="text-black/50 text-xs text-center mt-1">
                                +{category.services.length - 3} mais
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
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
                {Array.from({ length: Math.ceil(categories.length / 2) }, (_, index) => (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className={`${category.color} rounded-2xl overflow-hidden border group hover:shadow-lg transition-all duration-300`}>
                {/* Header with image and icon */}
                <div className="relative h-32 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="bg-white/90 backdrop-blur rounded-full p-2 shadow-sm">
                      <span className="text-xl">{category.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-black mb-3">
                    {category.name}
                  </h3>

                  {/* Services grid */}
                  <div className="grid grid-cols-2 gap-1">
                    {category.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="bg-white/70 text-black/70 text-xs px-2 py-1 rounded-full text-center">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Simple bottom message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            <strong className="text-black">E muito mais!</strong> Cada categoria tem dezenas de subcategorias 
            e centenas de profissionais verificados pela comunidade.
          </p>
        </div>
      </div>
    </section>
  );
}