"use client";
import { useEffect, useState } from "react";

const useNews = (period = 1) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    console.log(process.env.NEXT_PUBLIC_NYT_API_KEY);

    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.results || []);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [period]);

  return { news, loading, error };
};

export default useNews;
