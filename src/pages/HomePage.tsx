import myImage from '@/assets/cam.jpeg'; // Uncomment and use if you want to import as a module
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming you might upload an image
import { cvData } from '@/cv-data';
import { UserCircle } from 'lucide-react'; // Fallback icon
import React from 'react';

const HomePage: React.FC = () => {
  const { name, title, about } = cvData;

  // Placeholder for photo - src/assets/photo.jpg
  const userImageSrc = myImage; // Use this if you want to import the image as a module
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8">
      {/* ...présentation existante... */}
      <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-6 border-4 border-yellow-400">
        {userImageSrc ? (
          <AvatarImage src={userImageSrc} alt={name} />
        ) : (
          <UserCircle className="w-full h-full text-yellow-400" />
        )}
        <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">{name}</h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6">{title}</p>
      <blockquote className="text-lg md:text-xl text-gray-400 italic max-w-2xl mx-auto mb-8">
        "{about}"
      </blockquote>

      {/* Section Formations */}
      <section className="w-full max-w-2xl mt-8 text-left">
        <h2 className="text-2xl font-bold text-yellow-400 flex items-center mb-4">
          <span role="img" aria-label="chapeau diplômé" className="mr-2">🎓</span>
          FORMATIONS
        </h2>
        <ul className="space-y-4">
          <li>
            <div className="flex items-center">
              <span role="img" aria-label="université" className="mr-2">🏫</span>
              <span className="font-semibold">Le Havre Université – Le Havre</span>
            </div>
            <div className="ml-7 text-gray-300">
              Master Ingénierie du Web, des Objets Communicants et Systèmes Complexes <span className="ml-2">| 📅 2024 – 2026</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span role="img" aria-label="université" className="mr-2">🏫</span>
              <span className="font-semibold">La Rochelle Université – La Rochelle</span>
            </div>
            <div className="ml-7 text-gray-300">
              Licence 3 en Informatique <span className="ml-2">| 📅 2023</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span role="img" aria-label="lycée" className="mr-2">🏫</span>
              <span className="font-semibold">Lycée Modeste Leroy</span>
            </div>
            <div className="ml-7 text-gray-300">
              BTS SNIR (Système Numérique Informatique et Réseau) <span className="ml-2">| 📅 2020</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
