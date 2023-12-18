import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar"; // importing the navbar component
import News from "./components/News"; // importing the news component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoadingBar from "react-top-loading-bar"; //  npm i react-top-loading-bar

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API; // go to .env.local there is the api key
  state = {
    progress: 0, // initially progress will be zero
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  // c = 'kunal';~
  render() {
    return (
      <>
        <div>
          <React.StrictMode>
            <Router>
              {/* style={{backgroundColor:'#808080 '}} */}
              {/* Hello my first class based component {this.c} */}

              <LoadingBar
                color="red"
                height={3}
                progress={this.state.progress}
              />
              <Navbar />
              {/* switches are now Routes */}
              <Routes>
                {/* key lagane hoga kya ki woh rerender hoga same page pe page reload ni karna hoga  */}
                <Route
                  exact
                  path="/"
                  element={
                    <News
                      setProgress={this.setProgress}
                      apikey={this.apikey}
                      key="general"
                      country="in"
                      category="general"
                    />
                  }
                />
                <Route
                  exact
                  path="/business"
                  element={
                    <News
                      setProgress={this.setProgress}
                      apikey={this.apikey}
                      key="business"
                      country="in"
                      category="business"
                    />
                  }
                />
                <Route
                  exact
                  path="/entertainment"
                  element={
                    <News
                      setProgress={this.setProgress}
                      apikey={this.apikey}
                      key="entertainment"
                      country="in"
                      category="entertainment"
                    />
                  }
                />
                <Route
                  exact
                  path="/general"
                  element={
                    <News
                      setProgress={this.setProgress}
                      apikey={this.apikey}
                      key="general"
                      country="in"
                      category="general"
                    />
                  }
                />
                <Route
                  exact
                  path="/health"
                  element={
                    <News
                      setProgress={this.setProgress}
                      apikey={this.apikey}
                      key="health"
                      country="in"
                      category="health"
                    />
                  }
                />
                <Route
                  exact
                  path="/science"
                  element={
                    <News
                      setProgress={this.setProgress}
                      apikey={this.apikey}
                      key="science"
                      country="in"
                      category="science"
                    />
                  }
                />
                <Route
                  exact
                  path="/sports"
                  element={
                    <News
                      setProgress={this.setProgress}
                      apikey={this.apikey}
                      key="sports"
                      country="in"
                      category="sports"
                    />
                  }
                />
                <Route
                  exact
                  path="/technology"
                  element={
                    <News
                      setProgress={this.setProgress}
                      apikey={this.apikey}
                      key="technology"
                      country="in"
                      category="technology"
                    />
                  }
                />
              </Routes>
            </Router>
          </React.StrictMode>
        </div>
      </>
    );
  }
}
