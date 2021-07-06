import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '450',  margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/77468756/116157798-32688700-a6b3-11eb-912e-18700d09b36f.png) center/ cover'}}></CardTitle>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is JavaScript</h1></div>
            )
        } else if (this.state.activeTab === 2 ) {
            return(
                <Card shadow={5} style={{minWidth: '450',  margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/77468756/116157798-32688700-a6b3-11eb-912e-18700d09b36f.png) center/ cover'}}>Express Note Taker</CardTitle>
                <CardText>
                    This Project uses the NodeJs and Express packages to create, edit and delete notes.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Deployed Url</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            )
            
        }
        <Card shadow={5} style={{minWidth: '450',  margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/77468756/116157798-32688700-a6b3-11eb-912e-18700d09b36f.png) center/ cover'}}>Express Note Taker</CardTitle>
        <CardText>
            This Project uses the NodeJs and Express packages to create, edit and delete notes.
        </CardText>
        <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Deployed Url</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    }
    
    

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple> 
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
        )
    }
}

export default Projects;