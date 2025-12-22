import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../ComponentsCSS/NewsCSS.css";

export class News extends Component {
  articles = [ ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      //loading: false,
    };
  }

  async componentDidMount() {
    // API call can be made here if needed
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2025-12-21&to=2025-12-21&sortBy=popularity&apiKey=235100dc7f4c4500ba8cbeb83d5d984e";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ articles: data.articles });
  }

  
  render() {
    return (
      <div className="container my-4 news-container">
        <div className="text-center mb-4 news-list"><h2>Latest News</h2></div>

        {/* ROW */}
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <NewsItem
                key={article.url}
                title={article.title}
                description={article.description}
                author={article.author}
                date={article.publishedAt}
                source={article.source.name}
                newsUrl={article.url}
                urlToImage={article.urlToImage}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
