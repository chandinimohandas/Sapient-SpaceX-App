import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import '../styles/mission-card.css';

export default function MissionCard(props) {
    const { mission: { image, missionName, missionIdList, launchDate, successfulLaunch, successfulLanding } } = props;
    return (
        <Card className='card'>
            <CardActionArea>
                <CardMedia
                    className="image"
                    image={image}
                />
                <CardContent>
                    <p className='details-container'>
                        <span className="title">{missionName}</span>
                        {missionIdList.length !== 0 && <span><b>Mission Ids:</b></span>}
                        {missionIdList && missionIdList.map((id, index) => {
                            return <span key={index}>{`• ${id}`}</span>
                        })}
                        <span><b>Launch year: </b>{launchDate}</span>
                        <span><b>Successful Launch: </b>{new String(successfulLaunch)}</span>
                        <span><b>Successful Landing: </b>{new String(successfulLanding)}</span>
                    </p>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

MissionCard.propTypes = {
    mission: PropTypes.object
};
