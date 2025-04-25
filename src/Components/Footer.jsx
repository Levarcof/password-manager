import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 fixed bottom-0 w-[100vw] p-3  md:px-20 md:p-2 text-white flex justify-between ' >
          
            <div className='flex  gap-3  items-center'> 
            <div className=''>
              <h1 className='font-bold text-xl md:text-2xl text-center '>
                    <span className="text-green-700" >&lt;</span>
                    Pass
                    <span className="text-green-700" > OP /&gt;</span>
                </h1>
            </div>
                 <button className=" border-2 border-green-900  bg-green-500 rounded-full   p-1 md:px-3 w-fit hover:bg-green-400'">Sign Up</button>
                {/* <div className='text-green-400'>Regester for free</div> */}
              

            </div>
            
            <div className='logo flex gap-1 md:gap-3'>
                <img width={"25px"} className='' src="google.svg" alt="" />
                <img width={"25px"} className=' ' src="insta.svg" alt="" />
                <img width={"25px"} className='' src="what.svg" alt="" />
                <img width={"25px"} className=' ' src="link.svg" alt="" />
                <img width={"25px"} className=' ' src="x.svg" alt="" />

            </div>
        </div>

    )
}

export default Footer
