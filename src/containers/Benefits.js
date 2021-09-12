import React from 'react';
import { css } from '@emotion/react';
import media from '../styles/media';
import { Container } from 'postcss';

const BenefitsWrapper = css`
    background-color: rgba(13, 13, 44);

    h1 {
        text-align: center;
        padding-bottom: 0;
    }
    ${media.small} {
        flex-direction: column;
    }
`;
const lowContainer = css`
    background-color: #141438;
    top: 90px;
    background-image: linear-gradient(119deg, rgba(20, 20, 56, 0.09) 42%, #0d0d2c);
    padding: 20px;
    margin-bottom: 10px;
    height: 350px;
    ${media.small} {
        top: 0;
        margin-top: 10px;
        height: auto;
    }
`;
const highContainer = css`
    background-color: #141438;
    background-image: linear-gradient(119deg, rgba(20, 20, 56, 0.09) 42%, #0d0d2c);
    padding: 20px;
    height: 350px;
    ${media.small} {
        height: auto;
    }
`;
const responsiveContainer = css`
    ${media.small} {
        display: block;
    }
`;
const Benefits = () => {
    return (
        <section css={BenefitsWrapper} id="benefits">
            <h1>Benefits of Buying The Token</h1>
            <div className="flex-container" css={responsiveContainer}>
                <div className="flex-item" css={highContainer}>
                    <h4>Value increase</h4>
                    <p>
                        Holding the Algorithm tokens means you are supporting the future of day
                        trading. Every single time a business joins the Algorithm network, the value
                        of the network increases. The token will be later available by even more
                        trading platforms, which causes the price to rise and increase the the
                        Algorithm community.
                    </p>
                </div>
                <div className="flex-item" css={lowContainer}>
                    <h4>Growth potential</h4>
                    <p>
                        The potential growth of the Algorithm token is huge and the application will
                        be used by millions of people worldwide. This will lead to an immense value
                        increase very quickly as our user-base grows and more people are ready to
                        join the Algorithm community.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
