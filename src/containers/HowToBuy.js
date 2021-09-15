import React from 'react';
import { css } from '@emotion/react';
import media from '../styles/media';
import { FaWallet, FaArrowRight } from 'react-icons/fa';
import { GoBrowser, GoVerified } from "react-icons/go";
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
        content: ""; 
        display: block; 
        margin: 0 auto; 
        width: 50%; 
        padding-top: 20px; 
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
    grid-template-columns: 1fr 1fr 1fr;
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
    word-break: break-word;

    ${media.small} {
        margin: 2rem 0;
    }
    ${media.xsmall} {
        padding: 0;
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
const arrowDisappear = css`
    position: relative;
    left: 54% !important;
    top: -10%;

    ${media.medium} {
        svg{
            color: transparent;
        }
    }
`;
const arrowDisappearBig = css`
    position: relative;
    left: 54% !important;
    top: -10%;
    svg{
        color: transparent;
    }

    ${media.medium} {
        svg{
            color: #FDD700;
        }
    }
    ${media.small} {
        display: none;
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
        color: transparent;
    }
    ${media.small} {
        display: none;
    }
`;
const HowToBuy = () => {
    return (
        <section css={HowToBuyWrapper} id="howtobuy" className="container">
            <h1>How To Buy Soon</h1>
            <h3>Here are five simple steps how to buy the Algorithm Token</h3>
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
                        <img src={binanceLogo} css={icon} alt="icon van binance"></img>
                    </div>
                    <div css={arrowDisappear}>
                        <FaArrowRight/>
                    </div>
                    <h2>Buy BNB Smartchain token</h2>
                    <p>Go to the BNB Smartchain token inside the app. Click on "Buy" at the right top. Then select the amount of BNB Smart chain tokens you want to buy.
                    If this is not available in your app due to your country regulations, buy BNB on an exchange and send this to your Trustwallet. For more information <a href="https://community.trustwallet.com/t/how-to-send-and-receive-bnb-on-smart-chain/67430">click here</a></p>
                </div>
                <div css={gridItem}>
                    <div css={circle}>
                        <GoBrowser/>
                    </div>
                    <div css={arrowDisappearBig}>
                        <FaArrowRight/>
                    </div>
                    <h2>Connecting the wallet</h2>
                    <p>Open PancakeSwap  on your browser and connect your wallet via Walletconnect. The website of PancakeSwap  is: https://pancakeswap.finance/ or <a href="https://pancakeswap.finance/">click here</a></p>
                </div>
                <div css={gridItem}>
                    <div css={circle}>
                        <img src={logo} css={icon} alt="afbeelding van logo"></img>
                    </div>
                    <div css={arrowDisappear}>
                        <FaArrowRight/>
                    </div>
                    <h2>Buy Algorithm Token</h2>
                    <p>Go to exchange on PancakeSwap  and select BNB at 'From'.
                        Next, paste the contract code in 'To' to select the Algorithm Token.
                        Enter your amounts you want to swap and confirm it to get your first Algorithm Tokens.

                        If your Algorithm Tokens are not showing up in your wallet use the following instructions to add the Tokens onto your wallet page: <a href="https://community.trustwallet.com/t/how-to-add-a-custom-token/213">click here.</a></p>
                </div>
                <div css={gridItem}>
                    <div css={circle}>
                        <GoVerified />
                    </div>
                    <div css={arrow2}>
                        <FaArrowRight/>
                    </div>
                    <h2>Details</h2>
                    <p>Name: Algorithm</p>
                    <p>Network: Smart Chain</p>
                    <p>Contract address:</p> 
                    <p>0xc101dd1969095051e490561d53e05dba122c0b70</p>
                    <p>Decimals: 18</p>
                    <p>Symbol: ALGRTHM</p>

                </div>
            </div>
        </section>
    );
};

export default HowToBuy;