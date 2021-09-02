import React from 'react';
import { css } from '@emotion/react';
import media from '../styles/media';
import { FaWallet, FaArrowRight } from 'react-icons/fa';
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
        font-size: 20px;
        color: white;
        line-height: normal;
        font-weight: bold;
    }
    h3{
        text-align: center;
        font-size: 18px;
        padding-bottom: 10px;
        color: white;
        line-height: normal;
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
    a{
        font-size: 16px;
        text-align: center;
        color: #FDD700;
    }
    a:hover{
        border-bottom: 1px solid;
    }
`;
const gridContainer = css`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    ${media.medium} {
        grid-template-columns: 1fr 1fr;
    }
    ${media.small} {
        grid-template-columns: 1fr;
    }
`;
const gridItem = css`
    padding: 20px;
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
    left: 50%;
    transform: translate(-50%);

    ${media.small} {
        margin-bottom: 25px;
    }
`;
const arrow = css`
    position: relative;
    left: 54% !important;
    top: -10%;

    ${media.small} {
        display: none;
    }
`;
const arrow2 = css`
    svg{
    position: relative;
    left: 50% !important;
    top: -10%;
    color: transparent !important;
    }
    ${media.small} {
        display: none;
    }
`;
const HowToBuy = () => {
    return (
        <section css={HowToBuyWrapper} id="howtobuy" className="container">
            <h1>How To Buy</h1>
            <h3>Here are four simple steps how to buy the Algorithm Coin</h3>
            <div css={gridContainer}>
                <div css={gridItem}>
                    <div css={circle}>
                        <FaWallet/>
                    </div>
                    <div css={arrow}>
                        <FaArrowRight/>
                    </div>
                    <h2>Get your own wallet</h2>
                    <p>Download for example the app: "Trustwallet". Write down your recovery phrase. Store this phrase in a safe place and never share this phrase with anyone. For more information <a href="https://academy.binance.com/en/articles/connecting-trust-wallet-to-binance-smart-chain-bsc">click here</a></p>
                </div>
                <div css={gridItem}>
                    <div css={circle}>
                        <img src={binanceLogo} css={icon}></img>
                    </div>
                    <div css={arrow}>
                        <FaArrowRight/>
                    </div>
                    <h2>Buy BNB Smartchain token</h2>
                    <p>Go to the BNB Smartchain token inside the app. Click on "Buy" at the right top. Then select the amount of BNB Smart chain tokens you want to buy.
                    If this is not available in your app due to your country, buy BNB on an exchange and send this to your Trustwallet. For more information <a href="https://community.trustwallet.com/t/how-to-send-and-receive-bnb-on-smart-chain/67430">click here</a></p>
                </div>
                <div css={gridItem}>
                    <div css={circle}>
                        <GoBrowser/>
                    </div>
                    <div css={arrow}>
                        <FaArrowRight/>
                    </div>
                    <h2>Connecting the wallet</h2>
                    <p>Open Pancakeswap on your browser and connect your wallet via Walletconnect. The website of Pancakeswap is: https://pancakeswap.finance/ or <a href="https://pancakeswap.finance/">click here</a></p>
                </div>
                <div css={gridItem}>
                    <div css={circle}>
                        <img src={logo} css={icon}></img>
                    </div>
                    <div css={arrow2}>
                        <FaArrowRight/>
                    </div>
                    <h2>Buy Algorithm Coin</h2>
                    <p>Search Algorithm Coin (ALGRTHM) on Pancakeswap en trade BNB for ALGRTHM. You will have to add your token both to Trustwallet and Pancakeswap inside Trustwallet

                    For more information about how to add a custom token: <a href="https://community.trustwallet.com/t/how-to-add-a-custom-token/213">click here</a></p>
                </div>
            </div>
        </section>
    );
};

export default HowToBuy;