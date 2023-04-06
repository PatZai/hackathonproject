import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const Side = () => {
  return (
    <ul className="list-group" style={{ marginTop: 10, marginRight: 10 }}>
      <li className="list-group-item custom-active" aria-current="true">Ask a</li>
      <li className="list-group-item"><Link to="/" className="custom-link">A second item</Link></li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>	
  );
};

export default Side;
