import React from 'react';
import ReactPlayer from 'react-player';

class VideoItem extends React.Component {

    render() {

        const { title, youTubeUrl, synopsis} = this.props;

        return (

            <div className="content-container">
                <h2>{title}</h2>
                <div className="player-wrapper">
                    <ReactPlayer
                        className='react-player'
                        url={youTubeUrl}
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </div>
                <div>{synopsis}</div>
            </div>
        );
    }

};

export default VideoItem;
