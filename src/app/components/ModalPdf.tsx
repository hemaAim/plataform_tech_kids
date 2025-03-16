"use client"
import { Dialog } from "@/components/ui/dialog";
import SecurePDFViewer from "./SecurePDFViewer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ModalProps {

   materialUrl: string | null
}


export default function ModalPDF({ materialUrl }: ModalProps) {

   const [isOpen, setIsOpen] = useState(false);
   return (

      < div className="m-4 grid justify-items-center">
         <Dialog>

            <Button
               onClick={() => setIsOpen(true)}
               className="px-4 py-2 bg-blue-600 text-white max-w-xl"
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
         <div className="mt-6 w-3xl">
            {materialUrl ? (
               <SecurePDFViewer pdfUrl={materialUrl}  />
            ) : (
               <p>Carregando PDF...</p>
            )}
         </div>
      </ div>
   )
}