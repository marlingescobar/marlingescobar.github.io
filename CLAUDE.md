# CLAUDE.md - Proyecto marlingescobar.github.io

## Resumen del Proyecto

Portafolio profesional y CV online de **Marling Escobar**, Consultora SAP FICO Senior, desplegado en GitHub Pages.

**URL:** https://marlingescobar.github.io/

## Tecnologías

- **Jekyll** - Generador de sitios estáticos
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD para deploy automático
- **HTML/CSS/JavaScript** - Frontend
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografías (Montserrat, Open Sans)

## Estructura del Proyecto

```
├── .github/
│   └── workflows/
│       └── jekyll.yml          # Workflow de deploy
├── _includes/
│   ├── header.html             # Navegación
│   └── footer.html             # Pie de página
├── _layouts/
│   ├── default.html            # Layout base
│   └── home.html               # Layout principal
├── _data/                      # Datos estructurados
├── assets/
│   ├── css/
│   │   └── main.css            # Estilos principales
│   └── js/
│       ├── main.js             # Funcionalidad general
│       └── language-switcher.js # Cambio de idioma ES/EN
├── en/                         # Versión en inglés
├── _config.yml                 # Configuración Jekyll
├── index.md                    # Página principal (español)
├── Gemfile                     # Dependencias Ruby
└── CLAUDE.md                   # Este archivo
```

## Secciones de la Página

1. **Hero** - Nombre, cargo y descripción breve
2. **Sobre Mí** - Experiencia y métricas destacadas
3. **Servicios** - 6 áreas de expertise SAP FICO
4. **Experiencia Profesional** - Timeline de proyectos
5. **Habilidades y Certificaciones** - Competencias técnicas con barras de progreso
6. **Clientes y Proyectos** - Empresas multinacionales
7. **Contacto** - Formulario y datos de contacto

## Características Implementadas

### Cambio de Idioma (ES/EN)
- Botón en el header para alternar idiomas
- Traduce todo el contenido sin recargar la página
- Guarda preferencia en localStorage
- Restaura contenido original al volver a español

### Animaciones
- Barras de progreso animadas al hacer scroll
- Elementos con fade-in al entrar en viewport
- Header con efecto de scroll
- Hover effects en tarjetas y botones

### Responsive Design
- Menú hamburguesa en móvil
- Grid adaptativo para servicios y clientes
- Timeline responsive para experiencia

## Historial de Cambios

### 2026-02-10
- Configuración inicial de GitHub Actions workflow
- Corrección del workflow usando `actions/jekyll-build-pages`
- Reducción de altura del hero section (de pantalla completa a franja)
- Arreglo del botón de cambio de idioma (sin reload)
- Corrección de animación de barras de competencias técnicas

## Comandos Útiles

```bash
# Clonar repositorio
git clone https://github.com/marlingescobar/marlingescobar.github.io.git

# Ver estado
git status

# Commit y push
git add .
git commit -m "Descripción del cambio"
git push origin main

# Ver logs de GitHub Actions
gh run list --repo marlingescobar/marlingescobar.github.io
gh run view <run-id> --log
```

## Notas de Desarrollo

- El deploy es automático al hacer push a `main`
- El build tarda aproximadamente 1 minuto
- Las imágenes deben ir en `assets/images/`
- Los estilos CSS están en un solo archivo `main.css`
- El formulario de contacto usa Formspree (configurar action en el form)

## Contacto del Proyecto

- **Propietario:** Marling Escobar
- **Email:** marlingescobar8@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/marlingescobar051233
