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
            <List>
              <ListItem>
                <ListItemContent icon="person"><a href="mailto:atn362@gmail.com">Contact Through Email</a></ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="person"><a href="tel:952-270-8875">Contact Through Telephone</a></ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="person"></ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="person"></ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
