import { cvData } from "@/cv-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronRight } from "lucide-react";

const SectionTitle = ({
  title, 
  subtitle, 
  icon: Icon 
}: {
  title: string; 
  subtitle?: string; 
  icon?: any;
}) => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center mb-4">
      {Icon && (
        <div className="bg-yellow-400 p-3 rounded-full mr-4">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-900" />
        </div>
      )}
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">{title}</h1>
    </div>
    {subtitle && (
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const TimelineConnector = ({ isLast = false }: { isLast?: boolean }) => (
  <div className="flex flex-col items-center absolute left-4 md:left-6">
    <div className="w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900 z-10"></div>
    {!isLast && (
      <div className="w-0.5 h-full bg-gradient-to-b from-yellow-400 to-gray-600 mt-2"></div>
    )}
  </div>
);

const EducationCard = ({ education, index, total, isEven }: { 
  education: any; 
  index: number; 
  total: number;
  isEven: boolean;
}) => {
  const getCurrentYear = () => new Date().getFullYear();
  const isCurrentStudy = education.period.includes("en cours");
  
  return (
    <div className={`relative flex items-center mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <TimelineConnector isLast={index === total - 1} />
      
      <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-16`}>
        <Card className={`bg-gradient-to-br ${
          index === 0 
            ? 'from-yellow-400/20 to-yellow-600/10 border-yellow-400/50' 
            : 'from-gray-800 to-gray-700 border-gray-600'
        } shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
          isCurrentStudy ? 'ring-2 ring-yellow-400/30' : ''
        }`}>
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <CardTitle className={`text-lg md:text-xl font-bold mb-2 ${
                  index === 0 ? 'text-yellow-300' : 'text-yellow-400'
                }`}>
                  {education.degree}
                </CardTitle>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm md:text-base">{education.institution}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm md:text-base">{education.period}</span>
                    {isCurrentStudy && (
                      <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/50">
                        En cours
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${
                  index === 0 ? 'bg-yellow-400/20' : 'bg-gray-700'
                }`}>
                  {index === 0 ? (
                    <Award className="w-6 h-6 text-yellow-400" />
                  ) : (
                    <BookOpen className="w-6 h-6 text-yellow-400" />
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {education.details && education.details.length > 0 && (
              <div>
                <h4 className="font-semibold text-yellow-400 mb-3 flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Compétences acquises :
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {education.details.map((detail: string, i: number) => (
                    <div 
                      key={i} 
                      className="flex items-start p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-yellow-400/30 transition-colors"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const EducationStats = () => {
  const { education } = cvData;
  const totalYears = new Date().getFullYear() - 2018; // Depuis le BTS
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30">
        <CardContent className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
            {totalYears}+
          </div>
          <div className="text-gray-300 text-sm md:text-base">
            Années d'études en informatique
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30">
        <CardContent className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
            {education.length}
          </div>
          <div className="text-gray-300 text-sm md:text-base">
            Diplômes et formations
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30">
        <CardContent className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
            Master
          </div>
          <div className="text-gray-300 text-sm md:text-base">
            Niveau d'études actuel
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const EducationPage = () => {
  const { education } = cvData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle 
        title="Mon Parcours Académique" 
        subtitle="Un cheminement progressif vers l'expertise en ingénierie du web et intelligence artificielle"
        icon={GraduationCap} 
      />
      
      <EducationStats />
      
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-gray-600 to-transparent"></div>
        
        {education.map((edu, index) => (
          <EducationCard
            key={index}
            education={edu}
            index={index}
            total={education.length}
            isEven={index % 2 === 1}
          />
        ))}
      </div>
      
      {/* Section Future Goals */}
      <Card className="mt-12 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border-yellow-400/30">
        <CardHeader>
          <CardTitle className="text-center text-yellow-400 text-2xl md:text-3xl flex items-center justify-center">
            <Award className="w-8 h-8 mr-3" />
            Objectifs de Formation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="space-y-3">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <GraduationCap className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-yellow-400 text-lg">Expertise Technique</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Maîtriser les technologies émergentes en IA et développement web
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-yellow-400 text-lg">Formation Continue</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Rester à la pointe des innovations technologiques
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationPage;