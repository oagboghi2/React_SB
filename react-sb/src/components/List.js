import React, { Component } from 'react';

class List extends Component {
constructor(props){
super(props);
this.state = {}

}
render(){
    console.log("this.props ", this.props)
    //console.log("this.state ", this.state)
    console.log("this.props.items ", this.props.items)
    return (
        <div>
        <ul>
            {this.props.items.map(item => (
            <li key={item}>
                {item}
                <button className="delete" onClick={() => this.props.delete(item)}></button>
            </li>
            ))}
        </ul>
        </div>
        )
    }
}



export default List;