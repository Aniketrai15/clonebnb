import React from 'react'
import './Navbar.css'




export default function Navbar() {
    return (
        <div className="container-fluid" id='navbarouterdiv'>
            <div className="container pt-3 pb-3">
                <div className="row">
                <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-umbrella-beach fa-2x"></i></div>
                                <div className="btntext">Amazing Pools</div>
                            </div>
                        </button>
                    </div>
                    
                    <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-city fa-2x"></i></div>
                                <div className="btntext">Cities</div>
                            </div>
                        </button>
                    </div>

                    <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-sailboat fa-2x"></i></div>
                                <div className="btntext">Boating</div>
                            </div>
                        </button>
                    </div>

                    <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-volleyball fa-2x"></i></div>
                                <div className="btntext">Beach</div>
                            </div>
                        </button>
                    </div>

                    <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-campground fa-2x"></i></div>
                                <div className="btntext">Camping</div>
                            </div>
                        </button>
                    </div>

                    <div className="col-1">
                        <button type='button' className='navbtn' id='bnbbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-sharp fa-solid fa-mug-hot fa-2x"></i></div>
                                <div className="btntext">Bed & Breakfast</div>
                            </div>
                        </button>
                    </div>

                    <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-person-skiing-nordic fa-2x"></i></div>
                                <div className="btntext">Skiing</div>
                            </div>
                        </button>
                    </div>

                    <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-igloo fa-2x"></i></div>
                                <div className="btntext">Arctic</div>
                            </div>
                        </button>
                    </div>

                    <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-landmark fa-2x"></i></div>
                                <div className="btntext">historic homes</div>
                            </div>
                        </button>
                    </div>

                    <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-mountain-city fa-2x"></i></div>
                                <div className="btntext">Mountains</div>
                            </div>
                        </button>
                    </div>

                    <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-tree fa-2x"></i></div>
                                <div className="btntext">National Parks</div>
                            </div>
                        </button>
                    </div>

                    <div className="col-1">
                        <button type='button' className='navbtn'>
                            <div className="navbtndiv">
                                <div className="ficon"><i class="fa-solid fa-dog fa-2x"></i></div>
                                <div className="btntext">Pet friendly</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
