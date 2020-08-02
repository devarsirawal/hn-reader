import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
    return (
        <Nav class="text-center">
            <NavItem>
                <NavLink href="/top">Top</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/best">Best</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/new">New</NavLink>
            </NavItem>
        </Nav>
    );
}

export default Header;