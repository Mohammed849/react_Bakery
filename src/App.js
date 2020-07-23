import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'pay',
      items: [],
    };
    this.onClickTabAdd = this.onClickTabAdd.bind();
    this.onClickTabList = this.onClickTabList.bind();
    this.onClickTabPay = this.onClickTabPay.bind();
  }

  onClickTabAdd() {
    // console.log('App#onClickTabAdd');
    this.setState({
      activeTab: 'add',
    });
  }
  onClickTabList() {
    this.setState({
      activeTab: 'list',
    });
  }
  onClickTabPay() {
    this.setState({
      activeTab: 'pay',
    });
  }
  renderAdd() {
    if (this.state.activeTab === 'add') {
      return <Add />;
    }
    return null;
  }
  renderList() {
    if (this.state.activeTab === 'list') {
      return <List />;
    }
    return null;
  }
  renderPay() {
    return null;
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Button onClick={this.onClickTabAdd}>Add</Button>
          <Button onClick={this.onClickTabList}>List</Button>
          <Button onClick={this.onClickTabPay}>Pay</Button>
        </div>
        <div className='row'>
          {this.renderAdd()}
          {this.renderList()}
          {this.renderPay()}
        </div>
      </div>
    );
  }
}
export default App;
