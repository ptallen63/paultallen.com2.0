import React from "react";
import { Menu, Container } from "semantic-ui-react";
import Link from 'gatsby-link';
import '../styles/navbar.scss';

const style = {
  borderColor: "blue"
};
const  Navbar = (props) => {
  

//   const handleItemClick = (path) => props.router.push(path);
//TODO: Handing Routing  



  
   const activeItem = props.route || '';


    return <div>
        <div style={{ marginBottom: "78px" }}>
          <Container>
            <Menu fixed="top" secondary style={{ padding:'0px !important', height:'50px', borderColor: "#fff", backgroundColor: "#fff" }}>
              <Menu.Menu position="right" style={{ backgroundColor: "#fff", marginRight: "50px" }}>
                <Menu.Item name="home" active={activeItem === "/"}>
                  <Link className="link" to="/">
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item name="projects" active={activeItem === "/projects"}>
                  <Link className="link" to="/projects">
                    Projects
                  </Link>
                </Menu.Item>
                <Menu.Item name="about" active={activeItem === "/about"}>
                  <Link className="link" to="/about">
                    About
                  </Link>
                </Menu.Item>
                <Menu.Item name="resume" active={activeItem === "/resume"}>
                  <Link className="link" to="/resume">
                    Resume
                  </Link>
                </Menu.Item>
                <Menu.Item name="Contact" />
              </Menu.Menu>
            </Menu>
          </Container>
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