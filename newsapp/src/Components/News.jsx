  import React, { useEffect,useState } from "react";
  import NewsItem from "./NewsItem";
  import "../ComponentsCSS/NewsCSS.css";
  import PropTypes from "prop-types";
  import Spinner from "./Spinner";

  const News = (props)=> {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    const [showSpinner, setShowSpinner] = useState(true);
    const [loading, setLoading] = useState(true);
    const APIKey = "1768df9ff73b44af83673157761ad39b";

    const updateNews = async (pageNumber) => {
      props.setProgress(0);
      let url =
        "https://newsapi.org/v2/top-headlines?category=" +
        props.category +
        "&country=us&apiKey=" +
        APIKey +
        "&page=" +
        pageNumber +
        "&pageSize=" +
        pageSize;
      const response = await fetch(url);
      props.setProgress(30);

      const data = await response.json();
      props.setProgress(60);

      setArticles(data.articles);
      setLoading(false);
      setShowSpinner(false);

      props.setProgress(100);
      document.title =
        "NewsHub - " +
        props.category.charAt(0).toUpperCase() +
        props.category.slice(1);
    };

    useEffect(() => {
      updateNews();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleOnPreviousClick = async () => {
      // Handle previous button click
      // console.log("this is previous");

      // let url =
      //   "https://newsapi.org/v2/top-headlines?category=" +
      //   props.category +
      //   "&country=us&apiKey=235100dc7f4c4500ba8cbeb83d5d984e&page=" +
      //   (state.page - 1) +
      //   "&pageSize=" +
      //   state.pageSize;
      // setState({ loading: true, showSpinner: true });

      // const response = await fetch(url);
      // const data = await response.json();

      const prevPage = page - 1;
      setPage(prevPage);
      updateNews(prevPage);
    };

    const handleOnNextClick = async () => {
      console.log("this is next");

      // let url =
      //   "https://newsapi.org/v2/top-headlines?category=" +
      //   props.category +
      //   "&country=us&apiKey=235100dc7f4c4500ba8cbeb83d5d984e&page=" +
      //   (state.page + 1) +
      //   "&pageSize=" +
      //   state.pageSize;
      // setState({ loading: true, showSpinner: true });
      // const response = await fetch(url);
      // const data = await response.json();

      const nextPage = page + 1;
      setPage(nextPage);
      updateNews(nextPage);
    };

    return (
      <>
        {loading}
        <div className="container my-4 news-container">
          <div className="text-center mb-4 news-list">
            <h2>
              Top Headline -{" "}
              {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
            </h2>
          </div>

          {/* ROW */}
          <div className="row">
            {articles.length === 0 ? (
              <div className="text-center w-100">
                {showSpinner && <Spinner />}
              </div>
            ) : (
              articles.map((article) => (
                <NewsItem
                  key={article.url}
                  title={article.title}
                  description={article.description}
                  author={article.author}
                  date={article.publishedAt}
                  source={article.source?.name}
                  newsUrl={article.url}
                  urlToImage={article.urlToImage}
                />
              ))
            )}
          </div>

          {/* Pagination Buttons */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <button
              disabled={page === 1}
              className="btn btn-outline-primary"
              onClick={handleOnPreviousClick}
            >
              &larr; Previous
            </button>

            <button
              disabled={articles.length === 0}
              className="btn btn-outline-primary"
              onClick={handleOnNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }


  export default News;
