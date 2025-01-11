import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
// import ToExperience from "./components/ToExperience";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Experience />
      {/* <ToExperience /> */}
      <Footer />
    </>
  );
}

export default Home;
