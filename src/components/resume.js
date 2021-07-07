import React, { Component } from 'react';
import { CardTitle, CardActions, Card} from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            
            <div className="resume-card">
            <Card shadow={0} style={{width: '350px', height: '350px', background: 'url(https://user-images.githubusercontent.com/77468756/124702622-43edbc80-deb6-11eb-86e7-ee816ac121a6.png) center / cover', margin: 'auto'}}>
    <CardTitle expand />
    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
            Image.jpg
        </span>
    </CardActions>
</Card>

<Card shadow={0} style={{width: '350px', height: '350px', background: 'url(https://user-images.githubusercontent.com/77468756/124702626-45b78000-deb6-11eb-97a7-d9a072246fa9.png) center / cover', margin: 'auto'}}>
<CardTitle expand />
<CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
        Image.jpg
    </span>
</CardActions>
</Card>

</div>
        )
    }
}

export default Resume;