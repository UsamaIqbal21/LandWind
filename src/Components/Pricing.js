import React from "react";
import Images from "../Assets/Images";
import { PricingData } from "../Data/PricingData";
function Pricing() {
  return (
    <section id="pricing">
      <div className="pt-44 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div
              className="flex items-center justify-center space-x-3"
              data-aos="fade-up"
            >
              <div>
                <h3 className="text-black font-nunito-sans not-italic font-bold text-xl lg:text-4xl leading-76">
                  Pay as you grow
                </h3>
              </div>
            </div>
            <div className="lg:px-12 xl:px-44" data-aos="fade-up">
              <p className="text-[#303030] font-nunito-sans font-normal text-base leading-6 text-center">
                Let's choose the package that is best for you and explore it
                happily and cheerfully.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-1 mt-12 gap-y-4 md:gap-y-14 md:grid-cols-2 md:gap-x-0 lg:gap-x-0  lg:grid-cols-2 xl:grid-cols-3  justify-center pt-12
       relative pb-20 xl:pb-32 lg:px-6"
            data-aos="fade-right"
          >
            {PricingData.map((value) => (
              <div
                key={value.id}
                className="relative border border-gray-200 hover:border-[#7E3AF2] rounded-lg bg-[#FFFFFF] 
              w-[300px] md:w-[350px] h-[559px] md:h-[559px] mx-auto hover:bg-white hover:shadow-2xl mt-12 md:mt-4"
              >
                <div className="w-[270px]  py-14 mx-auto ">
                  <div>
                    <h3 className="text-gray-900 text-center text-2xl font-semibold leading-relaxed font-inter" data-aos="fade-up"  >
                      {value.Name}
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-500 text-center text-lg font-normal leading-relaxed font-inter" data-aos="fade-up"  data-aos-delay="400">
                      {value.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center pt-4 pb-8" data-aos="fade-up"  data-aos-delay="600">
                    <h3 className="text-gray-900 leading-none text-5xl font-extrabold font-inter" >
                      {value.price}
                    </h3>
                    <span className="text-gray-500 text-center text-lg font-medium leading-relaxed font-inter pt-4">
                      {value.month}
                    </span>
                  </div>
                  <div className="w-[270px] h-[250px] py-6 space-y-2 ">
                    {value.PricingDataList.map((plan) => (
                      <div
                        className="flex items-center space-x-4 justify-start pl-4  md:pl-8"
                        data-aos="fade-up" data-aos-delay="800"
                      >
                        <div>
                          <img src={Images.tick} alt="" />
                        </div>
                        <div>
                          {plan.id >= 3 ? (
                            <div className="flex items-center space-x-1">
                              <h3 className="text-[#4F5665] font-rubik text-sm font-normal leading-30">
                                {plan.planName}
                              </h3>
                              <h3 className="text-gray-900 text-base font-semibold leading-relaxed font-inter">
                                {plan.planName2}
                              </h3>
                            </div>
                          ) : (
                            <div>
                              <h3 className="text-[#4F5665] font-rubik text-sm font-normal leading-30">
                                {plan.planName}
                              </h3>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg bg-purple-600" data-aos="fade-up"  data-aos-delay="1000">
                    <h3 className="text-white text-sm font-medium leading-relaxed font-inter text-center py-2">
                      Get started
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
