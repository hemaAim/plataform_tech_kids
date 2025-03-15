import Image from "next/image";
import { Orbitron } from "next/font/google";
import GradientButton from "./components/button";
import ManchasBgFundo from "./components/BgFundoMancha";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "900"] });
export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="flex items-center justify-center min-h-screen h-screen   gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">


        <ManchasBgFundo />
        <div className="h-screen w-screen max-w-7xl flex justify-between items-end ">

          <div className={`${orbitron.className} flex h-full flex-col items-start justify-center text-white  `}>
            <h1 className="text-4xl  whitespace-nowrap "> O Metaverso já chegou </h1>
            <p>Vamos explorar, e não ficar de fora</p>

            <div className="flex flex-row gap-8 py-6">
              <GradientButton textButton="Começar" LinkPage={"dashboard"} />
              <GradientButton textButton="Login" boolColor={0} />
            </div>
          </div>

          <Image
            className=""
            src="/hero-page.svg"
            alt="Next.js logo"
            width={700}
            height={600}
            priority
          />



        </div>

      </div>
    </div>
  );
}
