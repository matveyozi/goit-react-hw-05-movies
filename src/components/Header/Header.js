import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import { StyleHeader } from './StyleHeader.styled'

const StyleLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orange;
  }
`


export default function Header() {
  return (
    
    <header>
      <ul>
        <li><StyleLink to={'/'}>
          Домашняя страница
        </StyleLink></li>
        <li><StyleLink to={'/movies'}>
          Коллекция
        </StyleLink></li>
      </ul>
      <hr/>
    </header>
  )
}
