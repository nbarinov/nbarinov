import React from 'react';

import { Link } from 'gatsby';

import profilePic from 'images/profile-pic.jpeg';

import './Header.css';

export default () =>
    <header className="Header">
        <h1 className="Header__title">
            <Link to="/" className="Header__link">
                <img src={profilePic} alt="Никита Баринов" className="Header__profile-pic" />
                Никита Баринов
            </Link>
        </h1>
    </header>;