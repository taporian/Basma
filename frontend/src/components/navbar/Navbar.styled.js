
import styled from "styled-components";
export const MenuLink = styled.a`
  padding: 1rem 2rem;
  
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight:bold;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color:  #7b7d84;
  }
`;

export const DropButton = styled.div`
#dropdown-basic-button{
    padding: 1rem 2rem;
  background-color:transparent;
  color: white;
  font-weight:bold;
  border:none;
  font-size: 0.9rem;
  transition:ease-in 0.2;
  &:hover{
    color:  #7b7d84;
  }
}


`;

export const Nav = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  justify-content:end;

  background: none;
  top: 0;
  left: 0;
  right: 0;
  position: initial;
  z-index: 1030;
`;



export const Menu = styled.div`
  display: flex;
  justify-content: space-around;

  position: relative;
  /* padding: 10px;  */
  
  
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    height:100%;
    max-height: ${({ isOpen }) => (isOpen ? "21rem" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const NavDropDown = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
   
  }
  @media (max-width: 768px) {
    display: flex;
    margin-right:2rem;
    margin-top:1rem;

  }
`;

export  const MenuLinkRoute = styled.a`
padding: 10px 0;
cursor: pointer;
text-align: center;
text-decoration: none;
color: #7b7d84;
width:100%;
font-size: 0.9rem;
&:hover {
  color: #7b7d84;
  border-bottom:3px solid #1dc172 !important;
}
`;
export const LogoFooter = styled.p`

  color: #404145; 
  font-weight: 500;
  font-size: 1.5rem;
  font-family:Arial Black;
  letter-spacing: -2.5px;
 
`;

