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
    this.getAllSelected = this.getAllSelected.bind(this);
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
          selected: newSelected,
        }
      } else {
        newSelected.splice(result, 1);
        return {
          selected: newSelected,
          allSelected: false,
        }
      }

    });
  }

  getAllSelected() {
    if (this.state.allSelected === true) {
      this.setState({
        selected: [],
        allSelected: false
      });
    } else {
      const allCities = [];
      for (let item of this.state.cities.filter((item => {
        return item.name.toUpperCase().includes(this.state.userInput.toUpperCase())
      }))) {
        allCities.push(item);
      }
      this.setState({
        selected: allCities,
        allSelected: true
      });

    }
  }

  closeSelected(event) {
    const selectedID = event.currentTarget.getAttribute('data-id');

    if(this.state.allSelected === true) {
      const index = this.state.selected.findIndex(item => 
        item.id === selectedID
      );
      const newSelected = [...this.state.selected];
      newSelected.splice(index, 1);
      this.setState({
        selected: newSelected,
        allSelected: false
      });
    } else {
      const index = this.state.selected.findIndex(item => 
        item.id === selectedID
        );
      const newSelected = [...this.state.selected];
      newSelected.splice(index, 1);
      this.setState({
        selected: newSelected
      });
    }

  }

  clearAllSelected() {
    this.setState({
      selected: [],
      allSelected: false
    });
  }

  render() {
    const { getUserInput, getSelected, getAllSelected, clearAllSelected, closeSelected } = this;
    const { cities, userInput, allSelected, selected } = this.state;

    return (
      <div className="app">
        <p className="app__title">Cities of China</p>

        <div className="app__container">
          <div className="container__list">
            <Filters
              placeholderText={placeholderText}
              getUserInput={getUserInput}
            />
            <CitiesList
              cities={cities}
              userInput={userInput}
              getSelected={getSelected}
              allSelected={allSelected}
              selected={selected}
              getAllSelected={getAllSelected}
            />

          </div>
          <div className="container__selected">
            <SelItems
              selected={selected}
              clearAllSelected={clearAllSelected}
            />
            <SelList
              selected={selected}
              closeSelected={closeSelected}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
