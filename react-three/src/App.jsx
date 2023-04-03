import {PureComponent} from "react";
import {Home} from "./page/Home";
import {Profile} from "./page/Profile";
import './App.css'
import store from "./store";
import About from "./page/About";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter:store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({
        counter:state.counter
      })
    })
  }

  render() {
    const { counter } = this.state
    return (
      <div >
        <h2>App Counter: {counter}</h2>

        <div className="page">
          <Home/>
          <Profile/>
          <About/>
        </div>
      </div>
    )
  }
}

export default App
