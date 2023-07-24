import React from "react";
import Faq from "react-faq-component";
import { FaqData } from "../Data/FaqData";
const styles = {
  rowTitleColor: " #111928",
  rowTitleTextSize: "18px",
  rowContentColor: "#6B7280",
  rowContentTextSize: "16px",
};
function FAQS() {
  return (
    <section id="Faqs">
      <div className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div
              className="flex items-center justify-center space-x-3"
            
            >
              <div>
                <h3 className="text-gray-900 text-center leading-tight text-2xl lg:text-4xl font-extrabold font-inter"   data-aos="fade-up">
                  Frequently asked questions
                </h3>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <div className="container mx-auto px-4 lg:px-24">
              <div className="faq-style-wrapper lg:px-36"   data-aos="fade-up"  data-aos-delay="400">
                <Faq data={FaqData} styles={styles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQS;
