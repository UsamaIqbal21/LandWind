import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Images from "../Assets/Images";
function SocialProof() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="Marketplace">
      <div className="py-32">
        <div className="container mx-auto px-4">
          <div className="2xl:px-36">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 2xl:space-x-16">
              <div className="md:w-[640px]">
                <div>
                  <h4
                    className="text-purple-600 leading-none text-lg font-medium font-inter"
                    data-aos="fade-up"
                  >
                    Trusted Worldwide
                  </h4>
                </div>
                <div className="pt-3">
                  <h3
                    className="text-gray-900 leading-tight text-xl lg:text-4xl font-extrabold font-inter"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    Trusted by over 600 million users and 10,000 teams
                  </h3>
                </div>
                <div className="pt-3 pb-4">
                  <p
                    className="text-gray-500  text-lg xl:text-xl font-light leading-tight md:leading-relaxed font-inter"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Our rigorous security and compliance standards are at the
                    heart of all we do. We work tirelessly to protect you and
                    your customers.
                  </p>
                </div>
                <div
                  className="py-5 border-t-2 border-slate-150"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div
                    className="flex items-center space-x-1 "
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <div>
                      <h3 className="text-purple-600 leading-none text-sm md:text-base font-medium font-inter">
                        Explore Legality Guide
                      </h3>
                    </div>
                    <div className="pt-1">
                      <img src={Images.arrow} alt="" />
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-1 pt-2"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                  >
                    <div>
                      <h3 className="text-purple-600 leading-none text-sm md:text-base font-medium font-inter">
                        Visit the Trust Center
                      </h3>
                    </div>
                    <div className="pt-1">
                      <img src={Images.arrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex  items-center  space-x-2 ">
                  <div>
                    <div className="lg:w-[256px]">
                      <div data-aos="fade-up">
                        <img src={Images.server} alt="" />
                      </div>
                      <div>
                        <h3
                          className="text-gray-900 leading-tight text-xl md:text-2xl font-bold font-inter"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          99.99% uptime
                        </h3>
                      </div>
                      <div>
                        <p
                          className="text-gray-500 text-base font-light leading-relaxed font-inter"
                          data-aos="fade-up"
                          data-aos-delay="600"
                        >
                          for Flowbite, with zero maintenance downtime
                        </p>
                      </div>
                    </div>
                    <div className="lg:w-[256px]">
                      <div data-aos="fade-up" data-aos-delay="400">
                        <img src={Images.users} alt="" />
                      </div>
                      <div>
                        <h3
                          className="text-gray-900 leading-tight text-xl md:text-2xl font-bold font-inter"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          600M+ Users
                        </h3>
                      </div>
                      <div>
                        <p
                          className="text-gray-500 text-base font-light leading-relaxed font-inter"
                          data-aos="fade-up"
                          data-aos-delay="600"
                        >
                          trusted by over 600 milion users around the world
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="lg:w-[256px]">
                      <div data-aos="fade-up">
                        <img src={Images.shopping} alt="" />
                      </div>
                      <div>
                        <h3
                          className="text-gray-900 leading-tight text-xl md:text-2xl font-bold font-inter"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          Millions
                        </h3>
                      </div>
                      <div>
                        <p
                          className="text-gray-500 text-base font-light leading-relaxed font-inter"
                          data-aos="fade-up"
                          data-aos-delay="600"
                        >
                          of transactions per day
                        </p>
                      </div>
                    </div>
                    <div className="lg:w-[256px] pt-6">
                      <div data-aos="fade-up">
                        <img src={Images.globe} alt="" />
                      </div>
                      <div>
                        <h3
                          className="text-gray-900 leading-tight text-xl md:text-2xl font-bold font-inter"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          100+ countries
                        </h3>
                      </div>
                      <div>
                        <p
                          className="text-gray-500 text-base font-light leading-relaxed font-inter"
                          data-aos="fade-up"
                          data-aos-delay="600"
                        >
                          have used Flowbite to create functional websites
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
