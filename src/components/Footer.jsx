import React from 'react'
import Navigation from './Navigation';
import Socialmedia from './Socialmedia';
import { company } from '../data/data';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    
    <footer className="border-t pb-8 text-sm">
    <div className="container mx-auto flex w-2/3 py-16">
      <div className="w-1/4 flex flex-col leading-7">
        <strong className="text-lg mb-6">Office Address</strong>
        <div className="mb-4 flex flex-col text-sm">
          <span>Address</span>
          <strong>{company.address}</strong>
        </div>
        <div className="mb-4 flex flex-col text-sm">
          <span>Branch:</span>
          <span className="mb-3">
            {company.cityoffice}
          </span>
          <span>W. Gray St. Utica, Pennsylvania 57867</span>
        </div>
      </div>
      <div className="w-1/4">
        <div className="mb-6">
          <strong className="text-lg ">Contact Seller</strong>
        </div>

       

        <div className="item flex items-center text-sm pb-8">
          <div className="">
            <img src="./src/assets/call.png" className="w-12" alt="" />
          </div>
          <div className="content flex flex-col ms-4">
            <span>Darrell Steward</span>
            <strong>{company.phone} </strong>
          </div>
        </div>

        <div className="item flex items-center">
          <div className="">
            <img src="./src/assets/email.png" className="w-12" alt="" />
          </div>
          <div className="content flex flex-col ms-4">
            <span>Email:</span>
            <span>{company.email}</span>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <div className="mb-6">
          <strong className="text-lg ">Contact Seller</strong>
        </div>
        <ul className="gap-2 flex flex-col">
          <li>Property for Sale</li>
          <li>About Us</li>
          <li>Our Agents</li>
        </ul>
      </div>
      <div className="w-1/4">
        <strong>Newsletter</strong>
        <p>Sign up to receive the latest articles</p>

        <input type="text" placeholder="Your Email Address" />
        <br />
        <button>Submit</button>
        <br />
      </div>
    </div>
    <div className="border-y py-8">
      <div className="container mx-auto flex justify-between w-2/3 ">
        <div className="flogo">
          <a href="/"><img src={company.logo} width="190px" alt={company.name} /></a>
        </div>
        <div className="flex items-center gap-16">
          
          <div className="fmenu text-lg font-bold">
            <Navigation />
          </div>
          <Socialmedia />
        </div>
      </div>
    </div>

    <div className="pt-8">
      <div className="container mx-auto w-2/3 ">
        <div className="copyright text-center">
          Copyright &copy; {year} Real estate CP. Designed & Developed by
          Themesflat
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer