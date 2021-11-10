import React from "react";
import Moment from "react-moment";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

const NoteItems = ({ item }) => {
  return (
    <Wrapper>
      <p className="msg">{item.message}</p>
      <div className="footer">
        <small>{item.date}</small>
        <button className="btn">
          <FaTrashAlt />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #6f4947;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  color: #fff;
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .msg {
    font-size: 18px;
    font-weight: 400;
  }
  .btn {
    background: transparent;
    border: none;
    color: #b1d5fa;
    font-size: 15px;
    cursor: pointer;
  }
`;

export default NoteItems;
