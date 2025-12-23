import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../ComponentsCSS/NewsCSS.css";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      pageSize: 12,
      loading: false,
    };
  }

  async componentDidMount() {
    // API call can be made here if needed
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2025-12-21&to=2025-12-21&sortBy=popularity&apiKey=235100dc7f4c4500ba8cbeb83d5d984e&pageSize=" +
      this.state.pageSize;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ articles: data.articles, totalResults: data.totalResults });
  }

  handleOnPreviousClick = async () => {
    // Handle previous button click
    console.log("this is previous");

    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2025-12-21&to=2025-12-21&sortBy=popularity&apiKey=235100dc7f4c4500ba8cbeb83d5d984e&page=" +
      (this.state.page - 1) +
      "&pageSize=" +
      this.state.pageSize;
          this.setState({ loading: true });

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ articles: data.articles, page: this.state.page - 1, loading: false });
  };

  handleOnNextClick = async () => {
    console.log("this is next");

    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2025-12-21&to=2025-12-21&sortBy=popularity&apiKey=235100dc7f4c4500ba8cbeb83d5d984e&page=" +
      (this.state.page + 1) +
      "&pageSize=" +
      this.state.pageSize;
    this.setState({ loading: true });
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      articles: data.articles || [],
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <>
        {this.state.loading && <Spinner />}
        <div className="container my-4 news-container">
          <div className="text-center mb-4 news-list">
            <h2>Latest News</h2>
          </div>

          {/* ROW */}
          <div className="row">
            {this.state.articles.length === 0 ? (
              <div className="text-center w-100">
                <h4>No News Found</h4>
              </div>
            ) : (
              this.state.articles.map((article) => (
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
              disabled={this.state.page === 1}
              className="btn btn-outline-primary"
              onClick={this.handleOnPreviousClick}
            >
              &larr; Previous
            </button>

            <button
              disabled={this.state.articles.length === 0}
              className="btn btn-outline-primary"
              onClick={this.handleOnNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
