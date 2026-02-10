// Enhanced language switcher with page translation
class LanguageSwitcher {
  constructor() {
    this.currentLang = document.documentElement.lang || 'es';
    this.translations = {};
    this.init();
  }
  
  init() {
    this.loadTranslations();
    this.setupEventListeners();
    this.updateLanguageDisplay();
  }
  
  loadTranslations() {
    // Translation map for key UI elements
    this.translations = {
      en: {
        'navigation': {
          'about': 'About',
          'services': 'Services',
          'experience': 'Experience',
          'skills': 'Skills',
          'contact': 'Contact'
        },
        'hero': {
          'title': 'Marling Escobar',
          'subtitle': 'Senior SAP FICO Consultant',
          'description': 'Expert in SAP S/4HANA implementation, financial process optimization and digital transformation with solid experience in strategic projects.',
          'contact': 'Contact',
          'linkedin': 'LinkedIn'
        },
        'about': {
          'title': 'About Me',
          'text1': 'SAP FICO Consultant with over 8 years of experience in configuration, implementation and optimization of SAP S/4HANA systems. Specialized in financial transformation, data migration and strategic project management for multinational companies in Latin America and Europe.',
          'text2': 'My focus is on aligning ERP systems with business objectives, ensuring operational efficiency, regulatory compliance and tangible improvements in financial processes.',
          'system_improvement': 'System efficiency improvement',
          'operational_efficiency': 'Operational efficiency increase',
          'years_experience': 'Years of SAP experience'
        },
        'services': {
          'title': 'Services',
          'implementation': {
            'title': 'SAP S/4HANA Implementation',
            'description': 'Leadership in complete migration and SAP S/4HANA implementation projects.'
          },
          'configuration': {
            'title': 'FICO Configuration',
            'description': 'Specialized configuration in FI (AP, AR, AA, GL, TX) and CO modules.'
          },
          'migration': {
            'title': 'Data Migration',
            'description': 'Experience with SAP Migration Cockpit for precise and effective transitions.'
          },
          'training': {
            'title': 'Training and Support',
            'description': 'Customized training programs and specialized technical support.'
          },
          'project_management': {
            'title': 'Project Management',
            'description': 'Project coordination using Agile and Activate methodologies.'
          },
          'audit': {
            'title': 'Audit and Compliance',
            'description': 'Regulatory compliance and quality standards assurance.'
          }
        },
        'experience': {
          'title': 'Professional Experience',
          'aguas': {
            'company': 'Aguas Andinas Client - Chile (Axity)',
            'position': 'SAP FICO Consultant',
            'description': 'BCM Project - Information gathering, technical and functional specifications, coordination with key users and ABAP development support.'
          },
          'megacentro': {
            'company': 'Red Megacentro Client - Chile (Axity)',
            'position': 'SAP FICO Consultant',
            'description': 'Advanced purchase monitor configuration, invoice validation and payment flow optimization.'
          },
          'sigma': {
            'company': 'Sigma Client - Mexico (Softtek)',
            'position': 'SAP FICO Consultant',
            'description': 'Optimization of financial processes in SAP S/4HANA, improving system efficiency by 15%.'
          },
          'claro': {
            'company': 'CLARO Client - Peru',
            'position': 'SAP FICO Functional Consultant',
            'description': 'Cashflow Project - 30% increase in operational efficiency through customized training programs.'
          },
          'spain': {
            'company': 'Dulmatesa and Globalvia - Madrid, Spain',
            'position': 'SAP FICO Functional Consultant',
            'description': 'Leadership in financial data migration to S/4HANA using SAP Migration Cockpit.'
          },
          'enel': {
            'company': 'Everis – ENEL Client (Bogota)',
            'position': 'SAP FICO Project Coordinator',
            'description': 'Business process improvement using Activate methodology, optimizing operational efficiency and financial modules.'
          }
        },
        'skills': {
          'title': 'Skills and Certifications',
          'technical': 'Technical Competencies',
          'certifications': 'Certifications',
          'soft_skills': 'Soft Skills',
          'leadership': 'Team Leadership',
          'project_mgmt': 'Project Management',
          'financial_analysis': 'Financial Analysis',
          'training': 'Training and Development',
          'communication': 'Technical Communication',
          'problem_solving': 'Problem Solving'
        },
        'clients': {
          'title': 'Clients and Projects'
        },
        'contact': {
          'title': 'Contact',
          'connect': "Let's Connect",
          'description': 'Available for consulting, strategic projects and collaborative opportunities.',
          'name': 'Name',
          'email': 'Email',
          'subject': 'Subject',
          'message': 'Message',
          'send': 'Send Message'
        },
        'footer': {
          'about': 'About',
          'description': 'SAP FICO Consultant specialized in S/4HANA implementation and financial optimization.',
          'contact': 'Contact',
          'follow': 'Follow',
          'rights': 'All rights reserved.'
        }
      }
    };
  }
  
  setupEventListeners() {
    const switcher = document.querySelector('.language-switcher');
    if (switcher) {
      switcher.addEventListener('click', () => this.toggleLanguage());
    }
  }
  
  toggleLanguage() {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    
    // Store preference
    localStorage.setItem('preferredLanguage', this.currentLang);
    
    // Update language display
    this.updateLanguageDisplay();
    
    // Translate page content
    if (this.currentLang === 'en') {
      this.translatePage();
    } else {
      this.restoreOriginal();
    }
  }
  
  updateLanguageDisplay() {
    const langDisplay = document.querySelector('.lang-code');
    if (langDisplay) {
      langDisplay.textContent = this.currentLang.toUpperCase();
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;
  }
  
  translatePage() {
    const translations = this.translations.en;
    
    // Navigation
    this.translateElement('a[href="#about"]', translations.navigation.about);
    this.translateElement('a[href="#services"]', translations.navigation.services);
    this.translateElement('a[href="#experience"]', translations.navigation.experience);
    this.translateElement('a[href="#skills"]', translations.navigation.skills);
    this.translateElement('a[href="#contact"]', translations.navigation.contact);
    
    // Hero Section
    this.translateElement('.hero-subtitle', translations.hero.subtitle);
    this.translateElement('.hero-description', translations.hero.description);
    this.translateElement('.hero-buttons .btn-primary', translations.hero.contact);
    
    // About Section
    this.translateElement('#about .section-title', translations.about.title);
    
    // Update about text if exists
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
      const paragraphs = aboutText.querySelectorAll('p');
      if (paragraphs[0]) paragraphs[0].textContent = translations.about.text1;
      if (paragraphs[1]) paragraphs[1].textContent = translations.about.text2;
    }
    
    // Update highlights
    this.updateHighlights(translations.about);
    
    // Services Section
    this.translateElement('#services .section-title', translations.services.title);
    this.translateServiceCards(translations.services);
    
    // Experience Section
    this.translateElement('#experience .section-title', translations.experience.title);
    this.translateExperienceCards(translations.experience);
    
    // Skills Section
    this.translateElement('#skills .section-title', translations.skills.title);
    this.translateSkillsSection(translations.skills);
    
    // Contact Section
    this.translateContactSection(translations.contact);
    
    // Footer
    this.translateFooter(translations.footer);
  }
  
  restoreOriginal() {
    // Reload the page to restore original language
    window.location.reload();
  }
  
  translateElement(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = text;
      } else {
        element.textContent = text;
      }
    }
  }
  
  updateHighlights(aboutTranslations) {
    const highlights = document.querySelectorAll('.highlight-text');
    if (highlights[0]) highlights[0].textContent = aboutTranslations.system_improvement;
    if (highlights[1]) highlights[1].textContent = aboutTranslations.operational_efficiency;
    if (highlights[2]) highlights[2].textContent = aboutTranslations.years_experience;
  }
  
  translateServiceCards(servicesTranslations) {
    const services = [
      servicesTranslations.implementation,
      servicesTranslations.configuration,
      servicesTranslations.migration,
      servicesTranslations.training,
      servicesTranslations.project_management,
      servicesTranslations.audit
    ];
    
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      if (services[index]) {
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        if (h3) h3.textContent = services[index].title;
        if (p) p.textContent = services[index].description;
      }
    });
  }
  
  translateExperienceCards(experienceTranslations) {
    const experiences = [
      experienceTranslations.aguas,
      experienceTranslations.megacentro,
      experienceTranslations.sigma,
      experienceTranslations.claro,
      experienceTranslations.spain,
      experienceTranslations.enel
    ];
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      if (experiences[index]) {
        const company = item.querySelector('h3');
        const position = item.querySelector('h4');
        const description = item.querySelector('p');
        
        if (company) company.textContent = experiences[index].company;
        if (position) position.textContent = experiences[index].position;
        if (description) description.textContent = experiences[index].description;
      }
    });
  }
  
  translateSkillsSection(skillsTranslations) {
    // Translate section headers
    document.querySelectorAll('.skills-section h3')[0]?.replaceChildren(document.createTextNode(skillsTranslations.technical));
    document.querySelectorAll('.certifications h3')[0]?.replaceChildren(document.createTextNode(skillsTranslations.certifications));
    document.querySelectorAll('.soft-skills h3')[0]?.replaceChildren(document.createTextNode(skillsTranslations.soft_skills));
    
    // Translate soft skills
    const softSkills = [
      skillsTranslations.leadership,
      skillsTranslations.project_mgmt,
      skillsTranslations.financial_analysis,
      skillsTranslations.training,
      skillsTranslations.communication,
      skillsTranslations.problem_solving
    ];
    
    const softSkillItems = document.querySelectorAll('.soft-skill-item span');
    softSkillItems.forEach((item, index) => {
      if (softSkills[index]) {
        item.textContent = softSkills[index];
      }
    });
  }
  
  translateContactSection(contactTranslations) {
    this.translateElement('#contact .section-title', contactTranslations.title);
    
    const contactInfo = document.querySelector('.contact-info h3');
    if (contactInfo) contactInfo.textContent = contactTranslations.connect;
    
    const contactDescription = document.querySelector('.contact-info p');
    if (contactDescription) contactDescription.textContent = contactTranslations.description;
    
    // Form labels
    const formLabels = document.querySelectorAll('.form-group label');
    const labelTranslations = [contactTranslations.name, contactTranslations.email, contactTranslations.subject, contactTranslations.message];
    formLabels.forEach((label, index) => {
      if (labelTranslations[index]) {
        label.textContent = labelTranslations[index];
      }
    });
    
    // Submit button
    this.translateElement('.contact-form .btn', contactTranslations.send);
  }
  
  translateFooter(footerTranslations) {
    this.translateElement('.footer-section h3', footerTranslations.about);
    this.translateElement('.footer-section:nth-child(2) h3', footerTranslations.contact);
    this.translateElement('.footer-section:nth-child(3) h3', footerTranslations.follow);
    
    const footerDesc = document.querySelector('.footer-section p');
    if (footerDesc) footerDesc.textContent = footerTranslations.description;
    
    const footerRights = document.querySelector('.footer-bottom p');
    if (footerRights) {
      const currentYear = new Date().getFullYear();
      footerRights.innerHTML = `&copy; ${currentYear} {{ site.author.name }}. ${footerTranslations.rights}`;
    }
  }
}

// Initialize language switcher when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  new LanguageSwitcher();
});