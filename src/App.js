import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
 const [images, setImages] = useState([]);
 const [isLoading, setIsLoadind] = useState(true);
 const [term, setTerm] = useState("");

 useEffect(() => {
  fetch(
   `https://pixabay.com/api/?key=15280412-57dcd2b9561712fc321d8e39d&q=${term}&image_type=photo&pretty=true`
  )
   .then((res) => res.json())
   .then((data) => {
    setImages(data.hits);
    setIsLoadind(false);
   })
   .catch((err) => console.log(err));
 }, [term]);

 return (
  <div className=" bg-teal-900 pl-12">
   <ImageSearch searchText={(text) => setTerm(text)} />

   {!isLoading && images.length === 0 && (
    <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
   )}

   {isLoading ? (
    <h1 className="text-6xl text-center mx-auto mt-32">LOADING....</h1>
   ) : (
    <div className="grid grid-cols-3 gap-4">
     {images.map((image) => (
      <ImageCard key={image.id} image={image} />
     ))}
    </div>
   )}

  </div>
 );
}

export default App;
