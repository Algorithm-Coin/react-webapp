import React from 'react';

import { HowToBuy, Intro, Count,Mission, Roadmap, Problem, Solution, Socials, Benefits, Whitepaper } from '../containers';

const HomePage = () => {
    return (
        <>
            <Intro />
            <Count />
            <Mission />
            <HowToBuy />
            <Roadmap />
            <Problem />
            <Solution />
            <Benefits/>
            <Whitepaper />
            <Socials />
        </>
    );
};

export default HomePage;
