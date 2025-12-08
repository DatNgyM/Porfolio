# Cấu trúc thư mục Portfolio

## 📁 Cấu trúc Project

```
Pofolio/
├── app/                      # Next.js App Router
│   ├── globals.css          # Tailwind CSS & shadcn/ui styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
│
├── components/              # React Components
│   ├── ui/                  # shadcn/ui components
│   │   └── button.tsx       # Button component
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── Footer.tsx       # Footer
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Projects.tsx     # Projects section
│   │   └── Contact.tsx      # Contact section
│   ├── markdown/            # Markdown components
│   │   └── MarkdownRenderer.tsx
│   └── examples/            # Example components
│       ├── IconExamples.tsx
│       ├── AnimationExamples.tsx
│       └── MarkdownExample.tsx
│
├── hooks/                   # Custom React Hooks
│   └── use-animation.ts     # Animation hooks (Framer Motion + React Spring)
│
├── lib/                     # Utility functions
│   ├── utils.ts            # Utility functions (cn helper)
│   └── constants.ts        # Constants (nav links, social links)
│
├── types/                   # TypeScript types
│   └── index.ts            # Type definitions
│
├── public/                  # Static assets
│
├── components.json          # shadcn/ui config
├── tailwind.config.ts      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
├── next.config.mjs         # Next.js config
├── package.json            # Dependencies
└── README.md               # Documentation
```

## 🎨 Tech Stack

### Core
- **Next.js 14** - React framework với App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS

### UI Components
- **shadcn/ui** - High-quality React components
- **Tailwind CSS** - Styling

### Animations
- **Framer Motion** - Production-ready motion library
- **React Spring** - Spring physics animations

### Icons
- **React Icons** - Popular icon libraries
- **Lucide React** - Beautiful & consistent icons

### Content
- **React Markdown** - Markdown rendering
- **remark-gfm** - GitHub Flavored Markdown support

## 🚀 Cách sử dụng

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy development server
```bash
npm run dev
```

### 3. Thêm shadcn/ui components
```bash
npx shadcn-ui@latest add [component-name]
```

## 📝 Ghi chú

- Tất cả components trong `components/sections/` đã có Framer Motion animations
- Custom hooks trong `hooks/use-animation.ts` kết hợp Framer Motion và React Spring
- Icons có thể dùng từ cả React Icons và Lucide React
- Markdown renderer sẵn sàng sử dụng với GitHub Flavored Markdown

