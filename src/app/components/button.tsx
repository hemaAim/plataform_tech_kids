

import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";


import Link from "next/link"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "900", "500", "300"] });
type GradientButtonProps = {
  LinkPage?: any
  textButton?: string
  boolColor?: number
  Onclick?: any
}



export default function GradientButton({
  textButton = "Get Started",
  LinkPage = "", // 🔥 Define um link padrão 
  boolColor = 1,
  Onclick
}: GradientButtonProps) {
  return (
    <Link href={LinkPage} passHref>
      <Button
        onClick={Onclick}
        className={`${poppins.className} px-6 py-5 rounded-sm ${boolColor ? "bg-blue-600 text-white hover:bg-blue-700 " : "bg-transparent border-blue-600 border-1 text-blue-600 hover:bg-blue-100"} shadow-md hover:scale-105 transition`}
      >
        {textButton}
      </Button>
    </Link>
  );
}

