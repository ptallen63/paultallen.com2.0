const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const projectTemplate = path.resolve("src/templates/project.js");

  return graphql(`{
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
    }`).then(res => {
    if (res.errors) {
      return Promoise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({ path: node.frontmatter.path, component: projectTemplate });
    });
  });
};
