
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cvData } from '@/cv-data';
import { Github, Linkedin, Mail, Phone } from 'lucide-react'; // Re-importing for direct use
import React from 'react';

const SectionTitle: React.FC<{ title: string; icon?: React.ElementType }> = ({ title, icon: Icon }) => (
  <div className="flex items-center mb-8">
    {Icon && <Icon className="w-10 h-10 mr-4 text-yellow-400" />}
    <h1 className="text-4xl font-bold text-yellow-400 border-b-2 border-yellow-400 pb-2">{title}</h1>
  </div>
);

const ContactPage: React.FC = () => {
  const { contact } = cvData;
  const emailContact = contact.find(c => c.label === "Email");
  const phoneContact = contact.find(c => c.label === "Téléphone");
  const linkedinContact = contact.find(c => c.label === "LinkedIn");
  const githubContact = contact.find(c => c.label === "GitHub");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic form handling, can be expanded with emailjs or a backend
    alert("Merci pour votre message ! Malheureusement, Mr THIAM n'a pas encore mis en place de système de contact.");
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="Contactez-moi" icon={Mail} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nom complet</label>
            <Input type="text" name="name" id="name" required className="bg-gray-700 border-gray-600 text-gray-200 focus:ring-yellow-400 focus:border-yellow-400" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Adresse Email</label>
            <Input type="email" name="email" id="email" required className="bg-gray-700 border-gray-600 text-gray-200 focus:ring-yellow-400 focus:border-yellow-400" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <Textarea name="message" id="message" rows={4} required className="bg-gray-700 border-gray-600 text-gray-200 focus:ring-yellow-400 focus:border-yellow-400" />
          </div>
          <div>
            <Button type="submit" className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Envoyer le Message
            </Button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Mes Coordonnées</h2>
          {emailContact && (
            <a href={emailContact.href} className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors group">
              <Mail className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400" />
              <span>{emailContact.value}</span>
            </a>
          )}
          {phoneContact && (
            <a href={phoneContact.href} className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors group">
              <Phone className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400" />
              <span>{phoneContact.value}</span>
            </a>
          )}
          
          <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">Retrouvez-moi sur</h2>
          {linkedinContact && (
            <a href={linkedinContact.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors group">
              <Linkedin className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400" />
              <span>{linkedinContact.value}</span>
            </a>
          )}
          {githubContact && (
            <a href={githubContact.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors group">
              <Github className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400" />
              <span>{githubContact.value}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
