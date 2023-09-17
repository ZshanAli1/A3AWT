import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
function Footer() {
  const facebookProfileUrl =
    "https://www.facebook.com/profile.php?id=100008161590247&6527FDEB";

  return (
    <>
      <footer className='footer'>
        <Container>
          <div className='social-media-links'>
            <Nav.Link className='pad' href={facebookProfileUrl}>
              <FontAwesomeIcon icon={faFacebook} className='fa-4x' />
            </Nav.Link>
            <Nav.Link className='pad' href={facebookProfileUrl}>
              <FontAwesomeIcon icon={faInstagram} className='fa-4x' />
            </Nav.Link>
          </div>
          <p>Zee World &copy; 2020, All Rights Reserved</p>
        </Container>
      </footer>
    </>
  );
}
export default Footer;
