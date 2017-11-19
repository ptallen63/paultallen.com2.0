import React from "react";
import Helmet from 'react-helmet';
import { Container, Header, Segment, Grid } from "semantic-ui-react";
import Link from 'gatsby-link';
import find from "lodash/find";

import Navbar from "../../components/Navbar";

import "../../styles/projects.scss";
import Project from "../../components/Project";

const ProjectsPage = (props) => {
    
    const { edges } = props.data.allMarkdownRemark
    const projects = edges.map(({node})=>{
        return <Project
                  index={node.id}
                  project={node}
                  key={node.id}
                />
        
    });
    return <div>
        <Helmet title="Projects | Paultallen.com" />
       
          <Navbar {...props} />
        
        <div vertical className="banner">
          <Header className="project-page-header" as="h1" textAlign="center">
            <span className="banner-text">Projects</span>
          </Header>
        </div>
        <div className="projects">
          <Container>
            <Grid stackable stretched centered>
         {projects}
            </Grid>
          </Container>
        </div>
      </div>;
}

export default ProjectsPage;

export const projectQuery = graphql`
  query allProjectsQuery {
    allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              cover
              frontImage
              type
              dateCompleted
              shortDescription
              images
              tags
              url
            }
          }
        }
      }
    }`

// TODO: Set up Project Test File
// TODO: Set up paralaxx scrolling
