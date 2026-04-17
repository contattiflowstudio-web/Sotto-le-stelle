import { Reveal } from "./Reveal";
import stars from "@/assets/stars.jpg";

export const Stars = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <img src={stars} alt="Cielo stellato sopra il campeggio" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/50 to-transparent" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-32 w-full">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-background/70 mb-6">— Pensiero notturno</p>
        </Reveal>
        <Reveal delay={150}>
          <blockquote className="font-serif text-background text-3xl md:text-5xl lg:text-6xl leading-[1.15] max-w-4xl">
            <span className="font-italic-serif text-accent">"</span>Qui le stelle non si guardano.
            Si <span className="font-italic-serif">ascoltano</span>. Si lasciano cadere addosso, una a una,
            finché non resta che il respiro.<span className="font-italic-serif text-accent">"</span>
          </blockquote>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-10 flex items-center gap-4 text-background/80">
            <div className="w-12 h-px bg-background/40" />
            <span className="text-sm tracking-wide">Elena R. · ospite dal 2019</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
