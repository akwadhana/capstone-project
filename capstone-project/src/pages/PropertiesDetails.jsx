import React from "react";
import { useParams } from "react-router-dom";
import { properties } from "./Property";

const PropertiesDetails = ({ property }) => {
  const { id } = useParams();
  const propertyDetails = properties.find(
    (property) => property.id === parseInt(id)
  );

  return (
    <div className=" bg-white p-4 shadow-md rounded-lg">
      {propertyDetails && (
        <div >
          <div>
          <div className="w-96 flex gap-3 ">
          <img className="rounded-lg"  src={propertyDetails.image2} alt="" />
          <img className="rounded-lg "  src={propertyDetails.image3} alt="" />
          <img className="rounded-lg "  src={propertyDetails.image4} alt="" />
          </div>
          <div>
          <p className="mt-4 ">{propertyDetails.information}</p>
          </div>
          </div>
        
          <div>
          <div className="w-60 flex gap-5 ">
          <img className="rounded-lg "  src={propertyDetails.image5} alt="" />
          <img className="rounded-lg " src={propertyDetails.image6} alt="" />
          <img className="rounded-lg " src={propertyDetails.image7} alt="" />
          <img className="rounded-lg " src={propertyDetails.image8} alt="" />
          </div>
          <div>
          <p className="mt-4 ">{propertyDetails.information2}</p>
          </div>
          </div>

         <div>
      <div className=" w-40 flex gap-5">
      <img className="rounded-lg  " src={propertyDetails.image10} alt="" />
      <img className="rounded-lg  " src={propertyDetails.image11} alt="" />
      <img className="rounded-lg  " src={propertyDetails.image12} alt="" />
      <img className="rounded-lg  " src={propertyDetails.image13} alt="" />
      <div>
         <p className="mt-4 ">{propertyDetails.information3}</p>
      </div>
      </div>
      </div>
      <div>
        
<div className=" w-60 flex gap-5">
<img className="rounded-lg " src={propertyDetails.image15} alt="" />
<img className="rounded-lg " src={propertyDetails.image16} alt="" />
<img className="rounded-lg " src={propertyDetails.image17} alt="" />
</div>
<div>
<p className="mt-4 ">{propertyDetails.Detail}</p>
</div>
</div>
<div>

<div>
<div className=" w-60 flex gap-5">
<img className="rounded-lg  " src={propertyDetails.image18} alt="" />
<img className="rounded-lg   " src={propertyDetails.image19} alt="" />
<img className="rounded-lg  " src={propertyDetails.image20} alt="" />
<img className="rounded-lg   " src={propertyDetails.image21} alt="" />
</div>
<div>
<p className="mt-4 ">{propertyDetails.Detail}</p>
</div>
</div>
<div>
<p className="mt-4 ">{propertyDetails.Detail}</p>
</div>
</div>

<div>
<div className=" w-60 flex gap-5">
<img className="rounded-lg " src={propertyDetails.image22} alt="" />
<img className="rounded-lg w-96 " src={propertyDetails.image23} alt="" />
<img className="rounded-lg " src={propertyDetails.image24} alt="" />
<img className="rounded-lg " src={propertyDetails.image25} alt="" />
</div>
<div>
<p className="mt-4 ">{propertyDetails.Detail}</p>
</div>
</div>

<div>

<div className=" w-60 flex gap-5">
<img className="rounded-lg " src={propertyDetails.image26} alt="" />
<img className="rounded-lg " src={propertyDetails.image27} alt="" />
<img className="rounded-lg " src={propertyDetails.image28} alt="" />
<img className="rounded-lg " src={propertyDetails.image29} alt="" />
<img className="rounded-lg " src={propertyDetails.image30} alt="" />
</div>
<div>
<p className="mt-4 ">{propertyDetails.Detail}</p>
</div>
</div>

<div>

<div className=" w-60 flex gap-5">
<img className="rounded-lg " src={propertyDetails.image31} alt="" />
<img className="rounded-lg " src={propertyDetails.image32} alt="" />
<img className="rounded-lg " src={propertyDetails.image33} alt="" />
<img className="rounded-lg " src={propertyDetails.image34} alt="" />
<img className="rounded-lg " src={propertyDetails.image35} alt="" />
<img className="rounded-lg " src={propertyDetails.image36} alt="" />
<img className="rounded-lg " src={propertyDetails.image37} alt="" />
</div>
<div>
<p className="mt-4 ">{propertyDetails.Detail}</p>
</div>
</div>

<div>

<div className=" w-60 flex gap-5">
<img className="rounded-lg " src={propertyDetails.image38} alt="" />
<img className="rounded-lg " src={propertyDetails.image39} alt="" />
<img className="rounded-lg " src={propertyDetails.image40} alt="" />
<img className="rounded-lg " src={propertyDetails.image41} alt="" />
<img className="rounded-lg " src={propertyDetails.image42} alt="" />
</div>
<div>
<p className="mt-4 ">{propertyDetails.Detail}</p>
</div>
</div>

<div>

<div className="flex w-60 gap-5">
<img className="mt-2 rounded-lg "  src={propertyDetails.image43} alt="" />
<img className="mt-2 rounded-lg "  src={propertyDetails.image44} alt="" />
<img className="mt-2 rounded-lg "  src={propertyDetails.image45} alt="" />
<img className="mt-2 rounded-lg "  src={propertyDetails.image46} alt="" />
<img className="mt-2 rounded-lg "  src={propertyDetails.image47} alt="" />
</div>
<div>
<p className="mt-4 ">{propertyDetails.Detail}</p>
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
