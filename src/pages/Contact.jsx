import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className=' text-[18px] w-[60vw] min-h-[40vh] bg-[rgba(0,0,0,0.2)] rounded-[10px] relative top-[15vh] left-[20vw] p-8 space-y-3 flex flex-col'>
        <div className='text-white text-[24px]'>CONNECT WITH ME THROUGH . . .</div>
        <div className='flex w-[50vw] rounded-[5px] gap-16 justify-around relative top-10'>
         <a className='bg-white rounded-[50%] w-14 h-14 flex justify-center' href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLBtwqHbqQBMxKLHWmmTZtzxglkNNbZZBtcPKSQKzDWWdMBRmTsmNJCKHwWGbmQNQBXjGV'><img src="../images/gmail.svg" alt=""/></a>        
        <a className='bg-white rounded-[50%] w-14 h-14 flex justify-center' href="https://github.com/atleet987"><img src="../images/github.svg" alt=""/></a>
        <a className='bg-white rounded-[50%] w-14 h-14 flex justify-center' href="https://www.facebook.com/profile.php?id=61552006975408"><img src="../images/fb.svg" alt=""/></a>
        <a className='bg-white rounded-[10%] w-14 h-14 flex justify-center' href="https://www.linkedin.com/in/abhay-tripathi-5733b7293/"><img src="../images/linkedin.svg" alt=""/></a>
        <a className='bg-white rounded-[10%] w-14 h-14 flex justify-center' href="https://www.instagram.com/abhaytripathi122/"><img src="../images/insta.png" alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
