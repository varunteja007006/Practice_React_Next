import React from "react";

function CmsCard({ data }) {
  const { img, url, title } = data;
  return (
    <div className="flex flex-col gap-3 w-72 h-fit items-center bg-yellow-500 p-5 dark:bg-slate-600">
      <img className=" w-fit h-56" src={img} alt={title} />
      <a
        href={url}
        className="bg-yellow-300 py-2 px-5 shadow-md rounded-full hover:shadow-xl hover:bg-yellow-200 dark:text-black"
      >
        <h4 className="text-lg"> {title.toUpperCase()} </h4>
      </a>
    </div>
  );
}

export default CmsCard;
