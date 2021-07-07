import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alexander Norton</h2>
            <img
              src="https://atn362.github.io/updated-portfolio/images/IMG_5433.jpeg"
              alt="profile"
              style={{ height: "150px" }}
              b
            />
            <h3>Please contact me through any of the following means.</h3>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <a href="mailto:atn362@gmail.com">  Contact Through Email</a></ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  <a href="tel:952-270-8875">  Contact Through Telephone</a></ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                <i className="fa fa-github-square" aria-hidden="true" />
                <a href="https://github.com/atn362"   rel="noopener noreferrer"
                  target="_blank">  Contact Through GitHub</a>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                <i className="fa fa-linkedin-square" aria-hidden="true" />
                <a href="https://www.linkedin.com/in/alex-norton-530aa2a8/"   rel="noopener noreferrer"
                  target="_blank"> Contact Through LinkedIn</a>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                <i className="fa fa-twitter-square" aria-hidden="true" />
                <a href="https://twitter.com/AlexNor77911064"   rel="noopener noreferrer"
                  target="_blank"> Contact Through Twitter</a>
                </ListItemContent>
              </ListItem>
            </List>
            </div>f
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
