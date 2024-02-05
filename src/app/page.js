import AboutSection from "@/components/AboutSection";
import Slider from "@/components/Slider";
import Map from "@/components/Map";
import "../app/globals.css";
export default function Home() {
  return (
    <main style={{backgroundImage: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)'}}>
      <Slider />
      <hr className="border border-white ms-10 me-10"/>
      <AboutSection />
      <hr className="border border-white ms-10 me-10"/>
      <Map />
      <hr className="border border-white ms-10 me-10"/>
      <br/>
    </main>
  );
}
