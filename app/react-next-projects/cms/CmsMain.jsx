import React from "react";
import cmsImg from "../../assets/undraw_coding_re_iv62.svg";
import { FetchProjects } from "./CmsProjects";
import {
  CustomErrorComponents,
  CustomLoadingComponents,
} from "../subcomponents";
import CmsCard from "./CmsCard";
function CmsMain() {

  const { loading, projects, error } = FetchProjects();

  return (
    <>
      {/* hero part */}
      <div className="flex flex-row gap-5 items-center justify-evenly bg-yellow-600 p-5 dark:bg-slate-600 dark:text-white ">
        <h1 className="text-4xl">CMS Main</h1>
        <img className="w-50 h-40" src={cmsImg} alt="coder" />
      </div>
      {loading ? (
        <CustomLoadingComponents />
      ) : (
        <div className="flex flex-wrap gap-4 py-5 px-5 bg-yellow-100 dark:bg-slate-400 dark:text-white">
          {projects.length > 1 ? (
            projects.map((item) => {
              return <CmsCard key={item.id} data={item}></CmsCard>;
            })
          ) : (
            <CustomErrorComponents error={error}></CustomErrorComponents>
          )}
        </div>
      )}
    </>
  );
}

export default CmsMain;
