import React from "react";

function FreeTrail() {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <div>
                <h3
                  className="text-gray-900 text-center leading-tight text-2xl lg:text-4xl font-extrabold font-inter"
                  data-aos="fade-up"
                >
                  Start your free trial today
                </h3>
              </div>
            </div>
            <div>
              <h5 className="text-gray-500 text-center text-xl font-normal leading-relaxed font-inter" data-aos="fade-up"  data-aos-delay="400">
                Try Flowbite Platform for 30 days. No credit card required.
              </h5>
            </div>
          </div>
          <div className="flex items-center justify-center pt-8">
            <div className="rounded-lg bg-purple-600 w-[199px] h-[48px]"  data-aos="fade-up"  data-aos-delay="600">
              <h3 className="text-white text-base font-medium leading-relaxed font-inter text-center py-2 ">
                Start 30 day free trial
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeTrail;
