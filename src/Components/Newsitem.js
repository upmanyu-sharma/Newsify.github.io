import React from "react";

const Newsitem = (props)=> {
    let { title, desc, imageUrl, newsUrl, author, date, source } = props;
    return (
      <>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end', 
            position: 'absolute',
            right: '0'
          }}>
            <span className="badge bg-danger">
              {source}
            </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text">
              <small className="text-primary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </>
    );
}
export default Newsitem;
