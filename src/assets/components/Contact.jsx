import React from 'react'

export default function Contact() {
  return (
    <div>
      
<section id="contact" className="subscription py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="subscribe-title text-center mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Do you want to add your business listing with us?
      </h2>
      <p className="text-gray-600">
        Listrace offers you the chance to list your business with us, and we are fully equipped to promote your business.
      </p>
    </div>
    <div className="flex justify-center">
      <div className="w-full md:w-1/2">
        <div className="subscription-input-group flex flex-col md:flex-row gap-4">
          <form action="#" className="flex w-full">
            <input type="email" className="subscription-input-form w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email here"/><button
              className="appsLand-btn subscribe-btn mt-4 md:mt-0 ml-0 md:ml-4 px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 transition-colors duration-300"
              onClick={() => window.location.href='#'}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>



<footer id="footer" className="footer bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="footer-menu mb-8">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <div className="navbar-header">
            <a className="navbar-brand text-2xl font-bold" href="index.html">
              List<span className="text-red-500">Race</span>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-3/4 ">
          <ul className="footer-menu-item flex flex-wrap gap-4 text-lg">
            <li><a href="#works" className="hover:text-blue-500">How It Works</a></li>
            <li><a href="#explore" className="hover:text-blue-500">Explore</a></li>
            <li><a href="#reviews" className="hover:text-blue-500">Review</a></li>
            <li><a href="#blog" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            <li><a href="#contact" className="hover:text-blue-500">My Account</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='border-gray-600 border-b-2 my-10'></div>
    <div className="hm-footer-copyright">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <p className="text-sm">
            ©copyright. Designed and developed by <a href="wabtech.wegic.app" className="text-blue-400 hover:underline">WABTECH</a>
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center">
          <span className="mr-4 text-sm"><i className="pi pi-phone"></i> +2348107450970</span>
          <div className="footer-social flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-facebook"></i></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-twitter pi-spin "></i></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-linkedin"></i></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-google-plus"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="scroll-Top" className="fixed bottom-4 right-4">
    <div className="return-to-top bg-red-600 hover:bg-gray-700 rounded-full p-3 cursor-pointer">
      <a href="#"><i className="pi pi-angle-up text-[#141111]" id="scroll-top" aria-hidden="true" title="Back to Top"></i></a>
    </div>
  </div>
</footer>
    </div>
  )
}
