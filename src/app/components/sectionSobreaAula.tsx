
interface SectionSobreaAulaProps {

   habilidadesPedagogica: string[]
   habilidadesTecnicas: string[]
   objetivo: string
}




export default function SectionSobreaAula({ habilidadesPedagogica, habilidadesTecnicas, objetivo }: SectionSobreaAulaProps) {

   return (

      <>
         <section className="mt-6">
            <h2 className="text-lg font-semibold">O que você vai aprender</h2>
            <ul className="mt-2 space-y-2 text-sm">
               <li className="flex items-start gap-2">
                  <span className="text-green-500">✔</span>
                  <span>{objetivo}</span>
               </li>

            </ul>
         </section>


         <div className="relative max-w-4xl border-0 rounded-none w-full mt-8 p-1 grid grid-cols-2 gap-4">

            <section className="mt-6">
               <h2 className="text-lg font-semibold text-gray-900 italic">Habilidades Pedagogia</h2>
               <div className="flex flex-wrap gap-2 mt-2">
                  {habilidadesPedagogica.map((skill) => (
                     <span key={skill} className=" border-orange-400 border text-gray-800 px-3 py-1 rounded-md font-medium text-xs hover:bg-orange-100">
                        {skill}
                     </span>
                  ))}
               </div>
            </section>

            <section className="mt-6">
               <h2 className="text-lg font-semibold text-gray-900 italic">Habilidades Técnicas</h2>
               <div className="flex flex-wrap gap-2 mt-2">
                  {habilidadesTecnicas.map((skill) => (
                     <span key={skill} className=" border-blue-400 border text-gray-800 px-3 py-1 rounded-md font-medium text-xs hover:bg-blue-100">
                        {skill}
                     </span>
                  ))}
               </div>
            </section>

         </div>




      </>

   )
}