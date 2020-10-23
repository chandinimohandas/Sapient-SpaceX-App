import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import '../styles/mission-card.css';

export default function MissionCard(props) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className="image"
                    image="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
                />
                <CardContent>
                    <p className='details-container'>
                        <span className="title">FalconSat #1</span>
                        <span><b>Mission Ids:</b></span>
                        <span>• &#123;list Mission Ids&#125;</span>
                        <span><b>Launch year: </b>2006</span>
                        <span><b>Successful Launch: </b>false</span>
                        <span><b>Successful Landing: </b>true</span>
                    </p>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
