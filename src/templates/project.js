import React from "react";
import Helmet from "react-helmet";
import moment from "moment";
import { Container, Image, Header } from "semantic-ui-react";
import Navbar from '../components/Navbar';

export default function Template({ data }) {
  const { markdownRemark: project } = data; //same as const post = data.markdownRemark

  return (
    <div>
      <Helmet title={`${project.frontmatter.title} | GradeCalculate.com`} />
      <Navbar/>
      <Container>
        <Image centered src={project.frontmatter.cover} />
        <Header as="h1">
          {project.frontmatter.title}
          <Header.Subheader>
            {moment(project.frontmatter.date).format("MMM Do YYYY")}
          </Header.Subheader>
        </Header>

        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </Container>
    </div>
  );
}

export const projectQuery = graphql`query ProjectPostByPath($path: String!) {
           markdownRemark(frontmatter: { path: { eq: $path } }) {
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
         }`;
