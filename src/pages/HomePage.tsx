import myImage from '@/assets/cam.jpeg';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cvData } from '@/cv-data';
import { 
  UserCircle, 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  Code2,
  Briefcase,
  GraduationCap,
  Zap,
  ArrowRight,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { name, title, about, contact } = cvData;
  const userImageSrc = myImage;

  const quickStats = [
    { icon: GraduationCap, label: "Master IWOCS", value: "En cours" },
    { icon: Code2, label: "Technologies", value: "15+" },
    { icon: Briefcase, label: "Expérience", value: "5+ ans" },
  ];

  const highlights = [
    "🎯 Spécialisé en développement web moderne et IA",
    "🚀 Passionné par l'innovation technologique",
    "💼 Expérience en entreprise (HEBUS, VIGILUS)",
    "🎓 Formation continue en nouvelles technologies"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/50 px-4 py-2">
                  <Star className="w-4 h-4 mr-2" />
                  Portfolio 2025
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-white">Bonjour, je suis</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {name}
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                  {title}
                </p>
                
                <blockquote className="text-lg text-gray-400 italic border-l-4 border-yellow-400 pl-4 max-w-2xl">
                  "{about}"
                </blockquote>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 text-lg"
                >
                  <a
                    href="/THIAM_papa_Portfolio/CV_THIAM_PAPA.pdf"
                    download
                    onClick={() => {
                      setTimeout(() => {
                        alert("Demandez le code à Papa Thiam pour ouvrir le PDF !");
                      }, 100);
                    }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger CV
                  </a>
                </Button>
                
                <Button variant="outline" asChild className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-3 text-lg">
                  <Link to="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Me Contacter
                  </Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                {contact.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors">
                    <item.icon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Avatar & Stats */}
            <div className="flex flex-col items-center space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <Avatar className="relative w-48 h-48 md:w-64 md:h-64 border-4 border-yellow-400/50 shadow-2xl">
                  {userImageSrc ? (
                    <AvatarImage src={userImageSrc} alt={name} className="object-cover" />
                  ) : (
                    <UserCircle className="w-full h-full text-yellow-400" />
                  )}
                  <AvatarFallback className="text-4xl font-bold bg-gray-800 text-yellow-400">
                    {name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                {quickStats.map((stat, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 text-center p-4">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Pourquoi travailler avec moi ?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Découvrez ce qui fait ma différence dans le monde du développement web et de l'IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-400/20 rounded-full p-2 flex-shrink-0">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Explorez mon parcours
            </h2>
            <p className="text-gray-300 text-lg">
              Naviguez à travers les différentes sections de mon portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Formation", 
                description: "Mon parcours académique depuis le BTS jusqu'au Master", 
                link: "/education",
                icon: GraduationCap,
                color: "border-blue-500"
              },
              { 
                title: "Compétences", 
                description: "Technologies maîtrisées et expertise technique", 
                link: "/skills",
                icon: Code2,
                color: "border-green-500"
              },
              { 
                title: "Projets", 
                description: "Réalisations et projets développés", 
                link: "/projects",
                icon: Briefcase,
                color: "border-purple-500"
              }
            ].map((item, index) => (
              <Card key={index} className={`bg-gray-800 border-2 ${item.color} hover:scale-105 transition-all duration-300 group cursor-pointer`}>
                <Link to={item.link}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <item.icon className="w-6 h-6 mr-3 text-yellow-400" />
                        <span className="text-white">{item.title}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
