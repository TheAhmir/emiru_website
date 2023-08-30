import classNames from 'classnames'
import React, { Component } from 'react'
import platforms from "./platformsData"
import "../styles/platformsMenu.css"

export default class PlatformsMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activePlatform: 1
        }
    }

    handlePlatformClick = (platform) => {
        this.setState({
            activePlatform: platform
        })
    }

    renderContent = (platforms) => {
        return platforms.map((platform, index) => (
            <div key={index} className={`platform-sub-container-${index + 1}`}>
                <h3>{platform.title}</h3>
                <img src={platform.image} alt={platform.title} />
                <div>{platform.description}</div>
                <div className='link-container'>
                    <a href={platform.link} target="_blank" rel='noopener noreferrer'>
                        {platform.linkText}
                    </a>
                </div>
            </div>
        ))
    }

  render() {
    const {activePlatform} = this.state
    const platformItems = ['ONE TRUE KING', 'STARFORGE', 'TWITCH.TV']

    return (
      <div className='platform-menu'>
        <div className='platform-item-container'>
            {platformItems.map((item, index) => (
                <div
                key={index}
                className={classNames("platform-item", { activePlatform: activePlatform === index + 1})}
                onClick={() => this.handlePlatformClick(index + 1)}
                >
                    <h2 className='title'>{item}</h2>
                </div>
            ))} 
        </div>
        <div className='platform-sub-container'>
            {this.renderContent(platforms[activePlatform])}
        </div>
      </div>
    )
  }
}
