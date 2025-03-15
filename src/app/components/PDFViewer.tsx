"use client"
import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";

const PDFViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Defina o caminho para o worker, garantindo que o PDF.js saiba onde buscar
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js"; // Coloque o arquivo pdf.worker.min.js no diretório public

    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const page = await pdf.getPage(1); // Renderizar apenas a primeira página

        const canvas = canvasRef.current;
        if (canvas) {
          const context = canvas.getContext("2d");
          if (context) { // Garantir que o contexto não seja null
            const viewport = page.getViewport({ scale: 1 });

            // Ajuste para o tamanho do canvas
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Renderiza a página no canvas
            await page.render({ canvasContext: context, viewport }).promise;
          } else {
            console.error("Erro: Não foi possível obter o contexto 2D do canvas.");
          }
        }
      } catch (error) {
        console.error("Erro ao carregar o PDF:", error);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  return (
    <div className="pdf-container" style={{ textAlign: "center" }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default PDFViewer;
