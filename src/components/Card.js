import React from 'react'
import './Card.css'

export default function Card({ place, img1, img2, img3, host, price, date, rating }) {        // props destructuring
    return (
        <div className='container-fluid carddiv pt-3'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100 cardimg" alt="first"/>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100 cardimg" alt="second"/>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100 cardimg" alt="third"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className='textdiv'>
                <div className="textleft">
                    <div><b>{place}</b></div>
                    <div>hosted by {host}</div>
                    <div>{date} Oct</div>
                    <div><b>₹{price} night</b></div>
                </div>
                <div className="textright">
                    {rating}
                </div>
            </div>
        </div>
    )
}
