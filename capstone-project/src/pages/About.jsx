import React from "react";
import picture from "../photos/pexels-erik-mclean-9890656.jpg";
import picture2 from "../photos/pexels-binyamin-mellish-186077.jpg";
import { Carousel } from "flowbite-react";

const About = () => {
  const list = [
    {
      details:
        "Personalized Guidance: Our team will sit down with you to understand your specific goals and preferences, ensuring that we only present properties that align with your vision.",
    },
    {
      details:
        " Expert Knowledge: With years of experience in the local real estate market, we possess an in-depth understanding of the neighborhoods, market trends, and property values, allowing us to provide you with informed advice.",
    },
    {
      details:
        " Support Every Step of the Way: We will be by your side from the first consultation to the closing table, offering guidance, answering questions, and handling all the intricate details of the transaction.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col relative ">
        <div className="w-full">
          <img className="w-full h-[50vh] object-cover" src={picture} alt="" />
        </div>
        <h1 className="text-center mt-8 font-extrabold text-3xl absolute top-11 left-1/2 transform -translate-x-1/2 text-white">
          ABOUT US
        </h1>
        <div className="flex mt-10 flex-col md:flex-row font-bold">
          <div>
            <h1 className=" text-center "> CaramelCrest Properties</h1>
            <p className="text-lg font-semibold text-left my-4 mx-6 p-4 border border-gray-300 rounded-lg">
              At CaramelCrest Properties, we specialize in making your dream
              home a reality by providing a personalized and comprehensive
              approach to the home-buying process. We understand that purchasing
              a house is not merely a financial transaction; it's a deeply
              emotional journey that signifies a significant milestone in your
              life.
              <br />
              <br />
              Our dedicated team of experienced real estate professionals is
              committed to offering you the support and expertise you need
              throughout this exciting journey. We believe in the power of your
              dreams and are passionate about helping you find the perfect place
              to call home.
              <br />
              <br />
              Our approach to real estate goes beyond simply matching you with a
              property; it's about understanding your unique preferences, needs,
              and aspirations. We take the time to listen to your vision, and
              then we work tirelessly to turn that vision into a reality.
              Whether you're a first-time homebuyer or a seasoned investor, our
              goal is to ensure that you have a seamless and enjoyable
              experience from the initial search to the final closing.
              <br />
              <br />
              When you choose CaramelCrest Properties as your trusted partner in
              real estate, you can expect:
              <br />
              <br />
              {
                <ul className="list-disc list-inside">
                  {list.map((item) => (
                    <li className="text-left">
                      {item.details} <br />
                      <br />
                    </li>
                  ))}
                </ul>
              }
              <br />
              Buying a home is a significant decision, and we understand the
              importance of getting it right. Let us be your trusted partner on
              this emotional journey, and together, we'll turn your dream home
              into a reality that you and your family will cherish for years to
              come. Welcome to CaramelCrest Properties, where your dreams find a
              home.
            </p>
          </div>
          <div>
            <h1 className="text-center">Our Mission</h1>
            <p className="text-lg font-semibold text-left my-4 mx-6 p-4 border border-gray-300 rounded-lg">
              Our mission at CaramelCrest Properties is driven by a fundamental
              belief in the transformative power of home. We understand that a
              home is not just a physical structure; it's a place where memories
              are made, dreams are realized, and lives are lived. We are deeply
              committed to fulfilling the dreams of individuals and families by
              providing them with the opportunity to purchase a place they can
              truly call their own.
              <br />
              <br />
              In a world where the real estate market can often seem
              overwhelming, our mission remains refreshingly simple: to make the
              process of buying a house accessible, enjoyable, and stress-free.
              We believe that everyone deserves the chance to find a home that
              resonates with their unique aspirations and lifestyles.
              <br />
              <br />
              Our passion is at the heart of everything we do. We are not just
              in the business of buying and selling properties; we are in the
              business of facilitating life-changing moments. It brings us
              immense joy to guide our clients on their journey towards
              homeownership and to witness the excitement and satisfaction that
              comes with finding the perfect home.
              <br />
              <br />
              What sets us apart is our unwavering commitment to delivering
              exceptional real estate services. We don't settle for the
              ordinary; we strive for the extraordinary. Our team of dedicated
              professionals goes above and beyond to exceed your expectations.
              We understand that each homebuyer is unique, and we tailor our
              services to meet your specific needs, ensuring that the home you
              choose is a perfect fit for you and your family.
              <br />
              <br />
              At CaramelCrest Properties, we believe in the power of your
              dreams. We are here to transform those dreams into reality, one
              house at a time. Whether you're a first-time buyer embarking on
              this exciting journey or an experienced homeowner looking for a
              change, we are here to support you every step of the way.
              <br />
              <br />
              Thank you for considering CaramelCrest Properties as your trusted
              partner in your quest for the perfect home. Together, we'll make
              your homeownership dreams come true. Welcome to a world of
              possibilities, where finding your ideal home is our mission, and
              exceeding your expectations is our commitment.
            </p>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
