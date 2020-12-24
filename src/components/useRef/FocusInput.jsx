import React, {useEffect, useRef} from 'react';

export default function FocusInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return(
        <div className="text-center">
            {/* {console.log("inputRef", inputRef)} */}
            <input ref={inputRef} type="text" /><br />
            <input ref={inputRef}  type="text" />
        </div>
    );
}