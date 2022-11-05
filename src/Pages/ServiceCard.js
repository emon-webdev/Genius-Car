import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, price, _id, title } = service;
  
  return (
    <div>
      <div className="service-card card card-compact rounded-[10px] border border-[#E8E8E8] p-6 max-w-[364] max-h-[348]">
        <figure>
          <img
            className="rounded-[10px] md:min-w-[314px] md:min-h-[210px]"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body py-0">
          <h2 className="card-title text-2xl font-bold text-[#444]">{title}</h2>
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-[#FF3811]">${price}</p>
            <Link
              to={`/checkout/${_id}`}
              className="text-xl font-semibold text-[#FF3811]"
            >
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
