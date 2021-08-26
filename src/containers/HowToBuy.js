import React from 'react';
import { css } from '@emotion/react';
import media from '../styles/media';

const HowToBuyWrapper = css`
    font-family: 'Nunito', monospace;
    padding: 2%;
    text-align: center;
    background-color: rgba(13, 13, 44);
    line-height: 2rem;

    h1 {
        font-size: 4rem;
        font-weight: 500;
        text-align: center;
        background-color: rgb(23, 23, 73);
        padding: 2%;
    }

    h4 {
        font-size: 24px;
        padding-bottom: 2%;
        line-height: 3rem;
        text-align: left;
    }
    p {
        text-align: left;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.0625em;
    }
    a {
        cursor: pointer;
        color: #fdd700;
        border-bottom: 1px solid #fdd700;
        text-align: left;
        font-size: 16px;
    }

    ${media.small} {
        p {
            font-size: 12px;
        }
        h4 {
            font-size: 20px;
        }
        h1 {
            font-size: 35px;
            padding: 5%;
        }
    }
`;

const TextContainer = css`
    text-align: center;
    color: white;
    background-color: rgba(13, 13, 44);
    margin-bottom: 0px;
`;
const containerGrid = css`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;

    ${media.large} {
        grid-template-columns: 1fr 1fr 1fr;
    }
    ${media.medium} {
        grid-template-columns: 1fr 1fr;
    }
    ${media.small} {
        grid-template-columns: 1fr;
    }
`;

const gridItem = css`
    padding: 3%;
    width: 100%;
    height: auto;
    background-color: rgb(23, 23, 73);
`;

const HowToBuy = () => {
    return (
        <section css={HowToBuyWrapper} id="howtobuy">
            <div css={TextContainer}>
                <h1>How To Buy</h1>
            </div>
            <div css={containerGrid}>
                <div css={gridItem}>
                    <h4>Download for example the app: "Trustwallet"</h4>
                    <p>
                        Write down your recovery phrase. Store this phrase in a safe place and never
                        share this phrase with anyone
                    </p>
                </div>
                <div css={gridItem}>
                    <h4>Buy BNB Smartchain token</h4>
                    <p>
                        Go to the BNB Smartchain token inside the app. Click on "Buy" at the right
                        top and select the amount of BNB Smart chain tokens you want to buy. If this
                        is not available in your app due to your country, buy BNB on an exchange and
                        send this to your Trustwallet.
                    </p>
                </div>
                <div css={gridItem}>
                    <h4>Enable "browser" inside the app (only needed when having an iPhone)</h4>
                    <p>
                        Open the trustwallet app. Go to the browser tap and search for pancakeswap.
                        <b>When having an android: </b>
                        Just click D-apps or Browser button on the bottom inside the trustwallet
                        app..
                    </p>
                </div>
                <div css={gridItem}>
                    <h4>Search for Pancakeswap</h4>
                    <p>
                        Open the trustwallet app. Go to the browser tap and search for pancakeswap.
                    </p>
                </div>
                <div css={gridItem}>
                    <h4>Add Algorithm Coin (ALGRTHM) to both Trustwallet and Pancakeswap</h4>
                    <p>
                        You will have to add your token both to Trustwallet and Pancakeswap inside
                        Trustwallet. Here is more information about how to add a custom token:
                    </p>
                    <a href="https://community.trustwallet.com/t/how-to-add-a-custom-token/213">
                        https://community.trustwallet.com/t/how-to-add-a-custom-token/213
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowToBuy;
