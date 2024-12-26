import React, { useRef, useEffect } from 'react';

export default function Review() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const scrollAmount = 1; // Adjust the scroll speed
    const intervalTime = 30; // Adjust the interval time

    const scrollInterval = setInterval(() => {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 100, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, intervalTime);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div>
      <section id="reviews" className="reviews py-16 border border-red-600 bg-gray-100">
        <div className="section-header text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Clients Reviews</h2>
          <p className="text-gray-600">What our clients say about us</p>
        </div>

        <div className="reviews-content max-w-5xl mx-auto">
          <div className="testimonial-carousel flex space-x-4 overflow-x-scroll no-scrollbar" ref={carouselRef}>
            {/* Testimonial 1 */}

            
            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c2.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional testimonials */}
            {/* You can repeat the Testimonial box here, as shown in your initial code */}

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c1.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c3.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>
            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c4.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c2.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c1.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c2.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>
            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c3.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c4.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>
            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c1.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>
            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c4.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>


            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c3.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c4.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="\src\assets\images\clients\c3.png" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>


      
 

<div className='bg-[blue] '>
<section id="statistics" className="statistics py-16">
  <div className="container mx-auto px-4">
    <div className="statistics-counter flex flex-wrap justify-between">
      
      {/* Single Statistics Box 1 */}
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div className="single-statistics-box text-center">
          <div className="statistics-content text-4xl font-bold text-[#f3eeee]">
            <div className="counter ">90K+</div>
          </div>
          <h3 className="text-lg font-medium text-[white] mt-5">Listings</h3>
        </div>
      </div>
      
      {/* Single Statistics Box 2 */}
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div className="single-statistics-box text-center">
          <div className="statistics-content text-4xl font-bold text-[white]">
            <div className="counter">40K+</div> 
          </div>
          <h3 className="text-lg font-medium text-[white] mt-5">Listing Categories</h3>
        </div>
      </div>
      
      {/* Single Statistics Box 3 */}
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div className="single-statistics-box text-center">
          <div className="statistics-content text-4xl font-bold text-[white]">
            <div className="counter">65K+</div>
          </div>
          <h3 className="text-lg font-medium text-[white] mt-5">Visitors</h3>
        </div>
      </div>
      
      {/* Single Statistics Box 4 */}
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div className="single-statistics-box text-center">
          <div className="statistics-content text-4xl font-bold text-[white]">
            <div className="counter">50K+</div>  
          </div>
          <h3 className="text-lg font-medium text-[white] mt-5">Happy Clients</h3>
        </div>
      </div>

    </div>
  </div>
</section>

</div>








    </div>
  );
}


