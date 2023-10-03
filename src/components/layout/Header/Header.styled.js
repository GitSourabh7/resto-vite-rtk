import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationMenuItem = styled.li`
  margin: 0px 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    font-weight: bolder !important;
    font-size: large;
    text-decoration: underline !important;
  }
`;

export const MobileNavigation = styled.ul`
  list-style: none;
`;

export const MobileNavigationItem = styled.li`
  margin-top: 10px;
`;

export const MobileNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.4rem;
  color: black;
`;
