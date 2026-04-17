import { useEffect, useState } from "react";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-foreground">Sotto le Stelle</span>
          <span className="font-italic-serif text-xs text-muted-foreground hidden sm:inline">est. 1962</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
          {["Esperienza", "Soggiorni", "Avventure", "Diario"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-foreground/70 hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>
        <a
          href="#prenota"
          className="text-sm font-medium px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-primary transition-colors"
        >
          Prenota
        </a>
      </div>
    </nav>
  );
};
