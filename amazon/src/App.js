import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cat from './components/Cat/Cat';
import Dog from './components/Dog/Dog';
import Fox from './components/Fox/Fox';
import Index from './components/Index/Index';

const
  catUrl = 'https://cataas.com/cat?json=true',
  dogUrl = 'https://dog.ceo/api/breeds/image/random',
  foxUrl = 'https://randomfox.ca/floof/';

const urlsArray = [catUrl, dogUrl, foxUrl];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cat: {},
      dog: {},
      fox: {}
    }
  }

  componentDidMount = async () => {
    for (let i = 0; i < urlsArray.length; i++) {
      try {
        const response = await fetch(urlsArray[i]);
        const json = await response.json();
        this.setState({
          [(i === 0 && 'cat') || (i === 1 && 'dog') || (i === 2 && 'fox')]: { data: json }
        });
      } catch (error) {
        console.log("error", error);
      }
    }
    this.ReloadZoo();
  };

  ReloadZoo() {

    setInterval(() => {
      const fetchDataCat = async () => {
        try {
          const response = await fetch(catUrl);
          const json = await response.json();
          this.setState({
            cat: { data: json }
          });

        } catch (error) {
          console.log("error", error);
        }
      };

      fetchDataCat()
    }, 5000)
    setInterval(() => {
      const fetchDataDog = async () => {
        try {
          const response = await fetch(dogUrl);
          const json = await response.json();
          this.setState({
            dog: { data: json }
          })
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchDataDog()
    }, 10000)
    setInterval(() => {
      const fetchDataFox = async () => {
        try {
          const response = await fetch(foxUrl);
          const json = await response.json();
          this.setState({
            fox: { data: json }
          })
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchDataFox()
    }, 15000)
  }

  render() {
    const { cat, dog, fox } = this.state;
    return (
      <div className="App">
        <div className="App-Body">
          <Router>
            <Switch>
              <Route path="/cat">
                <Cat cat={cat} />
              </Route>
              <Route path="/dog">
                <Dog dog={dog} />
              </Route>
              <Route path="/fox">
                <Fox fox={fox} />
              </Route>
              <Route path='/'>
                <Index cat={cat} dog={dog} fox={fox} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
};

export default App;
