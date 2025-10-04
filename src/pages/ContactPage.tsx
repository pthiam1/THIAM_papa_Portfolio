
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cvData } from '@/cv-data';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  ExternalLink,
  User,
  AtSign
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

const ContactStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <Card className="bg-gray-800 border-2 border-blue-500">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
            24h
          </div>
          <div className="text-gray-300 font-medium">Réponse rapide</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gray-800 border-2 border-green-500">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
            100%
          </div>
          <div className="text-gray-300 font-medium">Disponible</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gray-800 border-2 border-purple-500">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
            5+
          </div>
          <div className="text-gray-300 font-medium">Ans d'expérience</div>
        </CardContent>
      </Card>
    </div>
  );
};

const ContactMethod = ({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  description,
  color,
  external = false 
}: {
  icon: any;
  title: string;
  value: string;
  href?: string;
  description: string;
  color: string;
  external?: boolean;
}) => {
  const content = (
    <Card className={`bg-gray-800 border-2 ${color} hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-full bg-gray-700`}>
            <Icon className={`w-6 h-6 ${color.replace('border-', 'text-')}`} />
          </div>
          {external && <ExternalLink className="w-4 h-4 text-gray-400" />}
        </div>
        <CardTitle className={`text-xl ${color.replace('border-', 'text-')}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white font-semibold mb-2">{value}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};

const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Merci pour votre message ! Malheureusement, Mr THIAM n'a pas encore mis en place de système de contact.");
    (event.target as HTMLFormElement).reset();
  };

  return (
    <Card className="bg-gray-800 border-2 border-yellow-400">
      <CardHeader>
        <CardTitle className="text-yellow-400 text-2xl flex items-center">
          <MessageCircle className="w-6 h-6 mr-3" />
          Envoyez-moi un message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2 flex items-center">
              <User className="w-4 h-4 mr-2" />
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
              placeholder="Votre nom complet"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2 flex items-center">
              <AtSign className="w-4 h-4 mr-2" />
              Adresse Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
              placeholder="votre@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-2 flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full p-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
              placeholder="Votre message..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <Send className="w-5 h-5 mr-2" />
            Envoyer le Message
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

const ContactPage = () => {
  const { contact } = cvData;
  const emailContact = contact.find(c => c.label === "Email");
  const phoneContact = contact.find(c => c.label === "Téléphone");
  const addressContact = contact.find(c => c.label === "Adresse");
  const linkedinContact = contact.find(c => c.label === "LinkedIn");
  const githubContact = contact.find(c => c.label === "GitHub");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SectionTitle 
        title="Contactez-moi" 
        subtitle="N'hésitez pas à me contacter pour discuter de vos projets ou opportunités"
        icon={Mail} 
      />
      
      <ContactStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Methods */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">Moyens de Contact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emailContact && (
              <ContactMethod
                icon={Mail}
                title="Email"
                value={emailContact.value}
                href={emailContact.href}
                description="Réponse sous 24h"
                color="border-blue-500"
              />
            )}
            
            {phoneContact && (
              <ContactMethod
                icon={Phone}
                title="Téléphone"
                value={phoneContact.value}
                href={phoneContact.href}
                description="Disponible en semaine"
                color="border-green-500"
              />
            )}
            
            {addressContact && (
              <ContactMethod
                icon={MapPin}
                title="Localisation"
                value={addressContact.value}
                description="Basé en France"
                color="border-purple-500"
              />
            )}
            
            <ContactMethod
              icon={Clock}
              title="Disponibilité"
              value="Lun - Ven"
              description="9h - 18h (CET)"
              color="border-orange-500"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-400">Réseaux Sociaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {linkedinContact && (
                <ContactMethod
                  icon={Linkedin}
                  title="LinkedIn"
                  value="Mon profil professionnel"
                  href={linkedinContact.href}
                  description="Réseau professionnel"
                  color="border-blue-600"
                  external={true}
                />
              )}
              
              {githubContact && (
                <ContactMethod
                  icon={Github}
                  title="GitHub"
                  value="Mes projets"
                  href={githubContact.href}
                  description="Code source & projets"
                  color="border-gray-500"
                  external={true}
                />
              )}
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
      
      {/* Call to Action */}
      <Card className="bg-gray-800 border-2 border-yellow-400">
        <CardHeader>
          <CardTitle className="text-center text-yellow-400 text-2xl md:text-3xl">
            Prêt à collaborer ?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Je suis ouvert aux opportunités de stage, alternance, freelance ou emploi. 
              Contactez-moi pour discuter de vos projets !
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-bold text-yellow-400 text-lg">Projets Web</h3>
                <p className="text-gray-400 text-sm">Développement full-stack</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-bold text-yellow-400 text-lg">Intelligence Artificielle</h3>
                <p className="text-gray-400 text-sm">Machine Learning & IA</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-bold text-yellow-400 text-lg">Consulting</h3>
                <p className="text-gray-400 text-sm">Conseil technique</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
