import React from "react";

const dummyArray = Array.from({ length: 50 }, (_, index) => {
  return index;
});

const Child = (props: { value: number }) => {
  return (
    <div>
      <p>Value: {props?.value}</p>
      <div className="flex flex-wrap items-center gap-2">
        {dummyArray.map((item, index) => {
          return (
            <div
              key={index}
              className="inline-flex items-center justify-center p-1 bg-blue-100 border border-blue-500 size-10"
            >
              {item + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Child);
