import React, { Component } from 'react';

export default class Rating extends Component {
  render() {
    const { menssagem } = this.props;
    return (
      <div>
        <form>
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
      </div>
    );
  }
}
