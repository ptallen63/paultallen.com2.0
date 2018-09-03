import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { Button, Icon, Grid, Image,Container, Header, Statistic } from 'semantic-ui-react';
import Typed from 'typed.js';

import '../styles/index.scss';
class IndexPage extends Component {
  componentDidMount() {
    const strings = [
      "<span class='black'>Engineer</span>",
      "<span class='black'>Developer</span>",
      "<span class='black'>Consultant</span>",
      "<span class='black'>Cool Guy</span>",
      "<span class='black'>Technologist</span>",
      "<span class='black'>Lover of bacon</span>",
      "<span class='black'>Email enthusiast</span>",
      "<span class='black'>I&apos;ve done a lot of interesting things</span>",
      "<a class='black' href='projects'>Check some of them out <span class='grey'>>></span></a>"
    ]
    const options = {
      strings: strings,
      typeSpeed: 30,
      backSpeed: 20,
      smartBackspace: true,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
  return (
  <div>

    <Helmet title='Paultallen.com'/>
    <div className="mainContainer">
      <Container textAlign="center">
        <Grid reversed="mobile" columns={2} stackable centered>
          <Grid.Column textAlign='center'>
            <Statistic>
              <Statistic.Value>Paul T. Allen</Statistic.Value>
            </Statistic>

            <Header textAlign='center' className="keyWords" color="grey" as="h2">
                <span
                  style={{ whiteSpace: 'pre', fontSize: '28px' }}
                  ref={(el) => { this.el = el; }}
                />
            </Header>

            <a target="_blank" href="https://twitter.com/ptallen63">
              <Button animated="fade" color="twitter" size="large">
                <Button.Content visible>
                  <Icon name="twitter" /> Twitter
                </Button.Content>
                <Button.Content hidden>@ptallen63</Button.Content>
              </Button>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/ptallen63">
              <Button animated="fade" color="linkedin" size="large">
                <Button.Content visible>
                  <Icon name="linkedin" /> LinkedIn
                </Button.Content>
                <Button.Content hidden>ptallen63</Button.Content>
              </Button>
            </a>

            <a target="_blank" href="https://github.com/ptallen63">
              <Button animated="fade" secondary size="large">
                <Button.Content visible>
                  <Icon name="github" /> Github
                </Button.Content>
                <Button.Content hidden>@ptallen63</Button.Content>
              </Button>
            </a>

            <div className="divider" />
            <Grid columns={4} stackable centered>
              <Grid.Column textAlign="center">
                <Link to="projects">
                  <Statistic className="front-page-icon">
                    <Statistic.Value>
                      <Icon name="code" />
                    </Statistic.Value>
                    <Statistic.Label>Projects</Statistic.Label>
                  </Statistic>
                </Link>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Link to="about">
                  <Statistic className="front-page-icon">
                    <Statistic.Value>
                      <Icon name="info" />
                    </Statistic.Value>
                    <Statistic.Label>About Me</Statistic.Label>
                  </Statistic>
                </Link>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Link to="resume">
                  <Statistic className="front-page-icon">
                    <Statistic.Value>
                      <Icon name="file text outline" />
                    </Statistic.Value>
                    <Statistic.Label>Resume</Statistic.Label>
                  </Statistic>
                </Link>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Link to="contact">
                  <Statistic
                    className="front-page-icon"
                  >
                    <Statistic.Value>
                      <Icon name="mail outline" />
                    </Statistic.Value>
                    <Statistic.Label>Contact Me</Statistic.Label>
                  </Statistic>
                </Link>
              </Grid.Column>
            </Grid>
          </Grid.Column>

          <Grid.Column width={5}>
            <Image
              circular
              src="http://res.cloudinary.com/mulleravenue/image/fetch/https://s3-us-west-2.amazonaws.com/paultallen.com/profile.jpg"
              size="medium"
              shape="circular"
              centered
            />
          </Grid.Column>
        </Grid>
      </Container>
    </div>

  </div>
)}
};


export default IndexPage


//TODO: Put images behind CDN

