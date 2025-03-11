import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import { Divider } from "@mantine/core";

const Footer = () => {
  return ( 
    <footer className="bg-[#0d0c1d] text-gray-300 py-10 px-5">

    <Divider className=" px-7 py-7 " color='#2d2d2d'  size="sm"  />

      {/* <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"> */}
      <div className=" mx-auto flex gap-8">

        {/* Left Section - About */}
        <div className="w-1/2">
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg font-semibold text-white">TECHVISTRA</h2>
          <p className="text-sm mt-3 py-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem adipisci blanditiis repellat reiciendis error aspernatur velit incidunt molestias a ab laborum assumenda ratione labore reprehenderit distinctio magnam, cumque dignissimos consectetur natus nesciunt laudantium quaerat eaque. Magni quis et magnam fuga reprehenderit exercitationem ipsam facere placeat numquam, dignissimos voluptate sequi! Nam.
          </p>

          {/* Subscription Form */}
          <div className="mt-4">
            <h3 className="text-sm font-medium">Get the latest updates from TechVistra</h3>

            <div className="flex items-center py-2">
                <div className="flex h-10 items-center bg-gradient-to-r from-[#A9A9D2] to-[#C4C4DE] rounded-full  mx-auto">
                <input
                    type="email"
                    placeholder="Email address"
                    className="bg-transparent flex-1 px-4 py-2 outline-none text-black placeholder-black"
                />
                <button className="font-bold px-6 py-2 text-black">Subscribe</button>
                </div>

                <div className="flex gap-3">
                    <div> <FontAwesomeIcon size='xl' icon={faFacebook}/> </div>
                    <div> <FontAwesomeIcon size='xl' icon={faInstagram}/> </div>
                    <div> <FontAwesomeIcon size='xl' icon={faTwitter }/> </div>
                </div>
            </div>
            

          </div>
        </div>
        </div>


        {/* Middle Section - Services */}
        <div className="w-1/5">
        <div className="">
          <h3 className="text-lg font-semibold text-white">Our Services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Custom Software Development</li>
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>Cybersecurity Solutions</li>
            <li>UI/UX Design</li>
            <li>Software Integration</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>
        </div>
        

        {/* Right Section - Company */}
        <div>
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>


      {/* Bottom Section */}
      <Divider className=" mx-7 my-7 " color='#2d2d2d'  size="sm"  />

      <div className=" flex text-center text-sm  pt-2 max-w-lg mx-auto">
        <div>
            <img className="w-16 h-16 " src="/Image/hand.png" alt="" />
        </div>
        <div>
        <p>
          Copyright &copy; 2025 TECHVISTRA SOFTWARE SOLUTIONS LLP. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Legal Notice DMCA</a> |
          <a href="#" className="hover:text-white">Terms of Service</a> |
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
