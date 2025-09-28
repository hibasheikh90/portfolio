"use client";
import About from "@/components/About";
import Contect from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (() =>{
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  },[])
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contect/>
    </main>
  );
}
