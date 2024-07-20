import { DataType } from "../../../pages/project pages/Tabs";
import Duties from "./Duties";

function JobInfo({
  data,
  currentData,
}: {
  data: DataType;
  currentData: number;
}) {
  let item;
  if (data) {
    item = data[currentData];
  }

  return item ? (
    <article className="card mt-3 border-2 border-green-400 bg-green-200 p-5 dark:text-black">
      <h3 className="p-2 text-lg font-semibold">{item.title}</h3>
      <span className="p-2 text-sm">{item.company}</span>
      <p className="p-2 text-sm">{item.dates}</p>
      {/* bullet points */}
      <Duties duties={item.duties}></Duties>
    </article>
  ) : (
    ""
  );
}

export default JobInfo;
