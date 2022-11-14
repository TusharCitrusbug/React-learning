import React, { useState } from 'react'

let audio = new Audio('shaktiman.mp3');
let class_name = "App-logo-stoped";

function initial() {
    return false;
}
export default function Headers() {
    const [count, setCount] = useState(() => initial());
    function play() {
        audio.play();
        class_name='App-logo';
        setCount(prevcount => true ? prevcount === false : true)
    }
    function pause() {
        audio.pause();
        class_name='App-logo-stoped';
        setCount(prevcount => false ? prevcount === true : false)
    }

    function operation() {

        if (count === true) {
            pause();
        } else {
            play();
        }
    }

    return (
        <div className='image_oneee'>
            <img src="shaktiman.png" onClick={operation} className='shakriman_img' alt="logo" />
            <img src='8e8ffd94534289.Y3JvcCwxNDAwLDEwOTUsMCwyMzI-removebg-preview.png' className={class_name} alt="logo" />
        </div>
    )
}
