import React from 'react';

import { HowToBuy, Intro, Mission, Roadmap, Problem, Solution } from '../containers';

const HomePage = () => {
    return (
        <>
            <Intro />
            <Mission />
            {/* <HowToBuy /> */}
            <Roadmap />
            <Problem />
            <Solution />
        </>
    );
};

export default HomePage;
