import CosmicBackground from "@/components/cosmic-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import { useGlossary } from "@/components/glossary-modal";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import HowItWorksSection from "@/components/how-it-works-section";
import EconomySection from "@/components/economy-section";
import OnboardingSection from "@/components/onboarding-section";
import RightsGovernanceSection from "@/components/rights-governance-section";
import InfrastructureSection from "@/components/infrastructure-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const { openGlossary, GlossaryModal } = useGlossary();

  return (
    <div className="text-foreground min-h-screen overflow-x-hidden">
      <CosmicBackground />
      <Navigation onGlossaryOpen={openGlossary} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <EconomySection />
      <OnboardingSection />
      <RightsGovernanceSection />
      <InfrastructureSection />
      <ContactSection />
      <Footer />
      <GlossaryModal />
    </div>
  );
}
