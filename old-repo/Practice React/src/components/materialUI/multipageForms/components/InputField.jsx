import React, { memo } from "react";
import TextField from "@mui/material/TextField";

function InputField({ fieldData, handleOnChange }) {
  const { name, label, type, value } = fieldData;
  return (
    <TextField
      key={name}
      id="filled-basic"
      label={label}
      placeholder={label}
      variant="filled"
      color="secondary"
      value={value}
      name={name}
      onChange={handleOnChange}
    />
  );
}

export default memo(InputField);
