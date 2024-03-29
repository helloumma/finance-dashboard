import React, { Component } from 'react';
import { getData } from '../actions/fx';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700]
];

class FxRates extends Component {
  componentDidMount = () => {
    this.props.getData();
   }
  render() {
     console.log(this.props.FxReducer)
    return (
      <div>
        <p>EUR/USD 1.5</p>
        <p>USD/JPY 109.55</p>
        <p>GBP/USD 1.27</p>
        <p>USD/CHF 0.98</p>
        <p>EUR/GBP 0.90</p>
        <p>EUR/JYP 125.62</p>
        <p>EUR/CHF 1.13</p>
        <p>USD/CAD 1.36</p>
        <p>AUD/USD 0.70</p>
        <p>GBP/JPY 139.81</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FxRates);
