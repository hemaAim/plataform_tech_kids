import { Progress } from "@/components/ui/progress";

export default function LevelProgress({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="w-32">
      <Progress value={level * 33} className="h-2 bg-gray-300" />
      <p className="text-sm">{level === 1 ? "Fácil" : level === 2 ? "Intermediário" : "Avançado"}</p>
    </div>
  );
}
