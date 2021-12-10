import React from "react";

class Icon extends React.Component {
  state = {
    image: null,
  };

  componentDidMount() {
    import("./images/icon-" + this.props.title + ".svg");
  }

  render() {
    return this.state.image ? <img alt="icon" src={this.state.image} /> : null;
  }
}

export default Icon;
