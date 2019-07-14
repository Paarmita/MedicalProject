import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './navigation';
import { get_celebrity_jokes_data } from '../Api/index';

class CelebrityJokes extends Component {

  constructor() {
    super();
    this.state = { jokes: [] };
  }

  get_celebrity_jokes_() {
    get_celebrity_jokes_data().then((jokes) => {
      this.setState({ jokes });
      console.log(this)
    });
  }

  componentDidMount() {
    this.get_celebrity_jokes_();
  }

  render() {

    const { jokes } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Privileged Mock The Week</h3>
        <hr/>

        { jokes.map((joke, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title"><span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div>
          ))}

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>View Food Jokes</h2>
            <Link className="btn btn-lg btn-success" to='/'>Mock The Week Food Jokes </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CelebrityJokes;