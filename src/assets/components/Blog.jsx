import React from 'react'

export default function Blog() {
  return (
	<div>
	  <section id="blog" className="blog py-16">
  <div className="container mx-auto px-4">
    <div className="section-header text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800">News and Articles</h2>
      <p className="text-gray-600">Always up to date with our latest News and Articles</p>
    </div>
    {/* /.section-header */}
    <div className="blog-content">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="single-blog-item bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="single-blog-item-img">
              <img src="src\assets\images\blog\b1.jpg" alt="blog image" className="w-full h-48 object-cover" />
            </div>
            <div className="single-blog-item-txt p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">How to find your Desired Place more quickly</a>
              </h2>
              <h4 className="text-gray-500 mt-2">
                Posted <span>by</span> <a href="#" className="text-blue-600">Admin</a> March 2018
              </h4>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="single-blog-item bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="single-blog-item-img">
              <img src="src\assets\images\blog\b2.jpg" alt="blog image" className="w-full h-48 object-cover" />
            </div>
            <div className="single-blog-item-txt p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">How to find your Desired Place more quickly</a>
              </h2>
              <h4 className="text-gray-500 mt-2">
                Posted <span>by</span> <a href="#" className="text-blue-600">Admin</a> March 2018
              </h4>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="single-blog-item bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="single-blog-item-img">
              <img src="src\assets\images\blog\b3.jpg" alt="blog image" className="w-full h-48 object-cover" />
            </div>
            <div className="single-blog-item-txt p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">How to find your Desired Place more quickly</a>
              </h2>
              <h4 className="text-gray-500 mt-2">
                Posted <span>by</span> <a href="#" className="text-blue-600">Admin</a> March 2018
              </h4>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /.container */}
</section>
	</div>
  )
}
