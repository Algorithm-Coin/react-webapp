import React from 'react';
import { css } from '@emotion/react';
import media from '../styles/media';


const MissionWrapper = css`
    background-color: #141438;
    text-align: center;
    padding: 4rem 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        text-align: left;
        font-size: 20px;
        border-bottom: 1px solid white;
        width: 115px;
        padding-bottom: 0;
        margin-bottom: 40px;
    }
    h2{
        color: grey;
        font-size: 34px;
        flex: 1;
        margin-bottom: 10px;
        text-align: left;
    }
    ${media.small} {
        padding: 4rem 40px;
    }
`;
const gridContainer = css`
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding-left: 10%;
    padding-top: 1%;
    ${media.small} {
        grid-template-columns: 1fr;
    }
`;
const gridItem = css`
    padding: 0 2%;
    width: 100%;
    height: auto;
    text-align: left;

    ${media.small} {
        margin: 2rem 0;
    }
`;
const geleTekst = css`
    color: #FDD700;
    text-align: right;
    flex: 1;
    display: inline-block;
`;

const Mission = () => {
    return (
        <section className="container" css={MissionWrapper} id="mission">
            <div>
                <h1>Our mission</h1>
                <h2>To create a new <div css={geleTekst}>Era</div></h2>
                <h2>with the power of <div css={geleTekst}>Algorithm</div></h2>
                <div css={gridContainer}>
                    <div css={(gridItem)}>
                        <p>
                            Our team at Algorithm is working on an application to trade
                            automatically like a day trader. Advanced software that uses AI and
                            pattern recognition technology makes it possible to make big profits in
                            the crypto market. A demo is currently being worked on. In the future
                            this application will be available for Algorithm Token holders. 
                        </p>
                    </div>
                    <div css={gridItem}>
                        <p>
                            When our algorithm starts trading, our team will provide monthly
                            updates and the profit of the algorithm will be back invested in the token every month. Our coming application offers a lot of potential in the future. Buy Algorithm Token now and enjoy our prosperity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;


