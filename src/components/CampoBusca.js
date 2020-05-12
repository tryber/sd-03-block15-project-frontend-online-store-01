import React, { Component } from 'react';

export default class CampoBusca extends Component {
  constructor(props) {
    super(props);

    this.state = { item: '' };
    this.textChange = this.textChange.bind(this);
  }

  textChange(value) {
    this.setState({ item: value.target.value });
  }

  textInput() {
    const { item } = this.state;
    if (item === '') {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return <p>{item}</p>;
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
