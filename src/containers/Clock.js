import React, { Component } from "react";
import { css } from '@emotion/react';
import media from '../styles/media';

const tijden = css`
  color: #FDD700;
  font-size: 45px;
  display: inline-table;
  padding: 15px;
  ${media.small} {
    font-size: 22px;
    padding: 5px;
  }
  ${media.xsmall} {
    font-size: 15px;
    padding: 5px;
  }
`;
const letterTijden = css`
  color: #FDD700;
  font-size: 20px;
  padding-top: 5px;
  ${media.small} {
    font-size: 15px;
  }
  ${media.xsmall} {
    font-size: 10px;
  }
`;
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div>
        <div className="CLock-days" css={tijden}>
          {this.leading0(this.state.days)} <div css={letterTijden}>DAYS</div>
        </div>
        <div className="Clock-hours"css={tijden}>
          {this.leading0(this.state.hours)} <div css={letterTijden}>HOURS</div>
        </div>
        <div className="Clock-minutes" css={tijden}>
          {this.leading0(this.state.minutes)} <div css={letterTijden}>MINUTES</div>
        </div>
        <div className="Clock-seconds" css={tijden}>
          {this.leading0(this.state.seconds)} <div css={letterTijden}>SECONDS</div>
        </div>
      </div>
    );
  }
}
export default Clock;
