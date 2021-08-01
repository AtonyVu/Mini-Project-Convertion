import React, { Component } from "react";
import "./../../style/css.css";
export default class C2K extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      nameA: "Celsius",
      nameB: "Kelvin",
      modeConvert: true,
      unitA: "C",
      unitB: "K",
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
            result: parseInt(this.state.value) + 273.15,
            Calculator: `${this.state.value}°C + 273.15`,
          });
          break;
        case false:
          this.setState({
            result: parseInt(this.state.value) - 273.15,
            Calculator: `${this.state.value}K- 273.15`,
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
        nameA: "Kelvin",
        nameB: "Celsius",
        unitA: "K",
        unitB: "C",
      });
    } else {
      this.setState({
        modeConvert: true,
        nameA: "Celsius",
        nameB: "Kelvin",
        unitA: "C",
        unitB: "K",
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
          <input disabled value={this.state.result}></input>
          <label>{this.state.unitB} </label>
        </div>
        <div>
          <label>Calculation: </label>
          <textarea disabled value={this.state.Calculator}></textarea>
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
