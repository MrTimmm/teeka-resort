import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Room from "./components/Room";
import Services from "./components/Services";
import Explore from "./components/Explore";
import WhatsOn from "./components/WhatsOn";
import Location from "./components/Location";
import Dining from "./components/Dining";

export default function Home() {
  return (
    <>

      <Hero />
      <About />
      <Room />
      {/* <Services /> */}
      <Dining />
      <Explore />
      <WhatsOn />
      <Location />
    </>
  );
}