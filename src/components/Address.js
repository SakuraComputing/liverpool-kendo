import React from 'react';
import SimpleMap from './GoogleMap';

export const Address = () => {
    return (
        <div className="content-container">
            <h3> Where To Find Us</h3>
            <div>The Egg Dance Studio</div>
            <div>IM Marsh Campus</div>
            <div>Mossley Hill Road</div>
            <div>Aigburth</div>
            <div>Garston</div>
            <div>L17 6BD</div>

            <h3>Practice Session Time</h3>
            <li>Wednesdays 7.30pm to 9.30pm</li>

            <li>Contact: 07752 969106</li>

            <p></p>
            <div style={{width: '100%', height: '400px'}}>
                <SimpleMap/>
            </div>

            <p>* Beginners always welcome but we ask you join the British Kendo Association after an introductory period.</p>
        </div>
    );
};
export default Address;
