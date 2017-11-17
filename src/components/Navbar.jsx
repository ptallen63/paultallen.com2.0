import React from "react";
import { Menu, Container } from "semantic-ui-react";
import Link from 'gatsby-link';
import '../styles/navbar.scss';

const style = {
  borderColor: "blue"
};

// RegExp for the Project route
const regex = new RegExp("/(project/).*");

const  Navbar = (props) => {
   const activeItem = props.location.pathname;
    return <div>
        <div style={{ marginBottom: "40px" }}>
          <Menu fixed="top" secondary style={{ padding: "0px !important", height: "50px", borderColor: "#fff", backgroundColor: "#fff" }}>
            <Menu.Menu position="right" style={{ backgroundColor: "#fff", marginRight: "50px" }}>
              <Menu.Item className="menu-item" name="home" active={activeItem === "/"}>
                <Link className="link" to="/">
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item className="menu-item" name="projects" active={regex.test(activeItem) || activeItem === "/projects"}>
                <Link className="link" to="/projects">
                  Projects
                </Link>
              </Menu.Item>
              <Menu.Item className="menu-item" name="about" active={activeItem === "/about"}>
                <Link className="link" to="/about">
                  About
                </Link>
              </Menu.Item>
              <Menu.Item className="menu-item" name="resume" active={activeItem === "/resume"}>
                <Link className="link" to="/resume">
                  Resume
                </Link>
              </Menu.Item>
              <Menu.Item className="menu-item" name="Contact" />
            </Menu.Menu>
          </Menu>
        </div>

        {/* <ContactForm
          showContactForm={this.state.contactForm}
          closeContactForm={this.close}
        /> */}
      </div>;
  }


Navbar.propTypes = {};

export default Navbar;

// TODO: make mobile menu
