import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

  const year= new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src='https://res.cloudinary.com/dvg79etnq/image/upload/v1697135962/wishLoGO-removebg-preview_lkfy4m.png' alt="Logo"  style={{height:150, width:150}} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/wishaque-haider-awan-0bb0b4244/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIN" /></a>
              <a href="https://www.facebook.com/profile.php?id=100079882592672" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/wishawan_05/"  target="_blank" rel="noreferrer"><img src={navIcon3} alt="Insta" /></a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
