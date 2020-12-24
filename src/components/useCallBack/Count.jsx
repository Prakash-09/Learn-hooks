import React from 'react';

function Count({text, value}) {
    // console.log('Rendering Count')

    return(
        <div className="m-2">
            {text} - {value}
        </div>
    );
}

export default React.memo(Count);