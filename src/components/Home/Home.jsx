import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Home.css";

import img from "../Images/zee.jpg";
function Home() {
  return (
    <>
      <div className='welcome-page'>
        <Container>
          <section className='intro-section'>
            <h1>Welcome to My Website</h1>
            <p>Here's a glimpse into who I am and what I'm passionate about.</p>
          </section>

          <section className='about-me-section'>
            <h2>About Me</h2>
            <p>
              I am <strong>Zeeshan Ali</strong>, a passionate individual who
              loves to go to Lahore to take classes on campus for only one
              subject, while the other subject is online, so this is how I
              explore the world and learn new things.
            </p>
          </section>

          <section className='hobbies-section'>
            <h2>Hobbies</h2>
            <p>In my free time, I enjoy watching Youtube and Instagram.</p>
          </section>

          <section className='skills-section'>
            <h2>Skills and Expertise</h2>
            <p>
              I have expertise in Web-Development and possess skills in MERN
              stack.
            </p>
          </section>

          <section className='ambitions-section'>
            <h2>Ambitions</h2>
            <p>
              My ambition is to become Prime Minister of Pakistan and to run
              Pakistan I also want to become Chief of Army Staff.
            </p>
          </section>

          <section className='profession-section'>
            <h2>Profession</h2>
            <p>
              I work as a Student and have self-learned experience of experience
              in this field.
            </p>
          </section>
        </Container>
      </div>
    </>
  );
}
export default Home;
