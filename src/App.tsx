// Importa o arquivo CSS global para aplicar os estilos do projeto.
import "./styles/globals.css";

import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { StorySection } from "./components/StorySection";
import { MissionSection } from "./components/MissionSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { CategoriesSection } from "./components/CategoriesSection";
import { TargetAudienceSection } from "./components/TargetAudienceSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FinalCallSection } from "./components/FinalCallSection";
import { Footer } from "./components/Footer";

// O componente principal da sua aplicação.
// Ele renderiza todas as seções da sua página.
export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <MissionSection />
      <FeaturesSection />
      <CategoriesSection />
      <TargetAudienceSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCallSection />
      <Footer />
    </div>
  );
}
