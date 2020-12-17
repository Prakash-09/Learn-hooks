import React, {useEffect, useRef} from 'react';

export default function FocusInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return(
        <div className="text-center">
            <input ref={inputRef} type="text" />
            <input  type="text" />
        </div>
    );
}