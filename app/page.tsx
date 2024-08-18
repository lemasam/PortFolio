import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="py-6">
      <Hero />
      <Services />
      <Resume />
    </main>
  );
}
