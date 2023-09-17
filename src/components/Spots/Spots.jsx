import React from "react";
import "./Spots.css";
import Mini from "../Images/Mini.jpg";
import DNP from "../Images/DNP.jpg";

const Spots = () => {
  const touristSpots = [
    {
      name: "Deosai National Park",
      intro: "North Pakistan",
      image: DNP,
      videoUrl: "https://www.youtube.com/embed/w6XfRGudX6c?si=pZ3dSey6cpIj5CEJ",
    },
    {
      name: "Minimarg",
      intro: "Heaven on Earth",
      image: Mini,
      videoUrl: "https://www.youtube.com/embed/sTwj4aDXXSI?si=Fxruy9lsK9Ongm9z",
    },
  ];

  return (
    <div className='favorite-tourist-spots'>
      <h1>Favorite Tourist Spots</h1>
      <div className='spot-list'>
        {touristSpots.map((spot, index) => (
          <div className='spot' key={index}>
            <img src={spot.image} alt={spot.name} />
            <h2>{spot.name}</h2>
            <p>{spot.intro}</p>
            <iframe
              width='560'
              height='315'
              src={spot.videoUrl}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spots;
