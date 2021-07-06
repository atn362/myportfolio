import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                        src="https://atn362.github.io/updated-portfolio/images/IMG_5433.jpeg"
                        alt="profile-pic"
                        className="profile-pic" />

                        <div className="banner-text">
                            <h1>Junior Full Stack Developer</h1>

                        <hr/>
                        <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB</p>

                        <div className="social-links">
                            {/*LinkedIn Icon Link*/}
                            <a href="https://www.linkedin.com/in/alex-norton-530aa2a8/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                             {/*GitHub Icon Link*/}
                             <a href="https://github.com/atn362" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                             {/*Twitter Icon Link*/}
                             <a href="https://twitter.com/AlexNor77911064" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square"  aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;