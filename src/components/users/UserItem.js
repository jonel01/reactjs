import React from 'react';

const UserItem = ({ user: { username, html_url } }) => {
    
    return(
        <div className="card text-center">
            <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            <h3>{username}</h3>
        </div>
    );
}


export default UserItem