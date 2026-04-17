export const Marquee = () => {
  const items = ["Ulivi secolari", "★", "Cieli stellati", "★", "Cucina contadina", "★", "Piscina naturale", "★", "Sentieri segreti", "★", "Vino del podere", "★"];
  const loop = [...items, ...items];
  return (
    <div className="border-y border-border/60 bg-card overflow-hidden py-6">
      <div className="flex marquee-track whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="font-serif text-3xl md:text-5xl px-8 text-foreground/80">
            {t === "★" ? <span className="text-accent">✦</span> : <em className="font-italic-serif">{t}</em>}
          </span>
        ))}
      </div>
    </div>
  );
};
