import { RiPlayLine } from 'react-icons/ri';
import groupIcon from "../../assets/Group5.svg";
import bannerImg from "../../assets/banner.png";

const Hero = () => {
return (
  <div className=' flex flex-col-reverse md:flex-row mx-auto max-w-6xl items-center px-2 md:px-0 sm:px-5 py-0 sm:py-20 gap-5'>
    <div className='text-center md:text-left'>
          <div className='primaryfont space-y-6'>
          <div className='bg-[#E1E7FF] mx-auto sm:mx-0 w-fit py-1 px-4 rounded-2xl flex gap-1.5'>
            <img src={groupIcon} alt="" />
            <h4 className='   bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>New: AI-Powered Tools Available</h4>
          </div>
          <h1 className='lg:text-[72px] sm:text-[60px] text-5xl text-[#101727] font-extrabold leading-tight'>Supercharge Your Digital Workflow</h1>
          <p className='max-w-140 tracking-wider text-[#627382]'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. <br />
          Explore Products
          </p>
          </div>

          <div className='flex gap-4  justify-self-center sm:justify-self-start py-6'>
           <button className='flex btnPrimary items-center gap '> Explore Products</button>
           
           <button className='flex rounded-2xl border border-[#9514FA] px-2 items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-[16px] hover:-translate-y-0.5 hover:scale-103 transition-transform ease-in-out duration-200 cursor-pointer'> <RiPlayLine className='text-[#4F39F6]  text-[22px] '/>Watch Demo</button>
          
          </div>
    </div>
    <img src={bannerImg} alt="" className="w-full max-w-md md:max-w-xl  h-96 sm:h-auto object-cover mx-auto" />
  </div>
);
};

export default Hero;