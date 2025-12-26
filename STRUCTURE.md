 Cấu trúc thư mục Portfolio

 📁 Cấu trúc Project

```
Pofolio/
├── app/                       Next.js App Router
│   ├── globals.css           Tailwind CSS & shadcn/ui styles
│   ├── layout.tsx            Root layout
│   └── page.tsx              Home page
│
├── components/               React Components
│   ├── ui/                   shadcn/ui components
│   │   └── button.tsx        Button component
│   ├── layout/               Layout components
│   │   ├── Navbar.tsx        Navigation bar
│   │   └── Footer.tsx        Footer
│   ├── sections/             Page sections
│   │   ├── Hero.tsx          Hero section
│   │   ├── About.tsx         About section
│   │   ├── Projects.tsx      Projects section
│   │   └── Contact.tsx       Contact section
│   ├── markdown/             Markdown components
│   │   └── MarkdownRenderer.tsx
│   └── examples/             Example components
│       ├── IconExamples.tsx
│       ├── AnimationExamples.tsx
│       └── MarkdownExample.tsx
│
├── hooks/                    Custom React Hooks
│   └── use-animation.ts      Animation hooks (Framer Motion + React Spring)
│
├── lib/                      Utility functions
│   ├── utils.ts             Utility functions (cn helper)
│   └── constants.ts         Constants (nav links, social links)
│
├── types/                    TypeScript types
│   └── index.ts             Type definitions
│
├── public/                   Static assets
│
├── components.json           shadcn/ui config
├── tailwind.config.ts       Tailwind CSS config
├── tsconfig.json            TypeScript config
├── next.config.mjs          Next.js config
├── package.json             Dependencies
└── README.md                Documentation
```

 📄 Sơ đồ cấu trúc Website (Sitemap)

 1. Trang chủ (Home) - `/`
Trang chủ là điểm khởi đầu của website, được thiết kế với banner giới thiệu ấn tượng và hiệu ứng Glassmorphism hiện đại. Trang này bao gồm các phần chính:
- Hero Section: Banner giới thiệu với tiêu đề lớn "CREATIVE DEVELOPER", hiệu ứng glassmorphism với backdrop blur và border trong suốt, cùng các card giới thiệu về Clean Code, Modern UI và Fast Performance
- Skills Section: Hiển thị các kỹ năng chuyên môn với animation mượt mà
- Projects Section: Danh sách các dự án nổi bật được trình bày dưới dạng grid với hiệu ứng hover và animation
- Contact Section: Form liên hệ hoặc thông tin liên lạc

Tất cả các section đều được tích hợp hiệu ứng Glassmorphism với nền gradient động, tạo nên trải nghiệm thị giác hiện đại và chuyên nghiệp.

 2. Trang giới thiệu (About) - `/about`
Trang About cung cấp thông tin chi tiết về cá nhân và chuyên môn:
- Thông tin cá nhân: Email, địa chỉ, ngày sinh, vị trí công việc
- Tech Stack & Skills: Grid hiển thị các kỹ năng như Frontend Development (React, Next.js, TypeScript), UI/UX Design, Performance Optimization, Collaboration, Quality Assurance và Problem Solving
- Education: Thông tin về quá trình học tập, trường đại học và chuyên ngành
- Experience: Lịch sử làm việc, các vị trí đã đảm nhận và thành tựu
- Certifications: Danh sách các chứng chỉ đã đạt được với khả năng xem chi tiết
- Statistics: Các con số thống kê như số lượng dự án, mức độ hài lòng và hỗ trợ

Trang được thiết kế với layout responsive, sử dụng glassmorphism cards và animation khi scroll, tạo trải nghiệm tương tác mượt mà.

 3. Trang dự án (Projects) - `projects` (Section trên Home)
Trang Projects hiển thị danh sách các dự án thực tế đã được thực hiện:
- Featured Projects Grid: Hiển thị các dự án dưới dạng card với layout grid responsive (1 cột mobile, 2 cột tablet, 3 cột desktop)
- Project Information: Mỗi project card bao gồm:
  - Tiêu đề và mô tả dự án
  - Danh sách công nghệ sử dụng (technologies tags)
  - Links đến GitHub repository và Live Demo
  - Hình ảnh/background gradient đại diện
- Interactive Effects: Hover effects với scale, translate và shine effects
- View All Button: Nút để xem tất cả các dự án

Các project cards được thiết kế với glassmorphism style, có animation khi scroll vào view và hiệu ứng tương tác khi hover, tạo trải nghiệm người dùng sinh động.

 4. Trang Blog - `/blog`
Trang Blog là nơi chia sẻ kiến thức và bài viết kỹ thuật:
- Blog List Page (`/blog`):
  - Header với tiêu đề và mô tả
  - Search Functionality: Thanh tìm kiếm cho phép tìm kiếm bài viết theo tiêu đề, nội dung tóm tắt hoặc tags
  - Category Filter: Bộ lọc theo danh mục (Tất cả, Java, JavaScript, Network Programming) với animation khi chuyển đổi
  - Results Counter: Hiển thị số lượng bài viết tìm thấy
  - Blog Posts Grid: Grid layout responsive hiển thị các blog cards với:
    - Hình ảnh thumbnail
    - Tiêu đề và excerpt
    - Thông tin tác giả, ngày đăng
    - Tags và category
    - Link đến trang chi tiết
  - Empty State: Hiển thị thông báo khi không tìm thấy bài viết

- Blog Post Detail Page (`/blog/[slug]`):
  - Hiển thị nội dung đầy đủ của bài viết
  - Hỗ trợ Markdown rendering với syntax highlighting
  - Metadata: Tiêu đề, mô tả, tags, tác giả, ngày đăng
  - SEO optimized với Open Graph và Twitter Card
  - Navigation để quay lại danh sách blog

Trang Blog được tích hợp với hệ thống quản lý nội dung, hỗ trợ tìm kiếm và lọc theo danh mục, tạo trải nghiệm đọc và khám phá nội dung thuận tiện cho người dùng.

 🔄 Thiết kế luồng dữ liệu (Data Flow)

### Cách dữ liệu được đọc từ file Markdown -> Xử lý qua thư viện react-markdown -> Hiển thị lên giao diện

**1. Tạo Nguồn Dữ Liệu (Đầu vào)**

Việc cần làm: Viết nội dung bài blog (dạng Markdown) vào file chứa dữ liệu.

Trong code cậu: File `lib/blog-data.ts`.

Ví dụ: Cậu thêm một bài viết mới với nội dung content: `"# Tiêu đề bài viết..."` vào file này.

**2. Lấy Dữ Liệu (Xử lý)**

Việc cần làm: Viết hàm để tìm đúng bài viết dựa trên đường dẫn (slug) mà người dùng bấm vào.

Trong code cậu: File `app/blog/[slug]/page.tsx`.

Hành động: Code sẽ chạy logic: "Người dùng muốn xem bài A -> Vào kho dữ liệu tìm bài A -> Lấy nội dung ra".

**3. Dịch và Hiển Thị (Đầu ra)**

Việc cần làm: Dùng component chuyển đổi văn bản Markdown thô sơ thành giao diện HTML đẹp đẽ.

Trong code cậu: File `components/markdown/MarkdownRenderer.tsx`.

Hành động: Nhận text `# Tiêu đề` và vẽ lên màn hình dòng chữ to đậm.

 🎨 Thiết kế giao diện (UI/UX Design)

 Design System và Visual Identity

Website được thiết kế với phong cách hiện đại, tối giản và chuyên nghiệp, tập trung vào trải nghiệm người dùng tối ưu:

1. Glassmorphism Design
- Hiệu ứng Glassmorphism được áp dụng xuyên suốt website:
  - Background: Semi-transparent với backdrop-filter blur (10px) và saturate (180%)
  - Border: Mỏng, trong suốt với opacity thấp (rgba)
  - Shadow: Soft shadows với rgba để tạo độ sâu
  - Hover effects: Tăng opacity và shadow khi hover
- Hai variant: `.glass` (light mode) và `.glass-dark` (dark mode)
- Performance optimization: Sử dụng `will-change`, `transform: translateZ(0)`, `contain` để tối ưu rendering

2. Color Scheme (Monochrome)
- Light Mode:
  - Background: Trắng sáng (98% lightness)
  - Foreground: Xám đen (20% lightness)
  - Accents: Gradient từ xám đen đến xám sáng
  - Glass: Trắng với opacity 25-35%
- Dark Mode:
  - Background: Đen sẫm (8% lightness)
  - Foreground: Xám sáng (95% lightness)
  - Accents: Gradient từ xám sáng đến trắng
  - Glass: Dark slate với opacity 60-70%
- Category Colors (cho Blog):
  - Java: Orange to Red gradient
  - JavaScript: Yellow to Orange gradient
  - Network Programming: Teal to Cyan gradient

3. Typography
- Font System:
  - Font rendering: Antialiased, grayscale, optimizeLegibility
  - Font features: Kern và liga enabled
  - Headings: Font weight 700, line-height 1.2, letter-spacing -0.02em
  - Body text: Line-height 1.7 cho readability tốt
- Markdown Content Typography:
  - Prose classes từ Tailwind Typography plugin
  - Responsive font sizes (text-lg cho paragraphs)
  - Gradient text cho headings chính
  - Custom spacing và margins cho từng element

4. Animations và Interactions
- Framer Motion Integration:
  - Page transitions: Fade in với y-axis movement
  - Scroll animations: Elements animate khi scroll vào viewport
  - Hover effects: Scale, translate, rotate transformations
  - Stagger animations: Sequential animations cho lists và grids
- Custom Animations:
  - Reading progress bar: Smooth width transition
  - Shine effects: Gradient sweep trên hover
  - Blob animations: CSS keyframes cho background elements
  - Scroll indicators: Bouncing arrow animation
- Performance:
  - `useReducedMotion` hook để respect user preferences
  - `viewport` options để optimize scroll animations
  - `will-change` CSS property cho elements có animations

5. Responsive Design
- Breakpoints (Tailwind CSS):
  - Mobile: Default (< 768px)
  - Tablet: md (≥ 768px)
  - Desktop: lg (≥ 1024px)
  - Large Desktop: xl (≥ 1280px)
- Layout Adaptations:
  - Grid layouts: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
  - Typography: Responsive font sizes (text-4xl → text-6xl)
  - Spacing: Adaptive padding và margins
  - Navigation: Mobile-friendly menu
- Touch Interactions:
  - Hover effects được tối ưu cho touch devices
  - Button sizes đủ lớn cho touch targets (≥ 44x44px)

6. Component Design Patterns
- Cards:
  - Glassmorphism background
  - Rounded corners (rounded-2xl)
  - Padding và spacing nhất quán
  - Hover effects với scale và translate
- Buttons:
  - Gradient backgrounds cho primary actions
  - Ghost variant cho secondary actions
  - Icon integration với Lucide React
  - Loading states và disabled states
- Forms:
  - Glassmorphism input fields
  - Focus states với ring effects
  - Error states với color feedback
- Code Blocks:
  - Terminal-style design với header
  - Language indicator
  - Syntax highlighting ready
  - Copy button support (có thể thêm)

7. Accessibility (A11y)
- Semantic HTML: Proper heading hierarchy, article tags, nav elements
- ARIA labels: Cho interactive elements
- Keyboard navigation: Tab order và focus states
- Color contrast: Đảm bảo WCAG AA compliance
- Screen reader support: Alt text cho images, descriptive labels

8. Performance Optimizations
- Next.js Image Optimization: Cho local images
- Code splitting: Automatic với Next.js App Router
- Lazy loading: Images và components khi cần
- CSS optimizations: Utility-first với Tailwind, minimal custom CSS
- Animation performance: GPU-accelerated transforms, will-change hints

9. User Experience Enhancements
- Reading Progress: Visual indicator ở top của blog post pages
- Search & Filter: Real-time search với debouncing, category filters
- Empty States: Friendly messages khi không có kết quả
- Loading States: Smooth transitions khi load content
- Error Handling: 404 pages và error boundaries
- Navigation: Breadcrumbs và back buttons cho easy navigation

10. Dark Mode Support
- System preference detection
- Manual toggle (có thể thêm)
- Consistent color scheme across all components
- Smooth transitions khi switch mode
- Persisted preference trong localStorage

 🎨 Tech Stack

 Core
- Next.js 14 - React framework với App Router
- TypeScript - Type safety
- Tailwind CSS - Utility-first CSS

 UI Components
- shadcn/ui - High-quality React components
- Tailwind CSS - Styling

 Animations
- Framer Motion - Production-ready motion library
- React Spring - Spring physics animations

 Icons
- React Icons - Popular icon libraries
- Lucide React - Beautiful & consistent icons

 Content
- React Markdown - Markdown rendering
- remark-gfm - GitHub Flavored Markdown support

 🚀 Cách sử dụng

 1. Cài đặt dependencies
```bash
npm install
```

 2. Chạy development server
```bash
npm run dev
```

 3. Thêm shadcn/ui components
```bash
npx shadcn-ui@latest add [component-name]
```

 📝 Ghi chú

- Tất cả components trong `components/sections/` đã có Framer Motion animations
- Custom hooks trong `hooks/use-animation.ts` kết hợp Framer Motion và React Spring
- Icons có thể dùng từ cả React Icons và Lucide React
- Markdown renderer sẵn sàng sử dụng với GitHub Flavored Markdown

