import React from 'react';

const Nabar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand menu" href="/">
            <img
              src="/img/menu/lobster-bisque.jpg"
              alt=""
              className="d-inline-block align-text-top menu-bar"
            />
            &nbsp;&nbsp;&nbsp;<strong>App</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/show_data">
                  Preview
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Nabar;