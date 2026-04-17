import { Reveal } from "./Reveal";

export const Booking = () => {
  return (
    <section id="prenota" className="py-32 md:py-44 px-6 md:px-12 bg-background grain relative">
      <div className="max-w-[1200px] mx-auto text-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">05 — Prenota</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] mb-12 text-balance">
            Vieni a <span className="font-italic-serif text-primary">dormire</span><br />sotto le stelle.
          </h2>
        </Reveal>
        <Reveal delay={250}>
          <form className="max-w-3xl mx-auto bg-card border border-border rounded-sm p-3 grid sm:grid-cols-4 gap-2 shadow-soft text-left">
            <label className="px-4 py-3">
              <span className="text-[10px] tracking-widest uppercase text-muted-foreground block mb-1">Arrivo</span>
              <input type="date" className="w-full bg-transparent text-sm outline-none" />
            </label>
            <label className="px-4 py-3">
              <span className="text-[10px] tracking-widest uppercase text-muted-foreground block mb-1">Partenza</span>
              <input type="date" className="w-full bg-transparent text-sm outline-none" />
            </label>
            <label className="px-4 py-3">
              <span className="text-[10px] tracking-widest uppercase text-muted-foreground block mb-1">Ospiti</span>
              <select className="w-full bg-transparent text-sm outline-none">
                <option>2 adulti</option><option>2 + 1 bimbo</option><option>4 adulti</option>
              </select>
            </label>
            <button type="submit" className="bg-primary text-primary-foreground rounded-sm font-medium text-sm tracking-wide hover:bg-foreground transition-colors">
              Verifica disponibilità
            </button>
          </form>
        </Reveal>
        <Reveal delay={400}>
          <p className="mt-10 text-sm text-muted-foreground font-italic-serif">
            Aperti da aprile a ottobre · Cancellazione gratuita fino a 7 giorni prima
          </p>
        </Reveal>
      </div>
    </section>
  );
};
