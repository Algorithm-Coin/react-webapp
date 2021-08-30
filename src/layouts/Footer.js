import React from 'react';
import { css } from '@emotion/react';

import { Link } from 'react-scroll';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

import logo from '../assets/media/logo.png';
import media from '../styles/media';

const footerWrapper = css`
    background-color: rgba(13, 13, 44);
    position: relative;
    text-align: left;
    height: 40vh;
    padding: 4rem 100px 0;

    ${media.medium} {
        padding: 0 20px 0;
    }

    ${media.small} {
        padding: 0px;
    }
`;
const row = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
`;
const column = css`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    height: 100%;
`;

const footerTop = css`
    height: 80%;
    width: auto;
    line-height: 3rem;
    font-size: 1.5em;

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
`;
const logoStyle = css`
    width: 100px;
    height: auto;
`;

const divider = css`
    position: relative;
    height: 1px;

    &:before {
        content: '';
        position: absolute;
        top: -20px;
        left: 5%;
        right: 5%;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, transparent, #fff, transparent);
    }
`;

const footerBottom = css`
    height: 20%;
    width: 100%;
    font-size: 1.5em;

    p {
        display: inline-block;
    }
`;
const socials = css`
    float: right;

    a {
        margin-left: 1rem;
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

const Footer = () => {
    return (
        <footer id="footer">
            <div css={footerWrapper}>
                <nav css={[row, footerTop]}>
                    <div css={column}>
                        <img css={logoStyle} src={logo} alt="Algorithm Coin logo" />
                    </div>
                    <ul css={column}>
                        <HashLink section="Mission" />
                        <HashLink section="Roadmap" />
                        <HashLink section="How it works" />
                        <HashLink section="Solution" />
                    </ul>
                    <ul css={column}>
                        <HashLink section="Whitepaper" />
                        <HashLink section="Policy" />
                        <HashLink section="Support" />
                    </ul>
                    <ul css={column}>
                        <HashLink section="Source code" />
                        <HashLink section="Sitemap" />
                    </ul>
                </nav>
                <div css={divider}></div>
                <div css={footerBottom}>
                    <p>
                        Created by the Algorithm team | {new Date().getFullYear()} &copy; Algorithm
                    </p>
                    <div css={socials}>
                        <a href="https://twitter.com/algorithmcoin/" target="_blank">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/algorithmcoin/" target="_blank">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/algorithmcoin/" target="_blank">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
