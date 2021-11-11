import React, { useContext } from "react";
import Moment from "react-moment";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { NoteContext } from "../context/NoteContext";

const NoteItems = ({ item }) => {
  const { removeNote } = useContext(NoteContext);
  return (
    <Wrapper>
      <p className="msg">{item.message}</p>
      <div className="footer">
        <small>{item.date}</small>
        <button
          className="btn"
          onClick={() => {
            removeNote(item.id);
          }}
        >
          <FaTrashAlt />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #6f4947;
  height: 300px;
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
    white-space: pre-wrap;
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
