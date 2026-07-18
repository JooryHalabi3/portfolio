import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
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

        <About />

        <SelectedWork />

        <Capabilities />

        <Journey />

        <Contact />
      </main>

      <Footer />
    </>
  );
}