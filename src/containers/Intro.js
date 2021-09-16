import React from 'react';
import { css } from '@emotion/react';

import Particles from 'react-particles-js';
import { Button } from '../components';
import logo from '../assets/media/logo.png';
import media from '../styles/media';

const IntroWrapper = css`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #0d0d2c;
    user-select: none;

    h1 {
        font-size: 5rem;
        font-weight: bold;
    }
    h3 {
        font-size: 3em;
    }

    ${media.small} {
        h1 {
            font-size: 4rem;
        }
        h3 {
            font-size: 2em;
        }
    }

    ${media.xsmall} {
        h1 {
            font-size: 3rem;
        }
        h3 {
            font-size: 1.66em;
        }
    }

    #tsparticles {
        height: 100%;
    }
`;

const TextContainer = css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: center;
    margin-top: 80px;
    width: 100%;
    pointer-events: none;

    ${media.medium} {
        margin-top: 50px;
    }

    & img {
        position: relative;
        width: 150px;
        animation: verticalWobble 3s linear infinite;
        user-select: none;
        ${media.small} {
        width: 100px;
        }
    }

    a {
        margin-top: 40px;
        pointer-events: all;
    }
    p{
        word-wrap: break-word;
        padding: 0rem 40px ;
    }
`;
const ruimteBoven = css`
    padding-top: 20px;
    padding-bottom: 20px;
`;
const particleParams = {
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 600,
            },
        },
        color: {
            value: '#fdd700',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: 'img / github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 800,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
};

const Intro = () => {
    return (
        <section css={IntroWrapper}>
            <Particles params={particleParams} />
            <div css={TextContainer}>
                <img src={logo} alt="afbeelding van logo"/>
                <h1>Welcome to Algorithm</h1>
                <h3>The future of automatic trading</h3>
                <Button text="buy soon on pancakeswap" href="https://pancakeswap.finance/swap" />
                <div css={ruimteBoven}>
                    <p>CONTRACT ADDRESS</p>
                    <p>0xc101dd1969095051e490561d53e05dba122c0b70</p>
                </div>
            </div>
        </section>
    );
};

export default Intro;
