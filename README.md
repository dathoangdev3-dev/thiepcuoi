# 💒 Thiệp Cưới Online

Trang thiệp cưới online được xây dựng bằng Next.js + TailwindCSS, deploy trên Vercel.

## Tính năng

- 🎨 Giao diện đẹp, responsive trên mọi thiết bị
- 🎵 Nhạc nền tự động phát
- ⏰ Đồng hồ đếm ngược đến ngày cưới
- 📝 Form xác nhận tham dự (RSVP)
- 💕 Phần câu chuyện tình yêu
- ✨ Animation mượt mà

## Cách sử dụng

### 1. Cá nhân hóa nội dung

Chỉnh sửa trong `src/app/page.tsx`:
- Thay `[Tên Cô Dâu]` bằng tên cô dâu
- Thay `[Địa chỉ nhà gái]` và `[Địa chỉ nhà trai / nhà hàng]` bằng địa chỉ thật
- Cập nhật câu chuyện tình yêu

Chỉnh sửa trong `src/app/components/CountdownTimer.tsx`:
- Thay đổi `WEDDING_DATE` thành ngày cưới thật

Chỉnh sửa trong `src/app/layout.tsx`:
- Cập nhật metadata (title, description)

### 2. Thêm nhạc nền

Đặt file nhạc MP3 vào `public/music/wedding-song.mp3`

### 3. Chạy local

```bash
npm install
npm run dev
```

Truy cập http://localhost:3000

### 4. Deploy lên Vercel

1. Push code lên GitHub
2. Vào [vercel.com](https://vercel.com), đăng nhập bằng GitHub
3. Import repository này
4. Click "Deploy" — xong!

## Tech Stack

- [Next.js 16](https://nextjs.org)
- [TailwindCSS 4](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)
- [Vercel](https://vercel.com) (hosting)
