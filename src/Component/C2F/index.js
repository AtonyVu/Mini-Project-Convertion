import React, { Component } from "react";
import "./../../style/css.css";
export default class C2F extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      nameA: "Celsius",
      nameB: "Fahrenheit",
      modeConvert: true,
      unitA: "C",
      unitB: "F",
      result: "",
      Calculator: "",
    };
  }
  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  handleChangeOptionA = (e) => {
    this.resetConvert();
    switch (e.target.value) {
      case "Celsius": {
        this.setState({ unitA: "C", nameA: e.target.value });
        break;
      }
      case "Fahrenheit": {
        this.setState({ unitA: "F", nameA: e.target.value });
        break;
      }
      case "Kelvin": {
        this.setState({ unitA: "K", nameA: e.target.value });
        break;
      }

      default:
        break;
    }
    // this.setState({ value: e.target.value });
  };
  handleChangeOptionB = (e) => {
    this.resetConvert();
    switch (e.target.value) {
      case "Celsius": {
        this.setState({ unitB: "C", nameB: e.target.value });
        break;
      }
      case "Fahrenheit": {
        this.setState({ unitB: "F", nameB: e.target.value });
        break;
      }
      case "Kelvin": {
        this.setState({ unitB: "K", nameB: e.target.value });
        break;
      }

      default:
        break;
    }
    // this.setState({ value: e.target.value });
  };
  submitConvert = () => {
    if (isNaN(this.state.value) || this.state.value === "") {
      alert("Nhập số vào bạn ehhhhh");
      this.setState({ value: "" });
    } else {
      switch (this.state.unitA) {
        case "C": {
          if (this.state.unitB === "F") {
            this.setState({
              result: this.state.value * (9 / 5) + 32,
            });
          }
          if (this.state.unitB === "K") {
            this.setState({
              result: parseInt(this.state.value) + 273.15,
            });
          }
          if (this.state.unitB === "C") {
            alert("Trùng đơn vị dòi bạn ehhh");
          }
          break;
        }
        case "K": {
          if (this.state.unitB === "C") {
            this.setState({
              result: parseInt(this.state.value) - 273.15,
            });
          }
          if (this.state.unitB === "F") {
            this.setState({
              result: (parseInt(this.state.value) * 9) / 5 - 459.67,
            });
          }
          if (this.state.unitB === "K") {
            alert("Trùng đơn vị dòi bạn ehhh");
          }
          break;
        }
        case "F": {
          if (this.state.unitB === "C") {
            this.setState({
              result: (this.state.value - 32) * (5 / 9),
            });
          }
          if (this.state.unitB === "K") {
            this.setState({
              result: (parseInt(this.state.value) + 459.67) * (5 / 9),
            });
          }
          if (this.state.unitB === "F") {
            alert("Trùng đơn vị dòi bạn ehhh");
          }
          break;
        }

        default:
          break;
      }
    }
  };
  resetConvert = () => {
    this.setState({ value: "", result: "" });
  };
  render() {
    return (
      <div className="C2F_container">
        <div className="convert_from">
          <select onChange={this.handleChangeOptionA} value={this.state.nameA}>
            <option>Celsius</option>
            <option>Kelvin</option>
            <option>Fahrenheit</option>
          </select>
          <input
            onChange={this.handleOnChange}
            value={this.state.value}
          ></input>
          <label>{this.state.unitA} </label>
        </div>
        <h4 className="labelTo">TO</h4>
        <div>
          <select onChange={this.handleChangeOptionB} value={this.state.nameB}>
            <option>Celsius</option>
            <option>Kelvin</option>
            <option>Fahrenheit</option>
          </select>
          <input value={this.state.result} disabled></input>
          <label>{this.state.unitB} </label>
        </div>

        <div className="btn-convert">
          <div onClick={this.submitConvert}>Convert</div>
          <div onClick={this.resetConvert}>Reset</div>
        </div>
      </div>
    );
  }
}
