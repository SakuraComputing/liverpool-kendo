import React from 'react';
import ReactPlayer from 'react-player';

class Video extends React.Component {
    render () {
        return (
            <div className="content-container">
                <h2>Japanology Kendo</h2>
                <div className="player-wrapper">
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=8Ea2ih7uNW4'
                        width='100%'
                        height='100%'
                    />
                </div>
                <div>30 minute programme about kendo and what you should expect to get from it</div>
                <h2>Mochida Sensei 10th Dan</h2>
                <div className="player-wrapper">
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=_XHSZ-sLG3I&t=6s'
                        width='100%'
                        height='100%'
                    />
                </div>
                <div>Kendo is a lifelong study one in which experience is considered more important than physique</div>
            </div>
        )
    }
}
export default Video;