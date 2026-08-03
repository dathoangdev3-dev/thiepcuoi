"use client";

import { useState } from "react";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "1",
    attending: "yes",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending (replace with real API later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("RSVP Data:", formData);
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="text-6xl mb-4">💌</div>
        <h3
          className="text-3xl font-semibold text-primary-dark mb-3"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          Cảm ơn bạn!
        </h3>
        <p className="text-lg text-foreground/70">
          Chúng tôi đã nhận được phản hồi của bạn.
          <br />
          Hẹn gặp bạn trong ngày vui!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
          Họ và Tên *
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          placeholder="Nguyễn Văn A"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">
          Số Điện Thoại
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          placeholder="0912 345 678"
        />
      </div>

      <div>
        <label htmlFor="attending" className="block text-sm font-medium text-foreground/80 mb-2">
          Bạn sẽ tham dự chứ? *
        </label>
        <select
          id="attending"
          value={formData.attending}
          onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        >
          <option value="yes">Có, tôi sẽ đến! 🎉</option>
          <option value="no">Rất tiếc, tôi không thể đến 😢</option>
        </select>
      </div>

      {formData.attending === "yes" && (
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-foreground/80 mb-2">
            Số người tham dự
          </label>
          <select
            id="guests"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          >
            <option value="1">1 người</option>
            <option value="2">2 người</option>
            <option value="3">3 người</option>
            <option value="4">4 người</option>
            <option value="5">5 người trở lên</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
          Lời chúc
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
          placeholder="Gửi lời chúc đến cô dâu chú rể..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Đang gửi...
          </span>
        ) : (
          "Xác Nhận Tham Dự 💒"
        )}
      </button>
    </form>
  );
}
