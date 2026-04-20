import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Stays } from "@/components/Stays";
import { Editorial } from "@/components/Editorial";
import { Adventures } from "@/components/Adventures";
import { Stars } from "@/components/Stars";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Manifesto />
      <Stays />
      <Editorial />
      <Adventures />
      <Stars />
      <Booking />
      <Footer />
    </main>
  );
};

export default Index;
