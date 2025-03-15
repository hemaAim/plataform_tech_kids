"use Client"
import { Orbitron } from "next/font/google";
import Image from "next/image";
import Link from "next/link"; // Importando o Link do Next.js

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "900"] });
type HeaderProp = { 

  Img: string

}
export function Header({Img}: HeaderProp) {

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
                <Link href="/dashboard" className="block py-2 px-3 dark:text-white rounded-sm md:bg-transparent md:p-0">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/desafios"
                  className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Desafios
                </Link>
              </li>
              <li>
                <Link
                  href="/vouchers"
                  className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Vouchers
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>


        </div>

      
    </div>
  );
}
