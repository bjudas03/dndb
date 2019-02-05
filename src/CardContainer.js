import React, {Component} from 'react'
// const express = require('express');
// const request = require('request')

// var app = express();

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      name: "",
      desc: ""
    };
  }

  componentDidMount() {
    fetch("http://www.dnd5eapi.co/api/spells/1")
      .then(response => response.json())
      // .then(console.log(response))
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            name: result.name,
            desc: result.desc[0]
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(items)
      return (
        /* <div>{this.state.name} and {this.state.desc}</div> */


       <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.desc}
            </li>
          ))}
        </ul> 
      );
    }
  }
}
export default CardContainer;