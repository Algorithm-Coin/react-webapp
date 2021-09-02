import React from 'react';
import { css } from '@emotion/react';

import lottie from 'lottie-web';
import logo from '../assets/media/roadmap/logoBlauw.png';
import graphsAnimation from '../assets/media/roadmap/graphsAnimation.json';
import media from '../styles/media';

const RoadmapWrapper = css`
    font-family: 'Nunito', monospace;
    background-color: rgba(13, 13, 44);

    h1 {
        text-align: center;
        padding-bottom: 3rem;
    }
`;

const containerGrid = css`
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    ${media.xlarge} {
        grid-template-areas: 'kleingedeelte grootgedeelte grootgedeelte';
        grid-template-columns: 1fr 1fr 1fr;
    }
    ${media.large} {
        grid-template-areas: 'grootgedeelte';
        grid-template-columns: 1fr;
    }
`;
const containerGrid2 = css`
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 250px;

    ${media.large} {
        grid-template-columns: 1fr;
        display: inline-block;
    }
`;
const gridItem = css`
    padding-left: 3%;
    padding-right: 3%;
    width: 100%;
    height: auto;

    ${media.large} {
        display: none;
    }
    ${media.xlarge} {
        grid-area: kleingedeelte;
    }
`;
const gridItem2 = css`
    padding-left: 3%;
    padding-right: 3%;
    width: 100%;
    height: auto;
    border-left: 5px dotted #fdd700;

    ${media.xlarge} {
        grid-area: grootgedeelte;
    }
`;
const animatie = css`
    width: 650px;
    height: 650px;
    vertical-align: middle;
    border-style: none;
    top: 20%;
    left: 15%;
    position: relative;

    ${media.xlarge} {
        width: 400px;
    }
    ${media.large} {
        width: 400px;
    }
`;
const icon = css`
    width: 80px;
    height: 80px;
    margin-left: -135px;
    margin-top: -3px;

    ${media.large} {
        margin-left: 30%;
    }
    ${media.small} {
        width: 40px;
        height: 40px;
    }
`;
const iconGrid = css`
    width: 80px;
    height: 80px;
    top: -10px;
    text-align: center;

    ${media.large} {
        float: left;
        width: 0;
        margin-left: -70px;
    }
    ${media.small} {
        margin-left: -41px;
    }
    ${media.xsmall} {
        margin-left: -33px;
    }
`;
const info = css`
    margin-left: -300px;

    ${media.large} {
        margin-left: 5%;
        padding-bottom: 30%;
    }
    ${media.small} {
        margin-left: 10%;
    }
`;

const Roadmap = () => {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#graphsAnimation'),
            animationData: graphsAnimation,
        });
    }, []);
    return (
        <section className="container" css={RoadmapWrapper} id="roadmap">
            <h1>Roadmap</h1>
            <div css={containerGrid}>
                <div css={gridItem}>
                    <div css={animatie} id="graphsAnimation" />
                </div>
                <div css={gridItem2}>
                    <div css={containerGrid2}>
                        <div css={iconGrid}>
                            <img src={logo} css={icon}></img>
                        </div>
                        <div css={info}>
                            <h4>2022</h4>
                            <h5>Launching the Algorithm Coin(AlGRTHM)</h5>
                            <p>
                                Algorithm currency will be created to raise funds for the
                                development of the Algorithm technology. By targeting different
                                groups of users, the Algorithm currency will accrue in value
                                exponentially overtime as the network increases in size. The
                                earliest adopters will experience the most upside potential, with
                                the lowest risk.
                            </p>
                        </div>
                    </div>
                    <div css={containerGrid2}>
                        <div css={iconGrid}>
                            <img src={logo} css={icon}></img>
                        </div>
                        <div css={info}>
                            <h4>2023</h4>
                            <h5>The Future of our Algorithm and Coin</h5>
                            <p>
                                We will implement a global marketing campaign which will lead to
                                exposure to millions of people worldwide. We will explore
                                partnerships with big exchanges (i.e. Binance) and we will explore
                                new partners to improve our algorithm. The algorithm will be more
                                advanced with better AI software which will lead to more profit.
                            </p>
                        </div>
                    </div>
                    <div css={containerGrid2}>
                        <div css={iconGrid}>
                            <img src={logo} css={icon}></img>
                        </div>
                        <div css={info}>
                            <h4>2024</h4>
                            <h5>Algorithm Coin becomes big</h5>
                            <p>
                                The algorithm is going to make a lot of money. This money will be
                                invested back in the coin, causing the coin to rise.
                            </p>
                        </div>
                    </div>
                    <div css={containerGrid2}>
                        <div css={iconGrid}>
                            <img src={logo} css={icon}></img>
                        </div>
                        <div css={info}>
                            <h4>2025</h4>
                            <h5>Launching the application for users</h5>
                            <p>We have successfully launched the Application for users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
