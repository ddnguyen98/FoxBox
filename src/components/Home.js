import React, { Component } from 'react';

class Home extends Component {
    render() {
          
        return (
            <div>
                <img src="./images/test.jpg" alt="Heading" className="headingImg"/>
                <h2>Heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Lobortis feugiat vivamus at augue eget arcu dictum varius. 
                    Maecenas ultricies mi eget mauris pharetra et ultrices neque. 
                    Vitae purus faucibus ornare suspendisse sed. 
                    Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Velit egestas dui id ornare. 
                    Tortor posuere ac ut consequat semper viverra nam. 
                </p>

                <div class="articles">
                    <img src="./images/dog.png" alt="Dog" width="500" height="300" />
                    <div className="articlesContent">
                        <h2>Header</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Lobortis feugiat vivamus at augue eget arcu dictum varius. 
                        </p>
                    </div>
                </div>
                <div class="articles">
                    <div className="articlesContent">
                        <h2>Header</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Lobortis feugiat vivamus at augue eget arcu dictum varius. 
                        </p>
                    </div>
                    <img src="./images/dog.png" alt="Dog" width="500" height="300" />
                </div>
            </div>            
        );
    }
}

export default Home;