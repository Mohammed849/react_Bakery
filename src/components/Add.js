import React from 'react';
import Slider from './Slider';
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      price: 1,
      min: 1,
      max: 10,
    };
    this.moveChangeSlider = this.moveChangeSlider.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(evt) {
    this.setState({
      input: evt.target.value,
    });
  }
  moveChangeSlider(val) {
    console.log(val);
    this.setState({
      price: val,
    });
  }
  onSubmit() {
    this.props.onAdd(this.state.price, this.state.input);
    this.setState({
      price: 1,
      input: '',
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='input-group mb-3'>
          <input
            type='text'
            value={this.state.input}
            onChange={this.changeInput}
            className='form-control'
            placeholder='item'
          />
          <div className='input-group-append'>
            <button
              onClick={this.onSubmit}
              className='btn btn-outline-primary'
              type='button'>
              Add
            </button>
          </div>
        </div>
        <div>
          <Slider
            min={this.state.min}
            max={this.state.max}
            value={this.state.price}
            onChange={this.moveChangeSlider}
          />
        </div>
      </div>
    );
  }
}
export default Add;
