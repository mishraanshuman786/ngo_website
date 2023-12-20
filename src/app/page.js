import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <div className="bg-blue-500 flex items-center">
        <img src="/logo.png" alt="logo" className="w-[110px] h-[110px] ml-4" />
        <h2 className="font-bold text-[30px] text-white">Adarsh Foundation</h2>
      </div>
      <hr/>
      <Navbar />

      <Slider/>
      <AboutSection />
      <Footer  />
    </main>
  );
}
