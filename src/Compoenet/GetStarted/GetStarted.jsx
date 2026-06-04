import CreateAcc from "../../assets/user.png";
import Rocket from "../../assets/rocket.png";
import Box from "../../assets/package.png";

const GetStarted = () => {
return (

  <div className="bg-[#F9FAFC]  py-20 px-6 md:px-0">
     <div className="space-y-2 sm:space-y-3 text-center" >
        <h1 className="text-[#101727] text-4xl sm:text-5xl font-extrabold ">Get Started in 3 Steps</h1>
        <p className="text-[#627382] text-[16px] ">Start using premium digital tools in minutes, not hours.</p>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto  max-w-300 items-center  mt-5">

        <div className=" border-[#F6F6F6] bg-white flex flex-col items-center pt-4 pb-20 px-5  rounded-2xl border-2 space-y-4 hover:-translate-y-2 hover:scale-105 transition-transform ease-in-out duration-200">
          <p className="bg-linear-to-r  from-[#4F39F6] to-[#9514FA] rounded-full p-5 text-[14px] text-white w-10 h-10  flex justify-center items-center ml-auto  ">01</p>
          <div className="bg-linear-to-r from-[#4F39F6]/10  to-[#9514FA]/10 p-5 rounded-full w-fit">
             <img src={CreateAcc} alt="" className="w-15 h-15 object-contain " />
          </div>
          <h4 className="text-[#101727] text-2xl font-bold ">Create Account</h4>
          <p className="text-[#627382] text-[16px] text-center ">Sign up for free in seconds. No credit card required to get started.</p>
        </div>


        <div className=" border-[#F6F6F6] bg-white flex flex-col items-center pt-4 pb-20 px-5  rounded-2xl border-2 space-y-4 hover:-translate-y-2 hover:scale-105 transition-transform ease-in-out duration-200">
          <p className="bg-linear-to-r  from-[#4F39F6] to-[#9514FA] rounded-full p-5 text-[14px] text-white w-10 h-10  flex justify-center items-center ml-auto  ">01</p>
          <div className="bg-linear-to-r from-[#4F39F6]/10  to-[#9514FA]/10 p-5 rounded-full w-fit">
             <img src={Rocket} alt="" className="w-15 h-15 object-contain " />
          </div>
          <h4 className="text-[#101727] text-2xl font-bold ">Choose Product</h4>
          <p className="text-[#627382] text-[16px] text-center ">Browse our catalog and select the tool sthat fit your needs.</p>
        </div>


        <div className=" border-[#F6F6F6] bg-white flex flex-col items-center pt-4 pb-20 px-5  rounded-2xl border-2 space-y-4 hover:-translate-y-2 hover:scale-105 transition-transform ease-in-out duration-200">
          <p className="bg-linear-to-r  from-[#4F39F6] to-[#9514FA] rounded-full p-5 text-[14px] text-white w-10 h-10  flex justify-center items-center ml-auto  ">01</p>
          <div className="bg-linear-to-r from-[#4F39F6]/10  to-[#9514FA]/10 p-5 rounded-full w-fit">
             <img src={Box} alt="" className="w-15 h-15 object-contain " />
          </div>
          <h4 className="text-[#101727] text-2xl font-bold ">Start Creating</h4>
          <p className="text-[#627382] text-[16px] text-center ">Download and start using your premium tools immediately.</p>
        </div>
     </div>

  </div>
);
};

export default GetStarted;