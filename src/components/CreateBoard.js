import React, { useState } from "react";
import PropTypes from "prop-types";

let num = 0
const CreateBoard = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
    id: num
  });

  const onTitleChange = (event) => {
    console.log("title value: ", event.target.value);
    setFormFields({ ...formFields, title: event.target.value });
  };

  const onOwnerChange = (event) => {
    console.log("owner value: ", event.target.value);
    setFormFields({ ...formFields, owner: event.target.value });
  };

  function emptyFields() {
    if (formFields.owner && formFields.title) {
      ++num
      props.addBoard({
        title: formFields.title,
        owner: formFields.owner,
        id: formFields.id
      });
    } else {
      alert("Fields can't be blank");
    }
  }

  //resets form fields to be empty again
  const handleSubmit = (event) => {
    event.preventDefault();
    emptyFields();
    setFormFields({
      title: "",
      owner: "",
      id: num
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">Board title: </label>
        <input
          name="Title"
          value={formFields.title}
          onChange={onTitleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="Owner">Owner of board: </label>
        <input
          name="Owner"
          value={formFields.owner}
          onChange={onOwnerChange}
        ></input>
      </div>

      <input type="submit" value="Add Board" />
    </form>
  );
};

CreateBoard.propTypes = {
  addBoard: PropTypes.func.isRequired,
};

export default CreateBoard;

