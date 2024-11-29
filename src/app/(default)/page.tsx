export const metadata = {
  title: "Home - Consumo consiente",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/home-page/hero-home";
import Resources from "@/components/home-page/resources";
import Workflows from "@/components/home-page/workflows";
import Features from "@/components/home-page/features";
import Testimonials from "@/components/home-page/testimonials";
import Cta from "@/components/home-page/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Resources />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
