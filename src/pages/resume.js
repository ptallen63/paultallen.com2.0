import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar.jsx";
import {
  List,
  Divider,
  Header,
  Grid,
  Container,
  Label,
  Segment,
  Statistic,
  Icon
} from "semantic-ui-react";
import workItems from "../data/workItems";

export default class ResumePage extends React.Component {
  renderExprience(w, index) {
    return (
      <List.Item key={index}>
        <Label ribbon="right" size="mini">
          {w.timeSpan}
        </Label>
        <List.Icon name="building" />
        <List.Content>
          <List.Header as="h3">{w.position} </List.Header>
          <List.Description>{w.company}</List.Description>
          <List.Description>
            <Icon name="marker" />
            {w.location}
          </List.Description>

          <List.Description>
            <List bulleted>
              {w.bullets.map((b, i) => <List.Item key={i}>{b}</List.Item>)}
            </List>
          </List.Description>
        </List.Content>
        <Divider />
      </List.Item>
    );
  }

  render() {
    return (
      <div>
        <Helmet title='Resume | Paultallen.com' />
        {/* TODO: Add meta data */}
        <Container>
          <Navbar {...this.props} />
        </Container>

        <Container>
          <Container textAlign="center">
            {/* <Header size='medium'>Resume</Header> */}

            <Header size="huge">
              Paul T. Allen
              <Header.Subheader>
                email: contact@mulleravenue.com{" "}
                {/* TODO: make Link */}
              </Header.Subheader>
              <Header.Subheader> Web: www.paultallen.com</Header.Subheader>
              {/* TODO: Make Icons from email/web */}
              <Header.Subheader>Columbia, SC, USA</Header.Subheader>
            </Header>
          </Container>

          <Container text>
            <Grid columns={3} centered>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>10+</Statistic.Value>
                  <Statistic.Label>
                    Years <br /> Experience{" "}
                  </Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>5+</Statistic.Value>
                  <Statistic.Label>
                    Years <br /> Management
                  </Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Value>3</Statistic.Value>
                  <Statistic.Label>
                    Major <br /> Web Frameworks
                  </Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid>

            <Segment>
              <Label as="a" color="blue" ribbon>
                Education
              </Label>
              <List>
                <List.Item>
                  <List.Icon name="student" />
                  <List.Content>
                    <List.Header as="h3">
                      B.S. Business Management / Finance
                    </List.Header>
                    {/*  TODO Change Color and style of year and city */}
                    <List.Description>Samford University</List.Description>
                    <List.Description>Birmingham, AL</List.Description>
                    <List.Description>May 2006</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="student" />
                  <List.Content>
                    <List.Header as="h3">
                      Master in Business Administration
                    </List.Header>
                    <List.Description>Samford University</List.Description>
                    <List.Description>Birmingham, AL</List.Description>
                    <List.Description>May 2008</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>

            <Segment>
              <Label as="a" color="blue" ribbon>
                Projects
              </Label>
              <p>
                Below are a few projects that I have been putting some time
                into. This is not an exhaustive list, as some projects from
                clients are not listed here.{" "}
              </p>
              <List>
                <List.Item>
                  <List.Icon name="code" />
                  <List.Content>
                    <List.Header>
                      <a href="http://paultallen.com">paultallen.com</a>
                    </List.Header>
                    <List.Description>
                      My personal brand and resume website. This site is built
                      with the stack of React and NodeJS.
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="code" />
                  <List.Content>
                    <List.Header>
                      <a href="http://ez.gradecalculate.com">Grade Calculate</a>
                    </List.Header>
                    <List.Description>
                      A grade calculator for teachers to grade tests, quizzes,
                      and homework faster. This app is built with Angular 1.x
                      and a PHP API.
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="code" />
                  <List.Content>
                    <List.Header>
                      <a href="http://131.univ101.com/">
                        University 101 Section Website
                      </a>
                    </List.Header>
                    <List.Description>
                      I teach a class for university freshmen each year. This is
                      the website for the most recent section. This site is
                      built with a full M.E.A.N. stack.
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="apple" />
                  <List.Content>
                    <List.Header>
                      <a href="https://itunes.apple.com/us/app/grade-calculate/id1121430103?ls=1&mt=8">
                        Grade Calculate iOS
                      </a>
                    </List.Header>
                    <List.Description>
                      This iOS version of Grade Calculate is built with the
                      Ionic framework.
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="code" />
                  <List.Content>
                    <List.Header>
                      <a href="http://mrsallen.wardrobelibrary.net">Wardrobe</a>
                    </List.Header>
                    <List.Description>
                      My wife needed a way to manage her 4th grade classroom
                      library. We built this app using Angular 1.x. It is
                      currently being rewritten using React.
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="github" />
                  <List.Content>
                    <List.Header>
                      <a href="https://github.com/ptallen63/neville.js">
                        NevilleJS
                      </a>
                    </List.Header>
                    <List.Description>
                      A Node CLI script that takes a list of emails and checks
                      for invalid formats, duplicates, and blanks.
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>

            <Segment>
              <Label as="a" color="blue" ribbon>
                Experience
              </Label>
              <List>{workItems.map(this.renderExprience)}</List>
            </Segment>
            <Segment>
              <Label as="a" color="blue" ribbon>
                Skills
              </Label>
              <List>
                <List.Item
                  icon="code"
                  content="Highly knowledgeable in Microsoft Word, Access, Publisher, and PowerPoint"
                />
                <List.Item
                  icon="code"
                  content="Advanced knowledge in Microsoft Excel"
                />
                <List.Item
                  icon="code"
                  content="Significant knowledge of CRM software such as Salesforce, Jenzabar EX, and Hobsons Connect"
                />
                <List.Item
                  icon="code"
                  content="Excellent analytical and critical thinking skills"
                />
                <List.Item
                  icon="code"
                  content="Programming languages: PHP, Javascript/jQuery, HTML, CSS, and SQL"
                />
                <List.Item
                  icon="code"
                  content="Operating Systems: IOS, OSX, Android, Linux, and Windows"
                />
                <List.Item
                  icon="code"
                  content="Other: React, ajax, angular.js, MVC, NodeJS"
                />
              </List>
            </Segment>
            <Segment>
              <Label as="a" color="blue" ribbon>
                Awards/Honors
              </Label>
              <List>
                <List.Item
                  icon="trophy"
                  content="Samford University’s Dean’s List"
                />
                <List.Item
                  icon="trophy"
                  content="Completion of the Regions Bank Leadership Development Program"
                />
                <List.Item
                  icon="trophy"
                  content="Alpha Lambda Delta Honor Society"
                />
                <List.Item
                  icon="trophy"
                  content="Beta Alpha Psi Accounting Honor Fraternity"
                />
                <List.Item icon="trophy" content="Sigma Chi Fraternity" />
                <List.Item
                  icon="trophy"
                  content="Student Government Association, Senator"
                />
                <List.Item
                  icon="trophy"
                  content="Eagle Scout Rank in Boy Scouts of America"
                />
              </List>
            </Segment>
          </Container>
        </Container>
      </div>
    );
  }
}

ResumePage.propTypes = {};
