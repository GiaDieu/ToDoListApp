import React, { useState, useEffect } from "react";

const InputForm = props => {
  const [addValue, setValue] = useState("");

  const HandleSubmit = event => {
    event.preventDefault();
    props.onSubmit(addValue);
    setValue("");
  };

  useEffect(() => {
    if (addValue) {
      document.title = `you are adding ${addValue.title}`;
    }
  });

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          value={addValue.title || ""} // grruu dung dien luon cai vu Controlled
          onChange={e => {
            setValue({
              title: e.target.value,
              id: Date.now(),
              isCompleted: false
            });
          }}
        />
      </form>
    </div>
  );
};

export default InputForm;
