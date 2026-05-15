"use client";
import React from "react";
import Image from "next/image";
import logo1 from "@/public/client-logo-1.png";
import logo2 from "@/public/client-logo-2.png";
import logo3 from "@/public/client-logo-3.png";
import logo4 from "@/public/client-logo-4.png";
import logo5 from "@/public/client-logo-5.png";

const logos = [
  { src: logo1.src, alt: "Client 1" },
  { src: logo2.src, alt: "Client 2" },
  { src: logo3.src, alt: "Client 3" },
  { src: logo4.src, alt: "Client 4" },
  { src: logo5.src, alt: "Client 5" },
  { src: logo1.src, alt: "Client 1" },
  { src: logo3.src, alt: "Client 3" },
];

function ClientSlider() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-marquee gap-12 w-max">
        {[...logos, ...logos].map((logo, idx) => (
          <Image
            key={idx}
            src={logo.src}
            alt={logo.alt}
            height={40}
            width={250}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default ClientSlider;
