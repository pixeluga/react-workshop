import React from 'react';

// Instruments
import links from '../theme/assets/links';

export default class Footer extends React.Component {
    render () {
        const linksJSX = links.map((link) => {
            return <li key = { link.id }>{ link.message }</li>;
        });

        return (
            <div className = 'footer'>
                <ul>{linksJSX}</ul>
                <span>&copy; 2018 Instagram</span>
            </div>
        );
    }
}
