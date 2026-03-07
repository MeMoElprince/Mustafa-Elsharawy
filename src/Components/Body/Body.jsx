import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Body = () => {
  return (
    <main className="flex-1 dark:bg-pallete-100 bg-pallete2-100 dark:text-pallete-500 text-pallete2-500">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Body;
