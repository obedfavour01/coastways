import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SafeSecure from "@/components/SafeSecure";
import Services from "@/components/services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <SafeSecure />
      <Contact />
      <Footer/>


    </div>
  );
}
