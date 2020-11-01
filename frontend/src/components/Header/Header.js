import React from 'react';
import { Container } from 'react-bootstrap';
import {Route} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { logout } from '../../store/actions/userActions';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from '../SearchBox/SearchBox'

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

        <Route render={({history}) => <SearchBox history={history} />} />

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

          {userInfo && userInfo.isAdmin && (
            <NavDropdown
              className="navdropdown ml-3"
              title="Admin"
              id="adminmenu"
            >
              <LinkContainer to="/admin/userlist">
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/productlist">
                <NavDropdown.Item>Products</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/orderlist">
                <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
