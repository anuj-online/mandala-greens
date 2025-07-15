import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import ServicesSection from '@/components/landing/services-section';
import ProjectsSection from '@/components/landing/projects-section';
import TrainingSection from '@/components/landing/training-section';
import AiConsultantSection from '@/components/landing/ai-consultant-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <TrainingSection />
        <AiConsultantSection />
      </main>
      <Footer />
    </div>
  );
}
