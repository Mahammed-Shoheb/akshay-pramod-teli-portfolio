import { Hero, Skills, Tools } from "@/components";
import About from "@/components/About";
import Products from "@/components/Products";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Tools />
      <Products />
      <Work />
      <About />
    </main>
  );
}
