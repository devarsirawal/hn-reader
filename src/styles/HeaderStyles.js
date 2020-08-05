// Not currently used!
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
export const NavHeader = styled.div`
    background-color: #93E9BE;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: fixed;
`;

export const NavItem = styled.div`
    float: left;
    border-radius: 10px;
    a {
        display: block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    a:hover:not(.active) {
        background-color: #111;
    }

    .active {
        background-color: #4CAF50;
    }
`;