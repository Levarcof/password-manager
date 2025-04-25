import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';



import { ToastContainer, toast } from 'react-toastify';
// JSON string ko JavaScript object me convert karna	JSON.parse()	const obj = JSON.parse('{"name":"Alice"}');
// JavaScript object ko JSON string me convert karna	JSON.stringify()	const str = JSON.stringify({ name: "Alice" })

const Maneger = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [password, setPassword] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPassword(JSON.parse(passwords))
        }



    }, [])

    const showPassword = () => {

        if (ref.current.src.includes("cdn.lordicon.com/dicvhxpz.json")) {
            passwordRef.current.type = "text"
            ref.current.src = "https://cdn.lordicon.com/fgxwhgfp.json"
        }
        else {
            passwordRef.current.type = "password"
            ref.current.src = "https://cdn.lordicon.com/dicvhxpz.json"
        }
    }
    const handlChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }
    const savePassword = () => {  
     if(form.site.length >3 && form.site.length>3 && form.site.length>3)
     {

        console.log(form)
        setPassword([...password, {...form , id:uuidv4()}])
        localStorage.setItem("passwords", JSON.stringify([...password, {...form , id:uuidv4()}]))
        console.log(password)
        setform({ site: "", username: "", password: "" })
     }
     else{
        alert("Error: password not saved")
        setform({ site: "", username: "", password: "" })
        
     }
        
    

    }
    const copyText = (e) => {
        
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(e)
    }
    const delatePassword = (id)=>
    {

        const passwordArray = password.filter((item)=>
        item.id  != id)
        let c = confirm("Do you realy want to delete this Password")
        if(c)
        {  
             
           setPassword(passwordArray)
        localStorage.setItem("passwords",JSON.stringify(passwordArray)) 
    
        }
   
    
        

    }
    const editPassword = (id)=>
    {
        setform(password.filter(item => item.id == id)[0])
        setPassword(password.filter(item=>item.id !=id))

        // localStorage.setItem("passwords" , JSON.stringify(password.filter(item => item.id !=id)))

    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute insh1et-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
              <div className="md:contaner max-w-[100vw]  min-h-[85vh]">
                <h1 className='font-bold text-4xl text-center '>
                    <span className="text-green-700" >&lt;</span>
                    Pass
                    <span className="text-green-700" > OP /&gt;</span>
                </h1>
                <p className='text-center texl-lg text-green-700'>manage your password by Pass OP</p>
                <div className='flex flex-col items-center gap-2 p-4 text-black '>
                    <input onChange={handlChange} name='site' value={form.site} placeholder='Enter website URL ' className=' rounded-full border w-full border-green-500 p-2 py-1 ' type="text" />
                    <div className='flex justify-between w-full gap-6'>
                        <input onChange={handlChange} name='username' value={form.username} placeholder='Enter username' className=' rounded-full border w-full p-2 py-1 border-green-500' type="text" />
                        <div className='relative w-full flex items-center  justify-center'>
                            <input  ref={passwordRef} onChange={handlChange} name='password' value={form.password} placeholder='Enter password' className=' rounded-full border w-full  p-2 py-1 border-green-500' type="password" />
                            <span onClick={showPassword} className='  cursor-pointer absolute right-3'>
                                <lord-icon
                                    ref={ref}
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="hover"
                                    stroke="light"
                                    colors="primary:#121331,secondary:#000000"
                                    md:style={{ width: "25px", height: "25px" }}
                                    style={{ width: "18px", height: "18px"  }}

                                >
                                </lord-icon>
                            </span>
                        </div>

                    </div>

                    <button disabled={form.password ==="" || form.username ==="" || form.site===""}  onClick={savePassword} className=' flex border-2 border-green-900 justify-center gap-2 items-center bg-green-500 rounded-full  text-black p-1 px-3 w-fit hover:bg-green-400'>
                        <lord-icon

                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#000000"
                        >
                        </lord-icon>
                        Add Password

                    </button>
                </div>
                <div className="table-auto min-h-[400px] mx-auto w-[85%] ">
                    <h1 className='font-bold text-xl text-center mb-2'>Your Password</h1>
                    {password.length == 0 && <div className=' py-2 text-center'>No password availabl</div>}
                    {password.length != 0 && <div className='[@media(max-width-860)]:w-[200px] [@media(max-width-860)]:text-sm  overflow-x-auto '><table className='md:w-full rounded-md '>
                        <thead className='bg-green-800 text-white  text-center'>
                            <th className='py-2 text-center'>Username</th>
                            <th className='py-2 text-center'>Website URL</th>
                            <th className='py-2 text-center'>Password</th>
                            <th className='py-2 text-center'>Action</th>
                        </thead>
                        <tbody className='text-center  bg-green-100'>
                            {password.map((item, index) => {
                                return <tr key={index}>

                                    <td className='cursor-pointer   md:min-w-1/3 '>
                                        <div className=' flex items-center justify-evenly'>
                                            <div><a href="{item.site}">{item.site}</a></div>

                                            <div onClick={() => copyText(item.site)} > <lord-icon
                                                src="https://cdn.lordicon.com/lyrrgrsl.json"
                                                trigger="hover"
                                                style={{ width: "18px", height: "15px" }}>
                                            </lord-icon></div>
                                        </div>
                                    </td >
                                    <td className='cursor-pointer md:min-w-1/3 '>
                                        <div className='flex items-center justify-evenly px-9'>
                                            <div>{item.username}</div>

                                            <div onClick={() => copyText(item.username)} > <lord-icon
                                                src="https://cdn.lordicon.com/lyrrgrsl.json"
                                                trigger="hover"
                                                style={{ width: "18px", height: "15px" }}>
                                            </lord-icon></div>
                                        </div>

                                    </td>
                                    <td className='cursor-pointer md:min-w-1/3'>
                                        <div className='flex items-center justify-evenly '>
                                            <div>{item.password}</div>

                                            <div onClick={() => copyText(item.password)}  > <lord-icon
                                                src="https://cdn.lordicon.com/lyrrgrsl.json"
                                                trigger="hover"
                                                style={{ width: "18px", height: "15px" }}>
                                                    
                                            </lord-icon></div>
                                        </div>
                                    </td>
                                    <td><div className='flex'>
                                        <div><span onClick={()=>{editPassword(item.id)}}  className='mx-1'>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover"
                                                stroke="bold"
                                                colors="primary:#0a5c15,secondary:#000000"
                                                style={{ width: "25px", height: "25px" }}>
                                            </lord-icon>
                                        </span></div>
                                        <div><span onClick={() => {delatePassword(item.id)}} className='mx-1'>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/hwjcdycb.json"
                                                trigger="hover"a
                                                stroke="bold"
                                                colors="primary:#0a5c15,secondary:#000000"
                                                style={{ width: "25px", height: "25px" }}>
                                            </lord-icon>
                                        </span></div>
                                        
                                        
                                        </div>
                                        

                                    </td>
                                </tr>
                            })}


                        </tbody>
                    </table>
                    </div>}

                </div>

            </div>
        </>
    )
}

export default Maneger
