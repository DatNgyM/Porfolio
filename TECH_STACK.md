# 📋 Tech Stack - Đồ Án Blog Cá Nhân

## 🎯 Mục Tiêu
- ✅ Đáp ứng yêu cầu đồ án (SSG + GitHub)
- ✅ Phù hợp với DXC Technology (Java + JavaScript/React)
- ✅ Show off kỹ năng khi ứng tuyển

---

## 🎨 Frontend (FE)

### Core Framework
- **Next.js 14** (App Router)
  - SSG mode (Static Site Generation) - ✅ Đáp ứng yêu cầu SSG
  - React 18
  - TypeScript

### UI Libraries (Combo 1.5 - Cân Bằng)
- **shadcn/ui** - UI components (đẹp, tối giản)
- **Tailwind CSS** - Styling utility-first
- **Lucide React** - Icons hiện đại
- **React Icons** - Icons bổ sung

### Animations
- **Framer Motion** - Animations mượt mà (cơ bản + nâng cao)

### Content & Markdown
- **react-markdown** - Render markdown content
- **remark-gfm** - GitHub Flavored Markdown support
- **rehype-highlight** (hoặc react-syntax-highlighter) - Syntax highlighting cho code blocks
- **gray-matter** - Parse frontmatter từ markdown files

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety

---

## ⚙️ Backend (BE) - Optional

### Option 1: Đơn Giản (Khuyến Nghị cho Deadline)
- **JSON Files** - Lưu trữ blog posts
- **Markdown Files** - Content cho blog posts
- **Next.js API Routes** (nếu cần) - Serverless functions

### Option 2: Full-Stack (Để Học & Show Off)
- **Java Spring Boot 3.x** - REST API
  - ✅ Phù hợp DXC (họ dùng Java)
- **PostgreSQL** - Database (hoặc H2 cho đơn giản)
- **Spring Data JPA** - ORM

---

## 🚀 Deployment

### Frontend
- **Vercel** (Miễn phí)
  - URL: `yourname-blog.vercel.app`
  - Auto deploy từ GitHub
  - CDN global
  - SSG support tốt

### Backend (nếu có)
- **Railway** (Miễn phí - free tier)
  - URL: `yourname-api.railway.app`
  - PostgreSQL included
- **Render** (Miễn phí - free tier)
  - URL: `yourname-api.onrender.com`

### Version Control
- **GitHub** - Repository
  - ✅ Bắt buộc theo yêu cầu đồ án

---

## 📦 Package Dependencies

### Dependencies
```json
{
  "next": "^14.2.5",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.5.4",
  "framer-motion": "^11.3.19",
  "react-icons": "^5.3.0",
  "lucide-react": "^0.424.0",
  "react-markdown": "^9.0.1",
  "remark-gfm": "^4.0.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.4.0"
}
```

### DevDependencies
```json
{
  "@types/node": "^20.14.12",
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "autoprefixer": "^10.4.19",
  "postcss": "^8.4.40",
  "tailwindcss": "^3.4.7",
  "tailwindcss-animate": "^1.0.7",
  "eslint": "^8.57.0",
  "eslint-config-next": "^14.2.5"
}
```

---

## ✅ Đáp Ứng Yêu Cầu Đồ Án

| Yêu Cầu | Tech Stack | Status |
|---------|------------|--------|
| SSG | Next.js SSG mode | ✅ |
| GitHub Repo | GitHub | ✅ |
| Menu Home + Blog | Next.js Pages | ✅ |
| Profile cá nhân | Next.js Page | ✅ |
| 9+ bài post Java & JS | Markdown files | ✅ |
| Đẹp tối giản | shadcn/ui + Tailwind | ✅ |
| Tiếng Việt | Content | ✅ |

---

## 🎯 Phù Hợp DXC Technology

### DXC Thường Dùng:
- ✅ **Java** - Spring Boot (nếu làm BE)
- ✅ **JavaScript/React** - Next.js (FE)
- ✅ **TypeScript** - Type safety
- ✅ **PostgreSQL** - Database (nếu làm BE)

### Show Off Kỹ Năng:
- ✅ Full-stack development
- ✅ Modern React patterns
- ✅ TypeScript
- ✅ REST API (nếu có BE)
- ✅ Deployment thực tế

---

## 📁 Cấu Trúc Project

```
blog-project/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/        # Blog detail
│   ├── profile/           # Profile page
│   │   └── page.tsx
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── blog/             # Blog components
│   └── layout/           # Layout components
├── content/              # Blog posts (markdown files)
│   └── posts/
│       ├── post-1.md
│       ├── post-2.md
│       └── ...
├── lib/                  # Utilities
│   ├── utils.ts          # Helper functions
│   └── markdown.ts       # Markdown processing
├── public/               # Static assets
│   ├── images/
│   └── ...
└── package.json
```

---

## 💰 Chi Phí

| Hạng Mục | Chi Phí |
|----------|---------|
| Frontend hosting (Vercel) | **0đ** |
| Backend hosting (Railway/Render) | **0đ** (free tier) |
| Database (PostgreSQL) | **0đ** (free tier) |
| GitHub | **0đ** |
| Domain (optional) | **0đ** (subdomain) hoặc 200k-500k/năm |
| **Tổng** | **0đ** (hoàn toàn miễn phí) |

---

## 📅 Timeline

- **Week 1**: Setup + UI cơ bản
- **Week 2**: Blog functionality + viết 5-6 bài
- **Week 3**: Viết nốt 3-4 bài + animations
- **Week 4**: Polish + Deploy
- **Deadline**: 27/12

---

## 🎨 UI/UX Libraries

### Combo 1.5 (Đã Chọn)
- ✅ shadcn/ui + Tailwind CSS (UI components)
- ✅ Framer Motion (animations)
- ✅ React Icons + Lucide React (icons)
- ✅ React Markdown (render markdown)

### Bundle Size
- **Ước tính**: ~100-200KB (gzipped)
- **Performance**: Tốt (Next.js tự tối ưu)

---

## 📝 Lưu Ý

1. **Next.js SSG mode** đáp ứng yêu cầu SSG của đồ án
2. **GitHub Repo** bắt buộc theo yêu cầu
3. **Tất cả đều miễn phí** (trừ domain nếu mua)
4. **Phù hợp DXC** - Java (BE) + React (FE)
5. **Show off tốt** - Modern tech stack

---

## 🔗 Links Tham Khảo

- Blog mẫu: https://kysubrse.com/
- Profile mẫu: https://dangnghinhxuan.wixsite.com/portfolio

---

**Tạo ngày**: $(date)
**Phiên bản**: 1.0
**Combo**: 1.5 (Cân Bằng)

