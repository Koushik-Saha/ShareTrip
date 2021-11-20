import React from 'react'
import './Header.scss'
import TopNavbar from "./components/TopNavbar";
import SearchModifier from "./components/SearchModifier";


const Header = () => {
    return (
        <div className="header-wrap">
            <TopNavbar/>
            <SearchModifier/>
        </div>
    )
}

export default Header