import React, { Component } from 'react'
import { Link, useLocation } from "react-router-dom"
import astronautHelmet from "../assets/astronaut-helmet.png"
import deadEye from "../assets/dead-eye.png"
import stack from "../assets/stack.png"
import envelope from "../assets/envelope.png"
import trailer from "../assets/trailer.png"
import "../styles/nav.css"

export default function Nav() {
    const location = useLocation()

    const getNavPositionClass = () => {
        switch (location.pathname) {
            case "/trailer":
                return "nav-trailer"

            case "/":
                return "nav-about"

            case "/skills":
                return "nav-skills"

            case "/platforms":
                return "nav-platforms"

            case "/contact":
                return "nav-contact"

            default:
                return ""
        }
    }

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/trailer":
                return "TRAILER"

            case "/":
                return "ABOUT"

            case "/skills":
                return "SKILLS"

            case "/platforms":
                return "AFFILIATIONS"

            case "/contact":
                return "CONTACT"

            default:
                return ""
        }
    }

    const navPositionClass = getNavPositionClass()
    const pageTitle = getPageTitle()

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass
    }

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass)
        const linkClass = isCurrent ? "nav-link current" : "nav-link"

        return (
            <Link to={to} className={linkClass}>
                <img src={imgSrc} alt = {altText}/>
                {isCurrent && <h1 className='page-title'>{pageTitle}</h1>}
            </Link>
        )
    }

    return (
        <nav className={`nav ${navPositionClass}`}>
            {renderNavLink(
                "/trailer",
                trailer,
                "trailer icon",
                "nav-trailer"
            )}
            {renderNavLink(
                "/",
                astronautHelmet,
                "astonaut helmet icon",
                "nav-about"
            )}
            {renderNavLink(
                "/skills",
                deadEye,
                "deadEye icon",
                "nav-skills"
            )}
            {renderNavLink(
                "/platforms",
                stack,
                "stack icon",
                "nav-platforms"
            )}
            {renderNavLink(
                "/contact",
                envelope,
                "envelope icon",
                "nav-contact"
            )}
        </nav>
    )

}
