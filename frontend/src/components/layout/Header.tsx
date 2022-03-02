import styled from "styled-components";
import logo from "../../static/logo.svg";

const HeaderContainer = styled.div`
  padding: 1em;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
    </HeaderContainer>
  );
};

export default Header;
