import React from "react";
import Container from "react-bootstrap/Container";
import "./Personalities.css";
import photo from "../Images/Sir.jpg";

const Personalities = () => {
  return (
    <>
      <section className='showcase'>
        <Container>
          <div className='row row1'>
            <div className='img-box'>
              <img src={photo} alt='' />
            </div>
            <div className='text-box'>
              <h2 className='lg-heading text-black'>Sir Noaman Saleem</h2>
              <p className='text-gray'>
                Noaman Saleem, my advanced web technology teacher, is a true
                visionary. His tireless efforts in simplifying complex concepts
                and his unwavering support in fostering creativity have ignited
                a profound passion for web technology in all of us. His
                commitment to our growth is both inspiring and invaluable.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Personalities;
