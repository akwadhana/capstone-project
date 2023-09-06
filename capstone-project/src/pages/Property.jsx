import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
// import picture1 from "../photos/pexels-ilya-shakir-2440471.jpg";
// import picture2 from "../photos/pexels-curtis-adams-8031899.jpg"

const detail= [
    { deal: "Luxury Mansion, 5 Bedroom Fully Detached House, all Rooms are Ensuite + 1 Guest Room downstairs.It has a stand alone Self-Contained Boys Quarters, One stand alone Laundry room, Well fitted Kitchen fully equipped with all kitchen appliances,2 Pantries,Large Sitting area plus a Family Lounge upstairs.Large Walk-in Closet, and Box room.Location: Yaba Lagos Price: NGN75Million Features - All Rooms Ensuite- Fitted Kitchen- 24 Hours Security- Interlocked Floor- Water Heater- Elevator- BQ- Pop"},

    { deal: "Full DescriptionHouse for sale Ebute Metta Yaba Lagos selling for ₦40,000,000. See property details on PropertyPro.ng or browse all our range of properties in Ebute Metta Yaba Lagos House for sale in Ebute Metta Yaba Lagos Buy House for sale 2 bedroom apartment in Ebute Metta Yaba Lagos is a House. ✓ Real-time photos. Contact now for quick details on 2 bedroom apartmentThere is 2 bedroom apartment in a good location of Ebute metta close to Yaba. Mini flat available in the same compound at the rate of 28m"},

    { deal: "5 bedroom House for sale Off Oduduwa Way, Ikeja GRA Ikeja Lagos selling for ₦320,000,000. See property details on PropertyPro.ng or browse all our range of properties in Ikeja GRA Ikeja Lagos5 bedroom House for sale in Ikeja GRA Ikeja Lagos Buy 5 bedroom House for sale 5BED DETACHED DUPLEX+ BQ!!! in Ikeja GRA Ikeja Lagos is a House. ✓ Real-time photos. Contact now for quick details on 5BED DETACHED DUPLEX+ BQ!!!FOR SALE!!! LUXURY BUILT & TASTEFULLY FINISHED 5 BEDROOM DETACHED DUPLEX+ BQ!!! FEATURES: A ROOM BQ ALL ROOMS ENSUITE+ GUEST TOILET BEAUTIFUL P.O.P FINISHINGS SCREEDED WALL ALL ROUND POLISH TILES KITCHEN FITTED WITH CABINETS CCTV SURVEILLANCE CINEMA SWIMMING POOL AREA FENCED GATED+ CAR PARK IN A SERENE/HIGHLY SECURED ESTATE... LOCATION:OFF ODUDUWA WAY,IKEJA GRA LAGOS... TITLE:CERTIFICATE OF OCCUPANCY... PRICE:320MILLION..."},

    { deal: " 4 bedroom House for sale Okupe Estate, Maryland Lagos selling for ₦100,000,000. See property details on PropertyPro.ng or browse all our range of properties in Maryland Lagos4 bedroom House for sale in Maryland Lagos Buy 4 bedroom House for sale 4BED TERRACE DUPLEXES!!! in Maryland Lagos is a House. ✓ Real-time photos. Contact now for quick details on 4BED TERRACE DUPLEXES!!! FOR SALE!!!"},

    { deal: "4 bedroom House for sale Newly Built Contemporary 4 Bedroom Semi Detached Duplex With Bq, Ologolo Lekki Lagos selling for ₦95,000,000. See property details on PropertyPro.ng or browse all our range of properties in Ologolo Lekki Lagos4 bedroom House for sale in Ologolo Lekki Lagos Buy 4 bedroom House for sale 4 bedroom semi detached duplex in Ologolo Lekki Lagos is a House. ✓ Real-time photos. Contact now for quick details on 4 bedroom semi detached duplex Newly built, exquisitely designed 4 bedroom semi detached duplex with Bq, fully fitted kitchen, all rooms en-suite, spacious bedrooms and living room, spacious compound, CCTV and a lot more.Location: Ologolo, LekkiNB: This property and also several other properties are available, please feel free to contact us with your specifications, Thank you. "},

    { deal: " "},

    { deal: " "},

    { deal: " "},

    { deal: " "},
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
  pic:  "https://images.propertypro.ng/large/tastefully-built-5-bedroom-duplex-sWpdK08O8IBEnO0D7epp.jpeg"
},
{
  pic:  "https://images.propertypro.ng/large/tastefully-built-5-bedroom-duplex-A58B6Q7Vl6AFie4FGKE3.jpeg"
},
{
  pic:  "https://images.propertypro.ng/large/tastefully-built-5-bedroom-duplex-qNL8Ct8lwOFAsyAJeRue.jpe"
},
{
  pic:  "https://images.propertypro.ng/large/tastefully-built-5-bedroom-duplex-tbJfddK7zPuKFUPkdbJt.jpeg"
},
{
  pic:  "https://images.propertypro.ng/large/tastefully-built-5-bedroom-duplex-3f9PGKpx5bNzF7wxR1Ej.jpeg"
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
  pic: "https://images.propertypro.ng/large/new-2bedroom-flat-apartment-MsUrZCsxgN1E4x3wDWFk.jpg"
},
{
  pic: "https://images.propertypro.ng/large/new-2bedroom-flat-apartment-hJBLCQIrinukGo3rAolx.jpg"
},
{
  pic: "https://images.propertypro.ng/large/new-2bedroom-flat-apartment-iRTsPnWX8hErkByTUV8O.jpg"
},
{
  pic: "https://images.propertypro.ng/large/new-2bedroom-flat-apartment-2iqLBmCIyemXzxMTpo87.jpg"
},
{
  pic: "https://images.propertypro.ng/large/FzSsy-newly-built-4bedroom-terraced-duplex-plus-a-room-bq-cvJbxEL7kB6oyx4PjyfH.jpg"
},
{
  pic: "https://images.propertypro.ng/large/Cc2i0-newly-built-4bedroom-terraced-duplex-plus-a-room-bq-aNyP8Tj5GKo8mrjpEHtP.jpg"
},
{
  pic: "https://images.propertypro.ng/large/Hs2HE-newly-built-4bedroom-terraced-duplex-plus-a-room-bq-w1cX1HYZNgECqYwdZ0b0.jpg"
},

{
  pic: "https://images.propertypro.ng/large/QvJYZ-newly-built-4bedroom-terraced-duplex-plus-a-room-bq-qec9ykAwT1tkxewdzpGu.jpg"
},

{
  pic: "https://images.propertypro.ng/large/giTFP-newly-built-4bedroom-terraced-duplex-plus-a-room-bq-zUpVtJGRjHnduJ2IfcjD.jpg"
},

{
  pic: "https://images.propertypro.ng/large/QpFKS-newly-built-4bedroom-terraced-duplex-plus-a-room-bq-Gws570VNNpgYmNHr980n.jpg"
},

{
  pic: "https://images.propertypro.ng/large/luxury-built-5bed-detached-duplex-bq-qQB3jN1sLeKbFvhCxbAO.jpg"
},

{
  pic: "https://images.propertypro.ng/large/luxury-built-5bed-detached-duplex-bq-71E2SqZwpFfZoZuKx7XH.jpg"
},

{
  pic: "https://images.propertypro.ng/large/luxury-built-5bed-detached-duplex-bq-D7euL2eKeQqJycz8ijXc.jpg"
},

{
  pic: "https://images.propertypro.ng/large/luxury-built-5bed-detached-duplex-bq-fwr5WnmPkBzPIdhDCSef.jpg"
},

{
  pic: "https://images.propertypro.ng/large/luxury-built-5bed-detached-duplex-bq-9dMiXY7fNivWq0Zz3D9H.jpg"
},

{
  pic: "https://images.propertypro.ng/large/luxury-built-5bed-detached-duplex-bq-1VzQc2zO9BQlVK1jnYeo.jpg"
},
{
  pic: "https://images.propertypro.ng/large/luxury-built-5bed-detached-duplex-bq-XkEhY63ENk9eD5rBfAPv.jpg"
},
{
  pic: "https://images.propertypro.ng/large/luxury-built-5bed-detached-duplex-bq-g24S1qFcZRfWPnkxa0c4.jpg"
},
{
  pic: "https://images.propertypro.ng/large/4bed-terrace-duplexes-EZHrV3jookwYxE4s34aJ.jpg"
},
{
  pic: "https://images.propertypro.ng/large/4bed-terrace-duplexes-PfRaEi5SJZuJXtznwp2p.jpg"
},
{
  pic: "https://images.propertypro.ng/large/4bed-terrace-duplexes-2fuhiAhu904g7meXNwAL.jpg"
},
{
  pic: "https://images.propertypro.ng/large/4bed-terrace-duplexes-oye8vSD2o17I1udcXnvf.jpg"
},
{
  pic: "https://images.propertypro.ng/large/4bed-terrace-duplexes-JVmz5FHPfKoLIYZMmJZb.jpg"
},
{
  pic: "https://images.propertypro.ng/large/4bed-terrace-duplexes-kZvuUomLfZaBJOgL8JX7.jpg"
},

{
    pic:"https://images.propertypro.ng/large/4-bedroom-semi-detached-duplex-mDgqYOMQxIxdZuQ8mikc.jpg"
},

{
    pic:"https://images.propertypro.ng/large/4-bedroom-semi-detached-duplex-YqviyFenP8idKVOzaNfj.jpg"
},

{
    pic:"https://images.propertypro.ng/large/4-bedroom-semi-detached-duplex-DX9lsbGJ3KJAMiUQhOix.jpg"
},

{
    pic:"https://images.propertypro.ng/large/4-bedroom-semi-detached-duplex-9mR9BP3Qp09n5o4si67J.jpg"
},

{
    pic:"https://images.propertypro.ng/large/4-bedroom-semi-detached-duplex-ALVrqLe3srZ0Tsy0ZmPG.jpg"
},

{
    pic:"https://images.propertypro.ng/large/4-bedroom-semi-detached-duplex-pm5ghAtXzOpS9IB9s6K2.jpg"
},

{
    pic:""
},


]





export const properties = [

  {
    id: 1,
    name: "2BedRoom Apartment",
    image: img[0].pic,
    image2:img[1].pic ,
    image3:img[2].pic ,
    image4:img[3].pic ,
   
    location: "ikoyi",
  },
  {
    id: 2,
    name: "property3",
    image:  img[4].pic ,
    image5: img[5].pic,
    image6: img[6].pic,
    image7: img[7].pic,
    image8: img[8].pic,
    location: "IKORODU",
  },
  {
    id: 3,
    name: "property4",
    image: img[9].pic,
    image10: img[10].pic,
    image11: img[11].pic,
    image12: img[12].pic,
    image13: img[13].pic,
    location: "ILUPEJU",
    // Details: detail[0].deal

  },
  {
    id: 4,
    name: "property5",
    image: img[14].pic,
    image15: img[15].pic,
    image16: img[16].pic,
    image17: img[17].pic,
    location: "VICTORIA ISLAND",
  },
  {
    id: 5,
    name: "property6",
    image: img[18].pic,
    image18: img[19].pic,
    image19: img[20].pic,
    image20: img[21].pic,
    image21: img[22].pic,
    // image22: img[23].pic,
//  Details: detail[1].deal,
    location: "YABA",
  },
  {
    id: 6,
    name: "property7",
    image: img[23].pic,
    image22: img[24].pic,
    image23: img[25].pic,
    image24: img[26].pic,
    image25: img[27].pic,
    location: "EBUTE-METTA",
  },
  {
    id: 7,
    name: "property8",
    image: img[28].pic,
    image26: img[29].pic,
    image27: img[30].pic,
    image28: img[31].pic,
    image29: img[32].pic,
    image30: img[33].pic,
    location: "SURULERE",
  },
  {
    id: 8,
    name: "property9",
    image: img[34].pic,
    image31: img[35].pic,
    image32: img[36].pic,
    image33: img[37].pic,
    image34: img[38].pic,
    image35: img[39].pic,
    image36: img[40].pic,
    image37: img[41].pic,
    // Details: detail[2].deal,
    location: "IKEJA",
  },
  {
    id: 9,
    name: "property10",
    image: img[42].pic,
    image38: img[43].pic,
    image39: img[44].pic,
    image40: img[45].pic,
    image41: img[46].pic,
    image42: img[47].pic,
    
    location: "MARYLAND",
  },

  {
    id: 10,
    name: "2Bedroom flat",
    image: img[48].pic,
    image43: img[49].pic,
    image44: img[50].pic,
    image45: img[51].pic,
    image46: img[52].pic,
    image47: img[53].pic,
    location: "LEKKI",
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