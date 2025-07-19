import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}
