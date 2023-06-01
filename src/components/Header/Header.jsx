import React from 'react'
import { ListHeader, StyleHeader, StyleLink } from './StyleHeader'


export default function Header() {
  return (
    
    <StyleHeader>
      <ListHeader>
        <li><StyleLink to={'/'}>
          Home
        </StyleLink></li>
        <li><StyleLink to={'/movies'}>
          Movie
        </StyleLink></li>
      </ListHeader>
     
    </StyleHeader>
  )
}
