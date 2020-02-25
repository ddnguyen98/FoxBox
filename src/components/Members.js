import React, { Component } from 'react';
import membersJSON from '../json/members';



class Members extends Component {
    render() {
        let owners = [];
        let admin = [];
        let mods = [];

        // Checks each rank in JSON and stores it in simple array
        membersJSON.forEach(e => {
            if (e.rank === "Owner") {
                owners.push(e);
            }
            else if (e.rank === "Admin") {
                admin.push(e);
            }
            else {
                mods.push(e);
            }
        });

        // Shoots out data based on arrays
        return (
            <div>
                Members
                <h1>Owners</h1>
                {owners.map((e, index) => (
                    <div key={index}>
                        <img src={`./images/${e.image}`} alt={`${e.username}`} width="100" height="100"/>
                        <h2>{e.username}</h2>
                        <h3>{e.main}</h3>
                        <h4>{e.secondary}</h4>
                        <p>Games playing: {e.other}</p>
                        <p>{e.bio}</p>
                    </div>
                ))}
                <h1>Admin</h1>
                {admin.map((e, index) => (
                    <div key={index}>
                        <img src={`./images/${e.image}`} alt={`${e.username}`} width="100" height="100"/>
                        <h2>{e.username}</h2>
                        <h3>{e.main}</h3>
                        <h4>{e.secondary}</h4>
                        <p>Games playing: {e.other}</p>
                        <p>{e.bio}</p>
                    </div>
                ))}
                <h1>Mods</h1>
                {mods.map((e, index) => (
                    <div key={index}>
                        <img src={`./images/${e.image}`} alt={`${e.username}`} width="100" height="100"/>
                        <h2>{e.username}</h2>
                        <h3>{e.main}</h3>
                        <h4>{e.secondary}</h4>
                        <p>Games playing: {e.other}</p>
                        <p>{e.bio}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Members;