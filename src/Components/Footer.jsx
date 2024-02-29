import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#A0E9FF] text-sky-900 p-4">
        <div className="mx-auto text-center">
            <p>Ⓒ 2023 CitySprint India Pvt Ltd. All rights reserved</p>
            <p className="mt-2">Made with ❤️ by JD & Team</p>
            <div className='justify-center flex mx-auto my-2'>
                <img src='src\assets\instagram.png' className='cursor-pointer w-10 h-10 mx-10'/>
                <img src='src\assets\facebook.png' className='cursor-pointer w-10 h-10 mx-10'/>
                <img src='src\assets\twitter.png' className='cursor-pointer w-10 h-10 mx-10'/>
            </div>
        </div>
  </footer>
  )
}

export default Footer