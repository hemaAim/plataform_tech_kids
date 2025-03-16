
const PIPEFY_API_URL = process.env.NEXT_PUBLIC_PIPEFY_API_URL!;
const PIPEFY_TOKEN = process.env.NEXT_PUBLIC_PIPEFY_TOKEN

export type LessonDTO = {
   id: string;
   titulo: string;
   curso: string;
   horas: string;
   responsavel: string;
   material: string;
   dataHorario: string;
   habilidadesPedagogicas: string[];
   objetivo: string;
   numeroAula: string;
   nivel: string;
   habilidadesTecnicas: string[];
   eixoCIEB: string;
   segmentosCIEB: string;
   status: string[];
};


const parseArrayField = (fieldValue: string | undefined): string[] => {
   if (!fieldValue) return [];
   try {
      return JSON.parse(fieldValue).map((item: string) => item.trim());
   } catch (erro) {
      return [fieldValue.trim()]; // Retorna como um único item se não estiver no formato JSON
   }
};
export const Lesson = async (): Promise<LessonDTO[] | null> => {
   const query = `{
      pipe(id: 305831739) {
         id
         name
         cards_count
         phases {
            id
            name
            cards {
               edges {
                  node {
                     id
                     title
                     fields {
                        value
                        name
                     }
                  }
               }
            }
         }
      }
   }`;

   try {
      const response = await fetch(PIPEFY_API_URL, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${PIPEFY_TOKEN}`,
         },
         body: JSON.stringify({ query }),
      });

      if (!response.ok) {
         throw new Error(`Erro HTTP! Status: ${response.status}`);
      }

      const data = await response.json();
      //console.log("Resposta completa da API:", JSON.stringify(data, null, 2));

      if (!data?.data?.pipe?.phases) {
         throw new Error("Phases não encontradas na resposta da API");
      }

      return data.data.pipe.phases.flatMap((phase:  { cards: { edges: { node: { fields: any[]; id: string; } }[] } }) =>
         phase.cards.edges.map((edge: any): LessonDTO => {
            const fields = edge.node.fields.reduce(
               (acc: Record<string, string>, field: any) => {
                  acc[field.name.trim()] = field.value;
                  return acc;
               },
               {}
            );

            return {
               id: edge.node.id,
               titulo: fields["Título da Aula"] || "Sem Título",
               curso: fields["Curso"] || "Sem descrição",
               horas: fields["Duração"] || "",
               responsavel: fields["Professor Responsável"] || "",
               material: fields["Material Didático"] || "",
               dataHorario: fields["Data e Horário"] || "",
               habilidadesPedagogicas: parseArrayField(fields["Habilidades Pedagógicas"] || "Não informadas"),
               objetivo: fields["Objetivo da Aula"] || "",
               numeroAula: fields["Numero da aula "] || "",
               nivel: fields["Nivel do Curso"] || "",
               habilidadesTecnicas: parseArrayField(fields["Habilidades técnicas"] || "Não informadas"),
               eixoCIEB: fields["Eixo do CIEB"] || "",
               segmentosCIEB: fields["Exios CIEB Segmentos"] || "",
               status: fields["Status da Aula"] || "",
            };
         })
      );
   } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return null;
   }
};



