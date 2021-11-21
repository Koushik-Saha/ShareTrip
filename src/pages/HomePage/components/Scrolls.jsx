import React from 'react'
import '../HomePage.scss'


const Scrolls = () => {
    return (
       <>
           <div className="d-flex flex-row align-items-start">
                <div className="left_panel">
                    <div className="left_panel__rectangle">
                    </div>
                </div>
               <div className="right_panel">
                   <span>48 Available Buses</span>
                   <nav className="nav nav-pills flex-column flex-sm-row tab_bar">
                       <a className="flex-sm-fill text-sm-center nav-link" aria-current="page" href="/">
                           <div className="d-flex flex-row align-items-center">
                               <div className="tab_bar__image">
                                   <img src="/assets/dimond.png" alt="spin" className="img-fluid"/>
                               </div>
                               <div className="tab_bar__title">
                                   Earliest Buses
                               </div>
                           </div>
                       </a>
                       <a className="flex-sm-fill text-sm-center nav-link active" href="/">
                           <div className="d-flex flex-row align-items-center">
                               <div className="tab_bar__image">
                                   <img src="/assets/bottol.png" alt="spin" className="img-fluid"/>
                               </div>
                               <div className="mx-3">
                                   Cheapest Buses
                               </div>
                           </div>
                       </a>
                       <a className="flex-sm-fill text-sm-center nav-link" href="/">
                           <div className="d-flex flex-row align-items-center">
                               <div className="tab_bar__image">
                                   <img src="/assets/flash.png" alt="spin" className="img-fluid"/>
                               </div>
                               <div className="tab_bar__title">
                                   Available Seats
                               </div>
                           </div>
                       </a>
                       <a className="flex-sm-fill text-sm-center nav-link" href="/">
                           <div className="d-flex flex-row align-items-center">
                               <div className="tab_bar__image">
                                   <img src="/assets/flash.png" alt="spin" className="img-fluid"/>
                               </div>
                               <div className="tab_bar__title">
                                   Fastest Trips
                               </div>
                           </div>
                       </a>
                   </nav>

                   <div className="ticket_list d-flex flex-column align-items-start mt-4">
                            <div className="uppper d-flex align-items-start flex-row">
                                <div className="left_side">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="left_side__ac">
                                            AC
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="left_side__en">Hanif Enterprize</span>
                                            <span className="left_side__enlow">31-DHK-CTG(D)</span>
                                        </div>
                                        <div className="left_side__ac d-flex flex-row align-items-center">
                                            <div className="left_side__ac__image">
                                                <img src="/assets/doller.png" alt="spin" className="img-fluid"/>
                                            </div>
                                            <div className="left_side__ac mx-2">
                                                <span>55</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <div className="destination d-flex flex-column">
                                            <span className="destination__first">From</span>
                                            <span className="destination__secound">DHAKA 11:30 PM</span>
                                            <span className="destination__third">Kolabagan Counter</span>
                                            <span className="destination__fourth">22 June 2021</span>
                                        </div>
                                        <div className="middle_des d-flex flex-column align-items-center">
                                            <div className="middle_des__image">
                                                <img src="/assets/blue_bus.png" alt="spin" className="img-fluid"/>
                                            </div>
                                            <span className="middle_des__title">16 Seats available</span>
                                            <span className="middle_des__sub_title">6h 00m</span>
                                        </div>
                                        <div className="destination d-flex flex-column">
                                            <span className="destination__first">To</span>
                                            <span className="destination__secound">CHOTTOGRAM 05:30 AM</span>
                                            <span className="destination__third">Dampara Counter</span>
                                            <span className="destination__fourth">23 June 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="right_side d-flex align-items-end justify-content-end flex-column">
                                    <span>Per Person</span>
                                    <h4>BDT 750</h4>
                                    <h6>BDT 775</h6>
                                    <button type="button" className="btn btn-primary">VIEW SEATS</button>
                                </div>
                            </div>
                   </div>


               </div>
           </div>
       </>
    )
}

export default Scrolls