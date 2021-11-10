import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NoteContext } from "../context/NoteContext";

const AddNote = () => {
  const { handleSave } = useContext(NoteContext);
  const [textAreaValue, setTextAreaValue] = useState("");
  return (
    <Wrapper className="addNote">
      <textarea
        cols="40"
        rows="10"
        placeholder="type to add a note...."
        onChange={(e) => {
          setTextAreaValue(e.target.value);
        }}
      ></textarea>
      <div className="footer">
        <p>200 remaining</p>
        <button
          className="saveBtn"
          onClick={() => {
            handleSave(textAreaValue);
          }}
        >
          save
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #6f4947;
  height: 250px;
  border-radius: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  textarea {
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
  }
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
  }
  p {
    color: #fff;
  }
  .saveBtn {
    border-radius: 15px;
    padding: 5px 10px;
    border: none;
    outline: none;
    font-size: 14px;
    color: #000;
    cursor: pointer;
  }
  textarea::-webkit-input-placeholder {
    color: #fff;
  }

  textarea:-moz-placeholder {
    /* Firefox 18- */
    color: #fff;
  }

  textarea::-moz-placeholder {
    /* Firefox 19+ */
    color: #fff;
  }

  textarea:-ms-input-placeholder {
    color: #fff;
  }

  textarea::placeholder {
    color: #fff;
  }
`;

export default AddNote;
