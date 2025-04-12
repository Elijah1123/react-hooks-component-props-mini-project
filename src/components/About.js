import React from "react";

function About({ image, about }) {
  const defaultImage = "https://via.placeholder.com/215"; // Default image URL
  return (
    <aside>
      <img
        src={image || defaultImage} // Use image prop if provided, otherwise fallback to default image
        alt="blog logo"
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;
