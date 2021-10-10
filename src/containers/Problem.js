import React from 'react';
import { css } from '@emotion/react';
import lottie from 'lottie-web';
import media from '../styles/media';
import businessMen from '../assets/media/problem/businessMen.json';
import background from '../assets/media/problem/backgroundLines.svg';

const ProblemWrapper = css`
    background-color: #141438;
    padding: 4rem 100px;
    &:after {
        background: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        z-index: 1;
    }

    ${media.medium} {
        padding: 4rem 40px;
        .lottie-animation {
            width: 350px;
        }
    }

    ${media.small} {
        flex-direction: column;

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

const Problem = () => {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#businessMen'),
            animationData: businessMen,
        });
    }, []);
    return (
        <section className="flex-container" css={ProblemWrapper} id="problem">
            <div className="flex-item">
                <h1>Problem</h1>
                <h4>Algorithm Trading</h4>
                <p>
                    Trading via algorithms is indispensable. Advanced mathematical models can make
                    data-driven decisions at lightning speed. The price reactions to published
                    economic figures are often striking. Right now, only the elite have the best
                    algorithms on the crypto market. These algorithms invest in longer periods and not like a real day trader.
                </p>
                <h4>Profit</h4>
                <p>
                    There is no company or organization that invests its profit back into its own token every month like Algorithm. By investing the profit back into the token, every holder can enjoy the profits of the algorithm and this is what makes the Algorithm token unique.
                </p>
            </div>
            <div className="flex-item">
                <div
                    className="centered lottie-animation"
                    id="businessMen"
                    alt="Animation of businessmen"
                />
            </div>
        </section>
    );
};

export default Problem;
