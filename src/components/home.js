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
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;