import React from "react";

const useFetchAgainHook = (url: string) => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<unknown>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const res = await response.json();
      setData(res);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [url]); // Add url to dependency array for re-fetching on URL change

  return { data, isLoading, error };
};

export default useFetchAgainHook;
