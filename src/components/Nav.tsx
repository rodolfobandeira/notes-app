import React from 'react';

export const Nav: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Notes App
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};