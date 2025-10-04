import { cvData } from '@/cv-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Puzzle, 
  Link as LinkIcon, 
  Github, 
  ExternalLink, 
  Calendar,
  Building,
  Star,
  GitFork,
  Code2,
  ArrowRight
} from 'lucide-react';

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

const ProjectStats = () => {
  const { projects } = cvData;
  const currentYear = new Date().getFullYear();
  const recentProjects = projects.filter(p => p.year && parseInt(p.year) >= currentYear - 2).length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <Card className="bg-gray-800 border-2 border-blue-500">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
            {projects.length}+
          </div>
          <div className="text-gray-300 font-medium">Projets réalisés</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gray-800 border-2 border-green-500">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
            {recentProjects}
          </div>
          <div className="text-gray-300 font-medium">Projets récents</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gray-800 border-2 border-purple-500">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
            5+
          </div>
          <div className="text-gray-300 font-medium">Années d'expérience</div>
        </CardContent>
      </Card>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const getCardColor = (index: number) => {
    const colors = [
      "border-yellow-500",
      "border-blue-500",
      "border-green-500",
      "border-purple-500",
      "border-red-500",
      "border-pink-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <Card className={`bg-gray-800 border-2 ${getCardColor(index)} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group overflow-hidden`}>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <CardTitle className="text-yellow-400 text-xl md:text-2xl mb-2 group-hover:text-yellow-300 transition-colors">
              {project.name}
            </CardTitle>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {project.company && (
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 flex items-center">
                  <Building className="w-3 h-3 mr-1" />
                  {project.company}
                </Badge>
              )}
              {project.year && (
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {project.year}
                </Badge>
              )}
              {!project.company && (
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
                  Projet personnel
                </Badge>
              )}
            </div>
          </div>
          
          {project.link && (
            <div className="flex gap-2 ml-4">
              {project.link !== "#" ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors p-2 rounded-full hover:bg-gray-800/50 group-hover:scale-110"
                  title="Voir le projet"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              ) : (
                <div className="text-gray-500 p-2 rounded-full" title="Lien non disponible">
                  <LinkIcon className="w-5 h-5" />
                </div>
              )}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
          {project.description}
        </p>
        
        <div className="space-y-4">
          <h4 className="text-yellow-400 font-semibold flex items-center">
            <Code2 className="w-4 h-4 mr-2" />
            Technologies utilisées :
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, i: number) => (
              <span 
                key={i} 
                className="bg-gray-800/60 text-gray-300 px-3 py-1 text-sm rounded-full font-medium border border-gray-700/50 hover:border-yellow-400/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsPage = () => {
  const { projects } = cvData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SectionTitle 
        title="Mes Projets" 
        subtitle="Découvrez mes réalisations et projets développés au fil des années"
        icon={Puzzle} 
      />
      
      <ProjectStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
      
      {/* GitHub Section */}
      <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-yellow-400/30 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center text-yellow-400 text-2xl md:text-3xl flex items-center justify-center mb-4">
            <Github className="w-8 h-8 mr-3" />
            Voir Plus de Projets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Découvrez l'ensemble de mes projets, contributions open-source et expérimentations 
              sur mon profil GitHub. Plus de 20 repositories couvrant différents domaines technologiques.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-bold text-yellow-400 text-lg">Projets Étoilés</h3>
                <p className="text-gray-400 text-sm">Mes meilleures réalisations</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <GitFork className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-bold text-yellow-400 text-lg">Contributions</h3>
                <p className="text-gray-400 text-sm">Open source & collaborations</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Code2 className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-bold text-yellow-400 text-lg">Expérimentations</h3>
                <p className="text-gray-400 text-sm">Tests et prototypes</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/pthiam1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/30"
              >
                <Github className="w-6 h-6 mr-3" />
                Visiter mon GitHub
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              
              <div className="text-gray-400 text-sm">
                <span className="font-semibold">github.com/pthiam1</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <p className="text-gray-400 text-sm">
                💡 <strong>Conseil :</strong> N'hésitez pas à explorer mes repositories, 
                à les "star" s'ils vous intéressent, ou à me contacter pour toute collaboration !
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsPage;
