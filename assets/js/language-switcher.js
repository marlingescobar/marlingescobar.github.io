// Enhanced language switcher with page translation
class LanguageSwitcher {
  constructor() {
    this.currentLang = localStorage.getItem('preferredLanguage') || 'es';
    this.translations = {};
    this.originalContent = {};
    this.init();
  }

  init() {
    this.loadTranslations();
    this.saveOriginalContent();
    this.setupEventListeners();
    this.updateLanguageDisplay();

    // Apply saved language preference
    if (this.currentLang === 'en') {
      this.translatePage();
    }
  }

  saveOriginalContent() {
    // Save original Spanish content for restoration
    this.originalContent = {
      navigation: {
        about: document.querySelector('a[href="#about"]')?.textContent || 'Sobre Mí',
        services: document.querySelector('a[href="#services"]')?.textContent || 'Servicios',
        experience: document.querySelector('a[href="#experience"]')?.textContent || 'Experiencia',
        skills: document.querySelector('a[href="#skills"]')?.textContent || 'Habilidades',
        contact: document.querySelector('a[href="#contact"]')?.textContent || 'Contacto'
      },
      hero: {
        subtitle: document.querySelector('.hero-subtitle')?.textContent || 'Consultora SAP FICO Senior',
        description: document.querySelector('.hero-description')?.textContent || '',
        contact: document.querySelector('.hero-buttons .btn-primary')?.textContent || 'Contactar'
      },
      about: {
        title: document.querySelector('#about .section-title')?.textContent || 'Sobre Mí',
        texts: Array.from(document.querySelectorAll('.about-text p')).map(p => p.textContent),
        highlights: Array.from(document.querySelectorAll('.highlight-text')).map(h => h.textContent)
      },
      services: {
        title: document.querySelector('#services .section-title')?.textContent || 'Servicios',
        cards: Array.from(document.querySelectorAll('.service-card')).map(card => ({
          title: card.querySelector('h3')?.textContent || '',
          description: card.querySelector('p')?.textContent || ''
        }))
      },
      experience: {
        title: document.querySelector('#experience .section-title')?.textContent || 'Experiencia Profesional',
        items: Array.from(document.querySelectorAll('.timeline-item')).map(item => ({
          company: item.querySelector('h3')?.textContent || '',
          position: item.querySelector('h4')?.textContent || '',
          description: item.querySelector('p')?.textContent || ''
        }))
      },
      skills: {
        title: document.querySelector('#skills .section-title')?.textContent || 'Habilidades y Certificaciones',
        technical: document.querySelector('.skills-section h3')?.textContent || 'Competencias Técnicas',
        certifications: document.querySelector('.certifications h3')?.textContent || 'Certificaciones',
        softSkillsTitle: document.querySelector('.soft-skills h3')?.textContent || 'Competencias Blandas',
        softSkills: Array.from(document.querySelectorAll('.soft-skill-item span')).map(s => s.textContent)
      },
      clients: {
        title: document.querySelector('#clients .section-title')?.textContent || 'Clientes y Proyectos'
      },
      contact: {
        title: document.querySelector('#contact .section-title')?.textContent || 'Contacto',
        connect: document.querySelector('.contact-info h3')?.textContent || 'Conectemos',
        description: document.querySelector('.contact-info > p')?.textContent || '',
        labels: Array.from(document.querySelectorAll('.form-group label')).map(l => l.textContent),
        button: document.querySelector('.contact-form .btn')?.textContent || 'Enviar Mensaje'
      }
    };
  }

  loadTranslations() {
    this.translations = {
      en: {
        navigation: {
          about: 'About',
          services: 'Services',
          experience: 'Experience',
          skills: 'Skills',
          contact: 'Contact'
        },
        hero: {
          subtitle: 'Senior SAP FICO Consultant',
          description: 'Expert in SAP S/4HANA implementation, financial process optimization and digital transformation with solid experience in strategic projects.',
          contact: 'Contact'
        },
        about: {
          title: 'About Me',
          text1: 'SAP FICO Consultant with over 8 years of experience in configuration, implementation and optimization of SAP S/4HANA systems. Specialized in financial transformation, data migration and strategic project management for multinational companies in Latin America and Europe.',
          text2: 'My focus is on aligning ERP systems with business objectives, ensuring operational efficiency, regulatory compliance and tangible improvements in financial processes.',
          highlights: ['System efficiency improvement', 'Operational efficiency increase', 'Years of SAP experience']
        },
        services: {
          title: 'Services',
          cards: [
            { title: 'SAP S/4HANA Implementation', description: 'Leadership in complete migration and SAP S/4HANA implementation projects.' },
            { title: 'FICO Configuration', description: 'Specialized configuration in FI (AP, AR, AA, GL, TX) and CO modules.' },
            { title: 'Data Migration', description: 'Experience with SAP Migration Cockpit for precise and effective transitions.' },
            { title: 'Training and Support', description: 'Customized training programs and specialized technical support.' },
            { title: 'Project Management', description: 'Project coordination using Agile and Activate methodologies.' },
            { title: 'Audit and Compliance', description: 'Regulatory compliance and quality standards assurance.' }
          ]
        },
        experience: {
          title: 'Professional Experience',
          items: [
            { company: 'Aguas Andinas Client - Chile (Axity)', position: 'SAP FICO Consultant', description: 'BCM Project - Information gathering, technical and functional specifications, coordination with key users and ABAP development support.' },
            { company: 'Red Megacentro Client - Chile (Axity)', position: 'SAP FICO Consultant', description: 'Advanced purchase monitor configuration, invoice validation and payment flow optimization.' },
            { company: 'Sigma Client - Mexico (Softtek)', position: 'SAP FICO Consultant', description: 'Optimization of financial processes in SAP S/4HANA, improving system efficiency by 15%.' },
            { company: 'CLARO Client - Peru', position: 'SAP FICO Functional Consultant', description: 'Cashflow Project - 30% increase in operational efficiency through customized training programs.' },
            { company: 'Dulmatesa and Globalvia - Madrid, Spain', position: 'SAP FICO Functional Consultant', description: 'Leadership in financial data migration to S/4HANA using SAP Migration Cockpit.' },
            { company: 'Everis - ENEL Client (Bogota)', position: 'SAP FICO Project Coordinator', description: 'Business process improvement using Activate methodology, optimizing operational efficiency and financial modules.' }
          ]
        },
        skills: {
          title: 'Skills and Certifications',
          technical: 'Technical Competencies',
          certifications: 'Certifications',
          softSkillsTitle: 'Soft Skills',
          softSkills: ['Team Leadership', 'Project Management', 'Financial Analysis', 'Training and Development', 'Technical Communication', 'Problem Solving']
        },
        clients: {
          title: 'Clients and Projects'
        },
        contact: {
          title: 'Contact',
          connect: "Let's Connect",
          description: 'Available for consulting, strategic projects and collaborative opportunities.',
          labels: ['Name', 'Email', 'Subject', 'Message'],
          button: 'Send Message'
        }
      }
    };
  }

  setupEventListeners() {
    const switcher = document.querySelector('.language-switcher');
    if (switcher) {
      switcher.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });
    }
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('preferredLanguage', this.currentLang);
    this.updateLanguageDisplay();

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
    document.documentElement.lang = this.currentLang;
  }

  translatePage() {
    const t = this.translations.en;

    // Navigation
    this.setText('a[href="#about"]', t.navigation.about);
    this.setText('a[href="#services"]', t.navigation.services);
    this.setText('a[href="#experience"]', t.navigation.experience);
    this.setText('a[href="#skills"]', t.navigation.skills);
    this.setText('a[href="#contact"]', t.navigation.contact);

    // Hero
    this.setText('.hero-subtitle', t.hero.subtitle);
    this.setText('.hero-description', t.hero.description);
    this.setText('.hero-buttons .btn-primary', t.hero.contact);

    // About
    this.setText('#about .section-title', t.about.title);
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    if (aboutParagraphs[0]) aboutParagraphs[0].textContent = t.about.text1;
    if (aboutParagraphs[1]) aboutParagraphs[1].textContent = t.about.text2;
    const highlights = document.querySelectorAll('.highlight-text');
    t.about.highlights.forEach((text, i) => {
      if (highlights[i]) highlights[i].textContent = text;
    });

    // Services
    this.setText('#services .section-title', t.services.title);
    const serviceCards = document.querySelectorAll('.service-card');
    t.services.cards.forEach((card, i) => {
      if (serviceCards[i]) {
        const h3 = serviceCards[i].querySelector('h3');
        const p = serviceCards[i].querySelector('p');
        if (h3) h3.textContent = card.title;
        if (p) p.textContent = card.description;
      }
    });

    // Experience
    this.setText('#experience .section-title', t.experience.title);
    const timelineItems = document.querySelectorAll('.timeline-item');
    t.experience.items.forEach((item, i) => {
      if (timelineItems[i]) {
        const h3 = timelineItems[i].querySelector('h3');
        const h4 = timelineItems[i].querySelector('h4');
        const p = timelineItems[i].querySelector('p');
        if (h3) h3.textContent = item.company;
        if (h4) h4.textContent = item.position;
        if (p) p.textContent = item.description;
      }
    });

    // Skills
    this.setText('#skills .section-title', t.skills.title);
    this.setText('.skills-section h3', t.skills.technical);
    this.setText('.certifications h3', t.skills.certifications);
    this.setText('.soft-skills h3', t.skills.softSkillsTitle);
    const softSkillItems = document.querySelectorAll('.soft-skill-item span');
    t.skills.softSkills.forEach((text, i) => {
      if (softSkillItems[i]) softSkillItems[i].textContent = text;
    });

    // Clients
    this.setText('#clients .section-title', t.clients.title);

    // Contact
    this.setText('#contact .section-title', t.contact.title);
    this.setText('.contact-info h3', t.contact.connect);
    const contactDesc = document.querySelector('.contact-info > p');
    if (contactDesc) contactDesc.textContent = t.contact.description;
    const formLabels = document.querySelectorAll('.form-group label');
    t.contact.labels.forEach((text, i) => {
      if (formLabels[i]) formLabels[i].textContent = text;
    });
    this.setText('.contact-form .btn', t.contact.button);
  }

  restoreOriginal() {
    const o = this.originalContent;

    // Navigation
    this.setText('a[href="#about"]', o.navigation.about);
    this.setText('a[href="#services"]', o.navigation.services);
    this.setText('a[href="#experience"]', o.navigation.experience);
    this.setText('a[href="#skills"]', o.navigation.skills);
    this.setText('a[href="#contact"]', o.navigation.contact);

    // Hero
    this.setText('.hero-subtitle', o.hero.subtitle);
    this.setText('.hero-description', o.hero.description);
    this.setText('.hero-buttons .btn-primary', o.hero.contact);

    // About
    this.setText('#about .section-title', o.about.title);
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    o.about.texts.forEach((text, i) => {
      if (aboutParagraphs[i]) aboutParagraphs[i].textContent = text;
    });
    const highlights = document.querySelectorAll('.highlight-text');
    o.about.highlights.forEach((text, i) => {
      if (highlights[i]) highlights[i].textContent = text;
    });

    // Services
    this.setText('#services .section-title', o.services.title);
    const serviceCards = document.querySelectorAll('.service-card');
    o.services.cards.forEach((card, i) => {
      if (serviceCards[i]) {
        const h3 = serviceCards[i].querySelector('h3');
        const p = serviceCards[i].querySelector('p');
        if (h3) h3.textContent = card.title;
        if (p) p.textContent = card.description;
      }
    });

    // Experience
    this.setText('#experience .section-title', o.experience.title);
    const timelineItems = document.querySelectorAll('.timeline-item');
    o.experience.items.forEach((item, i) => {
      if (timelineItems[i]) {
        const h3 = timelineItems[i].querySelector('h3');
        const h4 = timelineItems[i].querySelector('h4');
        const p = timelineItems[i].querySelector('p');
        if (h3) h3.textContent = item.company;
        if (h4) h4.textContent = item.position;
        if (p) p.textContent = item.description;
      }
    });

    // Skills
    this.setText('#skills .section-title', o.skills.title);
    this.setText('.skills-section h3', o.skills.technical);
    this.setText('.certifications h3', o.skills.certifications);
    this.setText('.soft-skills h3', o.skills.softSkillsTitle);
    const softSkillItems = document.querySelectorAll('.soft-skill-item span');
    o.skills.softSkills.forEach((text, i) => {
      if (softSkillItems[i]) softSkillItems[i].textContent = text;
    });

    // Clients
    this.setText('#clients .section-title', o.clients.title);

    // Contact
    this.setText('#contact .section-title', o.contact.title);
    this.setText('.contact-info h3', o.contact.connect);
    const contactDesc = document.querySelector('.contact-info > p');
    if (contactDesc) contactDesc.textContent = o.contact.description;
    const formLabels = document.querySelectorAll('.form-group label');
    o.contact.labels.forEach((text, i) => {
      if (formLabels[i]) formLabels[i].textContent = text;
    });
    this.setText('.contact-form .btn', o.contact.button);
  }

  setText(selector, text) {
    const element = document.querySelector(selector);
    if (element && text) {
      element.textContent = text;
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  new LanguageSwitcher();
});
