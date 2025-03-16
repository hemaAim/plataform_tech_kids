"use client";
import { useSearchParams } from "next/navigation";



import { useState } from "react";
import Image from "next/image";
import { Header } from "@/app/components/Header";
import { useLessons } from "@/context/lesson";
import CardDetalheAula from "@/app/components/CardDetalheDaAula";

import SectionSobreaAula from "@/app/components/sectionSobreaAula";
import ModalPDF from "@/app/components/ModalPdf";


const LessonPage = () => {


  const searchParams = useSearchParams();

 
  const [activeTab, setActiveTab] = useState("Sobre");





  // Pegando as aulas pelo Contexto
  const { lessons, loading } = useLessons();

  if (loading) return <p>Carregando...</p>;
  const materialUrl = searchParams.get("materialUrl");
  // Aqui, assumimos que o usuário quer a aula pelo ID (que vem na URL)
  const lessonId = searchParams.get("lessonId");
  const selectedLesson = lessons.find((lesson) => lesson.id === lessonId);

  if (!selectedLesson) return <p>Aula não encontrada</p>;

  return (
    <>


      <div className="w-full">
        <Header Img="/logoAzul.svg" linkDashboard="voltar" />
        <div className=" min-h-screen flex flex-col items-center p-6 ">

          <div className="max-w-4xl w-full rounded-2xl p-6 z-10">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-blue-600">{selectedLesson.titulo}</span>
            </h1>
            <h2 className="text-2xl font-semibold mt-2"></h2>
            <p className="text-gray-700 mt-2 font-bold">
              <span className="text-blue-500 font-medium">Instrutor:</span> {selectedLesson.responsavel}
            </p>


          </div>
          <div className="absolute top-0 left-0 w-full h-96  bg-gray-200  ">
            <Image src={"/oculos vr.svg"}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              className="relative  w-full left-30 max-w-screen h-full z-0 " />
          </div>


          <div >



            <CardDetalheAula curso={selectedLesson.curso} eixoCIEB={selectedLesson.eixoCIEB} nivel={selectedLesson.nivel} horas={selectedLesson.horas} />
          </div >

          <div className="max-w-4xl min-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <nav className="flex border-b">
              {["Sobre", "Material"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-gray-600 hover:text-blue-600 border-b-2 ${activeTab === tab ? "border-blue-600" : "border-transparent"}`}
                >
                  {tab}
                </button>
              ))}
            </nav>




            {activeTab === "Sobre" && (

              <SectionSobreaAula objetivo={selectedLesson.objetivo} habilidadesTecnicas={selectedLesson.habilidadesTecnicas} habilidadesPedagogica={selectedLesson.habilidadesPedagogicas} />
            )}

            {activeTab === "Material" && (

              <ModalPDF materialUrl={materialUrl} />

            )}


          </div>

        </div>
      </div>
    </>


  );
};

export default LessonPage;
