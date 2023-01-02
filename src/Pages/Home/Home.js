import React, { Component } from "react";
import Header from "./Header";
import styles from "../../SASS/Layout/_home.module.scss";
import Body from "./Body";

export default class Home extends Component {
  render() {
    return (
      <div className={`${styles.home}`}>
        <Header />
        <Body />
      </div>
    );
  }
}
