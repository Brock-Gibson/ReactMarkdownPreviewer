import React, { Component } from "react";
import { Markdown } from "react-showdown";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownText: "# Welcome to Markdown Previewer"
    };
  }

  componentDidUpdate() {
    console.log(this.state.markdownText);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-sm text-white">Markdown Previewer</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-sm">
            <textarea
              resize="false"
              cols="30"
              rows="15"
              className="preview"
              onChange={event =>
                this.setState({ markdownText: event.target.value })
              }
            >
              # Welcome to Markdown Previewer
            </textarea>
          </div>
          <div className="col-sm">
            <div className="result">
              <Markdown markup={this.state.markdownText} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
