import React from 'react';
import { css } from '@emotion/react';

import { HowToBuy, Intro, Mission, Roadmap } from '../containers';
import media from '../styles/media';

const HomePageStyle = css`
    h1 {
        font-size: 5rem;
        font-weight: bold;
        text-align: center;
    }
    h3 {
        font-size: 3em;
    }

    ${media.small} {
        h1 {
            font-size: 4rem;
        }
        h3 {
            font-size: 2em;
        }
    }

    ${media.xsmall} {
        h1 {
            font-size: 3rem;
        }
        h3 {
            font-size: 1.66em;
        }
    }
`;

const HomePage = () => {
    return (
        <div css={[HomePageStyle]}>
            <Intro />
            <Mission />
            <HowToBuy />
            <Roadmap />
        </div>
    );
};

export default HomePage;
