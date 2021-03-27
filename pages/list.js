import React from 'react';
import axios from 'axios';

export default class members extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://192.168.1.166:4000/api/users')
      .then(res => {
        const persons = res.data.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}