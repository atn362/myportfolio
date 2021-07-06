import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class About extends Component {
    render() {
        return(

            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="about-grid">
                <Cell col={12}>
           <h1>About Me</h1>

           <img
                        src="https://atn362.github.io/updated-portfolio/images/IMG_5433.jpeg"
                        alt="profile-pic"
                        className="profile-pic" />
            <p>Hi there. My name is Alexander Norton. I am currently attending the full stack boot camp
                at the University of Minnesota. Projected to graduate in the Summer of 2021, I am seeking employment
                in the coding/programming field. I have a passion for web design and development, reaching back to my
                earliest programming years in High School. I have periodically created sites for friends and family over
                the years
                and hope to apply to skills to the field once I am employer ready. Thanks!
            </p>
            
            </Cell>
                </Grid>
            </div>

        )
    }
}

export default About;