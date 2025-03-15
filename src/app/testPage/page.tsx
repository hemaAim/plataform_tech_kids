import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"

import { Star, ThumbsUp } from "lucide-react";
import GradientButton from "../components/button";

export default function MetaMetaverso() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <span className="text-blue-600">Meta</span>
        </h1>
        <h2 className="text-2xl font-semibold mt-2">O que é o Metaverso?</h2>
        <p className="text-gray-600 mt-2">
          <span className="text-blue-500">Instrutor:</span> Taught by Experts
        </p>
         <GradientButton textButton="Concluído" boolColor={0} />
        <p className="text-gray-500 mt-2">77.931 já se inscreveram</p>
      </div>

      <div className="max-w-4xl w-full mt-6 grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">6 módulos</h3>
            <p className="text-gray-500">Obtenha insights sobre um tópico e aprenda os fundamentos.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-2">
            <Star className="text-yellow-500" />
            <h3 className="font-semibold text-lg">4.6</h3>
            <p className="text-gray-500">(980 avaliações)</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">Nível Básico</h3>
            <p className="text-gray-500">Experiência recomendada</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">Cronograma flexível</h3>
            <p className="text-gray-500">Aprox. 9 horas - Aprenda no seu ritmo</p>
          </CardContent>
        </Card>
       
        
        
      </div>
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <span className="text-blue-600">Meta</span>
        </h1>
        <h2 className="text-2xl font-semibold mt-2">O que é o Metaverso?</h2>
        <p className="text-gray-600 mt-2">
          <span className="text-blue-500">Instrutor:</span> Taught by Experts
        </p>
         <GradientButton textButton="Concluído" boolColor={0} />
        <p className="text-gray-500 mt-2">77.931 já se inscreveram</p>
      </div>

    </div>
  );
}
