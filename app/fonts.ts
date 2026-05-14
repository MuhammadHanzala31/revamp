import localFont from "next/font/local";

export const aeonik = localFont({
  src: [
    {
      path: "../public/fonts/aeonik/aeoniktrial-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/aeonik/aeoniktrial-lightitalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/aeonik/aeoniktrial-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/aeonik/aeoniktrial-regularitalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/aeonik/aeoniktrial-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/aeonik/aeoniktrial-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

export const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/neue/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/neue/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/neue/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neue/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/neue/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neue/NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/neue/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/neue/NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});
