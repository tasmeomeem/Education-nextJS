import Hero from "@/components/layout/Hero";
import Nav from "@/components/layout/Nav";
import Category from "@/components/layout/Category";
import Offer from "@/components/layout/Offer";
import Popular from "@/components/layout/Popular";
import Workshop from "@/components/layout/Workshop";
import Upcomming from "@/components/layout/Upcomming";
import News from "@/components/layout/News";
import Footer from "@/components/layout/Footer";

const homePage = () => {
  
  return (
    <div className="container mx-auto">
      <div className="bg-[url('/assets/images/hero-bg.jpg')]">
        <Nav/>
        <Hero/>
      </div>
      <div>
        <Category/>
        <Offer/>
      </div>
      <div className="bg-[url('/assets/images/hero-bg.jpg')]">
        <Popular/>
        
      </div>
      <div className="bg-[url('/assets/images/workshop.png')]">
        <Workshop/>
      </div>
      <div>
        <Upcomming/>
      </div>
      <div className="bg-[url('/assets/images/hero-bg.jpg')]">
        <News/>
      </div>
      <div className="bg-blue-900 ">
          <Footer />
      </div>
    </div>
  );
};

export default homePage;