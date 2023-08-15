import React from 'react';

const ProfileCard = (props) => {
    const {title,handle} = props
    return (
        <div>
           <p> Title is {title}</p>
           <p>Handle is {handle} </p>
        </div>
    );
}

export default ProfileCard;
