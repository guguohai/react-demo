import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { current_user_url: '' };
  }

  componentDidMount() {
    this.fetchData((json) => this.setState({ current_user_url: json.current_user_url }));
  }

  fetchData(callback) {
    fetch('https://api.github.com')
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        callback(json);
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.current_user_url}
      </div>
    );
  }
}

export default About;
