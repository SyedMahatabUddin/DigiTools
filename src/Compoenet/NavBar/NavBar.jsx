import { CgMenuBoxed } from "react-icons/cg";

const NavBar = ({carts}) => {

 return (
<div className='shadow-sm'>
  <div className=" mx-auto max-w-6xl flex items-center justify-between px-2 lg:px-0 py-2.5 md:py-5 ">
    {/* logo section */}
    <div>
      <a className="btn-ghost cursor-pointer sm:text-3xl text-2xl font-black bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">DigiTools</a>

    </div>
    {/* menu section */}
    <div>
      <ol className='hidden lg:flex flex-row primaryfont gap-8  '>
        <li className='cursor-pointer hover:text-blue-400 transition '>Products</li>
        <li className='cursor-pointer hover:text-blue-400 transition '>Features</li>
        <li className='cursor-pointer hover:text-blue-400 transition '>Pricing</li>
        <li className='cursor-pointer hover:text-blue-400 transition '>Testomonial</li>
        <li className='cursor-pointer hover:text-blue-400 transition '>FAQ</li>
      </ol>
    </div>
    {/* cart count section */}
    <div className="space-x-1.5 sm:space-x-4">


    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item btnPrimary w-full text-[14px]! font-medium! ">{ carts.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{carts.length} Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
     </div>

       <button className='primaryfont'>Login</button>
       <button className='btnPrimary hover:btnHoverPrimary text-white '>Get Started</button>

      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className=" m-1"><CgMenuBoxed className="btn px-0 text-purple-800" /></div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box  z-1 w-52 p-2 shadow-sm space-y-2">
                  <li className='cursor-pointer hover:text-blue-400 transition '>Products</li>
                  <li className='cursor-pointer hover:text-blue-400 transition '>Features</li>
                  <li className='cursor-pointer hover:text-blue-400 transition '>Pricing</li>
                  <li className='cursor-pointer hover:text-blue-400 transition '>Testomonial</li>
                  <li className='cursor-pointer hover:text-blue-400 transition '>FAQ</li>
          </ul>
        </div>

     </div>

    </div>
  </div>

    );
};

export default NavBar;