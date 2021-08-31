import React from 'react';

import { HowToBuy, Intro, Mission, Roadmap, Problem, Solution, Socials } from '../containers';

const HomePage = () => {
    return (
        <>
            <Intro />
            <Mission />
            <HowToBuy />
            <Roadmap />
            <Problem />
            <Solution />
            <Socials />
        </>
    );
};

export default HomePage;
