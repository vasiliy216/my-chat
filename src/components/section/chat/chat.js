import React from 'react'

function Chat() {
  return (
      <div className="header_left">
        <div className="logo">
          <div className="logo_one">
            <div>GECT</div>
          </div>
          <div className="logo_two">
            <div>PRO</div>
          </div>
        </div>
        <ul className="menu">
          <li className="message">
            <button className="icon"><i className="far fa-envelope"></i></button>
            <div className="slide">
              <div>Message</div>
            </div>
          </li>
          <li className="music">
            <button className="icon"><i className="fas fa-music"></i></button>
            <div className="slide">
              <div>Music</div>
            </div>
          </li>
          <li className="video">
            <button className="icon"><i className="fas fa-film"></i></button>
            <div className="slide">
              <div>Video</div>
            </div>
          </li>
        </ul>
        <div className="map">
          <div className="date">
            <div className="day">3</div>
            <div className="month">03 | 2021</div>
          </div>
          <div className="adress"><i className="fas fa-map-marker-alt"></i><span>  Brest</span></div>
        </div>
      </div>
    )
}

export default Chat
