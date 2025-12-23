# 🎨 Portfolio Website - Modern & Beautiful

A stunning portfolio website built with Next.js, featuring **glassmorphism effects**, smooth animations, and modern UI/UX design principles.

## ✨ Features

### 🎭 Design
- **Glassmorphism/Acrylic Effects** - Beautiful transparent glass-like components
- **Gradient Backgrounds** - Animated gradient orbs and smooth color transitions
- **Modern UI/UX** - Clean, intuitive interface with excellent user experience
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion and React Spring for fluid interactions

### 🚀 Sections
- **Hero Section** - Eye-catching introduction with animated elements
- **About Section** - Showcase your skills and expertise with glassmorphism cards
- **Skills Section** - Animated progress bars with gradient effects
- **Projects Section** - Interactive project cards with hover effects
- **Contact Section** - Beautiful contact form with glassmorphism styling

### 🎨 UI Components
- Glassmorphism navigation bar with smooth scroll
- Interactive buttons with gradient effects
- Animated skill progress bars
- Project cards with hover animations
- Contact form with modern styling

## 🛠️ Tech Stack

- ✅ **Next.js 14** - React framework with App Router
- ✅ **TypeScript** - Type safety
- ✅ **Tailwind CSS** - Utility-first CSS framework
- ✅ **shadcn/ui** - High-quality React components
- ✅ **Framer Motion** - Production-ready motion library
- ✅ **React Spring** - Spring physics animations
- ✅ **React Icons** - Popular icon libraries
- ✅ **Lucide React** - Beautiful & consistent icons
- ✅ **React Markdown** - Markdown rendering

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles with glassmorphism utilities
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
│
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components (Navbar, Footer)
│   ├── sections/            # Page sections (Hero, About, Projects, etc.)
│   ├── background/          # Background effects
│   └── markdown/            # Markdown components
│
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions & constants
├── types/                   # TypeScript types
└── public/                  # Static assets
```

## 🎨 Customization

### Update Your Information
1. Edit `lib/constants.ts` to update social links
2. Modify sections in `components/sections/` to add your content
3. Update project data in `components/sections/Projects.tsx`

### Colors & Styling
- Glassmorphism effects are defined in `app/globals.css`
- Gradient colors can be customized in Tailwind classes
- Theme colors are in `tailwind.config.ts`

## 🌟 Key Features Explained

### Glassmorphism
The `.glass` and `.glass-dark` utility classes create beautiful frosted glass effects:
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Animations
- **Framer Motion** for entrance animations and interactions
- **React Spring** for physics-based animations
- **Custom hooks** in `hooks/use-animation.ts` for reusable animations

### Gradient Text
Use gradient text classes for eye-catching headings:
- `.gradient-text` - Purple to violet
- `.gradient-text-2` - Pink to red
- `.gradient-text-3` - Blue to cyan

## 🚀 Deployment & CI/CD

### Vercel Deployment

This project is configured for automatic deployment on Vercel with CI/CD:

- **Automatic Deployments**: Every push to `main` branch triggers a production deployment
- **Preview Deployments**: Each pull request gets its own preview URL
- **CI Checks**: GitHub Actions run lint, type check, and build on every push/PR

### Setup Instructions

See [CI_CD_SETUP.md](./CI_CD_SETUP.md) for detailed setup instructions.

### Quick Deploy

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

For more details, check:
- [CI_CD_SETUP.md](./CI_CD_SETUP.md) - Complete CI/CD setup guide
- [DEPLOY.md](./DEPLOY.md) - Deployment checklist and troubleshooting

## 📝 License

This project is open source and available under the MIT License.

