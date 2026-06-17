import Header from "./components/Header";
import FullCV from "./components/FullCV";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FullCV />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
