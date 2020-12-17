import React, { useEffect, useState } from 'react'; 

export default function HooksMouse() {
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const mousePos = (e) => {
        // console.log("Testing mousePos")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        // console.log('useEffect')
        window.addEventListener('mousemove', mousePos)

        return() => {
            // alert('Are you really close this component ?')
            // console.log("Component will unmount")
            window.removeEventListener('mousemove', mousePos)
        }
    }, [])  //The empty array [] defines here is useEffect render only one time. that means useEffect do not depend on any other particular state updates
    return(
        <div className="text-center"> 
        <h4>This is hooks(functional) component mouse posistion</h4>
        <h6>by using useEffect</h6>
            X: {x} Y: {y}
        </div>
    );
}