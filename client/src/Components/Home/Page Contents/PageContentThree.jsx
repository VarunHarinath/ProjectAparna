import React from "react";
import { Link } from "react-router-dom";

const PageContentThree = () => {
  return (
    <>
      <div className=" mt-5">
        <section className="bg-gray-50 rounded-2xl">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              {" "}
              {/* Adjusted max-w-xl to max-w-3xl for wider paragraph */}
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Aparna Kanopy Tulip
                <strong className="font-extrabold text-gray-700 sm:block text-3xl pt-3">
                  {" "}
                  About Us.{" "}
                </strong>
              </h1>
              <p className="mt-4 sm:text-xl/relaxed">
                Aparna Kanopy Tulip project was built by the well-known
                developer Aparna Constructions and Estates Pvt. Ltd. Amenities
                such as Power Back Up, Fire Fighting Equipment, Air Conditioned,
                Gymnasium, Swimming Pool, Lift, Flower Gardens, Reserved
                Parking, Internet/Wi-Fi Connectivity, Outdoor Tennis Courts at
                Aparna Kanopy Tulip. The exact address of this famous project is
                Gundlapochampalli, Hyderabad, Telangana. Enjoy the luxury of
                living with all modern conveniences in Aparna Kanopy Tulip.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/aboutus/AboutSociety"
                  className="block w-full sm:w-auto px-12 py-3 text-sm font-medium text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 active:bg-blue-800 transition duration-150 ease-in-out transform hover:scale-105"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageContentThree;
