import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="py-6">
      <Hero />
      <Services />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />
    </main>
  );
}
