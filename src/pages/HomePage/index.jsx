import React from 'react'
import './HomePage.scss'
import TopMenu from "./components/TopMenu";


const HomePage = () => {
    return (
        <div className="homepage-wrap">
            <div className="homepage-wrap__section">
                <TopMenu />
            </div>
        </div>
    )
}

export default HomePage