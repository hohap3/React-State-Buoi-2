import React, { Component } from "react";
import styles from "../../SASS/Layout/_header.module.scss";

console.log(styles);

export default class Header extends Component {
  render() {
    return (
      <header className={`${styles.header}`}>
        <h2>Try glasses app online</h2>
      </header>
    );
  }
}
