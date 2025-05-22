import React from 'react';
import { cvData } from '@/cv-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Puzzle, Link as LinkIcon } from 'lucide-react';

const SectionTitle: React.FC<{ title: string; icon?: React.ElementType }> = ({ title, icon: Icon }) => (
  <div className="flex items-center mb-8">
    {Icon && <Icon className="w-10 h-10 mr-4 text-yellow-400" />}
    <h1 className="text-4xl font-bold text-yellow-400 border-b-2 border-yellow-400 pb-2">{title}</h1>
  </div>
);

const ProjectsPage: React.FC = () => {
  const { projects } = cvData;

  return (
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="Mes Projets" icon={Puzzle} />
      <div className="space-y-10">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700 shadow-xl hover:shadow-yellow-400/30 transition-shadow duration-300 overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-yellow-400 text-2xl">{project.name}</CardTitle>
                  <CardDescription className="text-gray-400 mt-1">
                    {project.company ? `${project.company}` : 'Projet personnel/académique'}
                    {project.year && ` - ${project.year}`}
                  </CardDescription>
                </div>
                {project.link && project.link !== "#" && (
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-500 transition-colors ml-4 p-2 rounded-full hover:bg-gray-700">
                     <LinkIcon className="w-6 h-6"/>
                   </a>
                )}
                 {project.link && project.link === "#" && ( 
                   <a href={project.link} className="text-yellow-400 hover:text-yellow-500 transition-colors ml-4 p-2 rounded-full hover:bg-gray-700">
                     <LinkIcon className="w-6 h-6"/>
                   </a>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-700 text-yellow-400 px-3 py-1 text-sm rounded-md font-medium">{tech}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
