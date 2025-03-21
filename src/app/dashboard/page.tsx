"use client";


import { Poppins } from "next/font/google";
import ManchasBgFundo from "../components/BgFundoMancha";
import { Header } from "../components/Header";
import CardTask from "../components/CardTask";
import { useLessons } from "@/context/lesson";
import Image from "next/image";
import { LessonDTO } from "../services/lesson";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "900", "500", "600", "700", "800"],
});

export default function Dashboard() {
  const { lessons, loading } = useLessons(); // Pegamos do contexto

  return (
    <div>
      <Header Img="/logoAzul.svg" linkDashboard="" />
      <div className="flex flex-col items-center justify-center min-h-screen sm:p-20 relative">
        <ManchasBgFundo />
        <div className={`${poppins.className} flex flex-col items-center justify-center`}>
          <h1 className="text-4xl text-gray-900 font-semibold flex flex-row text-center justify-center">
            Nossos Cursos da  <span className="text-blue-600"> 
              <Image
                       className="ml-2"
                        src="/logoAzul.svg"
                        alt="Next.js logo"
                        width={180}
                        height={600}
                        priority
                      /></span>
          </h1>
          <p className="font-light max-w-lg">
            Em cada aula, em cada módulo, uma nova imersão no universo virtual!
          </p>
          <div className="flex flex-wrap gap-6 py-6 max-w-8xl items-center justify-center">
            {loading ? (
              <p>Carregando aulas...</p>
            ) : (
              lessons.map((lesson: LessonDTO) => <CardTask key={lesson.id} lesson={lesson} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}