import React, { Component } from 'react';
import { CardTitle, Card } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            
            <div className="resume-card">
            <Card shadow={0} style={{width: '350px', height: '350px', background: 'url(https://user-images.githubusercontent.com/77468756/124702622-43edbc80-deb6-11eb-86e7-ee816ac121a6.png) center / cover', margin: 'auto'}}>
    <CardTitle expand />
</Card>

<Card shadow={0} style={{width: '350px', height: '350px', background: 'url(https://user-images.githubusercontent.com/77468756/124702626-45b78000-deb6-11eb-97a7-d9a072246fa9.png) center / cover', margin: 'auto'}}>
<CardTitle expand />
</Card>

</div>
        )
    }
}

export default Resume;