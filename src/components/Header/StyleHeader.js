import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const StyleHeader = styled.header`
display: flex;
align-items:center;
	padding: 10px 20px;
	height: 50px;
	background-color: aqua;
	font-family: 'Delicious Handrawn', cursive;
	
`
export const ListHeader = styled.ul`
	display: flex;
	flex-direction: row;
	gap: 20px;
`
export const StyleLink = styled(NavLink)`
  color: #212121;
	font-size:24px;

  &.active {
    color: orange;
  }
`