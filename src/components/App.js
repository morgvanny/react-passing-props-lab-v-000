import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  updateFilter = (e) => {
    console.log('update filter to: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }  

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit }));
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilter} />
    );
  }
}
