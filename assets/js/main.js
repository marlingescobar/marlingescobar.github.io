// Navigation functionality
function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navMenu = document.querySelector('.nav-menu');
          navMenu.classList.remove('active');
        }
      }
    });
  });
});

// Language switcher functionality
function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'es' ? 'en' : 'es';
  
  // Store preference
  localStorage.setItem('preferredLanguage', newLang);
  
  // Redirect to language-specific page
  if (newLang === 'en') {
    window.location.href = '/en/';
  } else {
    window.location.href = '/';
  }
}

// Set preferred language on page load
function setPreferredLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage');
  const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
  const preferredLang = savedLang || browserLang;
  
  if (preferredLang === 'en' && !window.location.pathname.startsWith('/en')) {
    // Don't auto-redirect, just update UI
    document.documentElement.lang = 'en';
  }
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
}

// Form submission handling
function initContactForm() {
  const form = document.querySelector('.contact-form form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!name || !email || !subject || !message) {
      showNotification('Por favor completa todos los campos', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showNotification('Por favor ingresa un email válido', 'error');
      return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Submit form (using Formspree or similar service)
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        showNotification('Mensaje enviado correctamente. Te responderé pronto.', 'success');
        form.reset();
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification('Error al enviar el mensaje. Por favor intenta de nuevo.', 'error');
    })
    .finally(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add styles
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
    color: 'white',
    padding: '15px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    zIndex: '10000',
    maxWidth: '400px',
    fontSize: '14px',
    fontWeight: '500',
    opacity: '0',
    transform: 'translateX(100%)',
    transition: 'all 0.3s ease'
  });
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollY = currentScrollY;
  });
}

// Skill bar animations
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const animateBars = () => {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible && !bar.style.animation) {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
          bar.style.animation = 'fadeInUp 1s ease forwards';
        }, 200);
      }
    });
  };
  
  // Initial check
  animateBars();
  
  // Check on scroll
  window.addEventListener('scroll', animateBars);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  setPreferredLanguage();
  initScrollAnimations();
  initContactForm();
  initHeaderScroll();
  animateSkillBars();
  
  // Add animation classes to elements
  const elementsToAnimate = [
    '.service-card',
    '.timeline-item',
    '.cert-item',
    '.client-item',
    '.soft-skill-item',
    '.highlight-item'
  ];
  
  elementsToAnimate.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('animate-on-scroll');
    });
  });
  
  // Re-initialize scroll animations after adding classes
  initScrollAnimations();
});

// Add CSS for mobile menu toggle
const style = document.createElement('style');
style.textContent = `
  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
`;
document.head.appendChild(style);