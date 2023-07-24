import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Images from "../Assets/Images";
function Feature() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="bg-[#F9FAFB]">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="2xl:px-32">
            <div className="flex flex-col lg:flex-row items-start lg:space-x-14 ">
              <div className="lg:w-[608px] ">
                <div>
                  <h3
                    className="text-gray-900 leading-tight text-2xl  xl:text-4xl font-extrabold font-inter"
                    data-aos="fade-up"
                  >
                    Work with tools you already use
                  </h3>
                </div>
                <div className="pt-3 pb-8">
                  <p
                    className="text-gray-500 text-lg xl:text-xl font-normal leading-tight md:leading-relaxed font-inter"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Deliver great service experiences fast - without the
                    complexity of traditional ITSM solutions.Accelerate critical
                    development work, eliminate toil, and deploy changes with
                    ease.
                  </p>
                </div>
                <div className="py-12 border-t-2 border-slate-150"  data-aos="fade-up" data-aos-delay="1000">
                  <div
                    className="flex items-center space-x-1 "
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div>
                      <img src={Images.checkcircle} alt="" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 text-base font-medium leading-relaxed font-inter">
                        Continuous integration and deployment
                      </h4>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-1 pt-2"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div>
                      <img src={Images.checkcircle} alt="" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 text-base font-medium leading-relaxed font-inter">
                        Development workflow
                      </h4>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-1 pt-2"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div>
                      <img src={Images.checkcircle} alt="" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 text-base font-medium leading-relaxed font-inter">
                        Knowledge management
                      </h4>
                    </div>
                  </div>
                  <div
                    className="pt-4"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                  >
                    <p className="text-gray-500 text-lg xl:text-xl font-normal leading-tight md:leading-relaxed  font-inter">
                      Deliver great service experiences fast - without the
                      complexity of traditional ITSM solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-center" data-aos="fade-left">
                <img src={Images.feature1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-16">
          <div className="2xl:px-32">
            <div className="flex flex-col lg:flex-row items-start lg:space-x-14 ">
              <div className="self-center" data-aos="fade-right">
                <img src={Images.feature2} alt="" />
              </div>
              <div className="lg:w-[608px] ">
                <div>
                  <h3
                    className="text-gray-900 leading-tight text-2xl  xl:text-4xl font-extrabold font-inter"
                    data-aos="fade-up"
                  >
                    We invest in the world’s potential
                  </h3>
                </div>
                <div className="pt-3 pb-8">
                  <p
                    className="text-gray-500 text-lg xl:text-xl font-normal leading-tight md:leading-relaxed font-inter"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Deliver great service experiences fast - without the
                    complexity of traditional ITSM solutions.Accelerate critical
                    development work, eliminate toil, and deploy changes with
                    ease.
                  </p>
                </div>
                <div className="py-12 border-t-2 border-slate-150"  data-aos="fade-up" data-aos-delay="1000">
                  <div
                    className="flex items-center space-x-1 "
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div>
                      <img src={Images.checkcircle} alt="" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 text-base font-medium leading-relaxed font-inter">
                        Dynamic reports and dashboards
                      </h4>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-1 pt-2"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div>
                      <img src={Images.checkcircle} alt="" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 text-base font-medium leading-relaxed font-inter">
                        Templates for everyone
                      </h4>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-1 pt-2"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div>
                      <img src={Images.checkcircle} alt="" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 text-base font-medium leading-relaxed font-inter">
                        Development workflow
                      </h4>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-1 pt-2"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div>
                      <img src={Images.checkcircle} alt="" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 text-base font-medium leading-relaxed font-inter">
                        Limitless business automation
                      </h4>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-1 pt-2"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div>
                      <img src={Images.checkcircle} alt="" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 text-base font-medium leading-relaxed font-inter">
                        Knowledge management
                      </h4>
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

export default Feature;
