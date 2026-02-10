# Marling Escobar - SAP FICO Consultant

Professional portfolio website for Marling Escobar, Senior SAP FICO Consultant with expertise in SAP S/4HANA implementation and financial systems optimization.

## Features

- **Bilingual Support**: Spanish and English content with instant language switching
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Corporate professional design with smooth animations
- **Contact Form**: Integrated contact functionality
- **SEO Optimized**: Meta tags and structured data for search engines
- **Fast Loading**: Optimized assets and minimal dependencies

## Technology Stack

- **Platform**: GitHub Pages with Jekyll
- **Styling**: Custom CSS with responsive design
- **JavaScript**: Vanilla JS for interactions and animations
- **Fonts**: Google Fonts (Montserrat, Open Sans)
- **Icons**: Font Awesome

## Sections

1. **Hero**: Introduction with key information and CTAs
2. **About Me**: Professional background and achievements
3. **Services**: List of consulting services offered
4. **Experience**: Professional timeline with key projects
5. **Skills & Certifications**: Technical skills and professional certifications
6. **Clients**: Portfolio of clients and projects
7. **Contact**: Contact form and professional information

## Local Development

To run this site locally:

```bash
# Clone the repository
git clone https://github.com/marlingescobar/marlingescobar.github.io.git
cd marlingescobar.github.io

# Install Ruby dependencies (if needed)
bundle install

# Run Jekyll locally
bundle exec jekyll serve
```

## Project Structure

```
├── _config.yml              # Jekyll configuration
├── _includes/               # Reusable components
│   ├── header.html         # Navigation header
│   └── footer.html         # Footer section
├── _layouts/               # Page layouts
│   ├── default.html        # Default layout
│   └── home.html           # Home page layout
├── _data/                  # Data files
│   └── translations.yml    # Language translations
├── assets/                 # Static assets
│   ├── css/
│   │   └── main.css        # Main stylesheet
│   └── js/
│       ├── main.js         # Main JavaScript
│       └── language-switcher.js  # Language functionality
├── index.md               # Spanish homepage
└── en/
    └── index.md           # English homepage
```

## Deployment

This site is automatically deployed to GitHub Pages. Changes pushed to the `main` branch will be published automatically.

## Customization

### Adding New Content

1. **Add new pages**: Create `.md` files in appropriate directories
2. **Update services**: Modify the services section in `index.md` and `en/index.md`
3. **Add clients**: Update the clients grid in both language versions
4. **Update contact info**: Modify `_config.yml` author settings

### Styling

- Main styles are in `assets/css/main.css`
- CSS uses custom properties for colors and spacing
- Responsive breakpoints: 768px (tablet) and 480px (mobile)

### Colors

- **Primary Blue**: #2563eb
- **Dark Blue**: #1a365d
- **Secondary**: #64748b
- **Background**: #f8f9fa
- **Text**: #333333

## Performance

- Optimized CSS with efficient selectors
- Minimal JavaScript for faster loading
- Responsive images and lazy loading
- Compressed assets for production

## SEO

- Meta tags for all pages
- Structured data markup
- Semantic HTML5 structure
- Optimized URLs and permalinks
- Sitemap automatically generated

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

This project is proprietary and owned by Marling Escobar.

---

**Built with ❤️ for Marling Escobar**