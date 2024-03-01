import React from "react";

const Newsitem = (props) => {
  // eslint-disable-next-line no-useless-constructor

  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://c.ndtvimg.com/2023-03/ichbe0l8_indian-cricket-team-bcci-_625x300_17_March_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-dangerous">
              by {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
