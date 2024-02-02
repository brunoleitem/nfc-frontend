import InfoSVG from "@/components/assets/hero2";
import Info2SVG from "@/components/assets/hero3";
import { CarouselComponent } from "@/components/main/carousel";
import { Header } from "@/components/main/header";

export default function Home() {
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
          <CarouselComponent />
        </section>
        <section className="mt-16 flex flex-col">
          <h1 className="lg:text-6xl mb-4 text-3xl text-theme-green font-bold md:text-5xl leading-10 lg:leading-[72px]">
            Todos os seus links em um só lugar
          </h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </span>
          <InfoSVG className="mt-8 lg:w-[832px] lg:h-[498px] self-center" />
        </section>
        <section className="mt-16 flex flex-col">
          <h1 className="lg:text-6xl mb-4 text-3xl text-theme-green font-bold md:text-5xl leading-10 lg:leading-[72px]">
            É fácil, rápido e intuitivo
          </h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </span>
          <Info2SVG className="mt-8 lg:w-[832px] lg:h-[498px] self-center" />
        </section>
      </main>
    </div>
  );
}
