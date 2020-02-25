import React, { Component } from 'react';

import wanSound from '../sound/wan.mp3';
import UIfx from 'uifx'; 

const wan = new UIfx(wanSound)

class Home extends Component {
    render() {
          
        return (
            <div>
                Dogs on the daily
            </div>
        );
    }
}

export default Home;