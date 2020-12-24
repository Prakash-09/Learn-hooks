import React from 'react';
// import { Button } from 'react-bootstrap';

function Button({handleClick, children}) {
    // console.log("Rendering Button - ", children)
    return(
        <div>
            <button onClick={handleClick} > {children}</button>
        </div>
    );
}
export default React.memo(Button);