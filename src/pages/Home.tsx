import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import BulkOrders from "../components/BulkOrders";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products preview />
      <WhyChooseUs />
      <BulkOrders />
      <Testimonials />
      <Contact />
    </>
  );
}
