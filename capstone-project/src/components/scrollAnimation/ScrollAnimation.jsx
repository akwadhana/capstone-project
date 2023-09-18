import React, { useEffect, useRef, useState } from "react";
import "./ScrollAnimation.css"; // Import your CSS for styling

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
  {
    details:
      "At CaramelCrest Properties, we specialize in making your dream home a reality by providing a personalized and comprehensive approach to the home-buying process. We understand that purchasing a house is not merely a financial transaction; it's a deeply emotional journey that signifies a significant milestone in your life.",
  },
  {
    details:
      "Our dedicated team of experienced real estate professionals is committed to offering you the support and expertise you need throughout this exciting journey. We believe in the power of your dreams and are passionate about helping you find the perfect place to call home.",
  },
  {
    details:"Personalized Guidance: Our team will sit down with you to understand your specific goals and preferences, ensuring that we only present properties that align with your vision.",
  },
  {
    details:  " Expert Knowledge: With years of experience in the local real estate market, we possess an in-depth understanding of the neighborhoods, market trends, and property values, allowing us to provide you with informed advice.",
    },
  {
    details:" Support Every Step of the Way: We will be by your side from the first consultation to the closing table, offering guidance, answering questions, and handling all the intricate details of the transaction.",
  },
];

const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const boxesRef = useRef([]); // Use useEffect to add a scroll listener when the component mounts
  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;
      boxesRef.current.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }; // Add the scroll listener
    window.addEventListener("scroll", checkBoxes); // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []);

  return (
    <div className="box-container">
      <h1>Scroll to see the animation</h1>
      {Array.from({ length: 8 }, (_, index) => (
        <div
          className={`box ${isVisible ? "show" : ""}`}
          ref={(el) => (boxesRef.current[index] = el)}
          key={index}
        >
          <p>{list[index % list.length].details}</p>
        </div>
      ))}
    </div>
  );
};
export default ScrollAnimation;
