import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ icon, title }) => {
        return(
            <nav className="navbar" style = {style.nav}>
                <h1>
                    <i className={icon} /> {title}
                </h1>
                
            </nav>
        );
    }

Navbar.defaultProps = {
    title: 'easytrip',
    icon: 'fa fa-github'
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar

const style = {
    nav : {
        background: 'black',
        color: 'white'
    },
    activeStyle : {
        color: "aqua",
        fontWeight: "bold"
    }

}