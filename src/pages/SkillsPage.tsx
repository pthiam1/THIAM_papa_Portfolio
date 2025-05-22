
import React from 'react';
import { cvData } from '@/cv-data';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from 'lucide-react';

const SectionTitle: React.FC<{ title: string; icon?: React.ElementType }> = ({ title, icon: Icon }) => (
  <div className="flex items-center mb-8">
    {Icon && <Icon className="w-10 h-10 mr-4 text-yellow-400" />}
    <h1 className="text-4xl font-bold text-yellow-400 border-b-2 border-yellow-400 pb-2">{title}</h1>
  </div>
);

const SkillsPage: React.FC = () => {
  const { technicalSkills } = cvData;

  return (
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="Mes Compétences Techniques" icon={Lightbulb} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technicalSkills.map((skillGroup, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700 shadow-xl hover:shadow-yellow-400/30 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-yellow-400 text-2xl">{skillGroup.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                {skillGroup.skills.map((skill, i) => (
                  <li key={i} className="text-lg">{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
