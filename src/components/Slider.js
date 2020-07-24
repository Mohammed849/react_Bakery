import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
class Slider extends React.Component {
  render() {
    return (
      <div>
        <RCSlider
          max={this.props.max}
          min={this.props.min}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}
export default Slider;
