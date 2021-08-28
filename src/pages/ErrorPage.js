import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import media from '../styles/media';

const ErrorPageStyle = () => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin: 1rem auto;
        max-width: 35%;
    }

    ${media.medium} {
        img {
            margin: 2rem auto;
            max-width: 70%;
        }
    }
    ${media.small} {
        h1 {
            font-size: 2.5rem;
        }
        img {
            margin: 2rem auto;
            max-width: 80%;
        }
    }
`;

const ErrorPage = () => {
    return (
        <div css={ErrorPageStyle()}>
            <h1>Page Not Found.</h1>
            <Link to="/">go Home</Link>
        </div>
    );
};

export default ErrorPage;
