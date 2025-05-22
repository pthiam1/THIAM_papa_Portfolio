import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cvData } from '@/cv-data';
import { Briefcase } from 'lucide-react';
import React from 'react';

const SectionTitle: React.FC<{ title: string; icon?: React.ElementType }> = ({ title, icon: Icon }) => (
  <div className="flex items-center mb-8">
    {Icon && <Icon className="w-10 h-10 mr-4 text-yellow-400" />}
    <h1 className="text-4xl font-bold text-yellow-400 border-b-2 border-yellow-400 pb-2">{title}</h1>
  </div>
);

const ExperiencePage: React.FC = () => {
  const { experience } = cvData;

  return (
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="Mon Expérience Professionnelle" icon={Briefcase} />
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700 shadow-xl hover:shadow-yellow-400/30 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-yellow-400 text-2xl">{exp.role}</CardTitle>
              <CardDescription className="text-gray-400 mt-1 text-md">{exp.company} | {exp.period}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{exp.description}</p>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-4">
                  <span className="text-yellow-400 font-semibold mr-2">Technologies :</span>
                  <span className="text-gray-200">{exp.technologies.join(', ')}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
