export const metadata = {
  title: "Sobre - Consumo consiente",
  description: "Page description",
};

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/about/hero-about";
import Workflows from "@/components/about/workflows";
import Features from "@/components/about/features";
import Testimonials from "@/components/about/testimonials";
import Cta from "@/components/about/cta";

export default function About() {
  return (
    <>
      <div className="w-full top-0 h-[300px] flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold">Sobre</h1>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">Sobre</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
