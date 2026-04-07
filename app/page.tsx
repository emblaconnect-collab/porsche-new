import HeroSection from "@/components/sections/HeroSection";
import ShowroomPreview from "@/components/sections/ShowroomPreview";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ShowroomPreview />
      <StatsSection />
      <CTASection />
    </>
  );
}
