import React from "react";
import {Link} from "react-router-dom"

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <Link className='header-a' to="/">The Meal</Link>
            </header>
        )
    }
}

export default Header;