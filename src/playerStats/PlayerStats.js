import React from "react";
import { SocialIcon } from 'react-social-icons'
import "../styles/playerStats.css";
import { motion } from 'framer-motion'
import bg from "../assets/bg-2.png"

const PlayerStats = () => {
    const socialIconsData = [
        {
          url: "https://www.twitch.tv/emiru",
          fgColor: "white",
          bgColor: "purple",
        },
        {
          url: "https://www.tiktok.com/@emiru?",
          fgColor: "white",
          bgColor: "black",
        },
        {
          url: "https://www.youtube.com/@Emiru1",
          fgColor: "red",
          bgColor: "white",
        },
        {
          url: "https://www.instagram.com/emiru.jpg/",
          fgColor: "purple",
          bgColor: "white",
        },
        {
          url: "https://twitter.com/emiru",
          fgColor: "cornflowerblue",
          bgColor: "white",
        },
        {
          url: "http://discord.gg/emiru",
          fgColor: "white",
          bgColor: "gray",
        },
        {
          url: "https://docs.google.com/spreadsheets/d/1WFuxI2R5iLzt7x0k1LVV9Te5uQEb2X6CS5vc_VYC-AQ/edit#gid=2084945952",
          fgColor: "green",
          bgColor: "white",
          network: "smugmug",
        },
        {
          fgColor: "transparent",
          bgColor: "transparent",
          style: { paddingBottom: "20px" },
        },
      ];
    return (
        <>
        <div id="playerStats">
            <h1>EMIRU LEVEL 25</h1>
            <div id="playerStats__lines">
                <span id="playerStats__lines__thick"></span>
                <span id="playerStats__lines__thin"></span>
            </div>
            <h2>Content Creator, Furry</h2>
            <img src={bg} className='emiru-banner' alt="banner"/>
        </div>
        <a href="https://linktr.ee/emiru">
        <img src={bg} className='emiru-banner' alt="banner"/>
        </a>
        <div className="media-Icons">
            {socialIconsData.map((socialIcon, index) => (
                /* Conditional wrapper for motion.div */
                index < socialIconsData.length - 1 ? (
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween'}}
                    key={index}
                  >
                    <React.Fragment key={index}>
                      <SocialIcon
                        className="mediaIcon"
                        url={socialIcon.url}
                        fgColor={socialIcon.fgColor}
                        bgColor={socialIcon.bgColor}
                        network={socialIcon.network}
                        style={socialIcon.style}
                      />
                      <span className="mediaSpacing"></span> 
                    </React.Fragment>
                  </motion.div>
                ) : (
                  /* Non-animated wrapper for the last item */
                  <React.Fragment key={index} className="simpleIcon">
                    <SocialIcon
                      className="mediaIcon1"
                      url={socialIcon.url}
                      fgColor={socialIcon.fgColor}
                      bgColor={socialIcon.bgColor}
                      network={socialIcon.network}
                      style={socialIcon.style}
                    />
                    <span className="mediaSpacing"></span>
                  </React.Fragment>
                )))}
            </div>
        </>
    )
}

export default PlayerStats;
