"use client";
import { useSearchParams } from "next/navigation";
import SecurePDFViewer from '@/app/components/SecurePDFViewer';
import { Button } from "@/components/ui/button"
import {
  Dialog,

} from "@/components/ui/dialog"

import { Orbitron } from "next/font/google";


const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "900"] });

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Star } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Header } from "@/app/components/Header";
import { useLessons } from "@/context/lesson";
import CardDetalheAula from "@/app/components/CardDetalheDaAula";



const LessonPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const materialUrl = searchParams.get("materialUrl");
  const teacherResponse = searchParams.get("teacherResponse")
  const [activeTab, setActiveTab] = useState("Sobre");
  const GetUserdesafio = searchParams.get("tittltId")




  // Pegando as aulas pelo Contexto
  const { lessons, loading } = useLessons();

  if (loading) return <p>Carregando...</p>;

  // Aqui, assumimos que o usuário quer a aula pelo ID (que vem na URL)
  const lessonId = searchParams.get("lessonId");
  const selectedLesson = lessons.find((lesson) => lesson.id === lessonId);

  if (!selectedLesson) return <p>Aula não encontrada</p>;

  return (


    <div className="w-full">
      <Header Img="/logoAzul.svg" />
      <div className=" min-h-screen flex flex-col items-center p-6 ">

        <div className="max-w-4xl w-full   rounded-2xl p-6 z-10">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-blue-600">{selectedLesson.titulo}</span>
          </h1>
          <h2 className="text-2xl font-semibold mt-2"></h2>
          <p className="text-gray-700 mt-2 font-bold">
            <span className="text-blue-500 font-medium">Instrutor:</span> {selectedLesson.responsavel}
          </p>

          <p className="text-gray-700 mt-2">77.931 já se inscreveram</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-96  bg-gray-200  ">
          <Image src={"/oculos vr.svg"}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="relative  w-full left-30 max-w-screen h-full z-0 " />
        </div>


        <div >

        

        <CardDetalheAula curso={selectedLesson.curso} eixoCIEB={selectedLesson.eixoCIEB} nivel={selectedLesson.nivel} horas={selectedLesson.horas}/>
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

            <>
              <section className="mt-6">
                <h2 className="text-xl font-semibold">O que você vai aprender</h2>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✔</span>
                    <span>Acessar e se envolver com o metaverso e discutir o impacto potencial do metaverso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✔</span>
                    <span>Explore a importância de criar um metaverso que seja ético, seguro, inclusivo e acessível.</span>
                  </li>
                </ul>
              </section>

              <section className="mt-6">
                <h2 className="text-xl font-semibold">Habilidades que você terá</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['BlockChain', 'Interação homem-computador', 'Inovação', 'Marketing', 'Desenvolvimento organizacional', 'Mídia social', 'Experiência do usuário'].map((skill) => (
                    <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mt-6">
                <h2 className="text-xl font-semibold">Informações a saber</h2>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">🔗</span>
                    <span>Certificados compartilháveis <span className="text-blue-600 cursor-pointer">Adicionar ao seu perfil do LinkedIn</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">📄</span>
                    <span>Avaliações <span className="font-semibold">6 tarefas</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">🌍</span>
                    <span>Ensinado em Inglês <span className="text-blue-600 cursor-pointer">20 idiomas disponíveis</span></span>
                  </div>
                </div>
              </section></>
          )}

          {activeTab === "Material" && (

            < div >


              <Dialog>

                <Button
                  onClick={() => setIsOpen(true)}
                  className="px-4 py-2 bg-blue-600 text-white "
                >
                  Tela Cheia
                </Button>

                {isOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
                    <div className="fixed inset-0 bg-white flex items-center justify-center p-4">
                      <Button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-lg bg-red-500 text-white px-3 py-1 rounded z-50"
                      >
                        Fechar
                      </Button>
                      <div className="w-[2000px] h-screen  p-0 flex items-center justify-center bg-black/80">


                        <div className="pdf-container flex flex-col justify-center min-h-screen w-screen">
                          {materialUrl ? (
                            <SecurePDFViewer pdfUrl={materialUrl} />
                          ) : (
                            <p>Carregando PDF...</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Dialog>
              <div className="mt-6">
                {materialUrl ? (
                  <SecurePDFViewer pdfUrl={materialUrl} />
                ) : (
                  <p>Carregando PDF...</p>
                )}
              </div>
            </ div>

          )}


        </div>

      </div>
    </div>


  );
};

export default LessonPage;
