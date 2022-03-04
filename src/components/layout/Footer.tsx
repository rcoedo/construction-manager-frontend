import styled from "styled-components";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.div`
  font-size: 90%;
  margin: 2rem auto;
  width: 30%;
  text-align: center;
`;

const SignatureContainer = styled.div``;

const FooterIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterIcon = styled.a`
  color: black;
  font-size: 150%;
  margin: 10px 5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SignatureContainer>
        Construction Company manager by{" "}
        <a href="https://github.com/rcoedo" target="_blank" rel="noreferrer">
          @rcoedo
        </a>
      </SignatureContainer>
      <FooterIconContainer>
        <FooterIcon href="https://medium.com/@rcoedo" target="_blank" rel="noreferrer">
          <FaMedium />
        </FooterIcon>
        <FooterIcon href="https://github.com/rcoedo" target="_blank" rel="noreferrer">
          <FaGithub />
        </FooterIcon>
        <FooterIcon href="https://www.linkedin.com/in/romancoedo/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </FooterIcon>
      </FooterIconContainer>
    </FooterContainer>
  );
};

export default Footer;
