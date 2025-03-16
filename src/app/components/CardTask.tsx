
import Image from "next/image";
import { Orbitron } from "next/font/google";
import GradientButton from "./button";
import { LessonDTO } from "@/app/services/lesson";




const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "900"] });

type CardTaskProps = {
  lesson: LessonDTO;
};



export default function CardTask({ lesson }: CardTaskProps) { 

  let materialUrl = "";
  try {
    const materialArray = JSON.parse(lesson.material); // Converte para array
    if (Array.isArray(materialArray) && materialArray.length > 0) {
      materialUrl = materialArray[0]; // Pega a URL do primeiro item
    }
  } catch (error) {
    console.error("Erro ao processar o material:", error);
  }
 // console.log("dados", materialUrl)

  const URL = `lesson?lessonId=${lesson.id}&materialUrl=${encodeURIComponent(materialUrl)}`; 


  
  return (
    <div className={` bg-white  rounded-2xl p-4 w-[350px] shadow-2xl border border-orange-100 dark:border dark:border-[#111] font-[family-name:var(--font-geist-sans)]`}>
      <div className="relative">
        <Image
          src="/ImagemCard.svg" // Substituir pelo caminho correto da imagem
          alt="Pessoa usando VR"
          width={350}
          height={200}
          className=""
        />
        <span className="absolute top-3 left-3 bg-blue-500 text-white text-sm px-3 py-1 rounded font-bold">
          {lesson.curso}
        </span>
      </div>
      <div className="mt-4 text-orange-600">
        <h2 className={`${orbitron.className} text-lg font-bold`}>{lesson.titulo}</h2>
        <p className="text-sm text-gray-700 mt-4 mb-6 leading-tight">
          Professor: {lesson.responsavel}
        </p> 

        <p className="text-xs text-gray-700 mt-4 mb-6 leading-tight italic">
          {lesson.objetivo}
        </p>
      </div>
      <div className="flex flex-row gap-4 py-6 justify-between">
        <GradientButton
          textButton="Iniciar"

          LinkPage={`/dashboard/${URL}`}
        />
        <GradientButton textButton="Concluído" boolColor={0}   />
      </div>


    </div>
  );
}
