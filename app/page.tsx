import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <div className="circle-gradient mt-10" />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}