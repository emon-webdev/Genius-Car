import React from "react";
import parts from '../assets/images/about_us/parts.jpg';
import Person from '../assets/images/about_us/person.jpg';

const About = () => {
  return (
    <div>
      <div className="hero py-16">
        <div className="hero-content  px-0 flex-col lg:flex-row">
          <div className="w-1/2 relative">
            <img
              src={Person} alt="person"
              className="w-[460px] h-[472px] rounded-lg shadow-2xl"
            />
            <img
              src={parts} alt="parts"
              className="absolute w-[332px] border-8 right-5 top-1/2 h-[327px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <h5 className="text-xl mb-5 text-[#FF3811] font-bold">About Us</h5>
            <h1 className="text-5xl mb-7 text-[#151515] font-bold">We are qualified <br/> & of experience <br/> in this field</h1>
            <p className="mb-7 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            <br/>
            <br/>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="border border-[#FF3811] w-[170px] h-[56px] rounded-[5px] text-[#FF3811] font-semibold hover:bg-[#FF3811] hover:text-white hover:duration-1650">
            Get More Info
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
