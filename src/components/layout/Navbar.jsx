import { useState } from "react";
import { Link } from "react-router-dom";

const navs = [
  {
    title:'Home',
    path:'/',
  },
  {
    title:'Our Work',
    path:'/our-work',
  },
  {
    title:'About Us',
    path:'/about',
  },
  {
    title:'Contact',
    path:'/contact',
  },
  {
    title:'Myself',
    path:'/myself',
  },
];
const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="flex gap-10 items-center justify-center py-10 shadow-xl "> 
      {navs.map((nav, index) => (
        <div key={index} className="">
          <Link onClick={()=>setActiveIndex(index)} className={`text-lg ${activeIndex === index ?'border-b-2 border-green-500':''}`} to={nav.path} >{nav.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
