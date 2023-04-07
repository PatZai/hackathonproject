import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="#">Depression</Link></li>
    <li><Link class="dropdown-item" to="#">Anxiety</Link></li>
    <li><Link class="dropdown-item" to="#">Trauma</Link></li>
  </ul>
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filter by
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="#">Votes</Link></li>
    <li><Link class="dropdown-item" to="#">Reply</Link></li>
    <li><Link class="dropdown-item" to="#">Views</Link></li>
  </ul>
</div>

  )
}

export default Dropdown;
