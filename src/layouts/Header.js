import React, { Component } from 'react';
import { css } from '@emotion/react';
import { animateScroll, Link } from 'react-scroll';

import { Sling as Hamburger } from 'hamburger-react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { Button } from '../components';
import media from '../styles/media';

const HeaderStyle = css`
    width: 100%;
    border-bottom: 2px solid #fff;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 100px 0;
    height: 100px;
    position: fixed;
    top: 0;

    &.animateToFaded {
        animation: animateToFaded 0.5s linear;
        animation-fill-mode: forwards;
    }

    .socials svg:first-of-type {
        margin-right: 20px;
        display: inline-block;
    }

    .logo:hover {
        cursor: pointer;
    }
    .logo a {
        padding-top: 33px;
        display: flex;
        flex-direction: column;
        clear: both;
        padding-bottom: 30px;
        text-decoration: none;
        font-family: 'Gugi', cursive;
        color: #fff;
        font-size: 3rem;
    }
    .bars {
        display: none;
    }
    nav {
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        li {
            margin: 0 15px;
            justify-content: space-between;
            font-size: 1.5em;
        }
        a {
            text-decoration: none;
            transition: 0.3s all ease;
        }
        a:hover {
            color: #fdd700;
            cursor: pointer;
        }
        a.active {
            color: #fdd700;
        }
    }

    ${media.large} {
        font-size: 11px;
        .logo {
            a {
                font-size: 23px;
            }
        }
        nav {
            ul {
                li {
                    a {
                        font-size: 13px;
                        padding: 10px 10px;
                    }
                }
            }
        }
    }

    ${media.medium} {
        padding: 0 20px 0;
        height: auto;
        font-size: 10px;

        .logo {
            a {
                font-size: 18px;
            }
        }
        nav {
            ul {
                li {
                    a {
                        font-size: 10px;
                    }
                }
            }
        }
    }

    ${media.small} {
        padding: 0px;
        height: auto;
        min-height: 50px;
        display: block;

        .logo {
            width: 100%;
            display: block;
            margin: 0px;
            margin-left: -5px;
            padding-left: 15px;
            padding-top: 0px !important;
            a {
                padding: 20px 0px;
                font-size: 20px;
            }
        }
        .bars {
            display: inline-block;
            position: absolute;
            top: 6px;
            right: 10px;
            cursor: pointer;
        }
        ul.collapsed {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: normal;
            justify-content: space-between;
            opacity: 0;

            overflow: hidden;
            max-height: 0;
            -moz-transition-duration: 0.7s;
            -webkit-transition-duration: 0.7s;
            -o-transition-duration: 0.7s;
            transition-duration: 0.7s;
            -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

            &.is-expanded {
                opacity: 1;
                overflow: hidden;
                max-height: 500px;
                -moz-transition-duration: 0.7s;
                -webkit-transition-duration: 0.7s;
                -o-transition-duration: 0.7s;
                transition-duration: 0.7s;
                -moz-transition-timing-function: ease-in;
                -webkit-transition-timing-function: ease-in;
                -o-transition-timing-function: ease-in;
                transition-timing-function: ease-in;
            }
            li {
                padding: 15px 10px;
                margin: 0px 0px;
                width: 100%;

                a {
                    display: inherit;
                }
            }
        }
    }
`;

const HashLink = (props) => {
    return (
        <Link
            activeClass="active"
            to={props.section.toLowerCase().replace(/\s/g, '')}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-50}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
        >
            <li>{props.section}</li>
        </Link>
    );
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            fadeHeader: false,
        };
    }
    handleToggle = () => {
        // Toggle expanded state to show/hide nav
        this.setState({ isExpanded: !this.state.isExpanded });
        // If the user scrolled further than 50px down
        if (window.scrollY > 50) {
            // Fade the header
            this.setState({ fadeHeader: true });
        }
        // If the user scrolled less than 50px down
        else {
            // Toggle the header state
            this.setState({ fadeHeader: !this.state.fadeHeader });
        }
    };
    handleScroll = () => {
        // If the user scrolls further down than 50px
        if (window.scrollY > 50) {
            // If the nav is already expanded
            if (this.state.isExpanded) {
                // Do nothing (because handleToggle() takes care of it)
                return;
            }
            // If the nav is not expanded, fade the header
            this.setState({ fadeHeader: true });
        }
        // If the user scrolled less than 50px down
        else {
            // If the nav is already expanded
            if (this.state.isExpanded) {
                // Do nothing (because handleToggle() takes care of it)
                return;
            }
            // If the nav is not expanded, unfade the header
            this.setState({ fadeHeader: false });
        }
    };
    scrollToTop = () => {
        animateScroll.scrollToTop();
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        const { isExpanded, fadeHeader } = this.state;

        return (
            <header css={HeaderStyle} className={`${fadeHeader ? 'animateToFaded' : ''}`}>
                <div className="logo">
                    <a onClick={this.scrollToTop}>Algorithm Coin</a>
                </div>
                <nav className="nav">
                    <div className="bars" aria-hidden="true">
                        <Hamburger
                            size={20}
                            toggled={isExpanded}
                            toggle={() => this.handleToggle()}
                        />
                    </div>
                    <ul className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
                        <HashLink section="Mission" />
                        <HashLink section="Roadmap" />
                        <HashLink section="How it works" />
                        <HashLink section="Solution" />
                        <li className="socials">
                            <a href="https://www.instagram.com/algorithmcoin/" target="_blank">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com/algorithmcoin/" target="_blank">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <Button text="how to buy" href="https://google.nl" />
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
