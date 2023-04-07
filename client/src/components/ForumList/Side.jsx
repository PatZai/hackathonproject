import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const Side = () => {
  return (
    <ul className="list-group" style={{ marginTop: 10, marginRight: 10 }}>
      <li className="list-group-item custom-active" aria-current="true">Make A Thread</li>
      <li className="list-group-item"><Link to="/" className="custom-link">Trending Threads</Link></li>
      <li className="list-group-item">New Threads</li>
      <li className="list-group-item">Top Threads</li>
      <li className="list-group-item">Rules and Etiquette</li>
    </ul>	
  );
};

export default Side;
