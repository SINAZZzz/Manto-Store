import React from "react";

// img
import Image from "../assets/img/back-1.png";
// component
import Search from "../components/Search";
// slider
import Slider from "./Slider/Slider";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px]">
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:ml-8 xl:ml-auto xl:mr-[135px] flex flex-col items-center
         lg:items-start text-center lg:text-right
         justify-center flex-1
         px-4 lg:px-0"
        >
          <h1 className="text-4xl lg:text-[58px] font-extrabold leading-none mb-6">
            <span className="text-violet-700">فروشگاه</span> مانتو استور
          </h1>
          <p className="max-w-[480px] mb-8 font-Dana">
            فروشگاه اینترنتی{" "}
            <span className="text-violet-700 font-e">مانتو استور</span> از
            برترین شبکه های تخصصی فروش مانتو در سطح کشور می باشد که بابیش از{" "}
            <span className="text-violet-700">50</span> برند درجه یک پوشاک
            بانوان همکاری دارد و این فرصت برای شما ایجاد شده است، تا خرید خود را
            با مشاهده و بررسی بیش از{" "}
            <span className="text-violet-700">1500</span> مدل جدید در هرکالکشن
            با اعتماد کامل به وی شاپ انجام دهید. ارسال سریع، ضمانت کیفیت و قیمت
            و تضمین ایرانی بودن کالا سه اصل اولیه ما در وی شاپ است.
          </p>
        </div>
        {/* image */}
        <div
          className="hidden w-[550px] lg:flex
        justify-start items-star ml-[135px] -mt-36"
        >
          <img src={Image} alt="" />
          {/* <Slider /> */}
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
