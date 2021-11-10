import React, { useContext } from "react";
import styled from "styled-components";
import { NoteContext } from "../context/NoteContext";
import NoteItems from "../components/NoteItems";
import AddNote from "./AddNote";

const Notes = (props) => {
  const { all_notes } = useContext(NoteContext);
  return (
    <Wrapper className="container">
      <div className="noteContainer">
        {all_notes.map((item) => {
          return <NoteItems key={item.id} item={item} />;
        })}
        <AddNote />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
.noteContainer{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px 20px;
}
}
`;

export default Notes;
