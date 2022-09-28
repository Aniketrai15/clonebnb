import React from 'react'
import Airbnb_logo from '../icons/Airbnb_logo.svg'

let headerstyle = {
  borderBottom: '0.05em solid #E5E4E2'
}

let btn1style = {
  backgroundColor: 'white',
  border: 'none',
}
let btn2style = {
  backgroundColor: 'white',
  border: 'none',
  borderLeft: '0.05em solid #E5E4E2',
  borderRight: '0.05em solid #E5E4E2'
}
let btn3style = {

  backgroundColor: 'white',
  border: 'none',
  color: 'grey'
}

let btn4style = {

  backgroundColor: '#ff385c',
  border: 'none',
  borderRadius: '100%',
  color: 'white'
}

let searchbarstyle = {
  height: '3em',
  width: '20em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '0.025em solid #E5E4E2',
  borderRadius: '40em',
  boxShadow: '0em 0.2em 0.1em #E5E4E2'
}

let becomehoststyle = {

  backgroundColor: 'white',
  border: 'none',
}

let userstyle = {
  backgroundColor: 'grey',
  color: 'white',
  display: 'inline-block',
  height: '1.5em',
  width: '1.5em',
  marginLeft: '1em'
}

let loginbtnstyle = {
  height: '2.5em',
  backgroundColor: 'white',
  border: '0.025em solid #E5E4E2',
  borderRadius: '40em',
  alignItems: 'center',
  justifyContent: 'center',
}


export default function Header1() {
  return (
    <>
    <div className="container-fluid" style={headerstyle}>
      <div className="container pt-2 pb-2">
        <div className="row">
          <div className="col-4">
            <div className="container">
              <img src={Airbnb_logo} height={64} width={118}></img>
            </div>
          </div>
          <div className="col-4">
            <div className="container mt-2" style={searchbarstyle}>
              <button type="button" id="btn1" className='mt-2 mb-2' style={btn1style}><b>Anywhere</b></button>
              <button type="button" id="btn2" className='mt-2 mb-2' style={btn2style}><b>Any week</b></button>
              <button type="button" id="btn3" className='mt-2 mb-2' style={btn3style}>Add guests</button>
              <button type="button" id="btn4" className='mt-2 mb-2' style={btn4style}><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8">
                <div className="row">
                  <div className="col-6">
                    <button type="button" id="becomehost" className='mt-3 mb-2' style={becomehoststyle}><b>Become a host</b></button>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-3 mt-3"><i class="fa-solid fa-earth-asia"></i></div>
                      <div className="col-9">
                        <button type="button" id="btn3" className='mt-2 mb-2' style={loginbtnstyle}>
                        <i class="fa-solid fa-bars"></i>
                        <span className="rounded-circle" style={userstyle}><i class="fa-sharp fa-solid fa-user"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
