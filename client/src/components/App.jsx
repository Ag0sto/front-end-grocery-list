import React from 'react'
// import ReactDom from 'react-dom'
import GroceriesItem from './GroceriesItem.jsx'
import groceriesData from '../data/groceriesData.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groceries: groceriesData,
      item: '',
      quantity: ''
    }

    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleText(event) {
    console.log('event is ', event.target);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    var newItem = {
      name: this.state.item,
      quantity: this.state.quantity
    }

    this.setState({
      groceries: [...this.state.groceries, newItem]
    })
    console.log('groceries are ', this.state.groceries);
  }

  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Item
            <input name="item" value={this.state.item} onChange={this.handleText}/>
          </label>
          <label> Quantity
            <input name="quantity" value={this.state.quantity} onChange={this.handleText}/>
          </label>
          <button>Add Grocery</button>
          <ul className='groceries'>
            {this.state.groceries.map((item, index) => (
              // console.log('index and item are, ', item);
            <GroceriesItem items={item} key={index}/>
            ))}
          </ul>
          {/* <GroceriesItem items={groceriesData}/> */}
          {/* <ul className="groceries">
            <li>
              <span>apples - </span>
              <span>4</span>
            </li>
            <li>
              <span>bread - </span>
              <span>2</span>
            </li>
            <li>
              <span>etc...</span>
            </li>
          </ul> */}
        </form>
      </div>
    );
  }
};

export default App;