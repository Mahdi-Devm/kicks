# 👟 Kicks - فروشگاه مدرن کفش 

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Prisma](https://img.shields.io/badge/Prisma-6.19.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Upstash_Redis-FF4438?style=for-the-badge&logo=redis&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 📋 معرفی پروژه

**Kicks** یک فروشگاه اینترنتی مدرن و کامل برای فروش کفش است که با **Next.js 16** و **TypeScript** ساخته شده. این پروژه با معماری **Next.js 16 Modular Clean Architecture** طراحی شده که ترکیبی از بهترین شیوه‌های معماری تمیز، طراحی دامنه‌محور و ساختار ماژولار Next.js است.

> ⚡ **هدف پروژه**: ارائه یک تجربه خرید لذت‌بخش با عملکرد بالا و رابط کاربری مدرن

---

## 🏗️ معماری: **Next.js 16 App Router + Modular Clean Architecture (لایه‌بندی شده با تمرکز بر Domain)**

### 📐 لایه‌های معماری

| لایه | مسیر | مسئولیت |
|------|------|----------|
| **Presentation Layer** | `/app` | نمایش صفحات، دریافت ورودی کاربر |
| **Interface Adapters** | `/core/api-route` | تبدیل درخواست‌های HTTP به فراخوانی‌های داخلی |
| **Application Layer** | `/core/features` | مدیریت سناریوها و موارد استفاده |
| **Domain Layer** | `/core/prisma` | موجودیت‌ها و قوانین کسب‌وکار |
| **Infrastructure Layer** | `/core/lib` | ارتباط با سرویس‌های خارجی |

---

## ✨ ویژگی‌های اصلی

### 🛍️ بخش فروشگاه

- **نمایش محصولات** در صفحه اصلی با طراحی جذاب
- **مدیریت کامل محصولات** در پنل ادمین
- **دسته‌بندی پیشرفته** محصولات
- **جستجو و فیلتر** هوشمند

### 📝 سیستم بلاگ

- **ایجاد مقاله** با فرم چندمرحله‌ای هوشمند
- **نمایش مقالات** در صفحه اصلی و صفحات اختصاصی
- **مدیریت کامل مقالات** توسط ادمین
- **دسته‌بندی و برچسب‌گذاری** مقالات

### 👤 احراز هویت و امنیت

- **سیستم لاگین و ثبت‌نام** امن با OTP
- **کد یکبارمصرف** با ذخیره در Redis (انقضای ۵ دقیقه)
- **رمزنگاری پسوردها** با bcryptjs
- **مدیریت نشست کاربران** با Next.js

### 🛡️ پنل‌های مدیریتی

- **پنل ادمین** کامل با دسترسی‌های سطح‌بندی شده
- **پنل کاربری** اختصاصی برای هر کاربر
- **داشبورد تحلیلی** با نمودارهای Recharts
- **مدیریت فایل‌ها** با Cloudinary و Uploadthing

---

## 🛠️ تکنولوژی‌ها و ابزارها

| دسته‌بندی | تکنولوژی‌ها | وضعیت |
|-----------|-------------|--------|
| **⚛️ فریم‌ورک اصلی** | ![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square) · ![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square) · ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square) | ✅ فعال |
| **🎨 استایل و UI** | ![Tailwind](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=flat-square) · ![Radix UI](https://img.shields.io/badge/Radix_UI-Components-161618?style=flat-square) · ![Lucide](https://img.shields.io/badge/Lucide-Icons-5e5e5e?style=flat-square) | ✅ فعال |
| **🗄️ دیتابیس و ORM** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=flat-square) · ![Prisma](https://img.shields.io/badge/Prisma-6.19.0-2D3748?style=flat-square) · ![Redis](https://img.shields.io/badge/Redis-Upstash-FF4438?style=flat-square) | ✅ فعال |
| **☁️ ذخیره‌سازی** | ![Cloudinary](https://img.shields.io/badge/Cloudinary-Images-3448C5?style=flat-square) · ![Uploadthing](https://img.shields.io/badge/Uploadthing-Files-000000?style=flat-square) | ✅ فعال |
| **🔐 احراز هویت** | ![bcryptjs](https://img.shields.io/badge/bcryptjs-Encryption-4B32C3?style=flat-square) · ![Resend](https://img.shields.io/badge/Resend-OTP_Email-000000?style=flat-square) | ✅ فعال |
| **📊 کامپوننت‌ها** | ![Swiper](https://img.shields.io/badge/Swiper-Slider-6332F6?style=flat-square) · ![Recharts](https://img.shields.io/badge/Recharts-Charts-22b5bf?style=flat-square) · ![Vaul](https://img.shields.io/badge/Vaul-Drawer-000000?style=flat-square) · ![Sonner](https://img.shields.io/badge/Sonner-Toast-000000?style=flat-square) | ✅ فعال |
| **🛠️ ابزارهای توسعه** | ![ESLint](https://img.shields.io/badge/ESLint-Linting-4B32C3?style=flat-square) · ![TSX](https://img.shields.io/badge/TSX-Scripts-3178C6?style=flat-square) | ✅ فعال |
| **🚀 زیرساخت** | ![Vercel](https://img.shields.io/badge/Vercel-Hosting-000000?style=flat-square) · ![Neon](https://img.shields.io/badge/Neon-PostgreSQL-4169E1?style=flat-square) · ![Upstash](https://img.shields.io/badge/Upstash-Redis-FF4438?style=flat-square) | 🔜 پیشنهادی |

---

## 🚀 شروع سریع

### پیش‌نیازها
![Node](https://img.shields.io/badge/Node.js-20%2B-339933?style=flat-square&logo=node.js)
![npm](https://img.shields.io/badge/npm-10%2B-CB3837?style=flat-square&logo=npm)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15%2B-4169E1?style=flat-square&logo=postgresql)

```bash
# کلون کردن پروژه
git clone https://github.com/Mahdi-Devm/kicks.git
cd kicks

# نصب وابستگی‌ها
npm install

# تنظیم متغیرهای محیطی
cp .env.example .env.local

# راه‌اندازی دیتابیس
npx prisma migrate dev --name init
npx prisma generate

# پر کردن دیتابیس با داده‌های اولیه
npm run seed      # ادمین
npm run seedproduct # محصولات نمونه (6+ محصول)
npm run seedblog  # مقالات نمونه (3+ مقاله)

# اجرای پروژه
npm run dev
