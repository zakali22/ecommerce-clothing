import styled from "styled-components"
import {Link} from "react-router-dom"

export const HeaderContainer = styled.nav`
	margin-bottom: 2rem;
	padding: 2rem 0;
	display: flex;
	align-items: center;
	position: relative;

	.headroom--pinned & {
		padding: 2rem 5rem;
		background: white;
 	}

 	.headroom--scrolled {
 		.cart-dropdown {
 			display: none
 		}
 	}
`;

export const LogoContainer = styled(Link)`
	margin-right: auto;
`;

export const NavListContainer = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	
	& > *:not(:last-child){
		margin-right: 3rem;
	}
`;

export const NavListElement = styled.li`
	position: relative;
	cursor: pointer;
	background-image: linear-gradient(120deg,#fff,#fff 50%,#2d2d2d 0);
    background-size: 275%;
    transition: all .4s ease;
    font-weight: bold;

    &:hover {
    	color: white;
	    background-position: 100%;
    }
`;