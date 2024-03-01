/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
// import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // static defaultProps = {
  //   country: "in",
  //   pageSize: 6,
  //   category: "general",
  // };

  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NEWSAPP`;

    updateNews();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handlePrevClick = async () => {
  //   setPage(page-1)
  //   updateNews();
  // };

  // handleNextClick = async () => {
  //  setPage(page+1)
  //  updateNews();
  // };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        {/* <marquee behavior="" direction="left">QUICK NEWS-TOP HEADLINES</marquee> */}
        QUICK NEWS - TOP HEADLINES FROM {capitalizeFirstLetter(props.category)}{" "}
        CATEGORY
      </h1>
      {/* <Spinner/> */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <div className="container">
          <div className="row">
            {articles.map((Element) => {
              return (
                <div className="col-md-4" key={Element.urlToImage}>
                  <Newsitem
                    title={Element.title ? Element.title : ""}
                    description={Element.description ? Element.description : ""}
                    imageUrl={Element.urlToImage}
                    newsUrl={Element.url}
                    author={Element.author}
                    date={Element.publishedAt}
                    source={Element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
