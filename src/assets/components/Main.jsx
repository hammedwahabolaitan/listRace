import React from "react";

export default function Main() {
  return (
    <div>
      <div id="explore" className="explore my-5 list-none h-[100vh] ">
        <div   className="text-center">
          <h3>EXPLORE</h3>
          <p className="mt-3">
            Explore new places, food, culture around the world, and many more
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-7 my-7">
          {/* Card 1 */}
          <div className="card shadow-lg shadow-blue-500/50 border border-gray-300 w-[29%] h-[70vh]">
            <img
              src="src/assets/images/explore/e1.jpg"
              className="w-[30vw] h-[37vh]"
              alt="Tommy Helfinger Bar"
            />
            <h6 className="my-1">Tommy Helfinger Bar</h6>
            <p className="my-2">
              <span className="bg-blue-600">50 </span>
              <span className="text-gray-500 font-serif px-3">10 rating</span>
              <span className="text-gray-400"> from </span>
              <span className="text-red-600">5$ - 10$</span>
              <span className="pl-22 text-blue-400"> restaurant</span>
            </p>

            <div className="c flex gap-2">
              <img
                src="src/assets/images/clients/c1.png"
                className="w-[60px] h-[60px]"
                alt="Client"
              />
              <p className="text-slate-500 mb-3 border-b border-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incid ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-between">
              <button className="border border-gray-300 rounded px-2 text-red-500 font-[10px]">
                Close Now
              </button>
              <div className="icon flex gap-5">
                <i className="pi pi-home"></i>
                <i className="pi pi-star"></i>
                <i className="pi pi-heart pr-3"></i>
              </div>
            </div>
          </div>

        {/* Card 2*/}
        <div className="card shadow-lg shadow-blue-500/50 border border-gray-300 w-[29%] h-[70vh]">
            <img
              src="src/assets/images/explore/e1.jpg"
              className="w-[30vw] h-[37vh]"
              alt="Tommy Helfinger Bar"
            />
            <h6 className="my-1">Tommy Helfinger Bar</h6>
            <p className="my-2">
              <span className="bg-blue-600">50 </span>
              <span className="text-gray-500 font-serif px-3">10 rating</span>
              <span className="text-gray-400"> from </span>
              <span className="text-red-600">5$ - 10$</span>
              <span className="pl-22 text-blue-400"> restaurant</span>
            </p>

            <div className="c flex gap-2">
              <img
                src="src/assets/images/clients/c1.png"
                className="w-[60px] h-[60px]"
                alt="Client"
              />
              <p className="text-slate-500 mb-3 border-b border-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incid ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-between">
              <button className="border border-gray-300 rounded px-2">
                Close
              </button>
              <div className="icon flex gap-5">
                <i className="pi pi-home"></i>
                <i className="pi pi-star"></i>
                <i className="pi pi-heart pr-3"></i>
              </div>
            </div>
          </div>
           {/* Card 3 */}
           <div className="card shadow-lg shadow-blue-500/50 border border-gray-300 w-[29%] h-[70vh]">
            <img
              src="src/assets/images/explore/e1.jpg"
              className="w-[30vw] h-[37vh]"
              alt="Tommy Helfinger Bar"
            />
            <h6 className="my-1">Tommy Helfinger Bar</h6>
            <p className="my-2">
              <span className="bg-blue-600">50 </span>
              <span className="text-gray-500 font-serif px-3">10 rating</span>
              <span className="text-gray-400"> from </span>
              <span className="text-red-600">5$ - 10$</span>
              <span className="pl-22 text-blue-400"> restaurant</span>
            </p>

            <div className="c flex gap-2">
              <img
                src="src/assets/images/clients/c1.png"
                className="w-[60px] h-[60px]"
                alt="Client"
              />
              <p className="text-slate-500 mb-3 border-b border-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incid ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-between">
              <button className="border border-gray-300 rounded px-2">
                Close
              </button>
              <div className="icon flex gap-5">
                <i className="pi pi-home"></i>
                <i className="pi pi-star"></i>
                <i className="pi pi-heart pr-3"></i>
              </div>
            </div>
          </div>
           {/* Card 4 */}
           <div className="card shadow-lg shadow-blue-500/50 border border-gray-300 w-[29%] h-[70vh]">
            <img
              src="src/assets/images/explore/e1.jpg"
              className="w-[30vw] h-[37vh]"
              alt="Tommy Helfinger Bar"
            />
            <h6 className="my-1">Tommy Helfinger Bar</h6>
            <p className="my-2">
              <span className="bg-blue-600">50 </span>
              <span className="text-gray-500 font-serif px-3">10 rating</span>
              <span className="text-gray-400"> from </span>
              <span className="text-red-600">5$ - 10$</span>
              <span className="pl-22 text-blue-400"> restaurant</span>
            </p>

            <div className="c flex gap-2">
              <img
                src="src/assets/images/clients/c1.png"
                className="w-[60px] h-[60px]"
                alt="Client"
              />
              <p className="text-slate-500 mb-3 border-b border-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incid ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-between">
              <button className="border border-gray-300 rounded px-2">
                Close
              </button>
              <div className="icon flex gap-5">
                <i className="pi pi-home"></i>
                <i className="pi pi-star"></i>
                <i className="pi pi-heart pr-3"></i>
              </div>
            </div>
          </div>
           {/* Card 5 */}
           <div className="card shadow-lg shadow-blue-500/50 border border-gray-300 w-[29%] h-[70vh]">
            <img
              src="src/assets/images/explore/e1.jpg"
              className="w-[30vw] h-[37vh]"
              alt="Tommy Helfinger Bar"
            />
            <h6 className="my-1">Tommy Helfinger Bar</h6>
            <p className="my-2">
              <span className="bg-blue-600">50 </span>
              <span className="text-gray-500 font-serif px-3">10 rating</span>
              <span className="text-gray-400"> from </span>
              <span className="text-red-600">5$ - 10$</span>
              <span className="pl-22 text-blue-400"> restaurant</span>
            </p>

            <div className="c flex gap-2">
              <img
                src="src/assets/images/clients/c1.png"
                className="w-[60px] h-[60px]"
                alt="Client"
              />
              <p className="text-slate-500 mb-3 border-b border-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incid ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-between">
              <button className="border border-gray-300 rounded px-2">
                Close
              </button>
              <div className="icon flex gap-5">
                <i className="pi pi-home"></i>
                <i className="pi pi-star"></i>
                <i className="pi pi-heart pr-3"></i>
              </div>
            </div>
          </div>
           {/* Card 6 */}
           <div className="card shadow-lg shadow-blue-500/50 border border-gray-300 w-[29%] h-[70vh]">
            <img
              src="src/assets/images/explore/e1.jpg"
              className="w-[30vw] h-[37vh]"
              alt="Tommy Helfinger Bar"
            />
            <h6 className="my-1">Tommy Helfinger Bar</h6>
            <p className="my-2">
              <span className="bg-blue-600">50 </span>
              <span className="text-gray-500 font-serif px-3">10 rating</span>
              <span className="text-gray-400"> from </span>
              <span className="text-red-600">5$ - 10$</span>
              <span className="pl-22 text-blue-400"> restaurant</span>
            </p>

            <div className="c flex gap-2">
              <img
                src="src/assets/images/clients/c1.png"
                className="w-[60px] h-[60px]"
                alt="Client"
              />
              <p className="text-slate-500 mb-3 border-b border-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incid ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-between">
              <button className="border border-gray-300 rounded px-2">
                Close
              </button>
              <div className="icon flex gap-5">
                <i className="pi pi-home"></i>
                <i className="pi pi-star"></i>
                <i className="pi pi-heart pr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
