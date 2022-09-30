import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='container-fluid mt-5 navdiv'>
        <div className="container navcont1">
            <div className="row mt-3">
                <div className="col-3">
                    <ul>
                        <li className='mt-3'><b>Support</b></li>
                        <li className='mt-3'>Help Center</li>
                        <li className='mt-3'>AirCover</li>
                        <li className='mt-3'>Safety Information</li>
                        <li className='mt-3'>Supporting people with disabilities</li>
                        <li className='mt-3'>Cancelallation Options</li>
                        <li className='mt-3'>Report a neighbourhood concern</li>
                    </ul>
                </div>

                <div className="col-3">
                    <ul>
                        <li className='mt-3'><b>Community</b></li>
                        <li className='mt-3'>Airbnb.org disaster relief housing</li>
                        <li className='mt-3'>Combating Discrimination</li>
                    </ul>
                </div>

                <div className="col-3">
                    <ul>
                        <li className='mt-3'><b>Hosting</b></li>
                        <li className='mt-3'>Try hosting</li>
                        <li className='mt-3'>Aircover for hosts</li>
                        <li className='mt-3'>Explore hosting resources</li>
                        <li className='mt-3'>Visit out hosting forum</li>
                        <li className='mt-3'>How to host responsibly</li>
                    </ul>
                </div>

                <div className="col-3">
                    <ul>
                        <li className='mt-3'><b>Airbnb</b></li>
                        <li className='mt-3'>Newsroom</li>
                        <li className='mt-3'>Learn about new features</li>
                        <li className='mt-3'>Letter from our founders</li>
                        <li className='mt-3'>Careers</li>
                        <li className='mt-3'>Investors</li>

                    </ul>
                </div>
            </div>
        </div>

        <div className="container mt-3 pt-2 pb-3">
            <p>© 2022 Airbnb, Inc. - Privacy  - Terms - Sitemap - Company details</p>
        </div>
    </div>
  )
}
