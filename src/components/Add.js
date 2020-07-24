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
  }

  render() {
    return (
      <div className='container-fluid'>
        <div class='input-group mb-3'>
          <input
            type='text'
            class='form-control'
            placeholder='item'
            aria-label='item'
            aria-des
          />
          <div class='input-group-append'>
            <button class='btn btn-outline-primary' type='button'>
              Add
            </button>
          </div>
        </div>
        <div>
          <Slider
            min={this.state.min}
            max={this.state.max}
            value={this.state.price}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}
export default Add;
