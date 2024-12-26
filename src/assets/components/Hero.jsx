import React from "react";

export default function Hero() {
  const location = [
    { icon: "pi-home", house: "Restaurant", listing: "150" },
    { icon: "pi-home", house: "Restaurant", listing: "152350" },
    { icon: "pi-home", house: "Restaurant", listing: "159" },
    { icon: "pi-home", house: "Restaurant", listing: "1465" },
    { icon: "pi-home", house: "Restaurant", listing: "178" },
  ];

  return (
    <div>
      <div id="#home" className="relative h-[92vh] border border-red-400 bg-cover bg-center" style={{backgroundImage: 'url("src/assets/images/welcome-hero/banner.jpg")',}}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-8">
          <h2 className="text-[50px]">
            BEST PLACE TO FIND AND EXPLORE ALL YOU NEED
          </h2>
          <p className="text-[20px] mb-5">
            Find Best Place, Restaurant, Hotel, Real Estate, and many more
            things in just one click
          </p>
        </div>

        <div className="absolute bottom-[215px] left-1/2 transform -translate-x-1/2 w-[90%] text-black flex justify-center divide-x divide-violet-600">
          <label className="py-5 px-2 bg-white text-black" htmlFor="help">
            What?
          </label>
          <input
            className="py-5 px-4 text-black"
            type="text"
            placeholder="EX: London, New York, Rome"
            id="help"
          />
          <i className="pi pi-search bg-white py-5 px-4"></i>{" "}
          {/* Corrected icon */}
          <label className="py-5 px-2 bg-white text-black" htmlFor="location">
            Location
          </label>
          <input
            className="py-5 px-4 text-black"
            type="text"
            placeholder="Enter location"
            id="location"
          />
          <i className="pi pi-map-marker bg-white py-5 px-4"></i>{" "}
          {/* Corrected icon */}
          <button className="bg-red-500 text-white py-5 px-4 ml-3">
            SEARCH
          </button>
        </div>

        <div className="flex justify-between py-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70%] h-[30%] mt-5">
          {location.map((eachlocation, index) => (
            <div key={index} className="bg-white w-[19%] p-10 text-center">
              <div className="h-10 w-10 bg-gray-400 m-auto rounded-full flex items-center justify-center">
                <i className={`pi ${eachlocation.icon} text-[24px]`}></i>{" "}
                {/* Corrected icon usage */}
              </div>
              <h3 className="py-2 font-bold">{eachlocation.house}</h3>
              <p>{eachlocation.listing}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
