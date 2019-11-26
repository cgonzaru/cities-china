import React from 'react';
import Filters from './components/Filters';
import cities from './services/cities.json';
import CitiesList from './components/CitiesList';
import SelItems from './components/SelItems';
import SelList from './components/SelList';

import './styles/app.scss';

const placeholderText = 'Search by name';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: cities.cities,
      userInput: '',
      selected: [],
      allSelected: false
    }

    this.getUserInput = this.getUserInput.bind(this);
    this.getSelected = this.getSelected.bind(this);
    this.closeSelected = this.closeSelected.bind(this);
    this.clearAllSelected = this.clearAllSelected.bind(this);
  }

  getUserInput(event) {
    const value = event.currentTarget.value;
    this.setState({
      userInput: value
    })
  }

  getSelected(event) {
    const selectedValue = event.currentTarget.value;
    const futureSelected = this.state.cities.find(item => item.id === selectedValue);

    this.setState(prevState => {
      const newSelected = [...prevState.selected];
      const result = newSelected.findIndex(item => item.id === selectedValue);

      if (result < 0) {
        newSelected.push(futureSelected);
        return {
          selected: newSelected
        }
      } else {
        newSelected.splice(result, 1);
        return {
          selected: newSelected,
          allSelected: false
        }
      }
      
    });
  }

  closeSelected(event) {
    const selectedID = event.currentTarget.getAttribute('data-id');

    this.setState(prevState => {
      const newSelected = [...prevState.selected];
      const result = newSelected.includes(selectedID);

      newSelected.splice(result, 1);

      return {
        selected: newSelected
      }

    });
  }

  clearAllSelected() {
    this.setState({
      selected: []
    });
  }

  render() {
    return (
      <div className="app">
        <p className="app__title">Cities of China</p>

        <div className="app__container">
          <div className="container__list">
            <Filters
              placeholderText={placeholderText}
              getUserInput={this.getUserInput}
            />
            <CitiesList
              cities={this.state.cities}
              userInput={this.state.userInput}
              getSelected={this.getSelected}
              allSelected={this.state.allSelected}
            />

          </div>
          <div className="container__selected">
            <SelItems 
              selected={this.state.selected}
              clearAllSelected={this.clearAllSelected}
            />
            <SelList
              selected={this.state.selected}
              closeSelected={this.closeSelected}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
