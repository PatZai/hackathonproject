import React from 'react';
import './style.css';

const Dropdown = () => {
  return (
    <div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Learn</a></li>
    <li><a class="dropdown-item" href="#">Share</a></li>
    <li><a class="dropdown-item" href="#">Build</a></li>
  </ul>
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filter by
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Votes</a></li>
    <li><a class="dropdown-item" href="#">Reply</a></li>
    <li><a class="dropdown-item" href="#">Views</a></li>
  </ul>
</div>

  )
}

export default Dropdown;
