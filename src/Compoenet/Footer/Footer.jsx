import Insta from "../../assets/insta.svg";
import Facebook from "../../assets/facebook.svg";
import X from "../../assets/x.svg";

const Footer = () => {
return (
  <div className="bg-[#101727] pt-10">
   <div className="max-w-6xl w-full mx-auto">
      
          {/* contact and details section */}
    <div className="flex  justify-between py-20">
          {/* logo and theme */}
       <div className="space-y-4">
          <h2 className="text-white text-[40px] font-bold ">DigiTools</h2>
          <p className="max-w-80 text-white text-[16px] ">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
       </div>
          

          {/* product section */}
 
       <div className="space-y-4">
          <p className="text-white text-xl font-medium" >Product</p>
          <ul className="text-white text-[16px] space-y-4">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
          </ul>
       </div>
        {/* company section */}
       <div className="space-y-4">
          <p className="text-white text-xl font-medium" >Product</p>
          <ul className="text-white text-[16px] space-y-4">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
          </ul>
       </div>

         {/* resource section */}
       <div className="space-y-4">
          <p className="text-white text-xl font-medium" >Product</p>
          <ul className="text-white text-[16px] space-y-4">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
          </ul>
       </div>
         {/* social link section */}
       <div className="space-y-4" >
          <p className="text-white text-xl " >Social Links</p>
          <div className="flex gap-4">  
              <div  className="bg-white p-2 rounded-full w-fit">
              <img  src={Insta} alt="Insta icon" /> 
              </div>
              <div className="bg-white p-2 rounded-full w-fit">
              <img  src={Facebook} alt="facebook icon" />
              </div>
              <div className="bg-white p-2 rounded-full w-fit">
              <img  src={X} alt="X icon" />
              </div>
          </div>
       </div>
    </div>

          {/* privacy and policy section */}
    <div className=" border-t  border-[#ffffff50] flex justify-between py-8">
        <div>
         <span className="text-white text-[16px]">© 2026 Digitools. All rights reserved.</span>
         </div>
        <div className="text-white text-[16px] flex gap-6">
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