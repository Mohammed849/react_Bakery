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
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  onAdd(price, input) {
    const items = this.state.items;
    items.push({
      input,
      price,
    });

    this.setState({
      items,
      // activeTab: 'list',
    });
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
    if (this.state.activeTab !== 'add') {
      return null;
    }
    return <Add />;
  }
  renderList() {
    if (this.state.activeTab !== 'list') {
      return null;
    }
    return <List items={this.state.items} />;
  }
  renderPay() {
    if (this.state.activeTab !== 'pay') {
      return null;
    }
    return <Pay />;
  }

  render() {
    const { activeTab, items } = this.state;
    console.log(items);
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Button onClick={this.onClickTabAdd}>Add</Button>
          <Button
            isSelected={activeTab === 'list'}
            onClick={this.onClickTabList}>
            List
          </Button>
          <Button isSelected={activeTab === 'pay'} onClick={this.onClickTabPay}>
            Pay
          </Button>
        </div>
        {activeTab === 'add' && (
          <Add onSubmit={this.onAdd} onAdd={this.onAdd} />
        )}
        {activeTab === 'list' && <List items={items} />}
        {activeTab === 'pay' && <Pay />}
      </div>
    );
  }
}

export default App;
