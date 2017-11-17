import React from "react";
import Helmet from "react-helmet";
import moment from "moment";
import { Container, Image, Header, Label, Icon, Button } from "semantic-ui-react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Navbar';
import '../styles/projectTemplate.scss';
import {getTypeData, getStatusColor} from '../utils/helpers';

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  lazyLoad: true,
};

export default function Template(props) {
  const { markdownRemark: project } = props.data; //same as const post = data.markdownRemark

  const images = project.frontmatter.images.map( (image, i) => <div key={i}><Image className='screenshot' centered src={image}/></div>);
  const tags = project.frontmatter.tags.map((tag, i) => <Label tag size="mini" key={i}> {tag} </Label>);

  return <div>
      <Helmet title={`${project.frontmatter.title} | GradeCalculate.com`} />
      <Navbar {...props} />

      <div className="hero-image">
        <Slider {...settings}>{images}</Slider>
      </div>
      <Container className="container">
        <Header as="h1">
          {project.frontmatter.title}
          <a href={project.frontmatter.url} className="site-link">
            {" "}
            <Icon name="arrow circle right" />
          </a>
          <Header.Subheader>
            {moment(project.frontmatter.date).format("MMM Do YYYY")}
            <Label size="mini" color={getTypeData(project.frontmatter.type).color}>
              <Icon name={getTypeData(project.frontmatter.type).icon} />
              {project.frontmatter.type}
            </Label>
            <Label size="mini" color={getStatusColor(project.frontmatter.status)}>
              {project.frontmatter.status}
            </Label>
          </Header.Subheader>
        </Header>
          <Header>{tags}</Header>

        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </Container>
    </div>;
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
               status
             }
           }
         }`;
