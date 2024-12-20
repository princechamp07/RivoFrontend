import React from 'react'

const Footer = () => {
  return (
    <div>
           <footer className="bg-green-800">
    <div className="px-10 md:flex md:justify-evenly py-12">
        <div className="text-white flex-row my-4 space-y-4">
        <div className="font-bold text-4xl font-serif">Rivo</div>
        <div className="font-semibold">Social Media</div>
        <div  className="flex space-x-4"> <i className="fa fa-facebook-square text-3xl " aria-hidden="true"></i><i className="fa fa-twitter text-3xl " aria-hidden="true"></i><i className="fa fa-instagram text-3xl" aria-hidden="true"></i></div>
    </div>
    <div className="text-white flex-row my-4 space-y-4 text-lg font-serif">
        <div className="font-bold">SHOP</div>
        <div>Products</div>
        <div>Overview</div>
        <div>Pricing</div>
        <div>Releases</div>
    </div>
    <div className="text-white flex-row my-4 space-y-4 text-lg font-serif">
        <div className="font-bold">COMPANY</div>
        <div>About Us</div>
        <div>Contact</div>
        <div>News</div>
        <div>Support</div>
    </div>
    <div className="text-white text-lg font-serif">
        <div className="font-semibold">STAY UP TO DATE</div>
        <div className="md:flex"><input type="email" placeholder="Enter your email" className="py-2 px-4 bg-green-800 border-blue-300 border-2"/><button className="font-bold mt-2 md:mt-0 bg-blue-300 px-4 py-2 border-2 border-blue-300 text-green-800 ">SUBMIT</button></div>
    </div>
</div>
<div className="md:flex justify-center ">
    <div className="text-blue-300 font-bold mx-4 my-10 border-t-2 border-blue-300 md:w-1/2" ></div>
    <div className="text-white flex my-6 font-bold space-x-4 justify-center text-lg font-serif">
        <div>Terms</div>
        <div>Privacy</div>
        <div>Cookies</div>
        
    </div>
</div>
    </footer>
    </div>
  )
}

export default Footer