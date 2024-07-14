import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormBody from "./components/FormBody";
import InputField from "./components/InputField";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function MultiPageForm() {
  let initialFields = {
    firstname: {
      name: "firstname",
      label: "First Name",
      type: "text",
      value: "",
    },
    lastname: {
      name: "lastname",
      label: "Last Name",
      type: "text",
      value: "",
    },
    age: {
      name: "age",
      label: "Age",
      type: "text",
      value: "",
    },
    doorno: {
      name: "doorno",
      label: "Door No",
      type: "text",
      value: "",
    },
    street: {
      name: "street",
      label: "Street",
      type: "text",
      value: "",
    },
    city: {
      name: "city",
      label: "City",
      type: "text",
      value: "",
    },
  };

  const [fields, setFields] = useState(initialFields);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newItem = fields[name];
    setFields({ ...fields, [name]: { ...newItem, value: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form);
    console.log(formData);
    setPage(page + 1);
  };

  const finalForm = [];

  for (let item in fields) {
    let field = fields[item];
    finalForm.push(
      <TextField
        key={item}
        label={field.label}
        name={field.name}
        value={field.value}
        color="secondary"
        focused
        InputProps={{
          readOnly: true,
        }}
      />
    );
  }

  switch (page) {
    case 0:
      return (
        <FormBody heading={`Multi Page Form ${page}`}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="bg-purple-100 grid grid-cols-3 p-5 rounded-md"
          >
            <InputField
              fieldData={fields.firstname}
              handleOnChange={handleOnChange}
            />
            <InputField
              fieldData={fields.lastname}
              handleOnChange={handleOnChange}
            />
            <InputField
              fieldData={fields.age}
              handleOnChange={handleOnChange}
            />
            <Button
              variant="contained"
              type="button"
              onClick={nextPage}
              color="secondary"
            >
              Next
            </Button>
          </Box>
        </FormBody>
      );
    case 1:
      return (
        <FormBody heading={`Multi Page Form ${page + 1}`}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="bg-purple-100 grid grid-cols-3 p-5 rounded-md"
          >
            <InputField
              fieldData={fields.doorno}
              handleOnChange={handleOnChange}
            />
            <InputField
              fieldData={fields.street}
              handleOnChange={handleOnChange}
            />
            <InputField
              fieldData={fields.city}
              handleOnChange={handleOnChange}
            />
            <Button
              variant="contained"
              type="button"
              onClick={prevPage}
              color="secondary"
            >
              Previous
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={nextPage}
              color="secondary"
            >
              Next
            </Button>
          </Box>
        </FormBody>
      );
    case 2:
      return (
        <FormBody heading={`Verify data`}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            className="bg-purple-100 grid grid-cols-3 p-5 rounded-md"
          >
            {finalForm}
            <Button
              variant="contained"
              type="button"
              onClick={prevPage}
              color="secondary"
            >
              Previous
            </Button>
            <Button variant="contained" type="submit" color="secondary">
              submit
            </Button>
          </Box>
        </FormBody>
      );
    case 3:
      return <FormBody heading={`Form Submitted Successfully`}></FormBody>;
    default:
      return (
        <div className="mt-5">
          <Button
            variant="contained"
            type="button"
            onClick={() => setPage(0)}
            color="secondary"
          >
            Form
          </Button>
        </div>
      );
  }
}

export default MultiPageForm;
