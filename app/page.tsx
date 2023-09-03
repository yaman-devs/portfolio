import About from "./components/About";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
