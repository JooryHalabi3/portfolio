import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden">
        <Hero />
        <SelectedWork />
        <About />
        <Capabilities />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </>
  );
}