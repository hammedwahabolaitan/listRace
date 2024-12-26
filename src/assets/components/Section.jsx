import React from 'react'
const location = [
    { icon: "pi-home", house: "Choose what to Do", listing: "Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua", button:" Read more" },
    
  ];
export default function Section() {
  return (
    <div>
      <div id='works' className="work my-10 list-none border border-red-700 h-[76vh]">
        <div className="H  text-center">
          <h3 className="my-3  ">HOW IT WORKS</h3>
          <p className="mb-16">Learn More about how our website works</p>
        </div>

        <div className="flex items-center justify-around ">
        <div className="shadow-lg shadow-blue-500/50 w-1/4 h-[70vh]: text-center h-96 hover:bg-red-500">
          <i className="pi pi-bitcoin my-5  " style={{ fontSize: '5rem' }}></i>
         <h5 className='my-5'>CHOOSE WHAT TO DO</h5>
         <p className='my-7  leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut perspiciatis quos eius facere voluptas voluptate ducimus nam reprehenderit quasi.</p>
         <button className='p-2 shadow-lg shadow-blue-500/50 my-1 hover:text-red-500 bg-slate-200'> read more</button>
          </div> <div className="shadow-lg shadow-blue-500/50 w-1/4 h-[70vh]: text-center h-96 hover:bg-red-500">
          <i className="pi pi-bitcoin my-5  " style={{ fontSize: '5rem' }}></i>
         <h5 className='my-5'>CHOOSE WHAT TO DO</h5>
         <p className='my-7  leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut perspiciatis quos eius facere voluptas voluptate ducimus nam reprehenderit quasi.</p>
         <button className='p-2  my-1 hover:text-red-500 bg-slate-200'> read more</button>
          </div> <div className="shadow-lg shadow-blue-500/50 w-1/4 h-[70vh]: text-center h-96 hover:bg-red-500">
          <i className="pi pi-bitcoin my-5  " style={{ fontSize: '5rem' }}></i>
         <h5 className='my-5'>CHOOSE WHAT TO DO</h5>
         <p className='my-7  leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut perspiciatis quos eius facere voluptas voluptate ducimus nam reprehenderit quasi.</p>
         <button className='p-2 shadow-cyan-500/45 my-1 hover:text-red-500 bg-slate-200'> read more</button>
          </div>
        </div>
      </div> 
     
    </div>
  )
}
