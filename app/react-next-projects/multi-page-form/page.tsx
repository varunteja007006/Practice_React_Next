import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { CustomButton, CustomInputText } from "../../custom";

export const FormBody = ({ children }: { children: ReactNode }) => {
  return <div className="m-5 border border-black p-5">{children}</div>;
};

type FieldsType = {
  name: string;
  label: string;
  type: string;
  value: string;
}[][];

type DataType = {
  firstname: string;
  lastname: string;
  age: number;
  doorNo: string;
  street: string;
  city: string;
};

function MultiPageForm() {
  const initialFields = [
    [
      {
        name: "firstname",
        label: "First Name",
        type: "text",
        value: "",
      },
      {
        name: "lastname",
        label: "Last Name",
        type: "text",
        value: "",
      },
      {
        name: "age",
        label: "Age",
        type: "number",
        value: "",
      },
    ],
    [
      {
        name: "doorNo",
        label: "Door No",
        type: "text",
        value: "",
      },
      {
        name: "street",
        label: "Street",
        type: "text",
        value: "",
      },
      {
        name: "city",
        label: "City",
        type: "text",
        value: "",
      },
    ],
  ];

  const [fields, setFields] = useState(initialFields);
  const [page, setPage] = useState<number>(0);
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const updatedFields: FieldsType = [...fields];

    updatedFields[page].map((item) => {
      if (item.name === name) {
        item.value = value;
      }
      return;
    });

    setFields(updatedFields);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data: DataType = {
      firstname: "",
      lastname: "",
      age: 0,
      doorNo: "",
      street: "",
      city: "",
    };
    for (const elem of fields) {
      for (const innerElem of elem) {
        data = { ...data, [innerElem.name]: innerElem.value };
      }
    }

    if (data) {
      const addData = async (data: DataType) => {
        try {
          await fetch("http://localhost:3030/multiformData", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
        } catch (error) {
          console.log(error);
        }
      };
      addData(data);
    }

    setPage(page + 1);
    setFields(initialFields);
  };

  switch (page) {
    case 0:
      return (
        <FormBody>
          <form className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {fields[page].map((item) => {
              return (
                <CustomInputText
                  key={item.name}
                  type={item.type}
                  name={item.name}
                  label={item.label}
                  value={item.value}
                  handleFunction={handleChange}
                ></CustomInputText>
              );
            })}
          </form>
          <CustomButton className="yellow-btn mt-5" handleFunction={nextPage}>
            Next
          </CustomButton>
        </FormBody>
      );
    case 1:
      return (
        <FormBody>
          <form className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {fields[page].map((item) => {
              return (
                <CustomInputText
                  key={item.name}
                  type={item.type}
                  name={item.name}
                  label={item.label}
                  value={item.value}
                  handleFunction={handleChange}
                ></CustomInputText>
              );
            })}
          </form>
          <CustomButton className="yellow-btn mt-5" handleFunction={prevPage}>
            Previous
          </CustomButton>

          <CustomButton
            className="yellow-btn ms-5 mt-5"
            handleFunction={nextPage}
          >
            Next
          </CustomButton>
        </FormBody>
      );
    case 2:
      return (
        <FormBody>
          <form
            className="grid grid-cols-1 items-center gap-5 md:grid-cols-3"
            onSubmit={handleSubmit}
          >
            {fields.map((field) => {
              return field.map((item) => {
                return (
                  <CustomInputText
                    key={item.name}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    value={item.value}
                    disabled
                  ></CustomInputText>
                );
              });
            })}

            <CustomButton className="hidden"></CustomButton>

            <CustomButton handleFunction={prevPage}>Previous</CustomButton>

            <CustomButton type="submit">Submit</CustomButton>
          </form>
        </FormBody>
      );
    case 3:
      return (
        <FormBody>
          <p>Submitted successfully...</p>
          <CustomButton
            className="yellow-btn mt-5"
            handleFunction={() => setPage(0)}
          >
            Restart Form
          </CustomButton>
        </FormBody>
      );
    default:
      <>Something went wrong...</>;
  }
  return <div></div>;
}

export default MultiPageForm;
