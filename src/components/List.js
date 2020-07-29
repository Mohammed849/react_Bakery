import React from 'react';
class List extends React.Component {
  render() {
    return (
      <div>
        List
        <ul>
          {this.props.items.map((item) => {
            console.log(item);
            return (
              <p>
                {item.input} {item.price}
              </p>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default List;
