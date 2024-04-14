import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {IoHomeOutline} from 'react-icons/io5'
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
    return (
        <div className='Search grid gp-10 bg-greyish rounded-[10px] p-[3rem]'>
                <form action="">
                        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyish-700'>
                                <div className="flex gap-2 items-center">
                                        <AiOutlineSearch className='text-[25px] icon'/>
                                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search job Here... ' />
                                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                                         
                                </div>

                                <div className="flex gap-2 items-center">
                                        <IoHomeOutline className='text-[25px] icon'/>
                                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by company' />
                                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                                         
                                </div>

                                <div className="flex gap-2 items-center">
                                        <CiLocationOn className='text-[25px] icon'/>
                                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by location' />
                                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                                         
                                </div>

                                <button className=' bg-bluecolor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer'> Search</button>
                        </div>
                </form>
        </div>
    )
}

export default Search