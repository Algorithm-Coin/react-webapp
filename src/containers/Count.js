import React, { Component } from "react";
import Clock from "./Clock";
import { css } from '@emotion/react';
import media from '../styles/media';

const CountWrapper = css`
    background-color:  rgba(13, 13, 44);
    text-align: center;
    padding: 4rem 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    
    h1{
      position: relative;
    }
    h2{
      text-align: center;
      font-size: 18px;
      padding-bottom: 10px;
      color: white;
      line-height: normal;
    }
    ${media.small} {
        padding: 4rem 40px;
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
          <h1>Launch Algorithm Token</h1>
          <h2 className="App-date">{this.state.deadline}</h2>
          <p><Clock deadline={this.state.deadline} /></p>
        </div>
      </section>
    );
  }
}
export default App;
