# 🚀 Hướng Dẫn Setup CI/CD với Vercel

## 📋 Tổng Quan

Dự án này đã được cấu hình với CI/CD tự động sử dụng:
- **GitHub Actions**: Chạy CI checks (lint, type check, build)
- **Vercel**: Tự động deploy khi push code lên GitHub

## 🔧 Cấu Hình Đã Tạo

### 1. `vercel.json`
File cấu hình cho Vercel với các settings tối ưu cho Next.js project.

### 2. GitHub Actions Workflows

#### `.github/workflows/ci.yml`
- Chạy trên mỗi push và pull request
- Kiểm tra ESLint
- Kiểm tra TypeScript types
- Build project để đảm bảo không có lỗi

#### `.github/workflows/vercel-deploy.yml`
- Chạy khi push lên `main` branch
- Deploy tự động lên Vercel production

## 🚀 Các Bước Setup

### Bước 1: Push Code lên GitHub

```bash
git add .
git commit -m "Add CI/CD configuration"
git push origin main
```

### Bước 2: Kết Nối Vercel với GitHub

1. **Truy cập Vercel Dashboard**
   - Vào https://vercel.com
   - Đăng nhập bằng GitHub account

2. **Import Project**
   - Click "Add New" → "Project"
   - Chọn repository từ GitHub
   - Vercel sẽ tự động detect Next.js

3. **Cấu hình Project**
   - **Framework Preset**: Next.js (tự động)
   - **Root Directory**: `./` (để trống)
   - **Build Command**: `npm run build` (tự động)
   - **Output Directory**: `.next` (tự động)
   - **Install Command**: `npm install` (tự động)

4. **Deploy lần đầu**
   - Click "Deploy"
   - Chờ build hoàn tất

### Bước 3: Cấu Hình GitHub Secrets (Optional - cho Vercel CLI deployment)

Nếu muốn sử dụng GitHub Actions để deploy (thay vì Vercel auto-deploy), cần thêm secrets:

1. **Lấy Vercel Token**
   - Vào Vercel Dashboard → Settings → Tokens
   - Tạo token mới
   - Copy token

2. **Lấy Vercel Org ID và Project ID**
   - Vào Project Settings → General
   - Copy Organization ID và Project ID

3. **Thêm vào GitHub Secrets**
   - Vào GitHub repository → Settings → Secrets and variables → Actions
   - Thêm các secrets:
     - `VERCEL_TOKEN`: Token từ bước 1
     - `VERCEL_ORG_ID`: Organization ID
     - `VERCEL_PROJECT_ID`: Project ID

**Lưu ý**: Vercel tự động deploy khi connect GitHub, nên bước này chỉ cần nếu muốn dùng GitHub Actions workflow.

## 🔄 Quy Trình CI/CD

### Khi Push Code

1. **GitHub Actions CI** (`.github/workflows/ci.yml`)
   - ✅ Chạy ESLint
   - ✅ Type check với TypeScript
   - ✅ Build project
   - ✅ Tất cả phải pass mới merge được

2. **Vercel Auto Deploy**
   - Tự động deploy khi push lên `main` branch
   - Tạo preview deployment cho mỗi PR
   - Production deployment cho `main` branch

### Khi Tạo Pull Request

- ✅ CI checks chạy tự động
- ✅ Preview deployment trên Vercel
- ✅ Có thể review code và preview trước khi merge

## 📊 Kiểm Tra CI/CD

### Xem GitHub Actions Status

1. Vào GitHub repository
2. Click tab "Actions"
3. Xem status của các workflows

### Xem Vercel Deployments

1. Vào Vercel Dashboard
2. Chọn project
3. Xem tab "Deployments" để xem tất cả deployments

## 🐛 Troubleshooting

### CI Fails

**Lỗi ESLint:**
```bash
npm run lint
# Sửa các lỗi ESLint
```

**Lỗi TypeScript:**
```bash
npx tsc --noEmit
# Sửa các lỗi type
```

**Lỗi Build:**
```bash
npm run build
# Sửa các lỗi build
```

### Vercel Deploy Fails

1. **Kiểm tra Build Logs**
   - Vào Vercel Dashboard → Deployments
   - Click vào failed deployment
   - Xem build logs để tìm lỗi

2. **Test Build Local**
   ```bash
   npm run build
   ```

3. **Kiểm tra Dependencies**
   - Đảm bảo tất cả dependencies trong `package.json`
   - Không có missing dependencies

## ✅ Checklist

- [x] `vercel.json` đã được tạo
- [x] GitHub Actions workflows đã được tạo
- [ ] Code đã push lên GitHub
- [ ] Vercel đã connect với GitHub repository
- [ ] Deploy lần đầu thành công
- [ ] CI checks chạy thành công
- [ ] Test preview deployment với PR

## 🎉 Hoàn Thành!

Sau khi setup xong, bạn sẽ có:

- ✅ **Automatic CI**: Mỗi push/PR sẽ chạy lint, type check, build
- ✅ **Automatic Deployments**: Tự động deploy lên Vercel
- ✅ **Preview Deployments**: Mỗi PR có preview URL riêng
- ✅ **Production Deployments**: Tự động deploy production khi merge vào main

## 📝 Notes

- Vercel free tier rất tốt cho personal projects
- CI/CD hoàn toàn tự động, không cần can thiệp thủ công
- Preview deployments giúp test trước khi merge
- Production deployments chỉ chạy trên `main` branch

Happy Coding! 🚀

