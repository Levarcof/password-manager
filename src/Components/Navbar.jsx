import React from "react";

const Navbar = () => {
    return (
        <div className="flex w-[100vw] bg-slate-800 text-white md:p-3 justify-around    h-14 items-center">
            <div className="logo [@media(max-width-379)]:text-[10px]  font-bold  sm:text-2xl">
                <span className="text-green-700 [@media(max-width-379)]:text-[10px]" >&lt;</span>
                Pass
                <span className="text-green-700 [@media(max-width-379)]:text-[10px]" > OP /&gt;</span>
                </div>
            <div>
                <ul className="flex justify-center items-center md:gap-8 gap-3  text-7">
                    <a href=""><li className="hover:font-bold w-fit cursor-pointer [@media(max-width-379)]:text-[10px] ">Home</li></a>
                    <a href=""><li className="hover:font-bold w-fit cursor-pointr  [@media(max-width-379)]:text-[10px] ">About</li></a>
                    <a href=""><li className="hover:font-bold w-fit cursor-pointer [@media(max-width-379)]:text-[10px] ">Contact</li></a>
                     <button className=" ring-white ring-1 hover:bg-green-700 flex text-white md:justify-center md:items-center md:gap-2 md:pr-1   md:p-1 rounded-full bg-green-800">
                    <img className="invert  w-7" src="github.svg" alt="" />
                    <h1 className="font-bold">GitHub</h1> 
                </button>
                </ul>
               
            </div>


        </div>
    )
}
export default Navbar