import React from 'react'
import { TotalLogoCont } from './logo.styled'
import logo from "../Images/spotifyLogo.svg"
import profileIcon from "../Images/profileIcon.svg"
const LogoComp = (props) => {
  return (
    <TotalLogoCont>
      <img src={logo} draggable={false} />
      <img src={profileIcon} draggable={false} width={"48px"} height={"48px"} />
    </TotalLogoCont>
  )
}

export default LogoComp
