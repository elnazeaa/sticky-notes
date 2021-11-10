import React from "react";
import styled from "styled-components";

const Navbar = (props) => {
  return (
    <Wrapper className="container">
      <h2>Notes</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background: #6e6d7c;
  height: 60px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    color: #b1d5fa;
    font-weight: 900;
  }
`;

export default Navbar;
