import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

import wanSound from '../sound/wan.mp3';
import UIfx from 'uifx'; 

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 50}px,${y / 70}px,0)`
const trans2 = (x, y) => `translate3d(${x / 25}px,${y / 70}px,0)`
const trans3 = (x, y) => `translate3d(${x / 15}px,${y / 50}px,0)`

const wan = new UIfx(wanSound)


function ParallaxBG() {
    const [state, toggle] = useState(true);
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 700 } });
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 600, friction: 140 } }));

    return (
        <animated.div className="bgcontainer"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div alt="Background" className="bg" />
            <animated.div alt="Background" className="farbg" 
            style={{ transform: props.xy.interpolate(trans1) }}/>
            <animated.div alt="Background" className="midbg" 
            style={{ transform: props.xy.interpolate(trans2) }}/>
            <animated.div alt="Background" className="closebg" 
            style={{ transform: props.xy.interpolate(trans3) }}/>
            <animated.div alt="Logo" className="bglogo" 
            onClick={() => { wan.play(); toggle(!state);} }
            style={{
                transform: x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                  })
                  .interpolate(x => `scale(${x})`)
              }} 
            />
        </animated.div>
    );
    
}

export default ParallaxBG;