import React from "react";

const Partner = () => {
  // Manually defined about information
  const aboutInfo = [
    {
      title: "Our Mission",
      description:
        "At Recreo Inn, our mission is to provide a fun, safe, and welcoming environment where families can enjoy exciting activities together. We strive to offer the best in entertainment, creating lasting memories for children and adults alike.",
    },
    {
      title: "Our Values",
      description:
        "We value family, fun, and adventure. Our goal is to make each visit to Recreo Inn a unique and enjoyable experience, offering high-quality entertainment, excellent customer service, and a commitment to safety and cleanliness.",
    },
    {
      title: "Our Story",
      description:
        "Founded in 2020, Recreo Inn was created with the idea of providing a one-stop entertainment destination for families in Naccache. What started as a small project has grown into a full-fledged center offering go-karting, arcade games, amusement rides, and more.",
    },
    {
      title: "Our Facilities",
      description:
        "Recreo Inn features state-of-the-art facilities, including thrilling go-kart tracks, a wide range of amusement rides for all ages, and spacious dining areas for families to relax and enjoy meals together.",
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-r from-pink-500 to-blue-500">
      <div className="max-w-7xl mx-auto text-white text-center">
        <h1 className="text-4xl font-semibold mb-10">About Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105"
            >
              <h2 className="text-2xl font-bold mb-4">{info.title}</h2>
              <p className="text-base">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
