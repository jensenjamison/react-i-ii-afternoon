import React, {Component} from 'react';
import './App.css';
import data from "./data"



class App extends Component {
  constructor(){
    super()

    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1})
  }

  decrement = () => {
    this.setState({counter: this.state.counter - 1})
  }

  changeCounter = (num) => {
    if(this.state.counter === data.length - 1 && num > 0) {
        this.setState({counter: 0});
    } else if(this.state.counter <= 0 && num < 0) {
        this.setState({counter: data.length - 1});
    } else {
        this.setState({counter: this.state.counter + num});
    }

}


  render(){
    let movies = data[this.state.counter].favoriteMovies.map((val, i, arr) => {
      return <li>{val}</li>
  })

    return (
      <body>
  <section className="nav">
    <div className="home">
        <h3>Home</h3>
    </div>
  </section>
  
  <section className="middle">
    <div className="middle-data">
      <div className="middle-content">
      <h1 className="counter-id">{data[this.state.counter].id}/{data.length}</h1>
      <h1 className="name">{data[this.state.counter].name.first} {data[this.state.counter].name.last}</h1>
      <p>From: {data[this.state.counter].city} {data[this.state.counter].country}</p>
      <p>Job: Title {data[this.state.counter].title}</p>
      <p>Employer: {data[this.state.counter].employer}</p>

     <div className="movies">
     <p>Favorite Movies:</p>
      <ol className="lists">
        {movies}
      </ol>
     </div>
      </div>
    </div>
  </section>

  <section className="lower-nav">
      <div className="previous">
        <button onClick={() => this.changeCounter(-1)} className="button-previous">{"< Previous"}</button>
      </div>
      <div className="buttons-2">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
        <button className="new">New</button>
      </div>
      <div className="next">
      <button onClick={() => this.changeCounter(1)} className="button-next">{"Next >"}</button>
      </div>
  </section>
  
  
  </body>
  );
}
}

export default App;
