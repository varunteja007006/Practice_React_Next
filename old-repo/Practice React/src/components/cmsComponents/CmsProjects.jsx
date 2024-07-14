import { createClient } from "contentful";
import { useEffect, useState } from "react";

// setup the contentful client
const SPACEID = "xxxxxxxxxxxxxxx";
const ACCESS_KEY = "xxxxxxxxxxxxxxx";

/*
setup these keys in .env file. Place file along with index.html
const SPACEID = import.meta.env.VITE_CONTENTFUL_SPACEID ;
const ACCESS_KEY = import.meta.env.VITE_CONTENTFUL_ACCESS_KEY ;
*/

const client = createClient({
  space: SPACEID,
  environment: "master",
  accessToken: ACCESS_KEY,
});

export const FetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      const { message } = { ...error };
      const errorMessage = JSON.parse(message).message;
      setError(errorMessage);
      setLoading(false);
    }
  };

  //Run to fetch the data from contentful
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects, error };
};
