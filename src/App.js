import About from "./Components/About";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import NewsLetter from "./Components/Newsletter";
import Product from "./Components/Product";
import SIRE from "./Components/SIRE/index.js";
import WhySire from "./Components/WhySire";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <SIRE />
      <Features />
      <WhySire />
      <Product />
      <HowItWorks />
      <FAQ />
      <Contact />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
