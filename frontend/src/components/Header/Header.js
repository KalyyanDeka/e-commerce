import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { logout } from '../../store/actions/userActions';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
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

          {userInfo ? (
            <NavDropdown
              className="navdropdown"
              title={userInfo.name}
              id="username"
            >
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <div className="user-nav__icon-box">
              <NavLink to="/login" className="user-nav__icon">
                <i className="fas fa-user"></i>
                Sign In
              </NavLink>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
