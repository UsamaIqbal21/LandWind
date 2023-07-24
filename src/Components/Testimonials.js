import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Images from "../Assets/Images";
function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="bg-[#F9FAFB]">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up">
            <style>
              {`
          .swiper-pagination {
            position: static;
            display: flex;
            justify-content: center;
            padding-top: 50px;
            padding-right: 0px;
              }
         `}
            </style>
            <style>
              {`
          .swiper-pagination-bullet {
            background-color: #7E3AF2;
          }
        `}
            </style>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex flex-col items-center space-y-4">
                  <div className="">
                    <img src={Images.vector} alt="" />
                  </div>
                  <div className="lg:w-[768px]">
                    <p className="text-gray-900 leading-relaxed text-2xl font-semibold font-inter text-center">
                      "Flowbite is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </div>
                  <div className="flex items-center ">
                    <div className="flex items-center">
                      <div>
                        <img src={Images.avatar} alt="" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 leading-tight text-base font-semibold  font-inter">
                          Micheal Gough /
                        </h4>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h5 className="text-gray-500 leading-tight text-sm font-normal  font-inter">
                        CEO at Google
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center space-y-4">
                  <div className="">
                    <img src={Images.vector} alt="" />
                  </div>
                  <div className="lg:w-[768px]">
                    <p className="text-gray-900 leading-relaxed text-2xl font-semibold font-inter text-center">
                      "Flowbite is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </div>
                  <div className="flex items-center ">
                    <div className="flex items-center">
                      <div>
                        <img src={Images.avatar} alt="" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 leading-tight text-base font-semibold  font-inter">
                          Micheal Gough /
                        </h4>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h5 className="text-gray-500 leading-tight text-sm font-normal  font-inter">
                        CEO at Google
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center space-y-4">
                  <div className="">
                    <img src={Images.vector} alt="" />
                  </div>
                  <div className="lg:w-[768px]">
                    <p className="text-gray-900 leading-relaxed text-2xl font-semibold font-inter text-center">
                      "Flowbite is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </div>
                  <div className="flex items-center ">
                    <div className="flex items-center">
                      <div>
                        <img src={Images.avatar} alt="" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 leading-tight text-base font-semibold  font-inter">
                          Micheal Gough /
                        </h4>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h5 className="text-gray-500 leading-tight text-sm font-normal  font-inter">
                        CEO at Google
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
