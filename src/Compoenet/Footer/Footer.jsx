import Insta from "../../assets/insta.svg";
import Facebook from "../../assets/facebook.svg";
import X from "../../assets/x.svg";

const Footer = () => {
return (
  <div className="bg-[#101727] pt-0 md:pt-10 px-4">
   <div className="max-w-6xl w-full mx-auto">
      
          {/* contact and details section */}
    <div className="flex flex-wrap items-center sm:items-stretch justify-around space-y-8 py-10 md:py-20 text-center sm:text-left space-x-5">
          {/* logo and theme */}
       <div className="space-y-1 md:space-y-4 ">
          <h2 className="text-white text-3xl md:text-[40px] font-bold ">DigiTools</h2>
          <p className="max-w-80 text-white text-[16px] ">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
       </div>
          

          {/* product section */}
 
       <div className="space-y-1 md:space-y-4">
          <p className="text-white text-xl font-medium" >Product</p>
          <ul className="text-white text-[16px] space-y-1 md:space-y-4">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
          </ul>
       </div>
        {/* company section */}
       <div className="space-y-1 md:space-y-4">
          <p className="text-white text-xl font-medium" >Company</p>
          <ul className="text-white text-[16px] space-y-1 md:space-y-4">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
          </ul>
       </div>

         {/* resource section */}
       <div className="space-y-1 md:space-y-4">
          <p className="text-white text-xl font-medium" >Resources</p>
          <ul className="text-white cursor-pointer text-[16px] space-y-1 md:space-y-4">
                    <li>Documentation</li>
                    <li>Help Centerv</li>
                    <li>Community</li>
                    <li>Contact</li>
          </ul>
       </div>
         {/* social link section */}
       <div className="space-y-1 md:space-y-4" >
          <p className="text-white text-xl " >Social Links</p>
          <div className="flex gap-4">  
              <div  className="bg-white p-2 rounded-full w-fit cursor-pointer">
              <img  src={Insta} alt="Insta icon" className="min-w-4 " /> 
              </div>
              <div className="bg-white p-2 rounded-full w-fit  cursor-pointer">
              <img  src={Facebook} alt="facebook icon" className="min-w-4"  />
              </div>
              <div className="bg-white p-2 rounded-full w-fit cursor-pointer">
              <img  src={X} alt="X icon" className="min-w-4" />
              </div>
          </div>
       </div>
    </div>

          {/* privacy and policy section */}
    <div className="items-center border-t gap-8 border-[#ffffff50] flex justify-between py-4 sm:py-8">
        <div>
         <span className="text-white text-[12px] sm:text-[16px]">© 2026 Digitools. All rights reserved.</span>
         </div>
        <div className="text-white flex gap-3 md:gap-6 text-[12px] sm:text-[16px]">
          <p>Privacy Policy</p>
          <p> Terms of Service </p>
          <p>Cookies</p>
        </div>
    </div>
   </div>

  </div>
);
};

export default Footer;