import React from 'react'
import './HomePage.scss'
import Scrolls from "./components/Scrolls";


const HomePage = () => {
    return (
        <div className="homepage-wrap mt-4">
            <div className="homepage-wrap__section container">
                <Scrolls/>
            </div>
        </div>
    )
}

export default HomePage