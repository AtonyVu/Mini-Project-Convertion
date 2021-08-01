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
  submitConvert = () => {
    if (isNaN(this.state.value) || this.state.value === "") {
      alert("Nhập số vào bạn ehhhhh");
      this.setState({ value: "" });
    } else {
      switch (this.state.modeConvert) {
        case true:
          this.setState({
            result: this.state.value * (9 / 5) + 32,
            Calculator: `${this.state.value}°C * (9/5) + 32`,
          });
          break;
        case false:
          this.setState({
            result: (this.state.value - 32) * (5 / 9),
            Calculator: `(${this.state.value}°F- 32) * (5 / 9)`,
          });
          break;

        default:
          break;
      }
    }
  };
  SwapConvert = () => {
    if (this.state.modeConvert) {
      this.setState({
        modeConvert: false,
        nameA: "Fahrenheit",
        nameB: "Celsius",
        unitA: "F",
        unitB: "C",
      });
    } else {
      this.setState({
        modeConvert: true,
        nameA: "Celsius",
        nameB: "Fahrenheit",
        unitA: "C",
        unitB: "F",
      });
    }
    this.resetConvert();
  };
  resetConvert = () => {
    this.setState({ value: "", Calculator: "", result: "" });
  };
  render() {
    return (
      <div className="C2F_container">
        <div className="convert_from">
          <label>{this.state.nameA}: </label>
          <input
            onChange={this.handleOnChange}
            value={this.state.value}
          ></input>
          <label>{this.state.unitA} </label>
        </div>
        <h4>TO</h4>
        <div>
          <label>{this.state.nameB}: </label>
          <input value={this.state.result} disabled></input>
          <label>{this.state.unitB} </label>
        </div>
        <div>
          <label>Calculation: </label>
          <textarea value={this.state.Calculator} disabled></textarea>
        </div>
        <div className="btn-convert">
          <div onClick={this.submitConvert}>Convert</div>
          <div onClick={this.resetConvert}>Reset</div>
          <div onClick={this.SwapConvert}>Swap</div>
        </div>
      </div>
    );
  }
}
