import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw Error("Could not fetch data from that resource");
        return res.json();
      })
      .then(data => {
        setDatas(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        console.log(datas);
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  return { datas, setDatas, isPending, error };
};

export default useFetch;
