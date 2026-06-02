
const Counter = () => {
return (
 <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 my-5 justify-items-center'>
   <div className="max-w-300  space-x-28 flex items-center text-center ">
     <div>
        <p className='text-white font-extrabold text-6xl '>50+</p>
        <p className='text-white font-medium text-2xl '>Active Users</p>
     </div>
     <span  className='bg-[#FFFFFF60] h-20 w-0.5 '></span>
     <div>
          <p className='text-white font-extrabold text-6xl'>200+</p>
          <p className='text-white font-medium text-2xl '>Primium Tools</p>
     </div>
     <span  className='bg-[#FFFFFF60] h-20 w-0.5 '></span>
     <div>
          <p className='text-white font-extrabold text-6xl'>4.9</p>
          <p className='text-white font-medium text-2xl '>Rating</p>
     </div>
   </div>

 </div>
);
};

export default Counter;