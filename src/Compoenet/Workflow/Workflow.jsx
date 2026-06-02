
const Workflow = () => {
return (
  <div className="bg-linear-to-r  from-[#4F39F6] to-[#9514FA] py-30 mt-20 text-center space-y-3">
     <h5 className="text-[40px] font-extrabold text-[#FFFFFF] ">Ready to Transform Your Workflow?</h5>
     <p className="text[16px] text-white ">Join thousands of professionals who are already using Digitools to work smarter. <br></br> Start your free trial today.</p>
     <div className='flex gap-4 py-6 justify-center'>
       <div className="rounded-full bg-white hover:bg-gray-100 hover:-translate-y-0.5 hover:scale-103 transition-transform ease-in-out duration-200">
             <button className=" items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-[16px] cursor-pointer py-2 px-5 ">Subscribe</button>
       </div>
      
       <button className='flex rounded-full border border-white hover:bg-purple-700 hover:-translate-y-0.5 hover:scale-103 transition-transform ease-in-out duration-200 py-2 px-5  items-center font-semibold text-white text-[16px] '> Watch Demo</button>
       
     </div>
     <p className="text[16px] text-white " >14-day free trial • No credit card required • Cancel anytime</p>
  </div>
);
};

export default Workflow;