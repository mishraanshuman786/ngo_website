import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Slider />
      <AboutSection />
      <Footer />
    </main>
  );
}
