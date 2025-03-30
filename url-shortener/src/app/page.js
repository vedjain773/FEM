import Boost from "@/components/Boost";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Main />
      <Boost />
      <Footer />
    </div>
  );
}
