import Image from "next/image";
import Navbar from "./(componenets)/Navbar";
import Hero from "./(componenets)/Hero";
import Clients from "./(componenets)/Clients";
import CaseStudies from "./(componenets)/CaseStudies";

export default function Home() {
  return (
    <main>
      <header className="bg-[url(/banner.png)] h-screen">
        <Navbar />
        <Hero/>
      </header>
      <Clients/>
      <CaseStudies/>
    </main>
  );
}
