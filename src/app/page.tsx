import { Hero, Skills, Tools } from "@/components";
import About from "@/components/About";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Tools />
      <Work />
      <About />
    </main>
  );
}
