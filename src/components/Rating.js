import React, { Component } from 'react';

const initialState = {
  menssagem: null,
  ratingValue: null,
  email: null,
};

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      menssagemValue: null,
      ratingValue: null,
    };
    this.submit = this.submit.bind(this);
  }

  setEmail(val) {
    this.setState({ email: val });
  }

  setValue(val) {
    this.setState({ menssagemValue: val });
  }

  setRating(value) {
    this.setState({ ratingValue: value });
  }

  submit(event) {
    event.preventDefault();
    const { email, ratingValue, menssagemValue } = this.state;
    const { id } = this.props;
    const rating = localStorage.getItem(`rating${id.id}`);
    localStorage.setItem(`rating${id.id}`, [rating, email, ratingValue, menssagemValue]);
    this.setState({ initialState });
    console.log(initialState)
  }

  render() {
    const { id } = this.props;
    const { menssagemValue, email } = this.state;
    const rating = localStorage.getItem(`rating${id.id}`);
    return (
      <div>
        <form onSubmit={this.submit}>
          <input id="email" type="email" onChange={(e) => this.setEmail(e.target.value)} value={email} data-testid="product-detail-evaluation" />
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label htmlFor={`starRating${i}`}>
                <input
                  id={`starRating${i}`}
                  type="radio"
                  name="rating"
                  placeholder=" Email"
                  value={ratingValue}
                  onClick={() => this.setRating(ratingValue)}
                  required
                />
              </label>
            );
          })}
          <textarea data-testid="product-detail-evaluation" onChange={(e) => this.setValue(e.target.value)} placeholder="Mensagem (opcional)" value={menssagemValue} cols={40} rows={10} />
          <button type="submit">Avaliar</button>
        </form>
        <div>
          {rating === null ? null : rating.split(',').map((el) => <p>{el}</p>)}
        </div>
      </div>
    );
  }
}
