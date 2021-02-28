import React from 'react';

const Covid = () => (
    <div className="covid-content" >
        <div className="covid-title" >Coronavirus (COVID-19)</div>
        <div className="covid-desc">Due to COVID the dojo will remain closed until the government restrictions are lifted. (See Link below)</div>
        <div className="covid-footer" >
            <a 
                href="https://www.gov.uk/guidance/coronavirus-covid-19-grassroots-sports-guidance-for-safe-provision-including-team-sport-contact-combat-sport-and-organised-sport-events"
                className="covid-gov-link"
            >
                Government Contact Combat Sport Guidelines
            </a>
        </div>
    </div>
);
export default Covid;