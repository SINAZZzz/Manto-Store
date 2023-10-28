import React, { useContext } from "react";

// context
import { HouseContext } from "./HouseContext";

// components
import House from "./House";

// link
import { Link } from "react-router-dom";

// icons
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  // if loading is true
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry , nothing found{" "}
      </div>
    );
  }
  return (
    <section className="mb-20">
      <div className="cantainer mx-auto">
        <div
          className="grid gap-6 lg:grid-cols-4 lg:gap-14 lg:px-[135px] lg:py-[30px] 
        md:grid-cols-2 md:px-[30px] px-10"
        >
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
