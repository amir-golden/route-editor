import React, { Component } from "react";

export default class PointAddForm extends Component {
  state = {
    name: ""
  };

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.name !== "") {
      this.props.onNameAdded(this.state.name);
      this.setState({
        name: ""
      });
    }
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control search-input"
          onChange={this.onNameChange}
          placeholder="Новая точка маршрута"
          value={this.state.name}
        />
      </form>
    );
  }
}
