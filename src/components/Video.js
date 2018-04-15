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
                        controls={true}
                    />
                </div>
                <div>30 minute programme about kendo and what you should expect to get from it.</div>
                <h2>Mariko Yamamoto - Women's Kendo Champion</h2>
                <div className="player-wrapper">
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=D2Vei2tMgp4'
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </div>
                <div>Kendo shows your heart.</div>
                <h2>Kendo 8th Dan challenge the toughest exam in Japan</h2>
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=My-XxYovtkY"
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </div>
                <div>The pass rate is around 0.5%</div>
                <h2>Kendo Kata</h2>
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=9UfLrmDk8UE&list=PLaKZ0PAEUfwVTvUbLoUQh3pSxChpqOXpM"
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </div>
                <div>Kendo kata are vitally important as part of kendo study</div>
                <h2>Mochida Sensei 10th Dan</h2>
                <div className="player-wrapper">
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=_XHSZ-sLG3I&t=6s'
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </div>
                <div>Kendo is a lifelong study one in which experience is considered more important than physique</div>
            </div>
        )
    }
}
export default Video;
