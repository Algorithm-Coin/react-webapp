import React from 'react';
import { css } from '@emotion/react';
import media from '../styles/media';
import { FaDownload } from 'react-icons/fa';
import { GoBrowser } from "react-icons/go";
import logo from '../assets/media/howToBuy/algorithm_logo.svg';
import binanceLogo from '../assets/media/howToBuy/cryptocurrency_bnb.svg';
const HowToBuyWrapper = css`
    font-family: 'Nunito', monospace;
    background-color: rgba(13, 13, 44);

    h1 {
        text-align: center;
        padding-top: 20px;
    }
    h1:after {
        content: ""; /* This is necessary for the pseudo element to work. */ 
        display: block; /* This will put the pseudo element on its own line. */
        margin: 0 auto; /* This will center the border. */
        width: 50%; /* Change this to whatever width you want. */
        padding-top: 20px; /* This creates some space between the element and the border. */
        border-bottom: 1px solid white;
    }
    p{
        text-align: center;
    }
    h2{
        text-align: center;
    }
    svg{
        width: 50px;
        height: auto;
        color: #FDD700;
        position:relative;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%)
    }
    img{
        width: 50px;
        height: auto;
        color: #FDD700;
        position:relative;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%)
    }
`;
const gridContainer = css`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    ${media.small} {
        grid-template-columns: 1fr;
    }
`;
const gridItem = css`
    padding: 0 2%;
    width: 100%;
    height: auto;

    ${media.small} {
        margin: 2rem 0;
    }
`;
const icon = css`
    width: 50px;
    top: 50%;
`;
const circle = css`
    position:relative;
    background-color: transparent;
    border:4px solid #FDD700;    
    height:100px;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    width:100px;
`;
const HowToBuy = () => {
    return (
        <section css={HowToBuyWrapper} id="howtobuy">
            <h1>How To Buy</h1>
            <p>Here are four simple steps how to buy the Algorithm Coin</p>
            <div css={gridContainer}>
                <div css={gridItem}>
                    <div css={circle}>
                        <FaDownload/>
                    </div>
                    <h2>Download for example the app: "Trustwallet"</h2>
                    <p>Write down your recovery phrase. Store this phrase in a safe place and never share this phrase with anyone. More information via Binance: </p><a href="https://academy.binance.com/en/articles/connecting-trust-wallet-to-binance-smart-chain-bsc">https://academy.binance.com/en/articles/connecting-trust-wallet-to-binance-smart-chain-bsc</a>
                </div>
                <div css={gridItem}>
                    <div css={circle}>
                        <img src={binanceLogo} css={icon}></img>
                    </div>
                    <h2>Buy BNB Smartchain token</h2>
                    <p>Go to the BNB Smartchain token inside the app. Click on "Buy" at the right top.
                    And select the amount of BNB Smart chain tokens you want to buy.
                    If this is not available in your app due to your country, buy BNB on an exchange and send this to your Trustwallet. Here is more information: </p>
                    <a href="https://community.trustwallet.com/t/how-to-send-and-receive-bnb-on-smart-chain/67430">https://community.trustwallet.com/t/how-to-send-and-receive-bnb-on-smart-chain/67430</a>
                </div>
                <div css={gridItem}>
                    <div css={circle}>
                        <GoBrowser/>
                    </div>
                    <h2>open pancakeswap on your browser and connect your wallet via walletconnect</h2>
                    <p></p>
                </div>
                <div css={gridItem}>
                    <div css={circle}>
                        <img src={logo} css={icon}></img>
                    </div>
                    <h2>Search Algorithm Coin (ALGRTHM) on pancakeswap en trade BNB for ALGRTHM </h2>
                    <p>You will have to add your token both to Trustwallet and Pancakeswap inside Trustwallet

Here is more information about how to add a custom token: </p>
                    <a href="https://community.trustwallet.com/t/how-to-add-a-custom-token/213">https://community.trustwallet.com/t/how-to-add-a-custom-token/213</a>
                </div>
            </div>

        </section>
    );
};

export default HowToBuy;
            {/* <div css={containerGrid}>
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
            </div> */}