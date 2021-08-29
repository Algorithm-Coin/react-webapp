import React from 'react';
import { css } from '@emotion/react';

import { animateScroll, Link } from 'react-scroll';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const socialsWrapper = css`
    height: 50%;
    background-color: #141438;
`;
const socialsIcons = css``;

const footerWrapper = css`
    height: 50%;
    background-color: rgba(13, 13, 44);

    & > nav {
        margin: 0 auto;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            width: 2rem;
            height: 2rem;
        }
    }
`;
const footerLinks = css``;
const footerBottom = css``;

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
        <>
            <section css={socialsWrapper}>
                <h1>Join our community</h1>
                <h4>
                    Take part of the conversation and build the Algorithm Crypto Currency with us.
                </h4>
                <ul css={socialsIcons}>
                    <li>
                        <a href="https://www.instagram.com/algorithmcoin/" target="_blank">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/algorithmcoin/" target="_blank">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/algorithmcoin/" target="_blank">
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
            </section>
            <footer>
                <nav css={footerWrapper}>
                    <ul css={footerLinks}>
                        <HashLink section="Mission" />
                        <HashLink section="Roadmap" />
                        <HashLink section="How it works" />
                        <HashLink section="Solution" />
                    </ul>
                    <div css={footerBottom}>
                        <li className="socials">
                            <a href="https://www.instagram.com/algorithmcoin/" target="_blank">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com/algorithmcoin/" target="_blank">
                                <FaTwitter />
                            </a>
                        </li>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;
