import React from "react";

import { Link } from "gatsby";
import logo from "../img/logo-ibbppta.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className='navbar is-transparent-op is-fixed-top'
        role='navigation'
        aria-label='main-navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link
              to='/'
              className='navbar-item'
              title='Logo'
              style={{
                position: "fixed",
                width: "6rem",
                hight: "3rem",
                padding: "0",
              }}>
              <img
                src={logo}
                alt='ibbppta'
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  marginRight: "0.7rem",
                }}
              />
              <spann
                style={{
                  fontSize: "1.5rem",
                }}>
                IBBPPTA
              </spann>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass} is-transparent`}>
            <div className='navbar-end has-text-centered'>
              <Link className='navbar-item' to='/about'>
                Quem Somos
              </Link>
              <Link className='navbar-item is-transparent-op' to='/live' style={{ color: "red" , fontWeight: "900"}}>
                LIVE!
              </Link>
              {/* <Link className="navbar-item" to="/">
                Onde Estamos
              </Link> */}
              <Link className='navbar-item' to='/blog'>
                Blog
              </Link>
              <Link className='navbar-item' to='/contact'>
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
