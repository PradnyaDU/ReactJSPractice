import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center mb-4">Latest News</h2>

        {/* ROW */}
        <div className="row">
          <NewsItem
            title="Sample Title"
            description="Sample Description"
            author="Sample Author"
            date="2025-12-22"
            source="Sample Source"
          />

          <NewsItem
            title="Sample Title 2"
            description="Sample Description 2"
            author="Sample Author 2"
            date="2025-12-23"
            source="Sample Source 2"
          />

          <NewsItem
            title="Sample Title 3"
            description="Sample Description 3"
            author="Sample Author 3"
            date="2025-12-24"
            source="Sample Source 3"
          />

          <NewsItem
            title="Sample Title 4"
            description="Sample Description 4"
            author="Sample Author 4"
            date="2025-12-25"
            source="Sample Source 4"
          />

          <NewsItem
            title="Sample Title 5"
            description="Sample Description 5"
            author="Sample Author 5"
            date="2025-12-26"
            source="Sample Source 5"
          />
        </div>
      </div>
    );
  }
}

export default News;
