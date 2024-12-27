"use client"
import Image from "next/image";
import { Button } from "reactstrap";
import { Header } from "./components/header";
import { SliderSection } from "./components/slider_section";
import { MapSection } from "./components/section_map";
import { FormSection } from "./components/section_form";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-column container-fluild min-h-screen">
      <Header className="z-10"/>
      <SliderSection className="mt-[-6rem] pt-24"/>
      <MapSection/>
      <FormSection/>
      <Footer/>
    </div>
  );
}
