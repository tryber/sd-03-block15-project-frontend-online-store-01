import React, { Component } from 'react';

export default class CampoBusca extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      test: null,
    };
    this.textChange = this.textChange.bind(this);
  }

  async textChange(value) {
    await this.setState({ item: value.target.value });
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${this.state.item}`)
      .then((resp) => resp.json())
      .then((categories) => categories.results.filter((el) => this.setState({ test: el.title })));
  }

  textInput() {
    const { test, item } = this.state;
    if (item === '') {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return <p>{test}</p>;
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.textChange} />
        {this.textInput()}
      </div>
    );
  }
}
