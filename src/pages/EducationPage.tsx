import { cvData } from "@/cv-data";
import { GraduationCap } from "lucide-react";
import React, { useEffect, useRef } from "react";

const SectionTitle: React.FC<{ title: string; icon?: React.ElementType }> = ({ title, icon: Icon }) => (
  <div className="flex items-center mb-8">
    {Icon && <Icon className="w-10 h-10 mr-4 text-yellow-400" />}
    <h1 className="text-4xl font-bold text-yellow-400 border-b-2 border-yellow-400 pb-2">{title}</h1>
  </div>
);

const EducationPage: React.FC = () => {
  const { education } = cvData;
  const carouselRef = useRef<HTMLDivElement>(null);

  // Défilement automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // Si on est presque à la fin, on revient au début
        if (scrollLeft + clientWidth + 10 >= scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({
            left: 340, // largeur d'une carte + margin
            behavior: "smooth",
          });
        }
      }
    }, 3000); // 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <SectionTitle title="Parcours académique" icon={GraduationCap} />
      <div
        ref={carouselRef}
        className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-400"
      >
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="min-w-[320px] max-w-xs bg-gray-800 border border-gray-700 rounded-xl shadow-lg flex-shrink-0 p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-yellow-400/50 cursor-pointer"
            style={{ transitionProperty: "transform, box-shadow" }}
          >
            <h2 className="text-xl font-semibold text-yellow-400">{edu.degree}</h2>
            <div className="text-gray-400 text-md mt-1">{edu.institution}</div>
            <div className="text-gray-500 text-sm mb-2">{edu.period}</div>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              {edu.details?.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;