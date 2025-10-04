
import { cvData } from '@/cv-data';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Code2, 
  Shapes, 
  Share2, 
  Server, 
  Settings, 
  Brain, 
  ShieldCheck,
  Lightbulb,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react';

const skillIcons = {
  "Développement Web": Globe,
  "Mobile & IoT": Smartphone,
  "Backend & Bases de données": Database,
  "Programmation": Code2,
  "Modélisation & Conception": Shapes,
  "API & Services": Share2,
  "Systèmes & Réseaux": Server,
  "Outils & Méthodes": Settings,
  "Intelligence Artificielle": Brain,
  "Sécurité": ShieldCheck,
};

const skillLevels = {
  "Développement Web": 95,
  "Mobile & IoT": 80,
  "Backend & Bases de données": 90,
  "Programmation": 85,
  "Modélisation & Conception": 75,
  "API & Services": 88,
  "Systèmes & Réseaux": 70,
  "Outils & Méthodes": 85,
  "Intelligence Artificielle": 65,
  "Sécurité": 70,
};

const SectionTitle = ({
  title, 
  subtitle, 
  icon: Icon 
}: {
  title: string; 
  subtitle?: string; 
  icon?: any;
}) => (
  <div className="text-center mb-16">
    <div className="flex items-center justify-center mb-6">
      {Icon && (
        <div className="bg-yellow-400 p-4 rounded-full mr-4">
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-gray-900" />
        </div>
      )}
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">{title}</h1>
    </div>
    {subtitle && (
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const SkillsStats = () => {
  const { technicalSkills } = cvData;
  const totalSkills = technicalSkills.reduce((sum, group) => sum + group.skills.length, 0);
  const avgLevel = Object.values(skillLevels).reduce((sum, level) => sum + level, 0) / Object.values(skillLevels).length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <Card className="bg-gray-800 border-2 border-blue-500">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
            {technicalSkills.length}
          </div>
          <div className="text-gray-300 font-medium">Domaines d'expertise</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gray-800 border-2 border-green-500">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
            {totalSkills}+
          </div>
          <div className="text-gray-300 font-medium">Technologies maîtrisées</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gray-800 border-2 border-purple-500">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
            {Math.round(avgLevel)}%
          </div>
          <div className="text-gray-300 font-medium">Niveau moyen</div>
        </CardContent>
      </Card>
    </div>
  );
};

const SkillCard = ({ skillGroup, index }: { skillGroup: any; index: number }) => {
  const IconComponent = skillIcons[skillGroup.category as keyof typeof skillIcons] || Code2;
  const level = skillLevels[skillGroup.category as keyof typeof skillLevels] || 75;
  
  const getCardColor = (index: number) => {
    const colors = [
      "border-yellow-500",
      "border-blue-500",
      "border-green-500",
      "border-purple-500",
      "border-red-500",
      "border-pink-500",
      "border-indigo-500",
      "border-cyan-500",
      "border-orange-500",
      "border-teal-500",
    ];
    return colors[index % colors.length];
  };
  
  return (
    <Card className={`bg-gray-800 border-2 ${getCardColor(index)} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <IconComponent className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
          <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/50">
            {level}%
          </Badge>
        </div>
        
        <CardTitle className="text-yellow-400 text-xl md:text-2xl mb-3">
          {skillGroup.category}
        </CardTitle>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Niveau de maîtrise</span>
            <span>{level}%</span>
          </div>
          <Progress value={level} className="h-2" />
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {skillGroup.skills.map((skill: string, i: number) => (
            <div 
              key={i} 
              className="flex items-center justify-between p-2 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-yellow-400/30 transition-colors group-hover:bg-gray-800/50"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span className="text-gray-300 text-sm md:text-base">{skill}</span>
              </div>
              <Star className="w-4 h-4 text-yellow-400/60" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsPage = () => {
  const { technicalSkills } = cvData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SectionTitle 
        title="Mes Compétences Techniques" 
        subtitle="Un aperçu complet de mon expertise technologique et de mes domaines de spécialisation"
        icon={Lightbulb} 
      />
      
      <SkillsStats />
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {technicalSkills.map((skillGroup, index) => (
          <SkillCard key={index} skillGroup={skillGroup} index={index} />
        ))}
      </div>
      
      {/* Section Future Learning */}
      <Card className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 border-yellow-400/30">
        <CardHeader>
          <CardTitle className="text-center text-yellow-400 text-2xl md:text-3xl flex items-center justify-center">
            <TrendingUp className="w-8 h-8 mr-3" />
            En Cours d'Apprentissage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-yellow-400 text-lg">IA Avancée</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Deep Learning, Computer Vision, NLP
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-yellow-400 text-lg">Cloud Computing</h3>
              <p className="text-gray-300 text-sm md:text-base">
                AWS, Azure, Docker, Kubernetes
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Code2 className="w-8 h-8 text-gray-900" />
              </div>  
              <h3 className="font-bold text-yellow-400 text-lg">Frameworks Modernes</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Next.js, Nuxt.js, Flutter, SwiftUI
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsPage;
