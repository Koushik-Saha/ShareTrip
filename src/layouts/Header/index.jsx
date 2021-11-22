import React from 'react'
import './Header.scss'
import TopNavbar from "./components/TopNavbar";
import SearchModifier from "./components/SearchModifier";
import PageHead from "../PageHead";


const Header = () => {
    return (
        <>
            <PageHead title={`HomePage | ShareTrip`} />
            <div className="header-wrap">
                <TopNavbar/>
                <SearchModifier/>
            </div>
        </>
    )
}

export default Header