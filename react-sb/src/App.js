import React, { Component } from 'react';
import List from './components/List.js';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [
        "Go to the store",
        "Wash the dishes",
        "Learn some code"
      ],
      filtered: []
    }
  }

  addItem = (e) => {
    // prevent button click from submitting form
    e.preventDefault()

    //Create variables for our list, the item to add, and our form
    let list = this.state.list
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    //If our input has a value
    if(newItem.value != "") {
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });
      // Finally, we need to reset the form 
      newItem.classList.remove("is-danger")
      form.reset(); 
    } else {
      // If the nput doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }

  removeItem = (item) => {
    // Put our list into an array
    const list = this.state.list.slice();
    // Check to see if item passed in matches item in array
    list.some((el, i) => {
      if (el === item) {
        // If item matches, remove it from array
        list.splice(i, 1);
        return true;
      }
    });
    // Set state to list
    this.setState({
      list: list
    });
  }
  
  render() {
    return (
      <div className="Content">
        <section className="container">
          <List items={this.state.list} filtered={this.state.filtered} delete={this.removeItem}  />
        {/*<ul>
              {this.state.list.map(item => (
              <li key={item}>{item}
              
              <button
                className="delete"
                onClick={()=>this.removeItem(item)}
              ></button>
              </li> 
            ))}
          </ul> */}
        </section>
        <hr />
        <section className="section">
          <form className="form" id="addItemForm" >
            <input 
              type="text"
              className="input"
              id="addInput"
              placeholder="Some that nees to be done..."
            />
            <button className="button-is info" onClick={this.addItem}>
            Add Item
            </button>
          </form>
        </section>
      </div>
    )
  }
}

// class List extends Component {
//   render(){
//     console.log("this.state.lost: ",)
//     return (
//       <div>
//         <ul>
//           {this.state.list.map(item => (
//             <li key={item}>
//               <span 
//                 className="delete"
//                 onClick={() => this.removeItem(item)}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

{/*         <ul>
              {this.state.list.map(item => (
              <li key={item}>{item}
              
              <button
                className="delete"
                onClick={()=>this.removeItem(item)}
              ></button>
              </li> 
            ))}
          </ul> */}

export default App;
