import React from 'react';
import { css } from '@emotion/react';
import lottie from 'lottie-web';

import media from '../styles/media';
import businessMen from '../assets/media/problem/businessMen.json';

const SolutionWrapper = css`
    background-color: rgba(13, 13, 44);

    ${media.small} {
        flex-direction: column-reverse;

        .lottie-animation {
            width: 250px;
        }
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
        <section className="flex-container" css={SolutionWrapper} id="solution">
            <div className="flex-item">
                <div
                    className="centered lottie-animation"
                    id="businessMen2"
                    alt="Animation of businessmen"
                />
            </div>
            <div className="flex-item">
                <h1>Solution</h1>
                <h4>Algorithm Trading</h4>
                <p>
                    Trading via algorithms is indispensable. Advanced mathematical models can make
                    data-driven decisions at lightning speed. The price reactions to published
                    economic figures are often striking. Right now, only the elite have the best
                    algorithms on the crypto market.
                </p>
                <h4>Transparency</h4>
                <p>
                    Many coins and companies are not transparent. This leads to speculation and
                    ambiguity. This is not the case with Algorithm Coin, because we fight for
                    transparency.
                </p>
            </div>
        </section>
    );
};

export default Solution;
