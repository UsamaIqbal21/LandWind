import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Images from "./Assets/Images";
import Feature from "./Components/Feature";
import SocialProof from "./Components/SocialProof";
import Testimonials from "./Components/Testimonials";
import Pricing from "./Components/Pricing";
import FAQS from "./Components/FAQS";
import FreeTrail from "./Components/FreeTrail";
import Footer from "./Components/Footer";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section id="home">
        <Navbar />
        <div className="py-24 ">
          <div className="container mx-auto px-4">
            <div className="lg:py-12">
              <div className="flex flex-col space-y-3 md:space-x-3 md:flex-row items-start ">
                <div className="md:pt-12 2xl:pt-28 2xl:pl-28">
                  <div className="md:pl-3 lg:pl-8">
                    <h1
                      className="text-gray-900 leading-none text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-black font-inter"
                      data-aos="fade-right"
                    >
                      Building digital <br /> products & brands.
                    </h1>
                  </div>

                  <div className="pt-4 md:pl-3 lg:pl-8">
                    <p
                      className="text-gray-500 text-xl font-normal leading-tight lg:leading-relaxed font-inter"
                      data-aos="fade-up"
                      data-aos-delay="700"
                    >
                      Here at flowbite we focus on markets where technology,
                      innovation, and capital can unlock long-term value and
                      drive economic growth.
                    </p>
                  </div>
                  <div
                    className="flex pt-4 space-x-3 md:pl-3 lg:pl-8"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <div className="rounded-lg bg-purple-600">
                      <h3 className="text-white text-base font-medium leading-relaxed font-inter py-1 px-3">
                        Start 30 day free trial
                      </h3>
                    </div>
                    <div className="rounded-lg border border-gray-200">
                      <h4 className="text-gray-800 text-base font-medium leading-relaxed font-inter px-2 py-1">
                        Pricing & FAQ
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="self-center" data-aos="fade-left">
                  <img src={Images.hero} alt="" />
                </div>
              </div>
              <section id="Company">
              <div className="grid grid-row-6  sm:grid-cols-4 lg:grid-cols-6 items-center justify-center gap-y-12 2xl:gap-x-0 pt-16 md:pl-3 2xl:px-12">
                <div
                  className="2xl:pl-20"
                  data-aos="fade-right"
                  data-aos-delay="1200"
                >
                  <img src={Images.google} alt="" />
                </div>
                <div
                  className="2xl:pl-16"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                >
                  <img src={Images.microsoft} alt="" />
                </div>
                <div
                  className="2xl:pl-16"
                  data-aos="fade-right"
                  data-aos-delay="800"
                >
                  <img src={Images.spotify} alt="" />
                </div>
                <div
                  className="2xl:pl-16"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  <img src={Images.mailchimp} alt="" />
                </div>
                <div
                  className="2xl:pl-14"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <img src={Images.airbnb} alt="" />
                </div>
                <div data-aos="fade-right">
                  <img src={Images.uber} alt="" />
                </div>
              </div>
              </section>
           
            </div>
          </div>
        </div>
      </section>
      <Feature/>
      <SocialProof/>
      <Testimonials/>
      <Pricing/>
      <FAQS/>
      <FreeTrail/>
      <Footer/>
    </>
  );
}

export default App;
