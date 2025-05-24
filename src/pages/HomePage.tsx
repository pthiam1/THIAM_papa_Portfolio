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
      <p className="text-gray-300 max-w-2xl mx-auto">
      Bienvenue sur mon CV en ligne ! Je suis ravi de vous présenter mon parcours, mes compétences et mes projets. N'hésitez pas à explorer les différentes sections pour en savoir plus sur moi.
      </p>

      {/* téléchargement du CV(xt....m) */}
      <div className="mt-8">
      <a
        href="public/CV_THIAM_PAPA.pdf"
        download
        className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
        onClick={() => {
        setTimeout(() => {
          alert("Demandez le code à Papa Thiam pour ouvrir le PDF !");
        }, 100);
        }}
      >
        Télécharger mon CV
      </a>
      <span className="ml-4 text-gray-400">
        (Format PDF)
      </span>
      </div>
    </div>
  );
};

export default HomePage;
