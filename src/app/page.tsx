
import Navbar from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b0b] font-sans text-white">
      <Navbar />

      <main className="w-full">
        <section
          id="home"
          className="flex min-h-screen items-center justify-center"
        >
          <Hero/>
        </section>

        <section
          id="about"
          className="flex min-h-screen items-center justify-center"
        >
          <About/>
        </section>

        <section
          id="experience"
          className="flex min-h-screen items-center justify-center"
        >
          <Experience/>
        </section>

        <section
          id="projects"
          className="flex min-h-screen items-center justify-center"
        >
          Projects
        </section>

        <section
          id="contact"
          className="flex min-h-screen items-center justify-center"
        >
          Contact
        </section>
      </main>
    </div>
  );
}
