import React from 'react';
import { css } from '@emotion/react';
import media from '../styles/media';
import lottie from 'lottie-web';
import businessMen from '../assets/media/Solution/businessMen.json';

const SolutionWrapper = css`
    background-color: #0d0d2c;

    h1 {
        font-size: 3rem;
        font-weight: 500;
        text-align: left !important;
        margin-top: 0 !important;
        margin-bottom: 1% !important;
        top: 50%;
    }

    h4 {
        font-size: 24px;
        padding: 2%;
        padding-left: 0;
        color: #fdd700;
    }
    p {
        font-size: 16px;
        line-height: 2rem;
        font-weight: 600;
        letter-spacing: 0.0625em;
    }
    svg {
        width: 550px !important;
        height: 100% !important;
        z-index: 2;
    }
    ${media.medium} {
        svg {
            width: 400px !important;
        }
        ${media.small} {
            p {
                font-size: 12px;
            }
            h4 {
                font-size: 20px;
            }
            svg {
                width: 250px !important;
            }
        }
    }
`;
const Container = css`
    color: white;
    margin-bottom: 0px !important;
    height: 100vh;
    ${media.small} {
        height: auto;
    }
`;
const animatie = css`
    height: 100%;
    border-style: none;
    flex: 1;
`;
const gridAnimatie = css`
    position: relative;
    height: 70%;
    z-index: 3 !important;
`;
const containerText = css`
    height: 50%;
    padding: 2%;
    flex: 1;
    ${media.small} {
        flex: 0;
        padding: 3%;
    }
`;
const secondContainer = css`
    display: flex;
    margin: 0 auto;
    height: 70vh;
    align-items: center;
    /* flex-direction: column-reverse !important; */
    ${media.small} {
        display: block !important;
        height: auto;
    }
`;

const Solution = () => {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#businessMen2'),
            animationData: businessMen,
        });
    }, []);
    return (
        <section className="container" css={SolutionWrapper}>
            <div css={Container}>
                <div css={secondContainer}>
                    <div css={gridAnimatie}>
                        <div css={animatie} id="businessMen2" alt="foto van zakenmannen" />
                    </div>
                    <div css={containerText}>
                        <h1 id="Solution">Solution</h1>
                        <h4>Algorithm Trading is possible for everyone</h4>
                        <p>
                            Our team wants to make it possible for everyone to day trade via an
                            application. The application will start day trading through our
                            algorithm 24 hours a day and will only be availleble for Algorithm Coin
                            holders.
                        </p>
                        <h4>Transparency</h4>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
