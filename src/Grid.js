import React, { Component } from "react";
import Block from "./Block.js";

function rgb() {
  return Math.floor(Math.random() * 256);
}

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
      won: false,
      topLeft: [rgb(), rgb(), rgb()], // [255, 0, 0],
      topRight: [rgb(), rgb(), rgb()], //  [0, 255, 255],
      bottomLeft: [rgb(), rgb(), rgb()], //  [0, 0, 255],
      bottomRight: [rgb(), rgb(), rgb()], //  [255, 128, 0],
    };
  }

  calculateHue = (destination) => {
    let { topLeft, topRight, bottomLeft, bottomRight } = this.state;
    let { width, height } = this.props;
    let [x, y] = destination;

    let calcComponent = (i) => {
      let start =
        topLeft[i] + y * ((bottomLeft[i] - topLeft[i]) / (height - 1));
      let end =
        topRight[i] + y * ((bottomRight[i] - topRight[i]) / (height - 1));

      let component = start + (x * (end - start)) / (width - 1);
      return Math.round(component);
    };

    return [0, 1, 2].map((i) => calcComponent(i));
  };

  componentDidMount() {
    let blocks = [];

    for (let y = 0; y < this.props.height; y++) {
      for (let x = 0; x < this.props.width; x++) {
        let block = {
          location: [x, y],
          // destination: [x, y],
          colour: this.calculateHue([x, y]),
        };
        blocks.push(block);
      }
    }
    console.log({ blocks });
    this.setState({ blocks });
  }

  render() {
    let { width, height } = this.props;
    console.log({ width, height });
    let style = {};

    return (
      <div style={style}>
        {this.state.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    );
  }
}
