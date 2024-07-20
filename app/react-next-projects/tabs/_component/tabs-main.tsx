import axios from "axios";
import { useEffect, useState } from "react";
import { PageBody } from "../../components/custom";
import BtnContainer from "../../components/projects/tabs/BtnContainer";
import JobInfo from "../../components/projects/tabs/JobInfo";

export type DataType =
  | {
      id: string;
      order: number;
      title: string;
      duties: string[];
      dates: string;
      company: string;
    }[]
  | null;

function Tabs() {
  const url = "https://course-api.com/react-tabs-project";

  const [data, setData] = useState<DataType>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentData, setCurrentData] = useState<number>(0);

  const fetchData = () => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <progress className="w-56 m-5 progress"></progress>;
  }

  return (
    <PageBody PageTitle="Tabs">
      <div className="px-10">
        <BtnContainer
          data={data}
          currentData={currentData}
          setCurrentData={setCurrentData}
        ></BtnContainer>
        <JobInfo data={data} currentData={currentData}></JobInfo>
      </div>
    </PageBody>
  );
}

export default Tabs;
