import { use } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";
const Data = fetch('toolsData.json')
.then(res=>res.json());

const ToolsData = ({carts , setcart}) => {
  const CartData = use(Data);
  const adedCart = (title)=>carts.find(cart => cart.title == title)
  
  const addCart = (Cart)=>{
    
    const DataCheck = carts.find(a => a.title == Cart.title);
    if(DataCheck){
     toast.error('item is already exist')
      return
    }

    
    setcart([...carts , Cart] )
    toast.success('Item Added')
  }
   
return (
  <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 ">
   {
    CartData.map((Cart ,index) =>(
      
          <div key={index} className='p-6 border-[#F6F6F6]  rounded-2xl border-2 space-y-4 hover:-translate-y-2 hover:scale-105 transition-transform ease-in-out duration-200'>
              <div className='flex justify-between'>
                <div className='p-3.5 border  border-[#F2F2F2] rounded-full'>
                <img src={Cart.icon} alt=""  className='min-w-8 min-h-8  object-contain '/>
                </div>
                <div className={ `h-fit items-center  py-1 px-4 rounded-2xl flex gap-1.5
                    ${Cart.badge === 'Popular' 
                    ? 'bg-[#E1E7FF]  ' : (Cart.badge==='Best Seller'|| Cart.badge=== 'New') ? 'bg-[#FEF3C6]  ' : ' bg-[#DBFCE7]  ' }  `}>
                   <h4 className={` font-medium text-[14px]
                    ${Cart.badge === 'Popular' 
                    ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]  bg-clip-text text-transparent' : (Cart.badge==='Best Seller'|| Cart.badge=== 'New') ? ' text-[#BB4D00] ' : '  text-[#0A883E] ' } `}>{Cart.badge}</h4>
                </div >
              </div >
              <div className='space-y-3'>

                 <p className='text-2xl font-bold text-[#101727] ' >{Cart.title}</p>
                 <p className='min-w-20 text-[16px] text-[#627282] '>{Cart.description}</p>
                 <p className=' text-[#627282]'><span className='text-2xl font-bold text-[#101727] '>$ {Cart.price}</span>{Cart.billing_cycle}</p>
                 <ul className='leading-6 text-[#627282] font-medium'>
                    <li className="flex gap-1 items-center"><FaCheck className="text-green-600"/> {Cart.features}</li>
                    <li className="flex gap-1 items-center"><FaCheck className="text-green-600"/>  {Cart.features[1] }</li>
                    <li className="flex gap-1 items-center"><FaCheck className="text-green-600"/>  {Cart.features[2] }</li>
                    
                    {Cart.features?.[3] && (
                      <li className="flex gap-1 items-center"><FaCheck className="text-green-600"/>  {Cart.features[3] }</li>)}
                 </ul>
                <button disabled={adedCart(Cart.title)} onClick={() => addCart(Cart)} className='btnPrimary  w-full font-light '>{adedCart(Cart.title) ? ' Added' : 'Buy Now'}</button>
              </div>
          </div>
      
    ))
   }
  </div>
);
};


export default ToolsData;