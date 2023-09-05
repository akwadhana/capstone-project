import React from "react";
import { useParams } from "react-router-dom";
import { properties } from "./Property";

const PropertiesDetails = ({ property }) => {
  const { id } = useParams();
  const propertyDetails = properties.find(
    (property) => property.id === parseInt(id)
  );

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      {propertyDetails && (
        <div>
           <img className="mt-2 rounded-lg w-96 " w src={propertyDetails.image1} alt="" />
          <div className="grid grid-cols-1 w-96 " >
          <img className="mt-2 rounded-lg  " w src={propertyDetails.image2} alt="" />
          <img  src={propertyDetails.image5} alt="" />
          <img  src={propertyDetails.image3} alt="" />
          <img  src={propertyDetails.image4} alt="" />
         
          </div>
          
          <div>
          <img className="rounded-lg w-96 " src={propertyDetails.image6} alt="" />
          <img className="rounded-lg w-96 " src={propertyDetails.image7} alt="" />
          <img className="rounded-lg w-96 " src={propertyDetails.image8} alt="" />
       
          </div>
      <div>
      <img className="rounded-lg w-96 " src={propertyDetails.image10} alt="" />
      <img className="rounded-lg w-96 " src={propertyDetails.image11} alt="" />
      <img className="rounded-lg w-96 " src={propertyDetails.image12} alt="" />
      <img className="rounded-lg w-96 " src={propertyDetails.image13} alt="" />
      <p>{propertyDetails.Details}</p>
      </div>
<div>
<img className="rounded-lg w-96 " src={propertyDetails.image15} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image16} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image17} alt="" />
</div>

<div>
<img className="rounded-lg w-60 " src={propertyDetails.image18} alt="" />
<img className="rounded-lg w-60 " src={propertyDetails.image19} alt="" />
<img className="rounded-lg w-60" src={propertyDetails.image20} alt="" />
<img className="rounded-lg w-60 " src={propertyDetails.image21} alt="" />
</div>

<div>
<img className="rounded-lg w-96 " src={propertyDetails.image22} alt="" />
</div>

          <h2 className="text-lg font-semibold">{propertyDetails.name}</h2>
          <p className="text-gray-500">{propertyDetails.location}</p>
        </div>
      )}
    </div>
  );
};

export default PropertiesDetails;
