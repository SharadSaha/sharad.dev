import About from "@/components/about";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
