import Hero from "../components/Hero";
import Input from "../components/Input";
import Cards from "../components/Cards";
import Tourcategories from "../components/Tourcategories";
import Subscribe from "../components/Subscribe";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

import Discription from "../components/Discription";
import Explore from "../components/Explore";

export default function Home() {
  return (
    <>
      <Hero />
      <Input />
      <Discription />
      <Cards />
      <Tourcategories />
      <Explore />
      <Subscribe />
      <Testimonials />
      <Contact />
    </>
  );
}
