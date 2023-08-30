import React, { Component } from 'react'
import classNames from 'classnames'
import "../styles/skillsMenu.css"
import skills from "./skillsData"
import firstIcon from "../assets/gaming-icon.png"
import secondIcon from "../assets/gameday-icon.png"
import thirdIcon from "../assets/content-icon.png"
import { render } from '@testing-library/react'

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMenuItem: 1
    }
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    })
  }

  renderContent = (skills) => {
    return skills.map(( skill, index ) => (
      <div
      key={index}
      className={`skill-sub-container-${this.state.activeMenuItem}`}>
      <h3>{skill.title}</h3>
      <div className='level-container'>
        {[...Array(6)].map((_, i) => (
          <div
          key={i}
          className={`level-point ${i < skill.level ? 'filled' : 'unfilled'}`}></div>
        ))}
        </div>
      </div>
    )) 
  }
render() {
  const {activeMenuItem} = this.state
  const menuItems = ["GAMING", "OTK GAME DAY", "CONTENT CREATION"]

  const currentIcon = activeMenuItem === 1 ? firstIcon : activeMenuItem === 2 ? secondIcon : thirdIcon

  return (
  <div className='skill-menu'>
    {menuItems.map((item, index) => (
      <div
        key={index}
        className={classNames('skill-item', {activeSkill: activeMenuItem === index + 1})}
        onClick={() => this.handleMenuItemClick(index + 1)}>
          <h2 className='skill-title'>{item}</h2>
        </div>
    ))}
    <img className='skill-icon' src={currentIcon} alt='current-skill' />
    <div className='skill-sub-container'>
      {this.renderContent(skills[activeMenuItem])}
    </div>
  </div>
  )
}}
