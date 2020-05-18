import React, { Component } from 'react';
import '../css/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="container-loading">
        <div className="loader">
          <span />
        </div>
        <p className="loading-message">Carregando...</p>
      </div>
    );
  }
}

export default Loading;
