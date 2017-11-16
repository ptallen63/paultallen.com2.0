import React from "react";
import Helmet from 'react-helmet';
import { Button, Grid, Image, Header, Container } from "semantic-ui-react";
import Navbar from "../components/Navbar";

const buttonGroup = {
  paddingTop: "20px"
};
const AboutPage = (props) =>  (
      <div>
        <Helmet title='About | Paultallen.com' />
        {/* TODO: Add Meta Data */}
        <Container>
          <Navbar {...props} />
        </Container>

        <Container textAlign="center">
          <Header as="h1">About</Header>

          <Grid columns={2} stackable>
            <Grid.Column width={4}>
              <Image
                circular
                src="https://s3-us-west-2.amazonaws.com/paultallen.com/aboutPic+2.jpg"
                size="medium"
                shape="circular"
                centered
              />
              <div style={buttonGroup}>
                <a target="_blank" href="https://twitter.com/ptallen63">
                  <Button circular color="twitter" icon="twitter" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ptallen63">
                  <Button circular color="linkedin" icon="linkedin" />
                </a>
                <a target="_blank" href="https://github.com/ptallen63">
                  <Button circular secondary icon="github" />
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={12}>
              <Container textAlign="left">
                <p>
                  My path has been a bit different than most. I grew up in
                  Alabama where I went to school for finance and banking. My
                  first career was at{" "}
                  <a href="http://www.regions.com">Regions Bank </a>
                  in Birmingham, AL. I soon worked my way up to the management
                  team of a branch with a large deposit base. I was all of 23
                  years old managing a staff where the youngest member was 49. I
                  spent a great deal of time working on processes to increase
                  customer service ratings and developing spreadsheet models to
                  increase efficiencies and branch sales.{" "}
                </p>

                <p>
                  While on vacation in Egypt, I was recruited to move overseas
                  and do consulting work in the Middle East. Primarily working
                  in Egypt, I engaged with small companies who wanted to expand
                  their operations into western markets. Around this time the
                  Arab Spring of 2011 began, and I learned how to operate in an
                  environment that changed daily.
                </p>

                <p>
                  Just before leaving for Egypt, I met the woman who is now my
                  wife. It was wanting to marry her that brought me to my
                  current location in Columbia, SC in May of 2011. At the time,
                  I landed a job with a small university doing admissions and
                  recruiting for adult evening programs. I discovered that I
                  enjoyed working in this field and that I was a natural at
                  building processes and systems to reach this student
                  population.
                </p>

                <p>
                  In 2013, I came on board at USC’s{" "}
                  <a href="http://moore.sc.edu">
                    Darla Moore School of Business{" "}
                  </a>
                  to work within the graduate division with the{" "}
                  <a href="http://moore.sc.edu/pmba">
                    Professional MBA program
                  </a>. There I was a part of revolutionizing the way we
                  communicated with prospective students. I was able to design
                  and implement our communications model that led to higher
                  efficiency in recruiting students.
                </p>

                <p>
                  In August of 2016, I became the Marketing Technologist for the
                  entire university. In this role, I focus on finding technology
                  solutions to the challenges facing our marketing and
                  communications groups. I get to think outside of the box and
                  solve problems on a daily basis.
                </p>

                <p>
                  In my free time, I have become obsessed with programming, so
                  much so that my hobby has now integrated into my profession. I
                  spend a lot of time building apps to make life more fun. I
                  also really enjoy building products to help my wife in her
                  classroom. I am constantly learning more about different
                  programming languages.
                </p>

                <p>
                  I also enjoy spending time with my wife, learning how to dance
                  the
                  <a href="https://en.wikipedia.org/wiki/Carolina_shag">
                    {" "}
                    Carolina shag
                  </a>, running, and traveling.
                </p>
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );


AboutPage.propTypes = {};

export default AboutPage;