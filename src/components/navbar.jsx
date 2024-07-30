import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <>
            <div className='nav flex justify-between sticky px-3 py-4 h-14 bg-[rgba(0,0,0,0.3)] text-[18px]'>
                <div className="left pl-[100px] text-white">My  Portfolio</div>
                <div className="right flex list-none  justify-center gap-14 pr-[100px]">
                    <Link to="/" className='hover:text-[1.2rem] transition-all w-[80px] text-white flex justify-center'>Home</Link>
                    <Link to="/about" className='hover:text-[1.2rem] transition-all w-[80px] text-white flex justify-center'>About</Link>
                    <Link to="/Skills" className='hover:text-[1.2rem] w-[80px] transition-all text-white flex justify-center'>Skills</Link>
                    <Link to="/contact" className='hover:text-[1.2rem] w-[80px] transition-all text-white flex justify-center'>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;