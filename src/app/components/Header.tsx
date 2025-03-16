"use Client"
import { Orbitron } from "next/font/google";
import Image from "next/image";
import Link from "next/link"; // Importando o Link do Next.js

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "900"] });
type HeaderProp = {

  Img: string
  linkDashboard: string


}
export function Header({ Img, linkDashboard }: HeaderProp) {

  return (
    <div className="absolute z-20 w-full">

      <div className=" w-screen-xl  px-10 flex flex-wrap items-center justify-between mx-auto p-4 text-gray-800">
        <Image

          src={Img}
          alt="Next.js logo"
          width={130}
          height={600}
          priority
        />
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
            <li>
              <Link href={`/dashboard`} className="block py-2 px-3 dark:text-white rounded-sm md:bg-transparent md:p-0 ">
                &#8592;  {linkDashboard

                }
              </Link>
            </li>

          </ul>
        </div>


      </div>


    </div>
  );
}
