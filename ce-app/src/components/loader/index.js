import React from 'react';

import './index.scss';

const Loader = (props) => {

    const { imageLoader } = props;

    return (
        <React.Fragment>
            { imageLoader && 
                <div class="loader"></div>
            }
            {
                !imageLoader &&
                <div className="loading-dots">
                    <div className="loading-dots--dot"></div>
                    <div className="loading-dots--dot"></div>
                    <div className="loading-dots--dot"></div>
                </div>
            }
        </React.Fragment>
    );

}

export default Loader;