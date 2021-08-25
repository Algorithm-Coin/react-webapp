import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { css } from '@emotion/react';

const HeaderStyle = css`
  width: 100%;
  border-bottom: 2px solid #fff;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
  position: fixed;
  top: 0;

  &.animateToFaded {
    animation: animateToFaded 1s linear;
    animation-fill-mode: forwards;
  }

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;
    font-family: "Gugi", cursive;
    color: #fff;
    font-size: 3rem;
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #fff;
    transition: all 0.6s;
    color: #fff;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #FFF;
    font-size: 2rem;
    z-index: 100;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #fdd700;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      fadeHeader: true
    };
  }
  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  handleScroll = () => {
    window.scrollY > 50 ? this.setState({ fadeHeader: true }) : this.setState({ fadeHeader: false });
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    const { isExpanded, fadeHeader } = this.state;

    return (
      <header css={HeaderStyle} className={`${fadeHeader ? "animateToFaded" : ""}`}>
        <div className="logo">
          <Link to="/">
            Algorithm Coin
          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              <li>home</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li>about</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>contact</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;
