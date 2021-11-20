import React from 'react'
import '../Header.scss'

const TopNavbar = () => {
    return (
        <div className="top-nav">
            <div className="container">
                <div className="d-flex align-items-center flex-row p-0">
                    <div className="top-nav-right d-flex flex-row">
                        <div className="top-nav-right-flex d-flex align-items-center flex-row">
                            <div className="top-nav-right__spin-image">
                                <img src="/assets/spin.png" alt="spin" className="img-fluid"/>
                            </div>
                            <div className="top-nav-right__title ml-2 mt-1">
                                <span>Spin To Win</span>
                            </div>
                        </div>
                        <div className="top-nav-right__active">
                            <img src="/assets/switch.png" alt="spin" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="top-nav-left d-flex flex-row align-items-center">
                        <div className="top-nav-left__brand">
                            <img src="/assets/logo.png" alt="share_trip" className="img-fluid"/>
                        </div>
                        <div className="top-nav-left__items d-flex flex-row">
                            <div className="item-value">
                                <span>Flight</span>
                            </div>
                            <div className="item-value">
                                <span>Bus</span>
                            </div>
                            <div className="item-value">
                                <span>Hotel</span>
                            </div>
                            <div className="item-value">
                                <span>Visa</span>
                            </div>
                            <div className="item-value">
                                <span>Visa Guide</span>
                            </div>
                            <div className="item-value">
                                <span>Group Request</span>
                            </div>
                            <div className="item-value">
                                <span>Travel Advisory</span>
                            </div>
                            <div className="item-value">
                                <span>Promotions</span>
                            </div>
                            <div className="item-value">
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar