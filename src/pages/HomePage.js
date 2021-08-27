import React from 'react';
import { css } from '@emotion/react';
import { HowToBuy, Intro, Mission, Roadmap, Problem, Solution } from '../containers';

const HomePageStyle = css`
    h1 {
        font-size: 5rem;
        font-weight: bold;
        text-align: center;
    }
    h3 {
        font-size: 3em;
    }
`;

const HomePage = () => {
    return (
        <div css={[HomePageStyle]}>
            <Intro />
            <Mission />
            <HowToBuy />
            <Roadmap />
            <Problem />
            <Solution />
        </div>
    );
};

export default HomePage;
