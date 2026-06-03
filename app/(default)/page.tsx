export const metadata = {
  title: "Vineeth Yadav | Analytics & AI",
  description: "Portfolio of Vineeth Yadav, specializing in data engineering, AI pipelines, and enterprise analytics.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import About from "@/components/about"; 
import Skills from "@/components/skills"; 
import Experience from "@/components/experience"; 
import Features from "@/components/features"; 
import Cta from "@/components/cta"; 
import ChatBot from "@/components/Chatbot"; // <-- 1. Import it here

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <About />
      <Skills /> 
      <Experience /> 
      <Features />
      <ChatBot /> {/* <-- 2. Add it right here! */}
      <Cta />
    </>
  );
}
