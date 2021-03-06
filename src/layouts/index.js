import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// import './index.css'
import "semantic-ui-css/semantic.min.css";
import favicon from '../images/favicon.ico';
import Footer from '../components/Footer';



const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Paultallen.com"
      meta={[
        {
          name: "description",
          content:
            "The personal site for Paul T. Allen III of Columbia, SC. I am a developer, technologist, and strategist."
        },
        {
          name: "author",
          conent: "Paul Allen"
        },
        {
          name: "keywords",
          content:
            "Paul Allen, Developer, Technologist, CRM, Salesforce, Higher Education"
        },
        {
           name:"google-site-verification",
          content:"UBDcYMiVGZ_KUA8M3P8S7EOTVrMRtEfIoYCDLw7WS0w",
        }
      ]}
    >
      <link rel="shortcut icon" href={favicon} />
      
    </Helmet>
    <div style={{}}>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
