import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { properties } from "./Property";
import Button from "../components/Button";

const ImageGallery = ({ images, information }) => (

  <div>
    <div className="w-60 flex gap-5">
      {images.map((image, index) => (
        <img
          key={index}
          className="rounded-lg"
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
    <div>
      <p className="mt-4 ">{information}</p>
    </div>
  </div>
);

const PropertiesDetails = () => {
  const { id } = useParams();
  const propertyDetails = properties.find(
    (property) => property.id === parseInt(id)
  );
const navigate=useNavigate()
  const whatsapp=()=>{
    navigate("/Contact")
  }

  return (
    <div className="bg-white p-4 h-screen rounded-lg">
      {propertyDetails && (
        <div>
          <div className="p-5 flex gap-3">
            <ImageGallery
              images={[
                propertyDetails.image,
                propertyDetails.image2,
                propertyDetails.image3,
                propertyDetails.image4,
                propertyDetails.image5,
              ]}
             
            />   
          </div>

          <h2 className="text-lg font-semibold">{propertyDetails.name}</h2>
          <p className="text-gray-500">{propertyDetails.location}</p>
          <p> {propertyDetails.information}</p>
          <div className="bg-black text-white self-center mt-8 p-4 rounded-md w-48 mx-auto " >
          <button onClick={whatsapp}>click to reach us for more information</button>
          </div>
 
        </div>
      )}
    </div>
  );
};

export default PropertiesDetails;
