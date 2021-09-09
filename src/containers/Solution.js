import React from 'react';
import { css } from '@emotion/react';
import lottie from 'lottie-web';
import media from '../styles/media';
import goudeLaptop from '../assets/media/solution/goudelaptop.json';

const SolutionWrapper = css`
    background-color: rgba(13, 13, 44);

    ${media.medium} {
        .lottie-animation {
            width: 350px;
        }
    }

    ${media.small} {
        flex-direction: column-reverse;

        .lottie-animation {
            width: 300px;
            height: auto;
        }
    }

    ${media.xsmall} {
        .lottie-animation {
            width: 200px;
        }
    }
`;

const Solution = () => {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#goudeLaptop'),
            animationData: goudeLaptop,
        });
    }, []);
    return (
        <section className="flex-container" css={SolutionWrapper} id="solution">
            <div className="flex-item">
                <div
                    className="centered lottie-animation"
                    id="goudeLaptop"
                    alt="Animation of goude Laptop"
                />
            </div>
            <div className="flex-item">
                <h1>Solution</h1>
                <h4>Our Team</h4>
                <p>
                    Our team wants to make it possible for everyone to day trade via an application.
                    This application will start day trading through our algorithm 24 hours a day and
                    will only be available for Algorithm Coin holders.
                </p>
                <h4>Algorithm</h4>
                <p>
                    Our algorithm will also trade 24 hours a day 7 days a week like a day trader for
                    you in the future! Users will see an overview of the trades to see how well the
                    day has been. Our algorithm will learn through AI. Thanks to AI, the algorithm
                    can learn from its mistakes and predict the price even better in the future and
                    last but not least our developers keep working on the algorithm until there will
                    be nothing to improve ;).
                </p>
            </div>
        </section>
    );
};

export default Solution;
