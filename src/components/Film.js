import React, { Component } from 'react';


class Film extends Component {
  render() {
    return (
        <React.Fragment>
        <form className="filmForm">
        <div className="name__container">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onKeyUp={this.props.actionName} defaultValue={this.props.default} />
        </div>

        <div className="description__container">
        <textarea className="description" onKeyUp={this.props.actionDescription}/>
        </div>

        <div className="genre__container">
        <label htmlFor="genre">Genre</label>
        <select id="genre" className="genre" onChange={this.props.actionGenre}>
          <option>Comedy</option>
          <option>Drama</option>
          <option>Kids</option>
        </select>
        </div>
        </form>

        <h2>{this.props.default}</h2>
        <p>{this.props.description}</p>
        <p>{this.props.genre}</p>
        </React.Fragment>

    );
  }
}

export default Film;