import React from 'react';
import { css } from '@emotion/react';
// import svg from '../assets/svg/svg3Roadmap.svg';
import logo from '../assets/LogoBlauwGoud2-0.png';
import lottie from "lottie-web";
import animatieFoto from "../assets/animatieFoto.json";
import media from '../styles/media';

//index > App > Headers, Homepage, Footer > Intro > Button

const RoadmapWrapper = css`
    font-family: 'Nunito', monospace;
    padding: 2%;
    text-align: center;
    background-color: rgba(13, 13, 44);
    line-height: 2rem;

    h1{
        font-size: 4rem;
        font-weight: 500;
        text-align: center;
        padding: 2%;
    }

    h4{
        font-size: 24px;
        padding-bottom: 2%;
        line-height: 3rem;
        text-align: left;
        color: #FDD700;
    }
    h5{
        font-size: 20px;
        padding-bottom: 2%;
        text-align: left;
        font-weight: bold;
    }
    p{
        text-align: left;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: .0625em;
    }
    a{
        cursor: pointer;
        color: #FDD700;
        border-bottom: 1px solid #FDD700;
        text-align: left;
        font-size: 16px;
    }
`;

const TextContainer = css`
text-align: center;
color: white;
background-color: rgba(13, 13, 44);
margin-bottom: 0px!important;
`;
const containerGrid = css`
display: inline-grid;
grid-template-columns: 1fr 1fr;
width: 100%;
`;
const containerGrid2 = css`
display: inline-grid;
grid-template-columns: 1fr 1fr;
width: 100%;
height: 250px;
`;
const gridItem = css`
padding-left: 3%;
padding-right: 3%;
width: 100%;
height: auto;
`;
const gridItem2 = css`
padding-left: 3%;
padding-right: 3%;
width: 100%;
height: auto;
border-left: 2px dashed #FDD700;
`;
const animatie = css`
    width: 650px;
    height: 650px;
    vertical-align: middle;
    border-style: none;
    top: 20%;
    left: 15%;
    position: relative;
`;
const icon = css`
    width: 80px;
    height: 80px;
    margin-left: -130px;
`;
const iconGrid = css`
    width: 80px;
    height: 80px;
    top: -10px;
`;
const info = css`
    margin-left: -300px;
`;


const Roadmap = () => {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#animatieFoto"),
            animationData: animatieFoto,
        });
    }, []);
    return (
        <section css={RoadmapWrapper}>
            <div css={TextContainer}>
                <h1 id="Roadmap">Roadmap</h1>
            </div>
            <div css={containerGrid}>
                <div css={gridItem}>
                    <div css={animatie} id="animatieFoto" />
                </div>
                <div css={gridItem2}>
                    <div css={containerGrid2}>
                        <div css={iconGrid}>
                            <img src={logo} css={icon}></img>
                        </div>
                        <div css={info}>
                            <h4>2022</h4>
                            <h5>Launching the Algorithm Coin(AlGRTHM)</h5>
                            <p>Algorithm currency will be created to raise funds for the development of the Algorithm technology. By targeting different groups of users, the Algorithm currency will accrue in value exponentially overtime as the network increases in size. The earliest adopters will experience the most upside potential, with the lowest risk.</p>
                        </div>
                    </div>
                    <div css={containerGrid2}>
                        <div css={iconGrid}>
                            <img src={logo} css={icon}></img>
                        </div>
                        <div css={info}>
                            <h4>2023</h4>
                            <h5>The Future of our Algorithm and Coin</h5>
                            <p>We will implement a global marketing campaign which will lead to exposure to millions of people worldwide. We will explore partnerships with big exchanges (i.e. Binance) and we will explore new partners to improve our algorithm.  The algorithm will be more advanced with better AI software which will lead to more profit.</p>
                        </div>
                    </div>
                    <div css={containerGrid2}>
                        <div css={iconGrid}>
                            <img src={logo} css={icon}></img>
                        </div>
                        <div css={info}>
                            <h4>2024</h4>
                            <h5>Algorithm Coin becomes big</h5>
                            <p>The algorithm is going to make a lot of money. This money will be invested back in the coin, causing the coin to rise.</p>
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