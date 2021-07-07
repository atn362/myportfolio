import React, { Component } from 'react';
import { CardTitle, Card, Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return(

            <div className="resume-card">
            <div className="resume-pdf">
                <a href="https://docs.google.com/document/d/1-5ml1KZllWIdK4gbtlpaljFSNLSMK8HNxpPRYTUSLec/edit?usp=sharing" rel="noreferrer" target="_blank">
                    <p>Download Resume</p>
                </a>
            </div>
            
            
            <div className="resume-body">
            <Grid className="resume-grid">
                <Cell col={6}>       <Card shadow={0} style={{width: '350px', height: '350px', background: 'url(https://user-images.githubusercontent.com/77468756/124702622-43edbc80-deb6-11eb-86e7-ee816ac121a6.png) center / cover', margin: 'auto'}}>
    <CardTitle expand />
</Card></Cell>
                <Cell col={6}><Card shadow={0} style={{width: '350px', height: '350px', background: 'url(https://user-images.githubusercontent.com/77468756/124702626-45b78000-deb6-11eb-97a7-d9a072246fa9.png) center / cover', margin: 'auto'}}>
<CardTitle expand />
</Card></Cell>
            </Grid>
            </div>


</div>
        )
    }
}

export default Resume;