import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { properties } from "./Property";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BounceLoader } from "react-spinners";

const ImageGallery = ({ images }) => (
  <div>
  <Carousel>
    {images.map((image, index) => (
      <div key={index} className="h-[60%] md:h-[70%] lg:h-[80%]">
        <img src={image} alt={`Image ${index + 1}`} />
      </div>
    ))}
  </Carousel>
</div>
);

const PropertiesDetails = () => {
  const { id } = useParams();
  const propertyDetails = properties.find(
    (property) => property.id === parseInt(id)
  );
  const navigate = useNavigate();

  const whatsapp = () => {
    navigate("/Contact");
  };

  const [isLoading, setIsLoading] = useState(true);
  const loadingColor = "#000"; // Change this to your desired color

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when data is available
    }, 3000); // Adjust the timeout duration as needed
  }, []);

  const loadingSpinner = (
    <div className="flex justify-center items-center h-[60vh]">
      <BounceLoader color={loadingColor} loading={isLoading} size={100} />
    </div>
  );

  return (
    <div className="bg-white rounded-lg overflow-x-hidden">
      {isLoading
        ? loadingSpinner
        : propertyDetails && (
            <div>
              <div className="mt-6 flex gap-3">
                <ImageGallery
                  images={[
                    propertyDetails.image,
                    propertyDetails.image2,
                    propertyDetails.image3,
                    propertyDetails.image4,
                  ]}
                  information={propertyDetails.information}
                />
              </div>
              <div className="p-8 flex flex-col">
                <h2 className="text-lg font-semibold">
                  {propertyDetails.name}
                </h2>
                <p className="text-gray-500">{propertyDetails.location}</p>
                <p>{propertyDetails.information}</p>
                <div style={{ backgroundColor: "rgb(43, 21, 21)", width: "50vw", display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="bg-black text-white self-center mt-8 p-4 rounded-md w-48 mx-auto">
                  <button onClick={whatsapp}>
                    Click to reach us for more information
                  </button>
                </div>
              </div>
            </div>
          )}
    </div>
  );
};

export default PropertiesDetails;
