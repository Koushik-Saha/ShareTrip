import React from 'react'
import '../Header.scss'

const SearchModifier = () => {
    return (
        <div className="d-flex align-items-center justify-content-center flex-row search-modifier">
            <div className="container">
                <div className="d-flex flex-row align-items-center">
                    <div className="search-modifier__search-button">
                        <button type="button" className="btn btn-primary">MODIFY SEARCH</button>
                    </div>
                    <div className="search-modifier__return d-flex align-items-center flex-row ">
                        <div className="search-modifier-title d-flex flex-column align-items-start p-0">
                            <span>Return Journey</span>
                            <span>Chottogram - Dhaka</span>
                            <span>24 June, 2021 (Thursday)</span>
                        </div>
                        <div className="search-modifier-frame">
                            <div className="search-modifier-frame__image">
                                <img src="/assets/bus.png" alt="spin" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="search-modifier__compare d-flex align-items-center justify-content-center flex-row">
                        <div className="search-modifier__compare__image">
                            <img src="/assets/compare.png" alt="spin" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="search-modifier__onward d-flex align-items-center flex-row ">
                        <div className="search-compare-title d-flex flex-column align-items-start p-0">
                            <span>Return Journey</span>
                            <span>Chottogram - Dhaka</span>
                            <span>24 June, 2021 (Thursday)</span>
                        </div>
                        <div className="search-compare-frame">
                            <div className="search-compare-frame__image">
                                <img src="/assets/bus_going.png" alt="spin" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModifier