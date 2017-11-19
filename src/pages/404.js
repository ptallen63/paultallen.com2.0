import React from 'react'
import {Container} from 'semantic-ui-react';
import Navbar from '../components/Navbar';

const NotFoundPage = (props) => (
  <div>
    <Navbar {...props}/>
  <Container>

    <h1>NOT FOUND</h1>
    <div>
      <h1>404: Yikes! Might want to back up.</h1>
      <iframe
        src="//giphy.com/embed/ryn10EFwFk2ME"
        width="480"
        height="269.76"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        />
      <p>
        <a href="https://giphy.com/gifs/cat-fail-ryn10EFwFk2ME">via GIPHY</a>
      </p>
      <p>It appears that the page you were looking for is not here.</p>
        </div>
    
  </Container>
    </div>
);

export default NotFoundPage
