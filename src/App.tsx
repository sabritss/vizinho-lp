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
