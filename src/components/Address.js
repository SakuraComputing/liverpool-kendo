import React from 'react';
import DojoMap from './GoogleMap';

export const Address = () => {
  return (
    <div className="content-container">
      <h3> Where To Find Us</h3>
      <div>Childwall Sports and Science Academy</div>
      <div>Queens Drive</div>
      <div>Childwall</div>
      <div>L15 6XZ</div>

      <h3>Practice Session Time</h3>
      <li>Saturdays 2.00pm to 4.00pm</li>

      <li>Contact: 07515 546732</li>

      <p></p>
      <div style={{ width: '100%', height: '400px' }}>
        <DojoMap />
      </div>

      <p>
        * Beginners always welcome but we ask you join the British Kendo
        Association after an introductory period.
      </p>
    </div>
  );
};
export default Address;
