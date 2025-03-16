"use client";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { usePDFCache } from "@/hooks/usePDFCache";

type SecurePDFViewerProps = {
  pdfUrl: string; 
  onClick?: any
};

export default function SecurePDFViewer({ pdfUrl, onClick }: SecurePDFViewerProps) {
  const cachedUrl = usePDFCache(pdfUrl);
  return (
    <div className=" h-screen w-full cursor-pointer"  onClick={onClick}>
       {cachedUrl ? (
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js" >
        
        <Viewer fileUrl={pdfUrl} />
      </Worker>
     ) : (
        <p>Carregando PDF...</p>
       )}
    </div>
  );
}
