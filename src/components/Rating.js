import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

const initialState = {
  menssagem: 'Mensagem (opcional)',
  ratingValue: null,
};

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menssagem: 'Mensagem (opcional)',
      ratingValue: null,
    };
    this.submit = this.submit.bind(this);
  }

  setRating(value) {
    this.setState({ ratingValue: value });
  }

  submit(event) {
    event.preventDefault();
    getProductsFromCategoryAndQuery();
    const comments = localStorage.getItem('comments');
    localStorage.setItem('comments', [comments, this.state.ratingValue]);
    this.setState({ initialState });
  }

  render() {
    const { menssagem } = this.state;
    const comments = localStorage.getItem('comments');
    return (
      <div>
        <form onSubmit={this.submit}>
          <input id="email" type="email" noValidate />
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label htmlFor="starRating">
                <input
                  id="starRating"
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => this.setRating(ratingValue)}
                  required
                />
              </label>
            );
          })}
          <textarea data-testid="product-detail-evaluation" value={menssagem} cols={40} rows={10} />
          <button type="submit">Avaliar</button>
        </form>
        {comments.split(',').join(' ')}
      </div>
    );
  }
}
