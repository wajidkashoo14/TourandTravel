import Conatactstrip from "../components/Conatactstrip";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Input from "../components/Input";
import Cards from "../components/Cards";
import Tourcategories from "../components/Tourcategories";
import TrendingDestinations from "../components/TrendingDestinations";
import Video from "../components/Video";
import Subscribe from "../components/Subscribe";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Discription from "../components/Discription";

export default function Home() {
  return (
    <>
      <Conatactstrip />
      <Navbar />
      <Hero />
      <Input />
      <Discription />
      <Cards />
      <Tourcategories />
      <TrendingDestinations />
      <Video />
      <Subscribe />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
