import { FormEvent, useEffect, useRef, useState } from "react";

import { nanoid } from "nanoid";
import { format } from "date-fns";
import { LuEye } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

type myFormStruct = {
  id: string;
  name: string;
  createdOn: Date;
  isDone: boolean;
  noOfFields: number;
  formObj: any;
};

// Form to take the basic details name
const initialInputForm = [
  {
    type: "text",
    name: "nameOfTheForm",
    label: "Name of the Form?",
    placeholder: `Eg: Student Form`,
    required: true,
    disabled: true,
    defaultValue: "",
    value: "",
  },
  {
    type: "select",
    name: "selectNoOfFields",
    label: "How many fields?",
    placeholder: `Eg: 1,2,3...`,
    required: true,
    disabled: true,
    defaultValue: "",
    value: "",
    options: [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
    ],
  },
];
// Form to iterate over and get the fields
const initialFieldsInputForm = [
  {
    type: "text",
    name: "labelOfTheField",
    label: "What should the label of the field be?",
    placeholder: `Eg: First Name, Full Name, etc..`,
    required: true,
    disabled: false,
    defaultValue: "",
    value: "",
  },
  {
    type: "text",
    name: "nameOfTheField",
    label: "What should the Name of the field be?",
    placeholder: `Eg: firstName, fullName, etc..`,
    required: true,
    disabled: false,
    defaultValue: "",
    value: "",
  },
];

const myForms = "MyForms";

const FormCards = ({
  data,
  handlePreviewClick,
}: {
  data: myFormStruct;
  handlePreviewClick: () => void;
}) => {
  const { name, createdOn, isDone, noOfFields } = data;
  return (
    <>
      <div
        className={`card w-fit shadow-xl   ${
          isDone
            ? "border border-green-600 bg-green-200"
            : "border border-red-600 bg-red-200"
        }`}
      >
        <div className="px-3 py-3 card-body">
          <div className="flex flex-row justify-between">
            <h2 className="capitalize text-large card-title ">{name}</h2>
            <button
              onClick={handlePreviewClick}
              className="text-black bg-white rounded-full btn hover:bg-slate-200"
            >
              <LuEye />
            </button>
          </div>
          <p className="text-sm normal-case ">No.of.Fields: {noOfFields}</p>
          <div className="justify-end card-actions">
            {/* <p className="text-sm ">{createdOn.getDate()}</p> */}
            <p className="text-sm ">
              Created On: {format(new Date(createdOn), "dd/MM/yyyy")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

function Main() {
  const [newItem, setNewItem] = useState(true);
  const initialRender = useRef(true);
  const [inputForm, setInputForm] = useState([...initialInputForm]);
  const [inputFormTwo, setInputFormTwo] = useState([...initialFieldsInputForm]);
  const [createdForms, setCreatedForms] = useState([]);
  const [stepCount, setStepCount] = useState(1);
  const [activeFieldCount, setActiveFieldCount] = useState(1);
  const currentFormIDRef = useRef(nanoid());
  const [togglePreview, setTogglePreview] = useState(false);

  const toggleNewItem = () => {
    setNewItem(!newItem);
    // New = true; Close = false
    if (!newItem) {
      // if user closed the form reset the form
      resetForm();
    }
  };

  const resetForm = () => {
    setInputForm([...initialInputForm]);
    setInputFormTwo([...initialFieldsInputForm]);
    setStepCount(1);
    setActiveFieldCount(1);
    currentFormIDRef.current = nanoid();
  };

  useEffect(() => {
    if (initialRender.current) {
      const data = localStorage.getItem(myForms);
      if (data && data.length > 0) {
        setCreatedForms(JSON.parse(data));
      }
      initialRender.current = false;
    }
  }, []);

  useEffect(() => {
    if (!initialRender.current && createdForms && createdForms.length > 0) {
      localStorage.setItem(myForms, JSON.stringify(createdForms));
      console.table(createdForms);
    }
  }, [createdForms]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form:
      | {
          [k: string]: FormDataEntryValue;
        }
      | myFormStruct = Object.fromEntries(formData);
    // In step 1 we just take form name, date , fields
    if (stepCount === 1) {
      let fieldCount = 1;
      if (typeof form.selectNoOfFields === "string") {
        fieldCount = parseInt(form.selectNoOfFields);
      }
      const myform = {
        id: currentFormIDRef.current,
        name: form.nameOfTheForm,
        createdOn: new Date(),
        noOfFields: fieldCount,
        formObj: [],
        isDone: false,
      };
      setCreatedForms((oldState) => {
        const newState = [...oldState, myform];
        return newState;
      });
      setInputForm([...initialInputForm]);
      setStepCount(stepCount + 1);
    }
    // In step 2 we fill the fields the form needs to have
    if (stepCount === 2) {
      const myCurrentForm = createdForms.find(
        (item) => item.id === currentFormIDRef.current
      );
      const fieldCount = myCurrentForm.noOfFields;
      setCreatedForms((oldState) => {
        const newState = oldState.map((item) => {
          if (item.id === currentFormIDRef.current) {
            item.formObj.push(form);
            if (!(activeFieldCount < fieldCount)) {
              item.isDone = true;
            }
          }
          return item;
        });
        return newState;
      });
      if (activeFieldCount < fieldCount) {
        setActiveFieldCount((oldState) => {
          return oldState + 1;
        });
        setInputFormTwo([...initialFieldsInputForm]);
      } else {
        // Submit form and move the user to finished step
        setStepCount(stepCount + 1);
      }
    }
    // in step 3 reset the form if the user wants to create a new form
    if (stepCount === 3) {
      resetForm();
    }
  };

  const DynamicForm = ({ stepCount }: { stepCount: number }) => {
    switch (stepCount) {
      case 1:
        return (
          <>
            <h2 className="card-title">Basic Form Details:</h2>
            <p className="mb-3 text-sm text-gray-700">
              Fill out basic details required for before creating the form.
            </p>
            {inputForm.map((item) => {
              return <CustomInputs key={item.name} data={item} />;
            })}
            <button
              type="submit"
              className="w-1/3 mt-5 text-black bg-yellow-400 btn hover:bg-yellow-400/80 hover:shadow-md"
            >
              Next
            </button>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="card-title">Form Fields:</h2>
            <p className="mb-3 text-sm text-gray-700">
              Fill out the details related to the fields required in the form.
            </p>
            <div key={activeFieldCount} className="flex flex-col gap-3">
              <p className="mb-1 text-sm text-gray-400">
                Field No: {activeFieldCount}
              </p>
              {inputFormTwo.map((item, index) => {
                return (
                  <div key={index} className={`flex flex-col gap-3`}>
                    <CustomInputs data={item} />
                  </div>
                );
              })}
              <button
                type="submit"
                className="w-1/3 mt-5 text-black bg-yellow-400 btn hover:bg-yellow-400/80 hover:shadow-md"
              >
                Next
              </button>
            </div>
          </>
        );
      default:
        return (
          <>
            <p>
              Form has been submitted successfully. Do you want to create
              another form?
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              <button
                type="submit"
                value="finish"
                className="w-1/3 mt-5 text-black bg-yellow-400 btn hover:bg-yellow-400/80 hover:shadow-md"
              >
                Create New Form
              </button>
              <button
                type="button"
                onClick={toggleNewItem}
                className="w-1/3 mt-5 text-black bg-blue-400 btn hover:bg-blue-400/80 hover:shadow-md"
              >
                View all Forms
              </button>
            </div>
          </>
        );
    }
  };

  const handlePreviewClick = (id: string | null) => {
    console.log(id);
    if (id) {
      setTogglePreview(!togglePreview);
    } else {
      setTogglePreview(!togglePreview);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 p-3 m-3 bg-slate-100 dark:bg-black">
        <div className="flex flex-col gap-3 p-5 ">
          <h2 className="text-xl underline decoration-solid">
            Create New Form
          </h2>
          <button
            className="w-1/3 text-black bg-yellow-400 btn hover:bg-yellow-400/80 hover:shadow-md"
            onClick={toggleNewItem}
          >
            {newItem ? "New" : "Close"}
          </button>
          {!newItem && (
            <div className="w-full bg-white card text-primary-content">
              <div className="card-body">
                <p className="text-sm text-gray-500">Step: {stepCount}</p>
                <form onSubmit={handleOnSubmit}>
                  <DynamicForm key={stepCount} stepCount={stepCount} />
                </form>
              </div>
            </div>
          )}
        </div>
        {/* Not important */}
        <div className="p-5">
          {!newItem || togglePreview ? (
            <>
              <div className="flex flex-row justify-between">
                <h2 className="text-xl underline decoration-solid">Preview</h2>
                <button
                  className="text-red-800 bg-white rounded-full btn hover:bg-red-200"
                  onClick={() => handlePreviewClick(null)}
                >
                  <IoClose />
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="mb-3 text-xl underline decoration-solid">
                My Forms
              </h2>
              <div className="flex flex-row flex-wrap gap-3">
                {createdForms &&
                  createdForms.length > 0 &&
                  createdForms.map((item: myFormStruct) => (
                    <FormCards
                      key={item.id}
                      data={item}
                      handlePreviewClick={() => handlePreviewClick(item.id)}
                    />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
