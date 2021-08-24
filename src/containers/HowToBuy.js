import React from 'react';
import { css } from '@emotion/react';
import media from '../styles/media';

//index > App > Headers, Homepage, Footer > Intro > Button

const HowToBuyWrapper = css`
    font-family: 'Nunito', monospace;
    padding-left: 2%;
    padding-right: 2%;
    text-align: center;
    padding-bottom: 2%;
    background-color: rgba(13, 13, 44);

    h4{
        font-size: 24px;
        padding-bottom: 2%;
    }
    p{
        text-align: center;
        font-size: 16px;
        line-height: 2rem;
        font-weight: 600;
        letter-spacing: .0625em;
    }
`;

const TextContainer = css`
    text-align: center;
    color: white;
    background-color: rgba(13, 13, 44);
    padding: 2%;
    margin-bottom: 0px!important;
`;


const HowToBuy = () => {
    return (
        <section css={HowToBuyWrapper}>
            <div css={TextContainer}>
                <h1 id="HowToBuy">How To Buy</h1>
            </div>
        </section>
    );
};

export default HowToBuy;