const rgb = () => {
  return Math.floor(Math.random() * 256);
};

const calculateHue = (block, corners, dimensions) => {
  let [x, y] = block;
  let { topLeft, topRight, bottomLeft, bottomRight } = corners;
  let { height, width } = dimensions;

  let calcComponent = (i) => {
    let start = topLeft[i] + y * ((bottomLeft[i] - topLeft[i]) / (height - 1));
    let end = topRight[i] + y * ((bottomRight[i] - topRight[i]) / (height - 1));
    let component = start + (x * (end - start)) / (width - 1);
    return Math.round(component);
  };

  return [0, 1, 2].map((i) => calcComponent(i));
};

export { rgb, calculateHue };
