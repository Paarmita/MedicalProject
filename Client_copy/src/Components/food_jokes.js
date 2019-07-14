import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './navigation';
import { get_food_jokes_data } from '../Api/index';


class FoodJokes extends Component {

  constructor() {
    super()
    this.state = { jokes: [] };
  }

  get_food_jokes_() {
    get_food_jokes_data().then((jokes) => {
      console.log(jokes);
      this.setState({ jokes });
    });
  }

  componentDidMount() {
    this.get_food_jokes_();
  }

  render() {

    const { jokes }  = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Mock The Week</h3>
        <hr/>

        { jokes.map((joke, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> <span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div>
          ))}

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>Get Access to Celebrity Jokes By Logging In</h2>
          </div>
        </div>

        <div className="col-sm-12">
            <div className="jumbotron text-center">
              <h2>View Celebrity Jokes</h2>
              <Link className="btn btn-lg btn-success" to='/celebrityjokes'> Celebrity Jokes </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default FoodJokes;