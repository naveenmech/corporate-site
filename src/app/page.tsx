import Hero from "@/components/home/Hero";
import HiringTicker from "@/components/home/HiringTicker";
import PolicyCards from "@/components/home/PolicyCards";
import Testimonial from "@/components/home/Testimonial";
import WhoWeAre from "@/components/home/WhoWeAre";
import Partners from "@/components/home/Partners";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GlobalReach from "@/components/home/GlobalReach";
import Portfolio from "@/components/home/Portfolio";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HiringTicker />
      <PolicyCards />
      <Testimonial />
      <WhoWeAre />
      <Partners />
      <WhyChooseUs />
      <GlobalReach />
      <Portfolio />
      <CTA />
    </>
  );
}
