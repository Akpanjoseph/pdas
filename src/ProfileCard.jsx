import React from 'react';

const ProfileCard = (props) => {
    const {title,handle,imageUrl,imageAlt} = props
    return (
        <div>
            <img src={imageUrl} alt={imageAlt} />
           <p> Title is {title}</p>
           <p>Handle is {handle} </p>
        </div>
    );
}

export default ProfileCard;
