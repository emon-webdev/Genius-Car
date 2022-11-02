import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="md:py-32">
      <div className="section-title md:w-2/3 mx-auto text-center">
        <h5 className="text-xl mb-5 text-[#FF3811] font-bold">Service</h5>
        <h1 className="text-5xl mb-5 text-[#151515] font-bold">
          Our Service Area
        </h1>
        <p className="mb-7 text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="border border-[#FF3811] w-[170px] h-[56px] rounded-[5px] text-[#FF3811] font-semibold hover:bg-[#FF3811] hover:text-white hover:duration-1650">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
