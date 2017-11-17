import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import "semantic-ui-css/semantic.min.css";

import Footer from '../components/Footer';

//TODO: Add header
//TODO: adjust site meta data
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Paultallen.com"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header /> */}
    <div
      style={{
        margin: '0 auto',
        
        
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
