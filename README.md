# Glory Makeup Studio

A lightweight, professional makeup booking website built with pure HTML5, CSS3, and Vanilla JavaScript.

## Features

- **Ultra-lightweight**: Under 400KB total size
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Modern UI**: Soft pastel color scheme with luxurious styling
- **Interactive Elements**: Testimonials slider, gallery filters, mobile navigation
- **SEO Optimized**: Semantic HTML with structured data
- **Form Integration**: Formspree integration for contact and booking forms
- **WhatsApp Integration**: Direct booking via WhatsApp with pre-filled messages

## Pages

- **Homepage**: Hero section, services overview, testimonials, Instagram link
- **Services**: Detailed service listings with pricing and descriptions
- **Gallery**: Responsive image grid with category filters
- **Booking**: Form-based booking with Calendly integration
- **About**: Artist story, experience, certifications, awards
- **Contact**: Location details, Google Maps embed, contact form

## Color Scheme

- Primary: Soft blush pink (#f8e1e7)
- Secondary: Gold accent (#d4af37)
- Background: Cream white (#f5f5dc)
- Text: Dark gray (#2c2c2c)

## Technical Specifications

- **Framework**: Pure HTML5, CSS3, Vanilla JavaScript
- **Responsive**: Mobile-first design
- **Performance**: Optimized for fast loading
- **Hosting**: Compatible with Netlify, GitHub Pages, Firebase Hosting, Vercel

## Setup Instructions

1. **Clone or download** the project files
2. **Customize content**:
   - Replace placeholder text with your actual information
   - Update contact details, addresses, and social media links
   - Replace placeholder images with optimized WebP images (max 50KB each)
3. **Formspree Setup**:
   - Sign up at [formspree.io](https://formspree.io)
   - Create forms for booking and contact
   - Replace `[YourFormspreeID]` with your actual form IDs
4. **Calendly Integration** (optional):
   - Sign up at [calendly.com](https://calendly.com)
   - Replace the iframe src with your Calendly booking page URL
5. **Google Maps**:
   - Get your location's embed code from Google Maps
   - Replace the placeholder iframe src in `contact.html`
6. **Images**:
   - Add optimized images to the `images/` directory
   - Use WebP format for better compression
   - Keep individual images under 50KB
   - Create subdirectories as needed (e.g., `images/gallery/`)

## File Structure

```
glory-makeup-studio/
├── index.html          # Homepage
├── services.html       # Services page
├── gallery.html        # Gallery page
├── booking.html        # Booking form
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets
│   ├── gallery/        # Gallery images
│   └── favicon.ico     # Favicon
└── README.md           # This file
```

## Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Deploy automatically on push
3. Forms work out-of-the-box with Formspree

### GitHub Pages
1. Push to a GitHub repository
2. Go to Settings > Pages
3. Select main branch as source
4. Forms require additional setup or use Formspree

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init`
3. Deploy: `firebase deploy`

### Vercel
1. Connect GitHub repository
2. Automatic deployments
3. Built-in form handling

## Customization Notes

- **Fonts**: Uses Google Fonts (Poppins and Playfair Display). Ensure internet connection for loading.
- **Icons**: Uses emoji icons. Consider replacing with SVG icons for better consistency.
- **Colors**: All colors are defined as CSS variables in `:root` for easy customization.
- **Responsive**: Breakpoints at 768px and 480px. Adjust as needed.
- **Performance**: Images are lazy-loaded. Optimize all assets for production.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## License

This project is open source. Feel free to use and modify as needed.

## Contact

For questions or support, contact the development team or create an issue in the repository.