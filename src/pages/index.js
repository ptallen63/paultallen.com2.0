import React from 'react'
import Link from 'gatsby-link'
import { Button, Icon, Grid, Image,Container, Header, Statistic } from 'semantic-ui-react';

import '../styles/index.scss';
const IndexPage = () => (<div>
    {/* TODO: Add React Helmet */}
          <div className="mainContainer">
          <Container>
            <Grid reversed="mobile" columns={2} stackable centered>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>Paul T. Allen</Statistic.Value>
                </Statistic>

                <Header className="keyWords" color="grey" as="h2">
                  Technologist, Developer, Consultant
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
                  <Grid.Column>
                    <Link to="about">
                      <Statistic className="front-page-icon">
                        <Statistic.Value>
                          <Icon name="info" />
                        </Statistic.Value>
                        <Statistic.Label>About Me</Statistic.Label>
                      </Statistic>
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <Link to="projects">
                      <Statistic className="front-page-icon">
                        <Statistic.Value>
                          <Icon name="code" />
                        </Statistic.Value>
                        <Statistic.Label>Projects</Statistic.Label>
                      </Statistic>
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <Link to="resume">
                      <Statistic className="front-page-icon">
                        <Statistic.Value>
                          <Icon name="file text outline" />
                        </Statistic.Value>
                        <Statistic.Label>Resume</Statistic.Label>
                      </Statistic>
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <Statistic 
                    // onClick={this.open} 
                    className="front-page-icon">
                      <Statistic.Value>
                        <Icon name="mail outline" />
                      </Statistic.Value>
                      <Statistic.Label>Contact Me</Statistic.Label>
                    </Statistic>
                  </Grid.Column>
                </Grid>
              </Grid.Column>

              <Grid.Column width={5}>
                <Image circular src="http://res.cloudinary.com/mulleravenue/image/fetch/https://s3-us-west-2.amazonaws.com/paultallen.com/profile.jpg" size="medium" shape="circular" centered />
              </Grid.Column>
            </Grid>
          </Container>
        </div>

        {/* <ContactForm showContactForm={this.state.contactForm} closeContactForm={this.close} /> */}
      </div>);


export default IndexPage


//TODO: Set up Gatsby-node.js
//TODO: Set up home page

//TODO: Contact Formt

//TODO: Add Favicon
//TODO: Center Icons on page

