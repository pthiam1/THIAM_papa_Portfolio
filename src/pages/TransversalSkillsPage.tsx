import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Target, Lightbulb, Clock, MessageCircle, Zap } from 'lucide-react';

interface TransversalSkill {
  name: string;
  level: number;
  description: string;
  icon: React.ElementType;
  examples: string[];
}

const SectionTitle: React.FC<{ title: string; icon?: React.ElementType }> = ({ title, icon: Icon }) => (
  <div className="flex items-center justify-center mb-8">
    {Icon && <Icon className="w-8 h-8 mr-4 text-yellow-400" />}
    <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 border-b-2 border-yellow-400 pb-2 text-center">{title}</h1>
  </div>
);

const TransversalSkillsPage: React.FC = () => {
  const transversalSkills: TransversalSkill[] = [
    {
      name: "Gestion de Projet",
      level: 85,
      description: "Capacité à planifier, organiser et diriger des projets de A à Z",
      icon: Target,
      examples: [
        "Planification et suivi de projets web complexes",
        "Utilisation d'outils comme Trello, Jira, Notion",
        "Respect des délais et des budgets",
        "Coordination d'équipes multidisciplinaires"
      ]
    },
    {
      name: "Travail en Équipe",
      level: 90,
      description: "Excellente capacité de collaboration et de communication",
      icon: Users,
      examples: [
        "Collaboration efficace avec des équipes diverses",
        "Partage de connaissances et mentorat",
        "Résolution collaborative de problèmes",
        "Adaptation aux différents styles de travail"
      ]
    },
    {
      name: "Autonomie",
      level: 88,
      description: "Capacité à travailler de manière indépendante et proactive",
      icon: Zap,
      examples: [
        "Prise d'initiative sur les projets",
        "Auto-formation continue",
        "Résolution autonome de problèmes techniques",
        "Gestion efficace du temps et des priorités"
      ]
    },
    {
      name: "Créativité & Innovation",
      level: 82,
      description: "Approche créative pour résoudre des problèmes complexes",
      icon: Lightbulb,
      examples: [
        "Développement de solutions innovantes",
        "Amélioration continue des processus",
        "Approche créative du design UX/UI",
        "Veille technologique et adoption de nouvelles technologies"
      ]
    },
    {
      name: "Communication",
      level: 86,
      description: "Excellentes compétences de communication orale et écrite",
      icon: MessageCircle,
      examples: [
        "Présentation de projets techniques à différents publics",
        "Rédaction de documentation claire",
        "Communication client et stakeholders",
        "Animation de réunions et formations"
      ]
    },
    {
      name: "Gestion du Temps",
      level: 84,
      description: "Optimisation et priorisation efficace des tâches",
      icon: Clock,
      examples: [
        "Respect systématique des deadlines",
        "Priorisation efficace des tâches",
        "Multitasking sur plusieurs projets",
        "Utilisation d'outils de productivité (GTD, Pomodoro)"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Compétences Transversales" icon={Users} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {transversalSkills.map((skill, index) => (
          <Card 
            key={index} 
            className="bg-gray-800 border-2 border-yellow-500 shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-105"
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-yellow-400 text-xl md:text-2xl">
                <skill.icon className="w-6 h-6 md:w-8 md:h-8 mr-3 text-yellow-400" />
                {skill.name}
              </CardTitle>
              <div className="mt-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Niveau de maîtrise</span>
                  <span className="text-sm font-semibold text-yellow-400">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {skill.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-yellow-400 mb-3 text-sm md:text-base">
                  Exemples concrets :
                </h4>
                <ul className="space-y-2">
                  {skill.examples.map((example, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm md:text-base">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span className="leading-relaxed">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Section additionnelle sur la philosophie de travail */}
      <Card className="mt-8 md:mt-12 bg-gray-800 border-2 border-yellow-400">
        <CardHeader>
          <CardTitle className="text-center text-yellow-400 text-2xl md:text-3xl">
            Ma Philosophie de Travail
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="space-y-3">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-yellow-400 text-lg">Excellence</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Recherche constante de la qualité dans chaque projet
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-yellow-400 text-lg">Collaboration</h3>
              <p className="text-gray-300 text-sm md:text-base">
                L'intelligence collective au service de l'innovation
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-yellow-400 text-lg">Innovation</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Adoption proactive des nouvelles technologies
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransversalSkillsPage;