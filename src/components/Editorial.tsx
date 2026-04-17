import { Reveal } from "./Reveal";
import dinner from "@/assets/dinner.jpg";

export const Editorial = () => {
  return (
    <section className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-10 items-center">
        <Reveal className="md:col-span-7 md:col-start-1 order-2 md:order-1">
          <div className="relative aspect-[4/3] overflow-hidden shadow-deep">
            <img src={dinner} alt="Cena rustica al tramonto sotto le luci" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">03 — La tavola</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Ogni sera, una <span className="font-italic-serif text-primary">lunga tavolata</span> sotto il pergolato.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Pasta tirata a mano, verdure dell'orto, olio dei nostri ulivi e vino del podere accanto. Niente menù: solo ciò che la terra ha dato quel giorno.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="space-y-4 border-t border-border pt-6">
              {["Cena contadina · ogni sera dalle 20:00", "Mercato del podere · sabato mattina", "Lezioni di pasta · su prenotazione"].map((x) => (
                <div key={x} className="flex items-center gap-4 text-sm">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
