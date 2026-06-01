
const SelectedCard = ({setcart , carts}) => {
   
  const RemoveCart = (title)=>{
    const filterCart = carts.filter(cart => cart.title != title )
    setcart(filterCart)
  }
  const totalCart = carts.reduce((sum ,cart)=> sum + Number(cart.price) , 0)
  
if (carts.length === 0) {
  return(
    <div className="-space-y-40 border-3 rounded-2xl border-[#F2F2F2] w-6xl  my-10 " >
      <p className="font-extrabold text-[#101727] text-[18px] m-6">Your cart</p>
      <div className="flex flex-col space-y-5 my-5 items-center justify-center w-full">
      <img className="max-w-40 " src="/src/assets/cart.png" alt="" />
      <p className=" text-xl">
          Your cart is empty
      </p>
      </div>
    </div>
  );
}

return (

     <div className=" my-8 w-full space-y-4 p-4 border-[#F6F6F6] justify-items-center rounded-2xl border-3">

    {
     carts.map((cart ,index) =>(
          <div key={index} className=" flex p-3 rounded-xl bg-[#F9FAFC] w-full ">
           <img src={cart.icon}  alt="" className="my-auto w-16 h-16 p-2 rounded-full border border-[#F2F2F2] object-scale-down shrink-0 bg-white" />
           <div className="flex flex-col mx-3">
            <span className="text-xl font-semibold  text-[#101727]">{cart.title}</span>
            <span className="text-[16px] font-medium text-[#627382]">{cart.price}</span>
           </div>
           <button onClick={()=> RemoveCart(cart.title)} className=" ml-auto text-[#FF3980] hover:text-[rgb(179,6,6)] text-[16px]  font-bold cursor-pointer  ">Remove</button>
          </div>
     ))

          }
          
            <div className="flex w-full justify-between py-2 px-6 ">
              <p className="text-[#101727]  text-[16px] ">Total</p>
              <span className="text-[#101727] font-bold text-2xl ">${totalCart}</span>
            </div>
            <button className="btnPrimary w-full font-light ">Proceed to Checkout</button>
  </div>
);
};

export default SelectedCard;