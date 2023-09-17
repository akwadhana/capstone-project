import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
// import picture1 from "../photos/pexels-ilya-shakir-2440471.jpg";
// import picture2 from "../photos/pexels-curtis-adams-8031899.jpg"

const detail= [
    { deal: "Brand new and fully serviced waterfront 2Bedroom semidetached duplex with state-of-art facilities and healthy atmosphere for comfortable living in the mojisola onikoyi, off banana island estate road, old ikoyi.This is an urgent sale hence the price is comfortable for prospective buyer. Content from Nigeria Property Centre 200,000 million naira"},


    { deal: "2 bedroom House for sale Ikorodu Lagos selling for ₦70,000,000. See property details on PropertyPro.ng or browse all our range of properties in Ikorodu Lagos4 bedroom House for sale in Ikorodu Lagos Buy 4 bedroom House for sale 4 BEDROOM DETACHED DUPLEX in Ikorodu Lagos is a House. ✓ Real-time photos. Contact now for quick details on 4 BEDROOM DETACHED DUPLEXFOR SALE! "},


    
    { deal: " 4 bedroom House for sale Hu Ilupeju Lagos selling for ₦100,000,000. See property details on PropertyPro.ng or browse all our range of properties in Ilupeju Lagos4 bedroom House for sale in Ilupeju Lagos Buy 4 bedroom House for sale Newly built 4bed room semi detached in Ilupeju Lagos is a House. ✓ Real-time photos. Contact now for quick details on Newly built 4bed room semi detached"},


    { deal: " 3 bedroom House for sale ONIRU Victoria Island Lagos selling for ₦140,000,000. See property details on PropertyPro.ng or browse all our range of properties in ONIRU Victoria Island Lagos3 bedroom House for sale in ONIRU Victoria Island Lagos Buy 3 bedroom House for sale 3 bedroom apartment in ONIRU Victoria Island Lagos is a House. ✓ Real-time photos. Contact now for quick details on 3 bedroom apartment3 Bed| 3 Baths| 4 Toilets| BQ"},


    { deal: "3 bedroom House for sale Alagomeji Yaba Lagos selling for ₦55,000,000. See property details on PropertyPro.ng or browse all our range of properties in Alagomeji Yaba Lagos3 bedroom House for sale in Alagomeji Yaba Lagos Buy 3 bedroom House for sale 3 bedroom flat in Alagomeji Yaba Lagos is a House. ✓ Real-time photos. Contact now for quick details on 3 bedroom flat The property is 3 bedroom flat apartment with each unit with 3car pack and watching machine in a good location. 55m per flat "},


    { deal: "Full DescriptionHouse for sale Ebute Metta Yaba Lagos selling for ₦40,000,000. See property details on PropertyPro.ng or browse all our range of properties in Ebute Metta Yaba Lagos House for sale in Ebute Metta Yaba Lagos Buy House for sale 2 bedroom apartment in Ebute Metta Yaba Lagos is a House. ✓ Real-time photos. Contact now for quick details on 2 bedroom apartmentThere is 2 bedroom apartment in a good location of Ebute metta close to Yaba. Mini flat available in the same compound at the rate of 28m"},

    
    { deal: "6 bedroom House for sale Iponri Surulere Lagos selling for ₦200,000,000. See property details on PropertyPro.ng or browse all our range of properties in Iponri Surulere Lagos6 bedroom House for sale in Iponri Surulere Lagos Buy 6 bedroom House for sale 6BED MANSION+ BQ & STUDY!! in Iponri Surulere Lagos is a House. ✓ Real-time photos. Contact now for quick details on 6BED MANSION+ BQ & STUDY!! "},



    { deal: "5 bedroom House for sale Off Oduduwa Way, Ikeja GRA Ikeja Lagos selling for ₦320,000,000. See property details on PropertyPro.ng or browse all our range of properties in Ikeja GRA Ikeja Lagos5 bedroom House for sale in Ikeja GRA Ikeja Lagos Buy 5 bedroom House for sale 5BED DETACHED DUPLEX+ BQ!!! in Ikeja GRA Ikeja Lagos is a House. ✓ Real-time photos. Contact now for quick details on 5BED DETACHED DUPLEX+ BQ!!!FOR SALE!!! LUXURY BUILT & TASTEFULLY FINISHED 5 BEDROOM DETACHED DUPLEX+ BQ!!! FEATURES: A ROOM BQ ALL ROOMS ENSUITE+ GUEST TOILET BEAUTIFUL P.O.P FINISHINGS SCREEDED WALL ALL ROUND POLISH TILES KITCHEN FITTED WITH CABINETS CCTV SURVEILLANCE CINEMA SWIMMING POOL AREA FENCED GATED+ CAR PARK IN A SERENE/HIGHLY SECURED ESTATE... LOCATION:OFF ODUDUWA WAY,IKEJA GRA LAGOS... TITLE:CERTIFICATE OF OCCUPANCY... PRICE:320MILLION..."},

    { deal: " 4 bedroom House for sale Okupe Estate, Maryland Lagos selling for ₦100,000,000. See property details on PropertyPro.ng or browse all our range of properties in Maryland Lagos4 bedroom House for sale in Maryland Lagos Buy 4 bedroom House for sale 4BED TERRACE DUPLEXES!!! in Maryland Lagos is a House. ✓ Real-time photos. Contact now for quick details on 4BED TERRACE DUPLEXES!!! FOR SALE!!!"},

    { deal: "3 bedroom House for sale Newly Built Contemporary 3 Bedroom Semi Detached Duplex With Bq, Ologolo Lekki Lagos selling for ₦95,000,000. See property details on PropertyPro.ng or browse all our range of properties in Ologolo Lekki Lagos4 bedroom House for sale in Ologolo Lekki Lagos Buy 4 bedroom House for sale 4 bedroom semi detached duplex in Ologolo Lekki Lagos is a House. ✓ Real-time photos. Contact now for quick details on 4 bedroom semi detached duplex Newly built, exquisitely designed 4 bedroom semi detached duplex with Bq, fully fitted kitchen, all rooms en-suite, spacious bedrooms and living room, spacious compound, CCTV and a lot more.Location: Ologolo, LekkiNB: This property and also several other properties are available, please feel free to contact us with your specifications, Thank you. "},


   


    
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



]





export const properties = [

  {
    id: 1,
    name: "2BedRoom Apartment",
    image: img[0].pic,
    image2:img[1].pic ,
    image3:img[2].pic ,
    image4:img[3].pic ,
    // image5: img[4].pic,
    information: detail[0].deal,
    location: "ikoyi",
    price: "#200,000.000"
  },
  {
    id: 2,
    name: "2BedRoom Apartment",
    image:  img[4].pic ,
    image2: img[5].pic,
    image3: img[6].pic,
    image4: img[7].pic,
    image5: img[8].pic,
    information: detail[1].deal,
    location: "IKORODU",
    price:"#40,000.000"
  },
  {
    id: 3,
    name: "4BedRoom Apartment",
    image: img[9].pic,
    image2: img[10].pic,
    image3: img[11].pic,
    image4: img[12].pic,
    image5: img[13].pic,
    information: detail[2].deal,
    location: "ILUPEJU",
    price:"#100,000.000"


  },
  {
    id: 4,
    name: "2Bedroom Apartment",
    image: img[14].pic,
    image2: img[15].pic,
    image3: img[16].pic,
    image4: img[17].pic,
    information: detail[3].deal,
    location: "VICTORIA ISLAND",
    price:"#140,000.000"
  },
  {
    id: 5,
    name: "3BedRoom Apartment",
    image: img[18].pic,
    image2: img[19].pic,
    image3: img[20].pic,
    image4: img[21].pic,
    image5: img[22].pic,
    // image22: img[23].pic,
 information: detail[4].deal,
    location: "YABA",
    price:"#55,000,000"
  },
  {
    id: 6,
    name: "3BedRoom Apartment",
    image: img[23].pic,
    image2: img[24].pic,
    image3: img[25].pic,
    image4: img[26].pic,
    image5: img[27].pic,
    information: detail[5].deal,
    location: "EBUTE-METTA",
    price:"#40,000,000"
  },
  {
    id: 7,
    name: "6 Apartment",
    image: img[28].pic,
    image2: img[29].pic,
    image3: img[30].pic,
    image4: img[31].pic,
    image5: img[32].pic,
    information: detail[6].deal,
    location: "SURULERE",
    price:"#200,000,000"
  },
  {
    id: 8,
    name: "5BedRoom Apartment",
    image: img[34].pic,
    image2: img[36].pic,
    image3: img[37].pic,
    image4: img[38].pic,
    image5: img[39].pic,
    information: detail[7].deal,
    location: "IKEJA",
    price:"#320,000,000"
  },
  {
    id: 9,
    name: "4BedRoom Apartment",
    image: img[42].pic,
    image2: img[43].pic,
    image3: img[44].pic,
    image4: img[45].pic,
    image5: img[46].pic,
    information: detail[8].deal,
    location: "MARYLAND",
    price:"#100,000,000"
  },

  {
    id: 10,
    name: "3Bedroom flat",
    image:   img[48].pic,
    image3: img[49].pic,
    image4: img[50].pic,
    image5: img[51].pic,
    image2: img[52].pic,
    information: detail[9].deal,
    location: "LEKKI",
    price:"#95,000,000"
  },
 
];

const Property = ({ onSelectProperty }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [locationFilter, setLocationFilter] = useState("");
  const [apartment, setApartment] = useState("");
  const navigate = useNavigate();

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    navigate(`/property/${property.id}`);
  };

  const filteredProperties = properties.filter(
    (property) =>
      property.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
      property.name.toLowerCase().includes(apartment.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by location"
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
        className="m-4 outline-none text-black border-black border-2 p-2 rounded-lg"
      />
      <input
        type="text"
        placeholder="Search by apartment"
        value={apartment}
        onChange={(e) => setApartment(e.target.value)}
        className="m-4 outline-none text-black border-black border-2 p-2 rounded-lg"
      />

      {filteredProperties.length === 0 ? (
        <p className="m-4 text-center mt-40 text-xl font-bold"> Not available</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className={`bg-white p-4 shadow-md rounded-lg cursor-pointer hover:shadow-xl h-[300px] ${
                selectedProperty === property ? search : ""
              }`}
              onClick={() => handlePropertyClick(property)}
            >
              <div className="h-1/2">
                <img
                  className="object-cover w-full h-full"
                  src={property.image}
                  alt=""
                />
              </div>
              <div className="h-1/2 gap-3 space-y-3">
                <h2 className="text-lg font-semibold">{property.name}</h2>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-gray-500">{property.price}</p>
                <p>{property.deal}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Property;






