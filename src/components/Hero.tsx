import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-camp.jpg";

export const Hero = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[700px] overflow-hidden bg-foreground">
      <div
        className="absolute inset-0 animate-slow-zoom"
        style={{ transform: `translateY(${offset}px) scale(1.05)` }}
      >
        <img
          src={heroImg}
          alt="Tende tra gli ulivi nella campagna toscana al tramonto"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/70" />
      </div>

      <div className="relative h-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-20 md:pb-28">
        <div className="overflow-hidden">
          <p className="font-italic-serif text-background/80 text-sm md:text-base tracking-widest uppercase mb-6 animate-fade-blur">
            — Camping &amp; Glamping · Toscana
          </p>
        </div>
        <h1 className="font-serif text-background text-[14vw] md:text-[8vw] leading-[0.92] tracking-tight max-w-6xl animate-fade-blur" style={{ animationDelay: '0.2s' }}>
          Dormire <span className="font-italic-serif">accanto</span><br />
          agli ulivi.
        </h1>
        <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-blur" style={{ animationDelay: '0.5s' }}>
          <p className="text-background/85 max-w-md text-base md:text-lg leading-relaxed font-light">
            Sessant'anni di ospitalità tra le colline del Chianti. Tende, cabine in legno e cieli senza confini.
          </p>
          <div className="flex items-center gap-6">
            <a href="#prenota" className="px-7 py-4 bg-background text-foreground rounded-full font-medium text-sm tracking-wide hover:bg-accent transition-colors">
              Prenota il soggiorno
            </a>
            <a href="#esperienza" className="text-background/90 text-sm tracking-wide border-b border-background/40 pb-1 hover:border-background transition-colors">
              Scopri di più ↓
            </a>
          </div>
        </div>
      </div>

      {/* Floating meta */}
      <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 hidden lg:flex flex-col gap-3 text-background/70 text-xs tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180">
        <span>43.7° N · 11.2° E</span>
        <span>—</span>
        <span>Val d'Orcia</span>
      </div>
    </section>
  );
};
