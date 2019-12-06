import React from "react";
import "./App.css";
import Athlete from "./Athlete.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      athletes: []
    };
  }

  changeAthletes = athletes => {
    this.setState({ athletes });
  };

  fetchAthletes = () => {
    fetch(`http://localhost:5000/api/players`)
      .then(res => res.json())
      .then(data => this.setState({ athletes: data }));
  };

  // useEffect(() => {fetch}, [])
  componentDidMount() {
    console.log("First Render (mounting)");

    this.fetchAthletes();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        {this.state.athletes.map(athlete => (
          <Athlete athleteData={athlete} />
        ))}
      </div>
    );
  }
}

export default App;
