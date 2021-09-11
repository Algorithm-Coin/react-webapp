import React, { Component } from "react";
import Clock from "./Clock";
import { css } from '@emotion/react';
import media from '../styles/media';

const CountWrapper = css`
    background-color:  rgba(13, 13, 44);
    font-family: Nunito,monospace !important;
    text-align: center;
    padding: 4rem 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    
    h1{
      position: relative;
      font-size: 40px;
    }
    h2{
      text-align: center;
      font-size: 18px;
      padding-bottom: 10px;
      color: white;
      line-height: normal;
      font-weight: bold ;
    }
    ${media.small} {
      padding: 4rem 40px;
      h1{
        font-size: 30px;
        padding-bottom: 1rem;
      }

    }
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "November, 30, 2021" };
  }
  render() {
    return (
      <section className="container" css={CountWrapper}>
        <div>
          <h2 className="App-date">{this.state.deadline}</h2>
          <h1>Launch Algorithm Coin</h1>
          <p><Clock deadline={this.state.deadline} /></p>
        </div>
      </section>
    );
  }
}
export default App;
