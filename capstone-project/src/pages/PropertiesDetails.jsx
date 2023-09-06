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
          <div className="grid grid-cols-1 w-96 " >
          <img className="mt-2 rounded-lg  " w src={propertyDetails.image2} alt="" />
          <img  src={propertyDetails.image3} alt="" />
          <img  src={propertyDetails.image4} alt="" />
          </div>
          
          <div>
          <img className="rounded-lg w-96 "  src={propertyDetails.image5} alt="" />
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
<img className="rounded-lg w-96 " src={propertyDetails.image23} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image24} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image25} alt="" />
</div>

<div>
<img className="rounded-lg w-96 " src={propertyDetails.image25} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image26} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image27} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image28} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image29} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image30} alt="" />
</div>

<div>
<img className="rounded-lg w-96 " src={propertyDetails.image31} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image32} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image33} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image34} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image35} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image36} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image37} alt="" />
<p>{propertyDetails.Details}</p>

<div>
<img className="rounded-lg w-96 " src={propertyDetails.image38} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image39} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image40} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image41} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image42} alt="" />
</div>

<div>
<img className="mt-2 rounded-lg w-96 " w src={propertyDetails.image43} alt="" />
<img className="mt-2 rounded-lg w-96 " w src={propertyDetails.image44} alt="" />
<img className="mt-2 rounded-lg w-96 " w src={propertyDetails.image45} alt="" />
<img className="mt-2 rounded-lg w-96 " w src={propertyDetails.image46} alt="" />
<img className="mt-2 rounded-lg w-96 " w src={propertyDetails.image47} alt="" />
</div>

</div>
          <h2 className="text-lg font-semibold">{propertyDetails.name}</h2>
          <p className="text-gray-500">{propertyDetails.location}</p>
        </div>
      )}
    </div>
  );
};

export default PropertiesDetails;
