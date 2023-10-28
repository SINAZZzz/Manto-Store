// import React from "react";

// // data
// import { housesData } from "../data";

// // use params
// import { useParams } from "react-router-dom";

// // icons
// import { BiBed, BiBath, BiArea } from "react-icons/bi";

// // link
// import { Link } from "react-router-dom";

// const PropertyDetails = () => {
//   // get the house id
//   const { id } = useParams();

//   // get the house based on the id
//   const house = housesData.find((house) => {
//     return house.id === parseInt(id);
//   });

//   return (
//     <section>
//       <div className="container mx-auto min-h-[800px] mb-14">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold">{house.name}</h2>
//             <h2 className="text-lg mb-4">{house.address}</h2>
//           </div>
//           <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
//             <div className="bg-green-500 text-white px-3 rounded-full">
//               {house.type}
//             </div>
//             <div className="bg-violet-500 text-white px-3 rounded-full">
//               {house.country}
//             </div>
//           </div>
//           <div className="text-3xl font-semibold text-violet-600">
//             $ {house.price}
//           </div>
//         </div>
//         <div className="flex flex-col items-start gap-8 lg:flex-row">
//           <div className="max-w-[768px]">
//             <div className="mb-8">
//               <img src={house.imageLg} alt="" />
//             </div>
//             <div className="flex gap-x-6 text-violet-700 mb-6">
//               <div className="flex gap-x-2 items-center">
//                 <BiBed className="text-2xl" />
//                 <div>{house.bedrooms}</div>
//               </div>

//               <div className="flex gap-x-2 items-center">
//                 <BiBath className="text-2xl" />
//                 <div>{house.bathrooms}</div>
//               </div>

//               <div className="flex gap-x-2 items-center">
//                 <BiArea className="text-2xl" />
//                 <div>{house.surface}</div>
//               </div>
//             </div>
//             <div>{house.description}</div>
//           </div>

//           <div
//             className="flex-1 bg-white w-full mb-8 border border-gray-300
//           rounded-lg px-6 py-8"
//           >
//             <div className="flex items-center gap-x-4 mb-8">
//               <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
//                 <img src={house.agent.image} alt="" />
//               </div>
//               <div>
//                 <div className="font-bold text-lg">{house.agent.name}</div>
//                 <Link to="" className="text-violet-700 text-sm">
//                   View Listings
//                 </Link>
//               </div>
//             </div>
//             {/* from */}
//             <from className="flex flex-col gap-y-4">
//               <input
//                 className="border border-gray-300 focus:border-violet-700
//                  outline-none rounded w-full px-4 h-14 text-sm"
//                 type="text"
//                 placeholder="Name*"
//               />
//               <input
//                 className="border border-gray-300 focus:border-violet-700
//                  outline-none rounded w-full px-4 h-14 text-sm"
//                 type="text"
//                 placeholder="Email*"
//               />
//               <input
//                 className="border border-gray-300 focus:border-violet-700
//                  outline-none rounded w-full px-4 h-14 text-sm"
//                 type="text"
//                 placeholder="phone*"
//               />
//               <textarea
//                 className="border border-gray-300 focus:border-violet-700
//               outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
//                 placeholder="Message*"
//                 defaultChecked="Hello, I am interested in [Modern apartment]"
//               ></textarea>
//               <div className="flex gap-x-2">
//                 <button
//                   className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4
//                 text-sm w-full transition"
//                 >
//                   Send message
//                 </button>
//                 <button
//                   className="border border-violet-700 text-violet-700
//                 hover:border-violet-500 hover:text-violet-500 rounded p-4
//                 text-sm w-full transition"
//                 >
//                   Call
//                 </button>
//               </div>
//             </from>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PropertyDetails;

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

const product = {
  name: "نوع تیشرت G1",
  price: "12000 تومن",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "مرد", href: "#" },
    { id: 2, name: "لباس", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    "فروشگاه اینترنتی وی شاپ از برترین شبکه های تخصصی فروش مانتو در سطح کشور می باشد که بابیش از 50 برند درجه یک پوشاک بانوان همکاری دارد و این فرصت برای شما ایجاد شده است، تا خرید خود را با مشاهده و بررسی بیش از 1500 مدل جدید در هرکالکشن با اعتماد کامل به وی شاپ انجام دهید. ارسال سریع، ضمانت کیفیت و قیمت و تضمین ایرانی بودن کالا سه اصل اولیه ما در وی شاپ است.",
  highlights: [
    "دست برش و دوخت محلی",
    "رنگ شده با رنگ های اختصاصی ما",
    "از قبل شسته شده و از قبل کوچک شده است",
    "100% پنبه فوق العاده نرم",
  ],
  details:
    'بسته 6 شامل دو تی بیسیک مشکی، دو سفید و دو هدری خاکستری است. برای سرویس اشتراک ما ثبت‌نام کنید و اولین نفری باشید که رنگ‌های جدید و هیجان‌انگیز را دریافت می‌کنید، مانند نسخه محدود آینده ما "خاکستری ذغالی".',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PropertyDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">اطلاعات محصول</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">بررسی ها</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} بررسی ها
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">رنگ</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">سایز</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    راهنمای اندازه
                  </a>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                اضافه به سبد خرید
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">توضیحات</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">نکات برجسته</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">جزییات</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
