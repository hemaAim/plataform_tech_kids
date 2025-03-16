
"use client"
import { useEffect, useState } from "react";

const DB_NAME = "meuBancoDePDFs"; // Novo nome para o banco
const STORE_NAME = "arquivosPDF";


export function usePDFCache(pdfUrl: string) {
   const [cachedUrl, setCachedUrl] = useState<string | null>(null);

   useEffect(() => {
      if (!pdfUrl) return;

      const openDB = indexedDB.open(DB_NAME, 1);
      openDB.onupgradeneeded = (event) => {
         const db = (event.target as IDBOpenDBRequest).result;
         db.createObjectStore(STORE_NAME, { keyPath: "id" });
      };

      openDB.onsuccess = (event) => {
         const db = (event.target as IDBOpenDBRequest).result;
         const transaction = db.transaction(STORE_NAME, "readonly");
         const store = transaction.objectStore(STORE_NAME);
         const getRequest = store.get(pdfUrl);

         getRequest.onsuccess = () => {
            if (getRequest.result) {
               setCachedUrl(URL.createObjectURL(getRequest.result.pdfBlob));
            } else {
               fetchAndCachePDF(pdfUrl);
            }
         };
      };
   }, [pdfUrl]);
   //console.log("passei no hook1", cachedUrl)

   async function fetchAndCachePDF(url: string) {
      try {
         const response = await fetch(url);
         const blob = await response.blob();

         const openDB = indexedDB.open(DB_NAME, 1);
         openDB.onsuccess = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            const transaction = db.transaction(STORE_NAME, "readwrite");
            const store = transaction.objectStore(STORE_NAME);
            store.put({ id: url, pdfBlob: blob });
            setCachedUrl(URL.createObjectURL(blob));
         };
      } catch (error) {
         console.error("Erro ao buscar o PDF:", error);
      }
   }
  //console.log("passei no hook2", cachedUrl)
   return cachedUrl;
}
