"use client";

import { useState } from "react";

const items = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  // ...aur items yahan add karo
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="w-full ">
      {items.map((item, i) => (
        <div key={i} className="border-b border-white/10 ">
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between py-5 text-left font-neue-montreal text-white text-xl font-medium hover:opacity-70 transition-opacity gap-4"
          >
            <span>{item.question}</span>
            <span className="text-xl flex-shrink-0 leading-none">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-white/50 text-sm leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}