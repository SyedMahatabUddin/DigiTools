
import SelectedCard from "../SelectedCard/SelectedCard";
import ToolsData from "../ToolsData/ToolsData";
import { Suspense, useState } from "react";

const Cart = ({carts,setcart }) => {
const [activeTab, setActiveTab] = useState('Cart')


 return (
   <div className=' flex flex-col max-w-6xl px-5 md:px-0 items-center w-full mx-auto '>
      <div className=' space-y-4 my-10'>
        <h1 className="text-4xl sm:text-5xl text-center font-extrabold text-[#101727]">Premiun Digital Tools</h1>
              <p className="text-[16px] text-[#627282] text-center  max-w-150">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

      </div>
      <div className='flex border-4 border-[#F6F6F6] px-4 rounded-full p-1 min-h-11'>
          <button onClick={()=> setActiveTab('Cart')} className={` ${ activeTab ==='Cart'? 'btnPrimary' : ' flex items-center cursor-pointer font-bold text-[#25065D] px-4 rounded-full' }  `}>Product</button>
          <button onClick={()=> setActiveTab('carts')} className={` ${ activeTab ==='Cart'? ' flex items-center cursor-pointer font-bold text-[#25065D] px-4 rounded-full'  :'btnPrimary' }  `}> Cart ({ carts.length})</button>
      </div>
      <div className="w-full flex justify-center ">
   
  <Suspense fallback={<span className="loading loading-spinner loading-xl my-20"></span>}>
  
       {
        activeTab === 'Cart' ?  (<ToolsData carts={carts} setcart={setcart} /> ) :    (  <SelectedCard setcart={setcart} carts={carts}/>)
       }

        </Suspense>

      </div>
   </div>
 );
};

export default Cart;