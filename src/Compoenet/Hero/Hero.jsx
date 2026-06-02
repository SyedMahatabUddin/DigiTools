import { RiPlayLine } from 'react-icons/ri';
import groupIcon from "../../assets/Group5.svg";
import bannerImg from "../../assets/banner.png";

const Hero = () => {
return (
  <div className=' flex mx-auto max-w-300  items-center justify-between py-20 gap-5'>
    <div className=''>
          <div className='primaryfont space-y-6'>
          <div className='bg-[#E1E7FF] w-fit py-1 px-4 rounded-2xl flex gap-1.5'>
            <img src={groupIcon} alt="" />
            <h4 className='   bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>New: AI-Powered Tools Availablev</h4>
          </div>
          <h1 className='text-[72px] text-[#101727] font-extrabold leading-tight'>Supercharge Your Digital Workflow</h1>
          <p className='max-w-150 tracking-wider text-[#627382]'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. <br />
          Explore Products
          </p>
          </div>

          <div className='flex gap-4 py-6'>
           <button className='flex btnPrimary items-center gap '> Explore Products</button>
           
           <button className='flex rounded-2xl border border-[#9514FA] px-2 items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-[16px] hover:-translate-y-0.5 hover:scale-103 transition-transform ease-in-out duration-200 cursor-pointer'> <RiPlayLine className='text-[#4F39F6]  text-[22px] '/>Watch Demo</button>
          
          </div>
    </div>
    <img src={bannerImg} alt="" />
  </div>
);
};

export default Hero;