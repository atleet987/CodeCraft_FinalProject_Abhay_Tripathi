import React from 'react'

const Skills = () => {
  return (
    <div className='skills'>
      <div className=' p-3 relative left-[26.5vw] top-[6vh] w-[60vw] min-h-[30vh] border rounded-[10px] bg-[rgba(255,255,255,0.4)]'>
      <div className='text-black text-[24px]'>SKILLS LEARNT . . .</div>
        <div className='flex flex-wrap w-[50vw] rounded-[5px] gap-16 justify-around relative top-10'>
          <li className='bg-white rounded-[50%] w-14 h-14 flex justify-center items-center'><img src="../images/html.svg" alt=""/></li>        
          <li className='bg-white rounded-[50%] w-14 h-14 flex justify-center items-center'><img src="../images/css.svg" alt=""/></li>
          <li className='bg-white rounded-[10%] w-14 h-14 flex justify-center items-center'><img className='w-[300px]' src="../images/js.svg" alt=""/></li>
          <li className='bg-white rounded-[50%] w-14 h-14 flex justify-center items-center'><img src="../images/c.svg" alt=""/></li>
          <li className='bg-white rounded-[50%] w-14 h-14 flex justify-center items-center'><img src="../images/c++.svg" alt=""/></li>
          <li className='bg-white rounded-[50%] w-14 h-14 flex justify-center items-center'><img src="../images/rust.svg" className='w-[300px]' alt=""/></li>
        </div>
      </div>
    </div>
  )
}

export default Skills;
