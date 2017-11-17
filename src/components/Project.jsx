import React from "react";
import {
  Container,
  Header,
  Grid,
  Image,
  Label,
  Segment
} from "semantic-ui-react";
import Link from 'gatsby-link';
import moment from "moment";

import { getTypeData } from "../utils/helpers";

const Project = props => {
  const { project,path } = props;
  const tags = [];
  project.frontmatter.tags.map((tag, i) =>
    tags.push(
      <Label tag size="mini" key={i}>
        {tag}
      </Label>
    )
  );

  return <Grid.Column largeScreen={5} tablet={8} mobile={8}>
      <Link to={project.frontmatter.path}>
      <Segment className="project" key={props.id}>
        <Image fluid label={{ color: getTypeData(project.frontmatter.type).color, content: project.frontmatter.type, icon: getTypeData(project.frontmatter.type).icon, ribbon: true }} className="project-image" centered src={project.frontmatter.frontImage} />

        <div className="project-body">
          <Header textAlign="center">
            {project.frontmatter.title}
            <Header.Subheader>
              <span className="date">
                {moment(project.frontmatter.dateCompleted).format("MMM YYYY")}
              </span>
            </Header.Subheader>
            <Header.Subheader>
              {project.frontmatter.shortDescription}
            </Header.Subheader>
          </Header>
          <Container textAlign="center">
            <div>{tags}</div>
          </Container>
        </div>
      </Segment>
      </Link>
    </Grid.Column>;
};

Project.propTypes = {

};

export default Project;
