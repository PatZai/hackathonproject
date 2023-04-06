import React from 'react';
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="card bg-dark text-white" style={{ width: '97%', marginBottom: '20px', marginLeft: '20px', marginTop: "10px" }}>
        <div className="card-img-overlay">
          <h5 className="card-title">Forum Card #1</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div className="card bg-dark text-white" style={{ width: '97%', marginBottom: '20px', marginLeft: '20px', marginTop: "10px" }}>
        <div className="card-img-overlay">
          <h5 className="card-title">Forum Card #1</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div className="card bg-dark text-white" style={{ width: '97%', marginBottom: '20px', marginLeft: '20px', marginTop: "10px" }}>
        <div className="card-img-overlay">
          <h5 className="card-title">Forum Card #3</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div className="card bg-dark text-white" style={{ width: '97%', marginBottom: '20px', marginLeft: '20px', marginTop: "10px" }}>
        <div className="card-img-overlay">
          <h5 className="card-title">Forum Card #3</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>
    </>
  );
};

export default Card;
