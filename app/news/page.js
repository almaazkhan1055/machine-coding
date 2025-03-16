"use client";
import React, { useState } from "react";
import PeriodFilter from "./components/PeriodFilter";
import useNews from "./hooks/useNews";
import NewsCardContainer from "./components/NewsCardContainer";

const News = () => {
  const [period, setPeriod] = useState(1);
  const { news, loading, error } = useNews(period);

  return (
    <div className="py-5 px-10">
      <h1 className="sm:text-4xl text-2xl font-semibold">
        NY Times Most Popular Articles
      </h1>
      <div className="flex items-center gap-10 py-10">
        <span className="text-md font-semibold">Time Period:</span>
        <PeriodFilter period={period} setPeriod={setPeriod} />
      </div>

      {loading && (
        <p className="font-semibold text-center">Loading articles...</p>
      )}

      {error && (
        <p className="text-red-600 font-semibold text-center">Error: {error}</p>
      )}

      {!loading && !error && (
        <>
          <p className="font-semibold">
            Showing {news.length} most popular articles from the past {period}{" "}
            {period > 1 ? "days" : "day"}
          </p>
          <NewsCardContainer news={news} />
        </>
      )}
    </div>
  );
};

export default News;
