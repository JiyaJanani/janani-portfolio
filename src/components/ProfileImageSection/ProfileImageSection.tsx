import React from 'react';
import './ProfileImageSection.css';
import image from '../../assets/janani-crop-400x400.png';

function ProfileImageSection() {
    return (
        <div>
            <img className="profileImage" src={image} />
        </div>
    );
}

export default ProfileImageSection;
