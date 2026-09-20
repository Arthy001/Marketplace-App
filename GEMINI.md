# Project Instructions & Rules - GEMINI.md

## ⚠️ กฎสำคัญที่สุด (Crucial Project Rules)

1. **ห้ามแก้ไขโค้ดเองโดยพลการ (Strict Rule: Do not modify code without explicit user request / instructions)**
   - ห้ามทำการเปลี่ยนแปลงโครงสร้างไฟล์, ลบฟีเจอร์, หรือแก้ไขโค้ดเดิมโดยที่ผู้ใช้ไม่ได้สั่งการหรือไม่ได้รับความเห็นชอบ
   - ทุกครั้งก่อนการปรับเปลี่ยนสถาปัตยกรรมหรือแก้ไขโค้ดหลัก จะต้องปรึกษาหรือรับความเห็นชอบจากผู้ใช้ก่อนเสมอ
   - หากพบข้อผิดพลาด ให้รายงานปัญหาและแนวทางแก้ไขก่อนดำเนินการ
   - รักษาความต่อเนื่องของโค้ดเดิม (Preserve existing functionality, comments, and structure)

2. **ห้าม Commit หรือ Push ขึ้น Git เองโดยพลการ (Strict Rule: Do not commit or push to Git without explicit user request / approval)**
   - ห้ามรันคำสั่ง `git commit`, `git push`, หรือเปลี่ยนแปลง branch บน remote repository เองโดยเด็ดขาด ยกเว้นเมื่อผู้ใช้สั่งการหรือระบุให้ทำอย่างชัดเจนเท่านั้น
   - ทุกครั้งที่ทำการพัฒนาหรือแก้ไขไฟล์เสร็จสิ้น ให้รายงานผลการดำเนินงานแก่ผู้ใช้เพื่อตรวจสอบก่อนเสมอ และจะไม่ทำ Git commit/push หากผู้ใช้ไม่ได้สั่ง

---

## 🏪 Project Overview & Tech Stack - Storefront Hub

- **Project Name**: Marketplace Storefront Hub (ศูนย์รวมแสดงผลงานและขายซอร์สโค้ด/เทมเพลต)
- **Framework**: Next.js 15 / 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4, Lucide Icons
- **Typography**: Plus Jakarta Sans & Noto Sans Thai
- **Design Concept**: Minimalist, clean editorial dark theme (`#090a0f`)
- **Default Port**: 3000 (`http://localhost:3000`)
- **Deployment**: Cloudflare Pages ready (Node 22 / static export)

---

## 📁 Directory Structure

```
storefront/
├── GEMINI.md                  # Project rules & guidelines
├── package.json               # Port 3000 pinned
├── public/                    # Static assets
└── src/
    ├── app/
    │   ├── layout.tsx         # Fonts & root layout
    │   ├── page.tsx           # Main showcase catalog & filters
    │   ├── globals.css        # Minimal styling & @theme
    │   └── templates/
    │       └── [slug]/page.tsx# Detailed template breakdown & license chooser
    ├── components/
    │   ├── layout/            # Navbar, Footer
    │   ├── home/              # HeroSection, CategoryTabs, TemplateCard, ValueProps, PricingSection, FaqSection
    │   └── modal/             # InquiryModal
    ├── lib/
    │   └── data/templates.ts  # Catalog data (Car4U & upcoming templates)
    └── types/
        └── index.ts           # TypeScript interfaces
```
