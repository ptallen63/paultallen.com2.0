import React from "react";
import Link from 'gatsby-link';
import { Container, Divider, Icon } from "semantic-ui-react";

var style = {
  marginTop: "100px",
  textAlign: "center",
  padding: "20px",
  position: "relative",
  left: "0",
  bottom: "0"
};

const Footer = () => (
  <div>
    <Container style={style} textAlign="center">
      <Divider />
      <p>
        {" "}
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/projects">Projects</Link> | <Link to="/resume">Resume</Link>
      </p>
      <p>
        Made with <Icon name="heart" /> by Paul Allen{" "}
      </p>
      <p>
        Check out this site on{" "}
        <a href="https://github.com/ptallen63/paultallen.com2.0">Github</a>
      </p>
      <p>
        <Icon name="copyright" />2016-2017
      </p>
    </Container>
  </div>
);

Footer.propTypes = {};

export default Footer;