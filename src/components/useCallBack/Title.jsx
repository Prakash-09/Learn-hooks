import React from 'react';

function Title() {
    console.log('Rendering Title')

    return(
        <div className="m-2">
            <h5>Using useCallBack hook</h5>
        </div>
    );
}

export default React.memo(Title);