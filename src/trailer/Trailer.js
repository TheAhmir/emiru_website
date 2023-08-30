import React, { Component } from 'react'
import Avatar from "../avatar/Avatar.js"
import trailer from "../assets/Emiru.mp4"
import fallbackImage from "../assets/trailerFallback.png"
import "../styles/trailer.css"

export default class About extends Component {
    render() {
      return (
        <div id='trailerScreen'>
          <Avatar page="trailer" />
          <video 
            controls
            playsInline
            poster={fallbackImage}
            >
                <source src={trailer} type="video/mp4"></source>
            </video>
        </div>
      )
    }
  }
