export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/home/hero-home";
import Workflows from "@/components/home/workflows";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import Cta from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
