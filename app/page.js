import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Room from "./components/Room";
import Services from "./components/Services";
import Explore from "./components/Explore";
import WhatsOn from "./components/WhatsOn";
import Location from "./components/Location";

export default function Home() {
  return (
    <>

      <Hero />
      <About />
      <Room />
      <Services />
      <Explore />
      <WhatsOn />
      <Location />
    </>
  );
}