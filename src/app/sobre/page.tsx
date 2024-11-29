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

import About from "@/components/about-page/about";
import Mission from "@/components/about-page/mission";

export default function AboutPage() {
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

      <About />
      <Mission />
    </>
  );
}
