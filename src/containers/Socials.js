import { css } from '@emotion/react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

import media from '../styles/media';

const socialsWrapper = css`
    position: relative;
    background-color: #141438;
    text-align: center;
    height: 40vh;

    div {
        width: 100%;
    }

    h1 {
        padding: 0;
        margin-bottom: 2rem;
    }

    h4 {
        padding: 0;
        margin-bottom: 2rem;
    }

    ${media.small} {
        height: auto;
        padding: 4rem 0;
    }
`;
const socialsIcons = css`
    display: flex;
    align-items: center;
    justify-content: center;

    li {
        margin: 0 1rem;
    }
    li a {
        font-size: 4rem;
        transition: 0.3s all ease;
    }

    li a:hover {
        color: #fdd700;
    }

    ${media.small} {
        li a {
            font-size: 2rem;
        }
    }
`;

const Socials = () => {
    return (
        <section css={socialsWrapper}>
            <div className="centered">
                <h1>Join our community</h1>
                <h4>
                    Take part of the conversation and build the Algorithm Crypto Currency with us.
                </h4>
                <ul css={socialsIcons}>
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=100068551995757"
                            target="_blank"
                        >
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
            </div>
        </section>
    );
};

export default Socials;
