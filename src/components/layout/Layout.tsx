import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export const Grid = styled.div`
  // min-height: 100vh;
  display: grid;
  grid-gap: 10px;
  grid-template:
    "hd hd hd hd hd hd hd hd hd" 85px
    "content content content content content content content content content" minmax(500px, auto)
    "ft ft ft ft ft ft ft ft ft" 60px;
`;

const HeaderArea = styled.div`
  grid-area: hd;
  width: 100%;
`;

export const ContentArea = styled.div`
  grid-area: content;
  width: 100%;
`;

export const FooterArea = styled.div`
  grid-area: ft;
  width: 100%;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid>
      <HeaderArea>
        <Header />
      </HeaderArea>
      <ContentArea>{children}</ContentArea>
      <FooterArea>
        <Footer />
      </FooterArea>
    </Grid>
  );
};

export default Layout;
