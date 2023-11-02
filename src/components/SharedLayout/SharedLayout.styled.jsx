import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const Link = styled(NavLink)`
font-size: 30px;
font-weight: 600;
transition: 0.3s;
&:hover,&:focus{
    color: #FFB6C1;
}
    &.active{
        color: #F08080;
    }
`
export const Navigation = styled.nav`
    display: flex;
    gap: 15px;
    padding: 10px 20px;
    border: 3px solid #778899;
    border-radius: 10px;
    box-shadow: 0px 5px 20px black;
    margin-bottom: 15px;
`