import React from 'react';
import DojoMap from './GoogleMap';

export const Address = () => {
    return (
        <div className="content-container">
            <h3> Where To Find Us</h3>
            <div>The Egg Dance Studio</div>
            <div>IM Marsh Campus</div>
            <div>Mossley Hill Road</div>
            <div>Aigburth</div>
            <div>Garston L17 6BD</div>

            <h3>Practice Session Time</h3>
            <li>Wednesdays 7.00pm to 9.30pm</li>

            <li>Contact: 07515 546732</li>

            <p></p>
            <div style={{width: '100%', height: '400px'}}>
                <DojoMap/>
            </div>

            <p>* Beginners always welcome but we ask you join the British Kendo Association after an introductory period.</p>
        </div>
    );
};
export default Address;
