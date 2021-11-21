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
               </div>
           </div>
       </>
    )
}

export default Scrolls