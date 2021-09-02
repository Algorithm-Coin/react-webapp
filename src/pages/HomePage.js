import React from 'react';

import { HowToBuy, Intro, Mission, Roadmap, Problem, Solution, Socials, Benefits } from '../containers';

const HomePage = () => {
    return (
        <>
            <Intro />
            <Mission />
            <HowToBuy />
            <Roadmap />
            <Problem />
            <Solution />
            <Benefits/>
            <Socials />
        </>
    );
};

export default HomePage;
