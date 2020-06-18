import React from "react";

const ImageCard = ({ image }) => {
 const tags = image.tags.split(",");

 return (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
   <a href={image.largeImageURL}>
    <img src={image.webformatURL} alt="img must be here" className="w-full" />
   </a>

   <div className="px-6 py-4">
    <div class="flex items-center">
     <img
      class="w-10 h-10 rounded-full mr-4"
      src={image.userImageURL}
      alt="Avatar "
     />
     <div class="text-sm">
      <p class="text-yellow-600 text-bold">Photo By</p>
      <p class="text-gray-400 leading-none">{image.user}</p>
     </div>
    </div>
   </div>

   <div className="px-6 py4 ">
    <ul>
     <li className="inline-block mr-12 text-gray-400 text-center">
      <strong>
       {" "}
       <i className="fa fa-eye text-yellow-600"></i>{" "}
      </strong>
      <br />
      {image.views}
     </li>
     <li className="inline-block mr-12 text-gray-400 text-center">
      <strong>
       {" "}
       <i className="fa fa-download text-yellow-600"></i>{" "}
      </strong>
      <br />
      {image.downloads}
     </li>
     <li className="inline-block mr-8 text-gray-400 text-center">
      <strong>
       <i className="fa fa-thumbs-up text-yellow-600"></i>
      </strong>
      <br />
      {image.likes}
     </li>
    </ul>
   </div>

   <div className="px-6 py-4">
    {tags.map((tag, index) => (
     <span
      key={index}
      className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2"
     >
      #{tag}
     </span>
    ))}
   </div>
  </div>
 );
};

export default ImageCard;
