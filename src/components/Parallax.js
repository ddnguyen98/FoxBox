import React from 'react';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const trans2 = (x, y) => `translate3d(${x / 15}px,${y / 20}px,0)`
const trans3 = (x, y) => `translate3d(${x / 8}px,${y / 20}px,0)`


function ParallaxBG() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

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
        </animated.div>
    );
    
}

export default ParallaxBG;