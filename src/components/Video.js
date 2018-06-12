import React from 'react';
import videoJson from '../../data/video';
import VideoItem from "./VideoItem";

class Video extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videoArray: []
        }
    }

    componentDidMount() {
        const videoArray = videoJson["videos"];
        this.setState({
            videoArray: videoArray
        });
    }

    render () {

        const { videoArray } = this.state;

        return (
                <div>
                    {
                        videoArray.map((video => (
                            <div key={video.id} className="content-container">
                            <VideoItem {...video}/>
                        </div>
                        )))
                    }
                </div>
        )
    }
}
export default Video;


