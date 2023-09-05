import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import picture1 from "../photos/pexels-ilya-shakir-2440471.jpg";
import picture2 from "../photos/pexels-curtis-adams-8031899.jpg"

const detail= [
    { deal: "Luxury Mansion, 5 Bedroom Fully Detached House, all Rooms are Ensuite + 1 Guest Room downstairs.It has a stand alone Self-Contained Boys Quarters, One stand alone Laundry room, Well fitted Kitchen fully equipped with all kitchen appliances,2 Pantries,Large Sitting area plus a Family Lounge upstairs.Large Walk-in Closet, and Box room.Location: Yaba Lagos Price: NGN75Million Features - All Rooms Ensuite- Fitted Kitchen- 24 Hours Security- Interlocked Floor- Water Heater- Elevator- BQ- Pop"},

    { deal: ""},

    { deal: ""},

    { deal: " "},
]




const img=[
{
  pic:  "https://www.houseanddecors.com/wp-content/uploads/2018/08/Modern-house1-678x381.jpg"
},
{
  pic:  "https://www.houseanddecors.com/wp-content/uploads/2018/08/Modern-house2.jpg"
},
{
  pic:  "https://www.houseanddecors.com/wp-content/uploads/2018/08/Modern-house5.jpg"
},
{
  pic:  "https://www.houseanddecors.com/wp-content/uploads/2018/08/Modern-house6.jpg"
},
{
  pic:  "https://kaanproperties.com/wp-content/uploads/2020/09/4-Bedroom-Semi-Detached-Duplex-witth-BQ-for-Sale-and-Rent-19-1170x785.jpg"
},
{
  pic:  "https://kaanproperties.com/wp-content/uploads/2020/09/4-Bedroom-Semi-Detached-Duplex-witth-BQ-for-Sale-and-Rent-3-1170x785.jpg"
},
{
  pic:  "https://kaanproperties.com/wp-content/uploads/2020/09/4-Bedroom-Semi-Detached-Duplex-witth-BQ-for-Sale-and-Rent-5-1170x785.jpg"
},
{
  pic:  "https://kaanproperties.com/wp-content/uploads/2020/09/4-Bedroom-Semi-Detached-Duplex-witth-BQ-for-Sale-and-Rent-15.jpg"
},
{
  pic:  "https://kaanproperties.com/wp-content/uploads/2020/09/4-Bedroom-Semi-Detached-Duplex-witth-BQ-for-Sale-and-Rent-12.jpg"
},
{
  pic: "https://kaanproperties.com/wp-content/uploads/2020/09/Luxury-5-Bed-Mansion-for-Rent-in-Lekki-Lagos-5.jpeg"
},
{
  pic: "https://kaanproperties.com/wp-content/uploads/2020/09/Luxury-5-Bed-Mansion-for-Rent-in-Lekki-Lagos-2.jpeg"
},
{
  pic: "https://kaanproperties.com/wp-content/uploads/2020/09/Luxury-5-Bed-Mansion-for-Rent-in-Lekki-Lagos-1.jpeg"
},
{
  pic: "https://kaanproperties.com/wp-content/uploads/2020/09/Luxury-5-Bed-Mansion-for-Rent-in-Lekki-Lagos-4.jpeg"
},
{
  pic: "https://kaanproperties.com/wp-content/uploads/2020/09/Luxury-5-Bed-Mansion-for-Rent-in-Lekki-Lagos-6.jpeg"
},
{
  pic: "https://images.propertypro.ng/large/newly-built-4bed-room-semi-detached-DdwlzU5i44xLjYcS4Piu.jpg"
},
{
  pic: "https://images.propertypro.ng/large/newly-built-4bed-room-semi-detached-2IzWzdCGixWs84VXF7v0.jpg"
},
{
  pic: "https://images.propertypro.ng/large/newly-built-4bed-room-semi-detached-rQACO3gitxHdCBuFhQDr.jpg"
},
{
  pic: "https://images.propertypro.ng/large/newly-built-4bed-room-semi-detached-Kq72OHGMRMwLR3f0JuHJ.jpg"
},
{
  pic: "https://images.propertypro.ng/large/a-luxurious-three-bedrooms-flat-ZjALkYjVadDKC6r24HH5.jpg"
},
{
  pic: "https://images.propertypro.ng/large/a-luxurious-three-bedrooms-flat-for-sale-KbeFGK4AB6DDWe0gknlc.jpg"
},
{
  pic: "https://images.propertypro.ng/large/a-luxurious-three-bedrooms-flat-for-sale-gwEgXJbsHt2Q62V32n0E.jpg"
},
{
  pic: "https://images.propertypro.ng/large/a-luxurious-three-bedrooms-flat-for-sale-68nQYsqetG7TYZsp94I9.jpg"
},
{
  pic: "https://images.propertypro.ng/large/a-luxurious-three-bedrooms-flat-for-sale-Bg0WqBDngKoS0FmyChan.jpg"
},
{
  pic: "https://images.propertypro.ng/large/new-2bedroom-flat-apartment-7DLkWvLYFyPlLyhR1aoZ.jpg"
},
{
  pic: ""
},
{
  pic: ""
},
{
  pic: ""
},
{
  pic: ""
},
{
  pic: ""
},
{
  pic: ""
},
{
  pic: ""
},
{
  pic: ""
},




]





export const properties = [
  {
    id: 1,
    name: "2Bedroom flat",
    image: picture1,
    image1: picture2,
    location: "lEKKI",
  },
  {
    id: 2,
    name: "property2",
    image: img[0].pic,
    image2:img[1].pic ,
    image3:img[2].pic ,
    image4:img[3].pic ,
    image5:img[4].pic ,
    location: "ikoyi",
  },
  {
    id: 3,
    name: "property3",
    image: img[5].pic,
    image6: img[6].pic,
    image7: img[7].pic,
    image8: img[8].pic,
    location: "IKORODU",
  },
  {
    id: 4,
    name: "property4",
    image: img[9].pic,
    image10: img[10].pic,
    image11: img[11].pic,
    image12: img[12].pic,
    image13: img[13].pic,
    location: "ILUPEJU",
    Details: detail[0].deal

  },
  {
    id: 5,
    name: "property5",
    image: img[14].pic,
    image15: img[15].pic,
    image16: img[16].pic,
    image17: img[17].pic,
    location: "VICTORIA ISLAND",
  },
  {
    id: 6,
    name: "property6",
    image: img[18].pic,
    image18: img[19].pic,
    image19: img[20].pic,
    image20: img[21].pic,
    image21: img[22].pic,
    // image22: img[23].pic,
 Details: detail[1].deal,
    location: "YABA",
  },
  {
    id: 7,
    name: "property7",
    image: img[23].pic,
    image22: img[24].pic,
    image23: img[25].pic,
    image24: img[26].pic,
    location: "EBUTE-METTA",
  },
  {
    id: 8,
    name: "property8",
    image: "",
    location: "SURULERE",
  },
  {
    id: 9,
    name: "property9",
    image: "",
    location: "BARIGA",
  },
  {
    id: 10,
    name: "property10",
    image: "",
    location: "LAGOS ISLAND",
  },
];

const Property = ({ onSelectProperty }) => {
    const [selectedProperty, setSelectedProperty] = useState(null);
    const navigate = useNavigate();
  
    const handlePropertyClick = (property) => {
      setSelectedProperty(property);
      navigate(`/property/${property.id}`);
    };
  
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={`bg-white p-4 shadow-md rounded-lg cursor-pointer hover:shadow-xl ${
              selectedProperty === property ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handlePropertyClick(property)}
          >
            <img className="object-cover" src={property.image} alt="" />
          
            
            <h2 className="text-lg font-semibold">{property.name}</h2>
            <p className="text-gray-500">{property.location}</p>

          </div>
        ))}
      </div>
    );
  };
  
  export default Property