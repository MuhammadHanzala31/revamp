import Image from "next/image";
import Navbar from "./(componenets)/Navbar";
import Hero from "./(componenets)/Hero";
import Clients from "./(componenets)/Clients";
import CaseStudies from "./(componenets)/CaseStudies";
import ServicesNav from "./(componenets)/Services";
import ChooseUs from "./(componenets)/ChooseUs";
import Testimonial from "./(componenets)/Testimonial";

export default function Home() {
  return (
    <main>
      <header className="bg-[url(/banner.png)] h-screen">
        <Navbar />
        <Hero/>
      </header>
      <Clients/>
      <CaseStudies/>
      <ServicesNav/>
      <ChooseUs/>
      <Testimonial/>
    </main>
  );
}
