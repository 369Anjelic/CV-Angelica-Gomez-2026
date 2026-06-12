import Header from "./components/Header";
import FullCV from "./components/FullCV";
import DeveloperSkills from "./components/DeveloperSkills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FullCV />
        <Projects />
        <DeveloperSkills />
      </main>
      <Footer />
    </>
  );
}
