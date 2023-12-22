import AboutSection from "@/components/AboutSection";
import Slider from "@/components/Slider";
import Map from "@/components/Map";
export default function Home() {
  return (
    <main>
      <Slider />
      <hr className="border border-gray-400 ms-10 me-10"/>
      <AboutSection />
      <hr className="border border-gray-400 ms-10 me-10"/>
      <Map />
      <hr className="border border-gray-400 ms-10 me-10"/>
      <br/>
    </main>
  );
}
