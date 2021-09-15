import React from 'react';
import { css } from '@emotion/react';
import lottie from 'lottie-web';
import media from '../styles/media';
import files from '../assets/media/Whitepaper/files.json';
import pdf from '../assets/media/Whitepaper/AlgorithmWhitepaper.pdf'

const WhitepaperWrapper = css`
    background-color: rgba(13, 13, 44);
    padding: 4rem 100px;
    .lottie-animation {
            width: 350px;
        }
    ${media.large} {
        padding: 4rem 40px;
        .lottie-animation {
            width: 250px;
        }
    }
    ${media.medium} {
        padding: 4rem 40px;
        .lottie-animation {
            width: 150px;
        }
    }

    ${media.small} {
        flex-direction: column;

        .lottie-animation {
            width: 200px;
            display: none;
        }
        form{
            text-align: center;
        }
    }

    ${media.xsmall} {
        .lottie-animation {
            display: none;
        }
    }
`;
const ButtonStyle = css`
  font-size: 17px;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  text-align: center;
  background-color: transparent;
  border: 3px solid white;
  padding: 15px 15px;
  text-transform: uppercase;
  display: inline-block;

  &:hover {
    border: 3px solid #FDD700;
    color: #FDD700;
    cursor: pointer;
  }
`;
const Whitepaper = () => {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#files'),
            animationData: files,
        });
    }, []);
    return (
        <section css={WhitepaperWrapper} id="whitepaper" className="flex-container">
            <div className="flex-item">
                <h1>Whitepaper</h1>
                {/* <form method="get" action="./AlgorithmWhitepaper.pdf"> */}
                    <a href={pdf} css={ButtonStyle} target="_blank">Download</a>
                {/* </form> */}
            </div>
            <div className="flex-item">
                <div
                    className="centered lottie-animation"
                    id="files"
                    alt="Animation of files"
                />
            </div>
        </section>
    );
};

export default Whitepaper;