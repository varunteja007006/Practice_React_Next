export type OptionType = {
  label: string;
  value: string | number;
};

export type RadioOptionType = {
  label: string;
  value: string | number;
  checked: boolean;
};

export interface CommonInputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  value: string;
  className: string;
  errorMsg: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  handleOnChange: () => void;
}
export interface InputCheckboxProps extends CommonInputProps {
  type: "checkbox";
  checked?: boolean;
}
export interface InputRadioProps extends CommonInputProps {
  type: "radio";
  radioOptions?: RadioOptionType[];
}

export type TypeInputBuild = {
  type:
    | "checkbox"
    | "radio"
    | "rating"
    | "range"
    | "file"
    | "select"
    | "text"
    | "textArea"
    | "number"
    | "email"
    | "password"
    | "toggle";
  id: string;
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  value: string;
  className: string;
  errorMsg: string;
  helperText: string;
  rating: number;
  minRange: number;
  options?: OptionType[];
  radioOptions?: RadioOptionType[];
  checked?: boolean;
  showPassword?: boolean;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  handleOnBlur?: () => void;
  handleOnChange?: () => void;
};

function CustomInputs({ data }: { data: TypeInputBuild }) {
  const {
    type,
    label,
    name,
    checked,
    options,
    placeholder,
    showPassword,
    className,
    helperText,
  } = {
    ...data,
  };
  switch (type) {
    case "select":
      return (
        <>
          <label className={`form-control w-full max-w-xs ${className}`}>
            <div className="label">
              <span className="label-text">{label}</span>
            </div>
            <select name={name} className="select select-bordered bg-gray-200">
              <option disabled className="p-2 text-lg">
                Pick one
              </option>
              {options &&
                options.map((item: OptionType) => {
                  return (
                    <option
                      key={item.value}
                      className="text-lg"
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  );
                })}
            </select>
            {helperText && (
              <div className="label">
                <span className="label-text-alt">{helperText}</span>
              </div>
            )}
          </label>
        </>
      );
    case "range":
      return (
        <>
          <label className={`form-control w-full max-w-xs ${className}`}>
            <div className="label">
              <span className="label-text">{label}</span>
            </div>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range"
            />
          </label>
        </>
      );
    case "file":
      return (
        <>
          <label className={`form-control w-full max-w-xs ${className}`}>
            <div className="label">
              <span className="label-text">{label}</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text-alt">{helperText}</span>
            </div>
          </label>
        </>
      );
    case "radio":
      return (
        <>
          <label className={`form-control w-full max-w-xs ${className}`}>
            <div className="label">
              <span className="label-text">{label}</span>
              <input type="radio" name="radio-1" className="radio" checked />
            </div>
          </label>
        </>
      );
    case "rating":
      return (
        <>
          <label className={`form-control w-full max-w-xs ${className}`}>
            <div className="label">
              <span className="label-text">{label}</span>
            </div>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </label>
        </>
      );
    case "toggle":
      return (
        <>
          <div className={`form-control ${className}`}>
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input type="checkbox" className="toggle" checked />
            </label>
          </div>
        </>
      );
    case "textArea":
      return (
        <>
          <label className={`form-control ${className}`}>
            <div className="label">
              <span className="label-text">{label}</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
            {/* <div className="label">
              <span className="label-text-alt">Your bio</span>
            </div> */}
          </label>
        </>
      );
    case "checkbox":
      return (
        <>
          <div className={`form-control ${className}`}>
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input type="checkbox" checked={checked} className="checkbox" />
            </label>
          </div>
        </>
      );
    case "text":
      return (
        <>
          <label className={`form-control w-full max-w-xs ${className}`}>
            <div className="label">
              <span className="label-text">{label}</span>
            </div>
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              className="input input-bordered w-full max-w-xs bg-gray-200 text-black"
            />
            {/* <div className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                </div> */}
          </label>
        </>
      );
    case "number":
      return (
        <>
          <label className={`form-control w-full max-w-xs ${className}`}>
            <div className="label">
              <span className="label-text">{label}</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            {/* <div className="label">
              <span className="label-text-alt">Bottom Left label</span>
            </div> */}
          </label>
        </>
      );
    case "email":
      return (
        <>
          <label
            className={`input input-bordered flex items-center gap-2 ${className}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" className="grow" placeholder="Email" />
          </label>
        </>
      );
    case "password":
      return (
        <>
          <label
            className={`input input-bordered flex items-center gap-2 ${className}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              className="grow"
              value="password"
            />
          </label>
        </>
      );
    default:
      return (
        <>
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>
        </>
      );
  }
}

export default CustomInputs;
