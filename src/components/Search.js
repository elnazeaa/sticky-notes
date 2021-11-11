import React, { useContext } from "react";
import styled from "styled-components";
import { NoteContext } from "../context/NoteContext";

const Search = (props) => {
  const { searchValue, getSearchValue, handleSearchSubmit } =
    useContext(NoteContext);
  return (
    <Wrapper className="searchContainer" onSubmit={handleSearchSubmit}>
      <p className="searchTitle">Search Note...</p>
      <input
        className="searchInput"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={getSearchValue}
      />
    </Wrapper>
  );
};

const Wrapper = styled.form`
    width: 25rem;
    margin: 1rem auto;
  .searchTitle {
      font-size: 22px;
      font-weight: 900;
      text-align: center;
      color: #ff8b88;
    }

    .searchInput {
      width: 100%;
      padding: 12px 24px;

      background-color: transparent;
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;

      color: #575756;
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: 18px 18px;
      background-position: 95% center;
      border-radius: 50px;
      border: 1px solid #575756;
      transition: all 250ms ease-in-out;
      backface-visibility: hidden;
      transform-style: preserve-3d;

      &::placeholder {
        color: color(#575756 a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      &:hover,
      &:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #575756;
        border-radius: 0;
        background-position: 100% center;
      }
    }
  }

`;

export default Search;
