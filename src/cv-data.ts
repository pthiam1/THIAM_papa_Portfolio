import { Car, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export interface CvContactItem {
  label: string;
  value: string;
  href?: string;
  icon: React.ElementType;
}

export interface TechnicalSkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  year?: string;
  link?: string;
  company?: string;
}

export interface CvData {
  name: string;
  title: string;
  contact: CvContactItem[];
  about: string;
  technicalSkills: TechnicalSkillGroup[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  languages: LanguageItem[];
  interests: string[];
}

export const cvData: CvData = {
  name: "THIAM PAPA",
  title: "Étudiant en Master Ingénierie du Web, passionné par l'IA et le Développement Web",
  contact: [
    { label: "Téléphone", value: "0752834362", href: "tel:0752834362", icon: Phone },
    { label: "Email", value: "papa.xthiam@gmail.com", href: "mailto:papa.xthiam@gmail.com", icon: Mail },
    { label: "Adresse", value: "76600 Le Havre", icon: MapPin },
    { label: "LinkedIn", value: "linkedin.com/in/papa-thiam", href: "https://www.linkedin.com/in/papa-thiam-b914991b7/", icon: Linkedin },
    { label: "GitHub", value: "github.com/pthiam1", href: "https://github.com/pthiam1", icon: Github },
    { label: "Mobilité", value: "Permis B + Véhicule", icon: Car },
  ],
  about: "Étudiant en Master IWOCS, je suis passionné par les technologies modernes, la résolution de problèmes complexes et la création de solutions innovantes.",
  technicalSkills: [
    {
      category: "Développement Web", // Icône : <Globe />
      skills: [
        "HTML", "CSS", "JavaScript", "TypeScript", "React", "VueJS", "Symfony", "NodeJS", "ASP.NET"
      ]
    },
    {
      category: "Mobile & IoT", // Icône : <Smartphone /> ou <Cpu />
      skills: [
        "Android (Java, Kotlin)", "Arduino", "ESP32"
      ]
    },
    {
      category: "Backend & Bases de données", // Icône : <Database />
      skills: [
        "PHP", "SQL", "MongoDB", "Firebase", "PostgreSQL", "PostGIS"
      ]
    },
    {
      category: "Programmation", // Icône : <Code2 />
      skills: [
        "Python", "Java", "C/C++", "Scala", "R"
      ]
    },
    {
      category: "Modélisation & Conception", // Icône : <Shapes />
      skills: [
        "UML", "Design Patterns", "Modélisation 3D"
      ]
    },
    {
      category: "API & Services", // Icône : <Share2 />
      skills: [
        "REST", "Flask", "FastAPI"
      ]
    },
    {
      category: "Systèmes & Réseaux", // Icône : <Server />
      skills: [
        "Linux", "Raspberry Pi"
      ]
    },
    {
      category: "Outils & Méthodes", // Icône : <Settings />
      skills: [
        "Git", "Agile/Scrum"
      ]
    },
    {
      category: "Intelligence Artificielle", // Icône : <BrainCircuit /> ou <Brain />
      skills: [
        "Bases de l'apprentissage automatique", "Modélisation", "IA symbolique"
      ]
    },
    {
      category: "Sécurité", // Icône : <ShieldCheck />
      skills: [
        "Protocoles", "Pare-feu", "Cybersécurité"
      ]
    }
  ],
  education: [
    {
      degree: "Master IWOCS (Ingénierie du Web, Objets Communicants et Systèmes Complexes)",
      institution: "Université du Havre",
      period: "2024 - 2026 (en cours)",
      details: [
        "Développement d'algorithmes IA et systèmes complexes",
        "Programmation fonctionnelle, compilation",
        "Optimisation logistique, planification",
        "Projet de recherche en IA et graphes",
      ],
    },
    {
      degree: "Licence 3 Informatique",
      institution: "Université de La Rochelle",
      period: "2023 - 2024",
      details: [
        "Qt avec Python/QML",
        "Sécurité réseau, IoT (Arduino/ESP32)",
        "Android (Android Studio), SGBD avancé",
      ],
    },
     {
      degree: "Licence 2 Informatique",
      institution: "Université de La Rochelle",
      period: "2022 - 2023",
      details: [
        "Structures de données, analyse avec Python",
        "Génie logiciel (UML, Git)",
        "Web avec Symfony, PHP, VueJS",
      ],
    },
    {
      degree: "Licence 1 Informatique",
      institution: "Université de La Rochelle",
      period: "2021 - 2022",
      details: [
        "Java, Python, R",
        "Web : HTML, CSS, JavaScript, Ajax",
      ],
    },
    {
      degree: "BTS SNIR (Systèmes Numériques option Informatique et Réseaux)",
      institution: "Lycée Modeste Leroy",
      period: "2018 - 2020",
      details: [
        "Java (Servlets, JSP, SQL)",
        "C/C++, Qt, réseau, Raspberry Pi",
      ],
    },
  ],
  experience: [
    {
      role: "Développeur Web",
      company: "HEBUS (Evreux)",
      period: "Janv. 2020 – Présent",
      description: `• Conception et mise en place d’un espace administrateur sécurisé pour hebus-ip.com (ASP.NET C#, AJAX, SQL).
      • Amélioration de la gestion du contenu et de la sécurité du site.
      • Optimisation de l’interface administrateur pour une meilleure expérience utilisateur.`,
      technologies: ["ASP.NET", "C#", "AJAX", "SQL"]
    },
    {
      role: "Développeur de modules",
      company: "VIGILUS (Dakar)",
      period: "Janv. 2023 – Présent",
      description: `• Développement du module de gestion des achats pour l’application Pékhe (PHP, PostgreSQL, MDB Admin Dashboard Templates Pack).
• Optimisation des processus d’achat et intégration fluide dans l’application.`,
      technologies: ["PHP", "PostgreSQL", "MDB Admin Dashboard"]
    },
    {
      role: "Animateur (Service civique)",
      company: "ADOMA (Lyon)",
      period: "Mars 2020 – Août 2020",
      description: `• Sensibilisation des résidents aux gestes barrières (COVID-19).
• Accompagnement des résidents sur des projets d’embellissement (jardins potagers et floraux).
• Promotion des pratiques d’économie d’énergie et d’optimisation des équipements domestiques.`
    },
    {
      role: "Préparateur de commande polyvalent",
      company: "LECLERC (La Rochelle)",
      period: "Déc. 2021 – Août 2024",
      description: `• Gestion de la préparation des commandes (ambiant, frais, surgelé, fruits et légumes).
• Utilisation du gerbeur et gestion efficace du chargement/déchargement de palettes.
• Réapprovisionnement stratégique des stocks pour assurer la disponibilité des produits.`
    }
  ],
  projects: [
    {
      name: "Développement IoT – Surveillance Température & Humidité",
      description: "Conception d'un système de surveillance de température et d'humidité avec envoi de notifications par SMS.",
      technologies: ["Arduino", "ESP32", "LCD", "CNI", "CNY70", "WEBSERVER"],
      year: "2023",
      company: "Projet Académique/Personnel"
    },
    {
      name: "Plateforme de vente de plans de maison",
      description: "Conception d'une plateforme de vente de plans de maison en ligne avec paiement sécurisé.",
      technologies: ["Symfony", "API REST", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      year: "2022",
      company: "Projet Académique/Personnel"
    },
    {
      name: "JIBOU – Application mobile de gestion d'inventaire pour restaurants",
      description: `Développement d'une application Android pour la gestion d'inventaire et d'achats destinée aux restaurants. 
L'application propose une interface simple et intuitive pour gérer les stocks, les listes de courses, les commandes et les fournisseurs. 
Elle intègre une API Flask (Python) connectée à une base PostgreSQL pour la gestion des données, ainsi qu'une authentification utilisateur. 
Le projet inclut la conception de l'interface, la modélisation des données, la gestion des utilisateurs, et la communication entre l'application mobile et l'API.`,
      technologies: ["Android Studio", "Java", "XML", "PostgreSQL", "Flask", "Python", "API REST"],
      year: "2024",
      link: "https://github.com/pthiam1/JIBOU",
      company: "Projet Universitaire (L3 Informatique – La Rochelle Université)"
    },
    {
      name: "processing_classe_3D – Modélisation 3D d'une salle de classe informatique",
      description: `Création d'une représentation 3D interactive de la salle M1 Informatique de l'Université du Havre avec Processing. 
Modélisation de bureaux, chaises, tableau, vidéoprojecteur, portes, fenêtres, plafond, murs, etc. 
Fonctionnalités interactives : rotation de la caméra, zoom, ouverture/fermeture des portes, gestion des lumières, animation des coffres ordinateurs, rideaux, vidéoprojecteur, etc. 
Projet réalisé dans le cadre du Master Informatique M1 pour développer des compétences en modélisation, visualisation et animation 3D.`,
      technologies: ["Processing", "Java", "GLSL"],
      year: "2024",
      link: "https://github.com/pthiam1/processing_classe_3D",
      company: "Projet Universitaire (M1 Informatique – Université du Havre)"
    },
    {
      name: "Extraction et visualisation des escales de navires via AIS",
      description: `Ce projet vise à automatiser l'extraction des escales de navires dans une zone spécifique à partir des données AIS (Automatic Identification System). 
Il permet d'analyser les messages AIS pour détecter les escales selon plusieurs critères (distance au quai, vitesse, durée, statut de navigation), d'importer et traiter les données dans PostgreSQL/PostGIS, et de visualiser les résultats sur une carte interactive. 
Deux méthodes sont proposées : analyse directe sur fichiers CSV ou via une base PostgreSQL/PostGIS pour des performances optimisées.`,
      technologies: ["Python", "PostgreSQL", "PostGIS", "Folium", "CSV"],
      year: "2024",
      link: "https://www-apps.univ-lehavre.fr/forge/km233436/tpe-ais-zonegeographique-2023.git",
      company: "Projet Universitaire (Université du Havre)"
    },
    {
      name: "Portfolio Personnel (Ce Site)",
      description: "Développement de ce site portfolio pour présenter mon parcours, mes compétences et mes projets. Conçu pour être réactif et moderne.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      year: "2025",
      link: "#",
      company: "Projet Personnel"
    }
  ],
  languages: [
    { language: "Français", level: "Langue maternelle" },
    { language: "Anglais", level: "Professionnel" },
  ],
  interests: ["Jeux vidéo", "Basketball", "Philosophie"],
};
