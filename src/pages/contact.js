import React from "react";
import Helmet from 'react-helmet';
import { Header, Container, Icon, Message, Modal, Button, Segment } from "semantic-ui-react";
import axios from "axios";
import classnames from "classnames";
import isEmpty from "lodash/isEmpty";

import '../styles/contact.scss';
import Navbar from '../components/Navbar';
export default class ContactForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.onOpen = this.onOpen.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      loading: false,
      success: false,
      errors: {},
      submited: false,
      valid: false,
      formData: {
        name: "",
        email: "",
        message: ""
      }
    };
  }

  handleChange = e => {
    const { formData } = this.state;

    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      formData[e.target.name] = e.target.value;
      this.setState({ formData, errors });
    } else {
      formData[e.target.name] = e.target.value;
      this.setState({ formData });
    }
  };

  validate() {
    const { email, name, message } = this.state.formData;
    let errors = {};
    //email
    if (email === "") errors.email = "Email can not be empty";
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email))
      errors.email = "Email must be in the patern of a valid email address";

    //email
    if (name === "") errors.name = "Name can not be empty";

    //
    if (message === "") errors.message = "Message can not be empty";

    this.setState({ errors });
    if (isEmpty(errors)) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    //start loading
    this.setState({ loading: true });

    const { formData } = this.state;

    if (this.validate()) {
      //Success
      axios
        .post("/mailjet", formData)
        .then(res => {
          this.setState({ success: true, loading: false });
        })

        .catch(err => {
          this.setState({
            loading: false,
            errors: {
              server: "Yike!, Something went wrong. We are working on it. "
            }
          });
        });
    } else {
      //Fail dispaly errors
      this.setState({ loading: false });
    }
  }

  render() {
   

    return <div>
        <Helmet title="Contact | Paultallen.com" />
        <Navbar {...this.props} />
        <Container textAlign='center' >
          <Segment textAlign='left' className="wrapper">
            <Header as="h1">Contact Me</Header>

            <p>
              Please complete this form with your name and email, and I will
              get back to you as soon as possible. I usually try to respond
              within 1-2 business days, but depending on volume it may be
              longer.
            </p>

            <form noValidate onSubmit={this.handleSubmit} className={classnames(
                "ui",
                "form",
                {
                  loading: this.state.loading,
                  success: this.state.success,
                  error: !isEmpty(this.state.errors)
                }
              )}>
              {!this.state.success && <div>
                  <div className={classnames("field", "required", {
                      error: this.state.errors.name
                    })}>
                    <label>First Name</label>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="First Name" />
                  </div>
                  <div className={classnames("field", "required", {
                      error: this.state.errors.email
                    })}>
                    <label>Email</label>
                    <input onChange={this.handleChange} type="email" name="email" placeholder="Email" />
                  </div>

                  <div className={classnames("field", "required", {
                      error: this.state.errors.message
                    })}>
                    <label>Message</label>
                    <textarea onChange={this.handleChange} name="message" rows="8" />
                  </div>

                  <Button type="submit">
                    <Icon name="send" />
                    Send
                  </Button>
                </div>}
              <Message success icon="check" header="Success" content="I will respond to your message as soon as I can." />

              <Message icon="warning" header="Error" content={<ul>
                    {Object.keys(this.state.errors).map(key => (
                      <li key={key}>{this.state.errors[key]}</li>
                    ))}
                  </ul>} error />
            </form>
          </Segment>
        </Container>
      </div>;
  }
}

ContactForm.propTypes = {
  
};
