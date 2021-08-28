import React from 'react';
import { css } from '@emotion/react';

import media from '../styles/media';
import monitorGraphs from '../assets/media/mission/monitor-graphs.svg';
import graphs from '../assets/media/mission/graphs.svg';

const MissionWrapper = css`
    background-color: rgba(13, 13, 44);
    text-align: center;

    h1 {
        font-size: 4rem;
        font-weight: 500;
    }

    h4 {
        font-size: 24px;
        padding-bottom: 2%;
    }
    p {
        text-align: center;
        font-size: 16px;
        line-height: 2rem;
        font-weight: 600;
        letter-spacing: 0.0625em;
    }
    ${media.small} {
        p {
            font-size: 12px;
        }
        h4 {
            font-size: 20px;
        }
    }
`;

const TextContainer = css`
    text-align: center;
    color: white;
    background-color: rgba(13, 13, 44);
    padding: 2%;
    margin-bottom: 0px !important;
`;
const containerGrid = css`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    ${media.small} {
        grid-template-columns: 1fr;
    }
`;

const gridItem = css`
    padding: 3%;
    width: 100%;
    height: auto;
`;

const foto = css`
    width: 250px;
    height: 200px;
    vertical-align: middle;
    border-style: none;
`;
const corners = css`
    background: linear-gradient(to right, #fdd700 3px, transparent 3px) 0 0,
        /* linear-gradient(to right, #FDD700 3px, transparent 3px) 0 100%, */
            /* linear-gradient(to left, #FDD700 3px, transparent 3px) 100% 0, */
            linear-gradient(to left, #fdd700 3px, transparent 3px) 100% 100%,
        linear-gradient(to bottom, #fdd700 3px, transparent 3px) 0 0,
        /* linear-gradient(to bottom, #FDD700 3px, transparent 3px) 100% 0, */
            /* linear-gradient(to top, #FDD700 3px, transparent 3px) 0 100%, */
            linear-gradient(to top, #fdd700 3px, transparent 3px) 100% 100%;

    background-repeat: no-repeat;
    background-size: 30px 30px;
`;
const Mission = () => {
    return (
        <section className="container" css={MissionWrapper}>
            <div css={TextContainer}>
                <h1 id="Mission">Mission</h1>
            </div>
            <div css={containerGrid}>
                <div css={corners}>
                    <div css={gridItem}>
                        <h4>A New Era of Trading</h4>
                        <p>
                            Our team at Algorithm Coin is working on an application to trade
                            automatically like a day trader. Advanced software that uses AI and
                            pattern recognition technology makes it possible to make big profits in
                            the crypto market. A demo is currently being worked on. In the future
                            will this application be available for Algorithm Coin holders.
                        </p>
                    </div>
                </div>
                <div css={gridItem}>
                    <h4>The Power of Algorithm</h4>
                    <img src={graphs} css={foto}></img>
                    <p>
                        Our coming application offers a lot of potential in the future. Buy
                        Algorithm Coin and enjoy our prosperity.
                    </p>
                </div>
                <div css={gridItem}>
                    <h4>Analytics</h4>
                    <img src={monitorGraphs} css={foto}></img>
                    <p>When our algorithm starts trading, our team will provide monthly updates.</p>
                </div>
            </div>
        </section>
    );
};

export default Mission;
