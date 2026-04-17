import { Reveal } from "./Reveal";
import hiking from "@/assets/hiking.jpg";
import lake from "@/assets/lake-dawn.jpg";

const items = [
  { time: "06:30", title: "Yoga all'alba", place: "Prato degli ulivi", img: hiking },
  { time: "09:00", title: "Trekking nel bosco", place: "Sentiero dei lecci · 8 km", img: hiking },
  { time: "11:30", title: "Canoa sul lago", place: "Lago di Vagli", img: lake },
  { time: "16:00", title: "Vendemmia & degustazione", place: "Podere San Lorenzo", img: hiking },
  { time: "21:30", title: "Osservazione delle stelle", place: "Belvedere · cielo Bortle 3", img: lake },
];

export const Adventures = () => {
  return (
    <section id="avventure" className="py-32 md:py-44 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-secondary-foreground/60">04 — Giornata tipo</p>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.02]">
                Dall'<span className="font-italic-serif">alba</span> alle stelle,<br />ogni ora ha il suo rito.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="space-y-0">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <a href="#" className="group grid grid-cols-12 gap-6 items-center py-8 md:py-10 border-t border-secondary-foreground/15 hover:bg-secondary-foreground/5 -mx-6 md:-mx-12 px-6 md:px-12 transition-colors">
                <span className="col-span-2 md:col-span-1 font-serif text-lg md:text-xl tabular-nums text-accent">{it.time}</span>
                <h3 className="col-span-7 md:col-span-6 font-serif text-2xl md:text-4xl group-hover:translate-x-2 transition-transform duration-500">{it.title}</h3>
                <span className="col-span-3 md:col-span-3 text-sm text-secondary-foreground/70 hidden md:block">{it.place}</span>
                <span className="col-span-3 md:col-span-2 text-right text-2xl group-hover:text-accent transition-colors">→</span>
              </a>
            </Reveal>
          ))}
          <div className="border-t border-secondary-foreground/15" />
        </div>
      </div>
    </section>
  );
};
