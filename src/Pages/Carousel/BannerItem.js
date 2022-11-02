import React from "react";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img ">
        <img src={image} alt="image5" className="w-full" />
      </div>
      <div className="absolute flex flex-col justify-end left-24 transform -translate-y-1/2 top-1/2">
        <h1 className="text-[60px] mb-7 leading-[75px] font-bold text-white">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="text-white text-[18px] font-normal leading-[30px] mb-7">
          There are many variations of passages of available, But <br /> the
          majority have suffered alteration in some form
        </p>
        <div className="header-btn">
          <button className="border border-[#FF3811] w-[170px] h-[56px] rounded-[5px] text-[#FF3811] font-semibold hover:bg-[#FF3811] hover:text-white hover:duration-1650">
            Discover More
          </button>
          <button className="border border-[#FF3811] w-[170px] h-[56px] ml-5 rounded-[5px] text-[#FF3811] font-semibold hover:bg-[#FF3811] hover:text-white hover:duration-1650">
            Latest Project
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-[50px]">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle ml-5">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
