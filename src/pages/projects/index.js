import React from "react";
import { Container, Header, Segment, Grid } from "semantic-ui-react";
import find from "lodash/find";

import Navbar from "../../components/Navbar";

import "../../styles/projects.scss";
import Project from "../../components/Project";

const ProjectsPage = ({data}) => {

    const { edges } = data.allMarkdownRemark
    const projects = edges.map(({node})=>{
        return <Project
                  index={node.id}
                  project={node}
                  key={node.id}
                />
        
    });
    return (
     
     <div>
        <Container>
          <Navbar />
        </Container>
        <Segment vertical className="banner">
          <Header className="project-page-header" as="h1" textAlign="center">
            <span className="banner-text">Projects</span>
          </Header>
        </Segment>
        <div className="projects">
          <Container>
            <Grid stackable stretched>
             {projects}
            </Grid>
          </Container>
        </div>

        
      </div>
    );
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
