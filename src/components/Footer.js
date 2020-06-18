import React from "react";

const Footer = () => {
 return (
  <div className="bg-teal-200 mt-12 pl-0 ">
   <p className="text-grey ml-12 pt-12 text-semibold text-xl ">
    Image Search <br />
    Pixabay API
   </p>
   <p className="text-grey ml-12 mb-12 text-bold text-2xl">Ben Nyakaz</p>
   <div className="inline-block ml-12">
    <i className="fa fa-github text-yellow-400 mr-4"></i>
    <i className="fa fa-linkedin text-yellow-400 mr-4"></i>
    <i className="fa fa-instagram text-yellow-400 mr-2"></i>
   </div>
  </div>
 );
};

export default Footer;
