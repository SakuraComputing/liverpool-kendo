import React from 'react';
import SimpleMap from './GoogleMap';

export const Address = () => {
    return (
        <div className="content-container">
            <p></p>
            <li>The Egg Dance Studio</li>
            <li>IM Marsh Campus</li>
            <li>Mossley Hill Road</li>
            <li>Aigburth</li>
            <li>Garston</li>
            <li>L17 6BD</li>

            <li>Wednesdays 7.30pm to 9.30pm</li>

            <li>Contact: 07752 969106</li>

            <div style={{width: '100%', height: '400px'}}>
                <SimpleMap/>
            </div>


        </div>

    );
};
export default Address;
