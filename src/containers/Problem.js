import React from 'react';
import { css } from '@emotion/react';
import media from '../styles/media';
import lottie from 'lottie-web';
import businessMen from '../assets/media/problem/businessMen.json';
import background from '../assets/media/problem/Background.svg';
const ProblemWrapper = css`
    font-family: 'Nunito', monospace;
    padding-left: 2%;
    padding-right: 2%;
    text-align: left !important;
    padding-bottom: 2%;
    position: relative;
    background-color: #0d0d2c;
    z-index: -10;
    &:after{
        background: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity : 0.5;
        z-index: 1;
    }
    

    h1 {
        font-size: 3rem;
        font-weight: 500;
        text-align: left !important;
        margin-top: 0 !important;
        margin-bottom: 1%!important;
        top: 50%;
    }

    h4 {
        font-size: 24px;
        padding: 2%;
        padding-left: 0;
        color: #FDD700;
    }
    p {
        font-size: 16px;
        line-height: 2rem;
        font-weight: 600;
        letter-spacing: 0.0625em;
    }
    svg{
        width: 550px !important;
        height: 100% !important;
    }
    ${media.medium} {
        z-index: -10;
        svg{
            width: 400px !important;
            height: 50% !important;
        }
    ${media.small} {
        p {
            font-size: 12px;
        }
        h4 {
            font-size: 20px;
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

    ${media.xlarge} {
        width: 400px;
        height: auto;
    }
`;
const gridAnimatie = css`
    height: 70%;
    z-index: 3;
    ${media.xlarge} {
        z-index: 3;
    }
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
    ${media.small} {
        display: block !important;
        height: auto;
    }
`;


const Problem = () => {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#businessMen'),
            animationData: businessMen,
        });
    }, []);
    return (
        <section css={ProblemWrapper}>
            <div css={Container}>
                <div css={secondContainer}>
                    <div css={containerText}>
                        <h1 id="problem">Problem</h1>
                        <h4>Algo Trading</h4>
                        <p>Trading via algorithms is indispensable. Advanced mathematical models can make data-driven decisions at lightning speed. The price reactions to published economic figures are often striking. Right now, only the elite have the best algorithms on the crypto market. </p>
                        <h4>Transparency</h4>
                        <p>Many coins and companies are not transparent. This leads to speculation and ambiguity. This is not the case with Algorithm Coin, because we fight for transparency.</p>
                    </div>
                    <div css={gridAnimatie}>
                        <div css={animatie} id="businessMen" alt="foto van zakenmannen"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
