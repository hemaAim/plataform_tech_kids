import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import LevelProgress from "./LevelProgress";

type CardDetalheAulaProp = {

   curso: string;
   horas: string;
   nivel: string;
   eixoCIEB: string;


}

export default function CardDetalheAula({ curso, horas, nivel, eixoCIEB }: CardDetalheAulaProp) {


   return (
      <Card className="relative max-w-4xl min-w-4xl w-full mt-42 p-1 grid grid-cols-4 gap-4">

         <CardContent className="p-2 flex items-center justify-center flex-col  border-r-1 border-blue-300">

            <p className="font-semibold text-sm">Eixo trabalhado</p>
            <p className="text-gray-500 text-xs">{eixoCIEB}</p>
         </CardContent>



         <CardContent className="p-2 flex items-center justify-center flex-col  border-r-1 border-blue-300">

            <p className="font-semibold text-sm">Curso</p>
            <p className="text-gray-500 text-xs">{curso}</p>
         </CardContent>


         <CardContent className="p-2 flex items-center justify-center flex-col  border-r-1 border-blue-300">

            <p className="font-semibold text-sm">Nível </p>
            <p className="text-gray-500 text-sm">{nivel}</p>
         </CardContent>


         <CardContent className="p-2 flex items-center gap-2  justify-center flex-col ">
            <p className="font-semibold text-sm">Duração</p>
            <p className="text-gray-500 text-xs">{horas}h</p>
         </CardContent>




      </Card>
   )

}