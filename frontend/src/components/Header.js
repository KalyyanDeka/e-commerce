import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Container className="header-container">
        <NavLink to="/" exact>
          <h2 className="logo">Fly Buy</h2>
        </NavLink>

        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search for Products, brands and more"
          />
          <button className="search__button">
            <span className="search__icon">
              <i className="fas fa-search"></i>
            </span>
          </button>
        </form>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <NavLink to="/cart" className="user-nav__icon">
              <i className="fas fa-shopping-cart"></i>
              Cart
            </NavLink>
          </div>

          <div className="user-nav__icon-box">
            <NavLink to="/cart" className="user-nav__icon">
              <i className="fas fa-user"></i>
              Sign In
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
