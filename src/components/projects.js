import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card
            shadow={5}
            style={{ width: "250px", height: "250px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://user-images.githubusercontent.com/77468756/124655665-c601c500-de65-11eb-9ec1-613db3e1f3d9.png) center/ cover",
              }}
            ></CardTitle>
            <CardText>
              Quiz Project: One of my first projects where I was becoming
              comfortable with both HTML syntax and styling with CSS.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/atn362/quiz-homework.git"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button
                href="https://atn362.github.io/quiz-homework//"
                target="_blank"
                colored
              >
                Deployed Url
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card
            shadow={5}
            style={{ width: "250px", height: "250px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://user-images.githubusercontent.com/77468756/120897772-73768400-c5ed-11eb-8154-663456b1f456.png) center/ cover",
              }}
            ></CardTitle>
            <CardText>
              Updated Portfolio: This was my original updated Portfolio, using
              solely HTML and CSS.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/atn362/updated-portfolio.git"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button
                href="https://atn362.github.io/updated-portfolio/"
                target="_blank"
                colored
              >
                Deployed Url
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card
            shadow={5}
            style={{ width: "250px", height: "250px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://user-images.githubusercontent.com/77468756/124654103-be412100-de63-11eb-86f6-32457800397b.png) center/ cover",
              }}
            ></CardTitle>
            <CardText>
              Weather App: This is a Weather I created using primarily
              JavaScript, while linking it to free weather API.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/atn362/weather_app.git"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button
                href="https://atn362.github.io/weather_app/"
                target="_blank"
                colored
              >
                Deployed Url
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card
            shadow={5}
            style={{ width: "250px", height: "250px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://user-images.githubusercontent.com/77468756/124655238-35c38000-de65-11eb-8264-574a3004fcc4.png) center/ cover",
              }}
            ></CardTitle>
            <CardText>
              Password Generator: This was the first project where the primary
              language was JavaScript.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/atn362/password-generator.git"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button
                href="https://atn362.github.io/password-generator/"
                target="_blank"
                colored
              >
                Deployed Url
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card
            shadow={5}
            style={{ width: "250px", height: "250px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://user-images.githubusercontent.com/77468756/116157798-32688700-a6b3-11eb-912e-18700d09b36f.png) center/ cover",
              }}
            ></CardTitle>
            <CardText>
              Express Note Taker: This Project uses the NodeJs and Express
              packages to create, edit and delete notes.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/atn362/express-note-taker.git"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button
                href="https://mysterious-escarpment-41652.herokuapp.com/"
                target="_blank"
                colored
              >
                Deployed Url
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card
            shadow={5}
            style={{ width: "250px", height: "250px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://user-images.githubusercontent.com/77468756/124652158-630e2f00-de61-11eb-9b35-602f496ab5cb.png) center/ cover",
              }}
            ></CardTitle>
            <CardText>
              Musical Musings: Group Project #2, using node and express to
              upload and comment on user's musical opinions.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/atn362/Musical-Musings.git"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button
                href="https://intense-dusk-91957.herokuapp.com/"
                target="_blank"
                colored
              >
                Deployed Url
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>NodeJS/Express</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          {this.toggleCategories()}
        </section>
      </div>
    );
  }
}

export default Projects;
