import { Reveal } from "./Reveal";

export const Manifesto = () => {
  return (
    <section id="esperienza" className="relative py-32 md:py-48 px-6 md:px-12 grain">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">01 — Filosofia</p>
          </Reveal>
        </div>
        <div className="md:col-span-9">
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
              Crediamo che il lusso più raro<br />
              sia <span className="font-italic-serif text-primary">il silenzio</span> di una mattina d'estate,
              il profumo della terra dopo la pioggia, e una <span className="font-italic-serif">cena</span> sotto il pergolato.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-16 grid sm:grid-cols-3 gap-10 max-w-3xl">
              {[
                ["62", "anni di ospitalità"],
                ["18", "ettari di natura"],
                ["240", "ulivi secolari"],
              ].map(([n, l]) => (
                <div key={n}>
                  <div className="font-serif text-5xl text-primary">{n}</div>
                  <div className="text-sm text-muted-foreground mt-2 tracking-wide">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
