import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
  state = {
    persons: [],
  };

  personAddedHandler = (name, age) => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: name,
      age: age,
    };

    this.props.addPerson(newPerson);
  };

  componentDidUpdate() {
    console.log(this.props.personsArray);
  }

  render() {
    return (
      <div>
        <AddPerson personAdded={this.personAddedHandler} />
        {this.props.personsArray.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.deletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personsArray: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (newPerson) =>
      dispatch({ type: actionTypes.ADD_PERSON, newPerson: newPerson }),
    deletePerson: (id) =>
      dispatch({ type: actionTypes.DELETE_PERSON, personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
