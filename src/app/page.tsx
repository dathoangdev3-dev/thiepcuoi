import MusicPlayer from "./components/MusicPlayer";
import RSVPForm from "./components/RSVPForm";
import CountdownTimer from "./components/CountdownTimer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MusicPlayer />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl animate-float">🌸</div>
          <div className="absolute top-20 right-20 text-5xl animate-float delay-200">🌿</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-float delay-400">🌷</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-float delay-600">🌸</div>
          <div className="absolute top-1/2 left-5 text-4xl animate-float delay-800">🍃</div>
          <div className="absolute top-1/3 right-5 text-4xl animate-float delay-1000">🍃</div>
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-lg text-primary/80 mb-4 animate-fade-in-up tracking-widest uppercase">
            Trân trọng kính mời
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-primary-dark mb-6 animate-fade-in-up delay-200"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Hoàng Đạt
          </h1>

          <div className="text-3xl text-primary animate-heartbeat my-4">&amp;</div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-primary-dark mb-8 animate-fade-in-up delay-400"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            [Tên Cô Dâu]
          </h1>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-fade-in delay-600" />

          <p className="text-xl md:text-2xl text-foreground/70 animate-fade-in-up delay-800">
            Chúng tôi cùng nhau bước vào hành trình mới
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary/50">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl text-primary-dark mb-12"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Ngày Vui Của Chúng Tôi
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Lễ Vu Quy */}
            <div className="p-8 rounded-2xl bg-cream/80 border border-primary/10 shadow-sm">
              <div className="text-4xl mb-4">💒</div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Lễ Vu Quy</h3>
              <div className="space-y-2 text-foreground/70">
                <p className="text-lg">
                  <span className="font-medium">🕐</span> 8:00 - Thứ Bảy
                </p>
                <p className="text-lg">
                  <span className="font-medium">📅</span> 20 / 12 / 2026
                </p>
                <p className="text-lg">
                  <span className="font-medium">📍</span> [Địa chỉ nhà gái]
                </p>
              </div>
            </div>

            {/* Lễ Thành Hôn */}
            <div className="p-8 rounded-2xl bg-cream/80 border border-primary/10 shadow-sm">
              <div className="text-4xl mb-4">🎊</div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">Lễ Thành Hôn</h3>
              <div className="space-y-2 text-foreground/70">
                <p className="text-lg">
                  <span className="font-medium">🕐</span> 10:00 - Thứ Bảy
                </p>
                <p className="text-lg">
                  <span className="font-medium">📅</span> 20 / 12 / 2026
                </p>
                <p className="text-lg">
                  <span className="font-medium">📍</span> [Địa chỉ nhà trai / nhà hàng]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl text-primary-dark mb-4"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Đếm Ngược
          </h2>
          <p className="text-foreground/60 mb-10 text-lg">Đến ngày trọng đại của chúng tôi</p>
          <CountdownTimer />
        </div>
      </section>

      {/* Love Story / Gallery placeholder */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl text-primary-dark mb-12"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Câu Chuyện Tình Yêu
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-cream/50">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl shrink-0">
                💕
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-primary-dark mb-1">Lần đầu gặp gỡ</h4>
                <p className="text-foreground/60">[Mô tả câu chuyện của bạn ở đây...]</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-cream/50">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl shrink-0">
                💍
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-primary-dark mb-1">Ngày cầu hôn</h4>
                <p className="text-foreground/60">[Mô tả câu chuyện cầu hôn...]</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-cream/50">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl shrink-0">
                👰
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-primary-dark mb-1">Về chung một nhà</h4>
                <p className="text-foreground/60">Và giờ chúng tôi sẽ cùng nhau viết tiếp câu chuyện...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4" id="rsvp">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl text-primary-dark mb-4"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Xác Nhận Tham Dự
          </h2>
          <p className="text-foreground/60 mb-10 text-lg">
            Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi
          </p>
          <RSVPForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center bg-primary-dark text-white/80">
        <p
          className="text-3xl mb-4"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          Hoàng Đạt & [Tên Cô Dâu]
        </p>
        <p className="text-sm text-white/50">20.12.2026 • Made with ❤️</p>
      </footer>
    </div>
  );
}
