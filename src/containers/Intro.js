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
    }

    a {
        margin-top: 40px;
        pointer-events: all;
    }
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
            speed: 1.3,
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
                <img src={logo} />
                <h1>Welcome to Algorithm</h1>
                <h3>The future of automatic trading</h3>
                <Button text="buy now on pancakeswap" href="https://google.nl" />
            </div>
        </section>
    );
};

export default Intro;
