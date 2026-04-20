import { Reveal } from "./Reveal";
import tent from "@/assets/tent-interior.jpg";
import lake from "@/assets/lake-dawn.jpg";
import hero from "@/assets/hero-camp.jpg";

const stays = [
  { name: "Piazzola Limone", type: "Tenda propria", price: "da €32", img: hero, desc: "Piazzole ombreggiate tra ulivi e limoni, accesso elettrico e affaccio diretto sul Garda." },
  { name: "Safari Tent", type: "Glamping", price: "da €165", img: tent, desc: "Tende sahariane in tela cerata, letti in lino, lanterna in ottone, veranda con vista lago." },
  { name: "Casetta sul Lago", type: "Cabina in legno", price: "da €240", img: lake, desc: "Cabine in cedro affacciate sull'acqua turchese, pontile privato, stufa in ghisa." },
];

export const Stays = () => {
  return (
    <section id="soggiorni" className="py-32 md:py-44 bg-card">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <Reveal>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">02 — Soggiorni</p>
              <h2 className="font-serif text-5xl md:text-7xl leading-none">
                Tre <span className="font-italic-serif">modi</span><br />di abitare la riva.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="hidden md:block text-muted-foreground max-w-xs text-sm leading-relaxed">
              Ogni soggiorno è pensato per riconnetterti con il ritmo lento del lago.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {stays.map((s, i) => (
            <Reveal key={s.name} delay={i * 150}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-6">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-background/95 text-foreground text-xs px-3 py-1.5 rounded-full tracking-wide">
                    {s.type}
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                </div>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-serif text-2xl">{s.name}</h3>
                  <span className="font-italic-serif text-primary">{s.price}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm border-b border-foreground/30 pb-1 group-hover:border-primary group-hover:text-primary transition-colors">
                  Scopri →
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
