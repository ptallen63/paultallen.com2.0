import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar.jsx";
import Link from 'gatsby-link';
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
import {getTypeData} from '../utils/helpers';

import workItems from "../data/workitems.js";


const  ResumePage = (props) => {
  const projects = props.data.allMarkdownRemark.edges.map(({node: project}) => (
    <List.Item key={project.id}>
      <List.Icon name={getTypeData(project.frontmatter.type).icon} />
      <List.Content>
        <List.Header>
          <Link to={project.frontmatter.path}>{project.frontmatter.title}</Link>
        </List.Header>
        <List.Description>
          {project.frontmatter.shortDescription}
        </List.Description>
      </List.Content>
    </List.Item>
  ));
 const  renderExprience = (w, index) => {
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




    return <div>
        <Helmet title="Resume | Paultallen.com" />

        <Container>
          <Navbar {...props} />
        </Container>

        <Container>
          <Container textAlign="center">
            <Header size="huge">
              Paul T. Allen
              <Header.Subheader>
                <Icon name="mail" />
                email: <a href="mailto:contact@mulleravenue.com">
                  contact@mulleravenue.com
                </a>
              </Header.Subheader>
              <Header.Subheader>
                {" "}
                <Icon name="world" />Web: <a href="https://paultall.com">
                  www.paultallen.com{" "}
                </a>
              </Header.Subheader>
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
                    
                    <List.Description>Samford University</List.Description>
                    <List.Description>
                      <em>Birmingham, AL</em>
                    </List.Description>
                    <List.Description>
                      <small>May 2006</small>
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="student" />
                  <List.Content>
                    <List.Header as="h3">
                      Master in Business Administration
                    </List.Header>
                    <List.Description>Samford University</List.Description>
                    <List.Description>
                      <em>Birmingham, AL</em>
                    </List.Description>
                    <List.Description>
                      <small>May 2008</small>
                    </List.Description>
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
                
                {projects}
              </List>
            </Segment>

            <Segment>
              <Label as="a" color="blue" ribbon>
                Experience
              </Label>
              <List>
                {workItems.map((item, i) => renderExprience(item, i))}
              </List>
            </Segment>
            <Segment>
              <Label as="a" color="blue" ribbon>
                Skills
              </Label>
              <List>
                <List.Item icon="code" content="Highly knowledgeable in Microsoft Word, Access, Publisher, and PowerPoint" />
                <List.Item icon="code" content="Advanced knowledge in Microsoft Excel" />
                <List.Item icon="code" content="Significant knowledge of CRM software such as Salesforce, Jenzabar EX, and Hobsons Connect" />
                <List.Item icon="code" content="Excellent analytical and critical thinking skills" />
                <List.Item icon="code" content="Programming languages: PHP, Javascript/jQuery, HTML, CSS, and SQL" />
                <List.Item icon="code" content="Operating Systems: IOS, OSX, Android, Linux, and Windows" />
                <List.Item icon="code" content="Other: React, ajax, angular.js, MVC, NodeJS" />
              </List>
            </Segment>
            <Segment>
              <Label as="a" color="blue" ribbon>
                Awards/Honors
              </Label>
              <List>
                <List.Item icon="trophy" content="Samford University’s Dean’s List" />
                <List.Item icon="trophy" content="Completion of the Regions Bank Leadership Development Program" />
                <List.Item icon="trophy" content="Alpha Lambda Delta Honor Society" />
                <List.Item icon="trophy" content="Beta Alpha Psi Accounting Honor Fraternity" />
                <List.Item icon="trophy" content="Sigma Chi Fraternity" />
                <List.Item icon="trophy" content="Student Government Association, Senator" />
                <List.Item icon="trophy" content="Eagle Scout Rank in Boy Scouts of America" />
              </List>
            </Segment>
          </Container>
        </Container>
      </div>;
  }


ResumePage.propTypes = {};


export default ResumePage;

export const projectQuery = graphql`
  query resumeProjectQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            frontImage
            type
            dateCompleted
            shortDescription
            tags
            url
          }
        }
      }
    }
  }
`;