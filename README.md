# Duncun Motanya - Personal Website

A modern, fully static Next.js website showcasing Duncun Motanya's leadership in fintech and healthcare, built for GitHub Pages deployment.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by musaliamudavadi.com
- **Fully Static**: Optimized for GitHub Pages with `next export`
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete meta tags, sitemap.xml, and robots.txt
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Animations**: Subtle Framer Motion animations for enhanced UX
- **Performance**: Optimized images and static generation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)
- **Images**: Cloudinary CDN

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact & Partnership page
│   ├── fintech/           # Fintech Leadership page
│   ├── gallery/           # Photo gallery
│   ├── healthcare/        # Healthcare & Community page
│   ├── news/              # News & Insights
│   │   └── [slug]/        # Dynamic article pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx
│   ├── GalleryGrid.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ImpactCounter.tsx
│   ├── PostCard.tsx
│   ├── SectionHeader.tsx
│   └── StatCard.tsx
├── public/                # Static assets
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: #2dabe1 (Blue)
- **Secondary**: #ec1c26 (Red)
- **Accent**: Gray scale
- **Background**: White/Gray variations

### Typography
- **Headings**: Playfair Display (600-700)
- **Body**: Inter (400-500)

### Components
- Responsive grid layouts
- Card-based design
- Gradient overlays
- Smooth animations
- Interactive elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/etiditalex/duncun.git
   cd duncun
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Building for Production

### Static Export (GitHub Pages)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files**
   ```bash
   npm run export
   ```

3. **Deploy the `/out` folder**
   - Upload contents of `/out` folder to your GitHub Pages repository
   - Or use GitHub Actions for automatic deployment

### GitHub Actions Deployment

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build and export
        run: |
          npm run build
          npm run export
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🌐 Deployment Options

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions" or "Deploy from a branch"
3. Push to main branch to trigger deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build && npm run export`
3. Set publish directory: `out`

### Vercel
1. Import project from GitHub
2. Framework preset: Next.js
3. Build command: `npm run build`
4. Output directory: `out`

## 🔧 Configuration

### Environment Variables
Create `.env.local` for any environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://duncunmotanya.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Customization

1. **Content Updates**: Edit page components in `/app` directory
2. **Styling**: Modify Tailwind classes or update `tailwind.config.js`
3. **Images**: Replace Cloudinary URLs with your own images
4. **SEO**: Update metadata in `layout.tsx` and individual pages

## 📱 Pages Overview

### Home (`/`)
- Hero section with key message
- Impact highlights (4 main areas)
- About preview
- Key achievements
- Call to action

### About (`/about`)
- Full biography and timeline
- Mission & vision
- Career journey
- Core values
- Personal touch

### Fintech Leadership (`/fintech`)
- Role as FINTAK Chairperson
- Strategic focus areas
- Key initiatives
- Speaking engagements
- Publications

### Healthcare & Community (`/healthcare`)
- DMMC Online Pharmacy
- DMRC Kenya services
- Community programs
- Patient testimonials
- Impact statistics

### News & Insights (`/news`)
- Featured article
- Article grid with filtering
- Newsletter signup
- Category organization

### Gallery (`/gallery`)
- Photo categories
- Lightbox modal
- Recent events
- Responsive grid

### Contact (`/contact`)
- Contact information
- Contact form
- Partnership opportunities
- Quick contact options

## 🎯 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Sitemap**: Auto-generated sitemap.xml
- **Robots**: Search engine directives
- **Structured Data**: Rich snippets for better search results
- **Performance**: Optimized images and static generation

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant color combinations
- **Alt Text**: Descriptive alt text for all images
- **Focus Indicators**: Clear focus states for interactive elements

## 🚀 Performance Optimizations

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by route
- **Minification**: Optimized CSS and JavaScript
- **CDN Ready**: Cloudinary images for global delivery

## 📞 Support

For questions or support regarding this website:

- **Email**: info@duncunmotanya.com
- **Phone**: +254 700 000 000
- **Website**: [duncunmotanya.com](https://duncunmotanya.com)

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**Built with ❤️ for Duncun Motanya**  
*Empowering Communities through Health & Fintech*

---
*Last updated: $(Get-Date)*

