import React, { Component } from "react";
import styles from "../../SASS/Layout/_body.module.scss";

export default class Body extends Component {
  state = {
    glass: {
      name: "",
      url: "",
      desc: "",
    },
  };

  glassList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  renderGlassImage() {
    return this.glassList.map((glass) => {
      return (
        <div className="col-lg-2" key={glass.id}>
          <button onClick={() => this.handleSwitchGlass(glass)}>
            <img className="img-fluid" src={glass.url} />
          </button>
        </div>
      );
    });
  }

  handleSwitchGlass(glass) {
    const { name, url, desc } = glass;

    this.setState({
      glass: {
        name,
        url,
        desc,
      },
    });
  }

  render() {
    return (
      <section className={`${styles.body} my-5`}>
        <section className={`container `}>
          <div className="preview my-5">
            <div className="row g-5">
              <div className={` col-lg-6`}>
                <div className={``}>
                  <div className={`${styles["body__images"]}`}>
                    <img src={this.state.glass.url} />
                    {this.state.glass.name && (
                      <div className={`${styles["body__images-info"]}`}>
                        <h3>{this.state.glass.name}</h3>
                        <p>{this.state.glass.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={` col-lg-6`}>
                <div className={``}>
                  <div className={`${styles["body__images"]}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["glass-container"]} my-4`}>
            <div className="row g-5">{this.renderGlassImage()}</div>
          </div>
        </section>
      </section>
    );
  }
}
