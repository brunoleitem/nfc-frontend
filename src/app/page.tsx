import CardSVG from "@/components/assets/card";
import { Header } from "@/components/main/header";
import { SignInForm } from "@/components/pages/signin/form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function SignIn() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Header />
      <main className=" flex-1 flex flex-col  w-4/5 ">
        <section className="lg:mt-16 mt-9 items-center justify-center">
          <h1 className="lg:text-6xl text-3xl font-bold md:text-5xl leading-10 lg:leading-[72px]">
            <span className="text-theme-green">Simplifique suas</span> conexões{" "}
            <span className="text-theme-green">e amplie suas </span>
            possibilidades
            <span className="text-theme-green">
              , utilize a NFC para alavancar o seu negócio
            </span>
          </h1>
          <button className="py-4 px-7 bg-theme-green text-lg lg:text-xl md:text-xl text-theme-dark rounded-full font-bold w-[280px] mt-6">
            Cadastre-se
          </button>
        </section>
        <section className="mt-16">
          <Carousel>
            <CarouselContent className="-ml-1">
              <CarouselItem className="lg:basis-1/3 md:basis-1/2 ">
                <CardSVG />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2 ">
                <CardSVG />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2 ">
                <CardSVG />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2 ">
                <CardSVG />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </section>
      </main>
    </div>
  );
}
