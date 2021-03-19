import React from "react"; 
import { 
  Box, 
  Container, 
  Row, 
  Column, 
  FooterLink, 
  Heading, 
} from "./FooterStyles"; 
  
const Footer = () => { 
  return ( 
    <Box> 
      <h1 style={{ color: "green",  
                   textAlign: "center",  
                   marginTop: "-50px" }}>
      </h1> 
      <Container> 
        <Row> 
          <Column> 
            <Heading>About Us</Heading> 
            <FooterLink href="https://se.linkedin.com/in/behrad-hashemzadebalov-0692971b6">About Me</FooterLink> 
            <FooterLink href="https://github.com/berra-web">Vision</FooterLink> 
            <FooterLink href="https://github.com/berra-web">Github</FooterLink> 
          </Column> 
          <Column> 
            <Heading>Services</Heading> 
            <FooterLink href="https://codesandbox.io/?from-app=1">Code Sandbox</FooterLink> 
            <FooterLink href="https://codepen.io/Hashemzadebalov">Coding</FooterLink> 
            <FooterLink href="https://dev.to/berraweb">Teaching</FooterLink> 
          </Column> 
          <Column> 
            <Heading>Contact Us</Heading> 
            <FooterLink href="https://se.linkedin.com/in/behrad-hashemzadebalov-0692971b6">Lnkedin</FooterLink> 
            <FooterLink href="#">Sundbyberg</FooterLink> 
            <FooterLink href="#">0736755551</FooterLink> 
          </Column> 
          <Column> 
            <Heading>Social Media</Heading> 
            <FooterLink href="https://www.instagram.com/berrabalov/"> 
              <i className="fab fa-facebook-f"> 
                <span style={{ marginLeft: "10px" }}> 
                  facebook
                </span> 
              </i> 
            </FooterLink> 
            <FooterLink href="https://www.instagram.com/berrabalov/"> 
              <i className="fab fa-instagram"> 
                <span style={{ marginLeft: "10px" }}> 
                  Instagram 
                </span> 
              </i> 
            </FooterLink> 
            <FooterLink href="https://twitter.com/?lang=sv"> 
              <i className="fab fa-twitter"> 
                <span style={{ marginLeft: "10px" }}> 
                  Twitter 
                </span> 
              </i> 
            </FooterLink> 
            <FooterLink href="https://www.youtube.com"> 
              <i className="fab fa-youtube"> 
                <span style={{ marginLeft: "10px" }}> 
                  Youtube 
                </span> 
              </i> 
            </FooterLink> 
          </Column> 
        </Row> 
      </Container> 
    </Box> 
  ); 
}; 
export default Footer; 