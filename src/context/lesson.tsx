"use client"
import { Lesson, LessonDTO } from "@/app/services/lesson";
import { createContext, useContext, useEffect, useState } from "react";



const LessonContext = createContext<{ lessons: LessonDTO[]; loading: boolean }>({
  lessons: [],
  loading: true,
});

export const LessonProvider = ({ children }: { children: React.ReactNode }) => {
  const [lessons, setLessons] = useState<LessonDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLessons = async () => {
      setLoading(true);
      try {
        const fetchedLessons = await Lesson();
        if (fetchedLessons) {
          setLessons(fetchedLessons);
        }
      } catch (error) {
        console.error("Erro ao buscar as aulas", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  return (
    <LessonContext.Provider value={{ lessons, loading }}>
      {children}
    </LessonContext.Provider>
  );
};

export const useLessons = () => {
  const context = useContext(LessonContext);
  if (!context) {
    throw new Error("useLessons deve ser usado dentro de um LessonProvider");
  }
  return context;
};