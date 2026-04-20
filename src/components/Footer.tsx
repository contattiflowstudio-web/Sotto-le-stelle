export const Footer = () => {
  return (
    <footer className="bg-forest text-forest-foreground pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-forest-foreground/15">
          <div className="md:col-span-5">
            <h3 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Sotto le <span className="font-italic-serif text-accent">Stelle</span>
            </h3>
            <p className="text-forest-foreground/70 max-w-sm leading-relaxed text-sm">
              Via degli Ulivi 12<br />
              25010 Limone sul Garda (BS), Italia<br />
              +39 0365 95 41 22
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">Visita</p>
            <ul className="space-y-2 text-sm text-forest-foreground/80">
              {["Soggiorni", "Avventure", "Tavola", "Diario"].map((x) => <li key={x}><a href="#" className="hover:text-accent transition-colors">{x}</a></li>)}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">Info</p>
            <ul className="space-y-2 text-sm text-forest-foreground/80">
              {["Come arrivare", "FAQ", "Termini", "Privacy"].map((x) => <li key={x}><a href="#" className="hover:text-accent transition-colors">{x}</a></li>)}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">Newsletter</p>
            <p className="text-sm text-forest-foreground/70 mb-4">Una lettera al mese, dal podere.</p>
            <form className="flex border-b border-forest-foreground/30 focus-within:border-accent transition-colors">
              <input type="email" placeholder="la tua email" className="bg-transparent flex-1 py-2 text-sm outline-none placeholder:text-forest-foreground/40" />
              <button className="text-accent text-sm">→</button>
            </form>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-forest-foreground/50">
          <span>© 1962—2026 Sotto le Stelle · Camping &amp; Glamping</span>
          <span className="font-italic-serif">Fatto a mano sul Garda</span>
        </div>
      </div>
    </footer>
  );
};
