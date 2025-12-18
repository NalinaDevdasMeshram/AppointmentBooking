import React from "react";
import { assets } from "../assets/assets_frontend/assets";
const About = () => {
  return (
    <div>
      <div className="items-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="refresh"
        />
        <div className="flex  flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600 border border-gray-500 px-5 rounded-xl">
          <p>
            welcome to prescripto, your trusted partner in managin in your
            healthcare need contact us. Managing and restoring physical and
            mental health through medical intervention, encompassing wellness,
            disease prevention, diagnosis, and treatment.It involves access to
            essential services, quality assurance.
          </p>
          <p>
            prescripto commit to execellence healthcare in technology.We
            continuesly provided Focuses on population-level health, like
            disease eradication.The concept of healthcare is the maintenance,
            improvement, and restoration of health through the prevention,
            diagnosis.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Ensuring care reaches all, including rural populations, remains a
            major focus, with initiatives like India's Ayushman Bharat (PM-JAY)
            aiming for universal coverage and is influenced by social
            determinants like income, education, and environment
          </p>
        </div>
      </div>
      {/* ---why choose section--- */}
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-medium">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professional in your area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
