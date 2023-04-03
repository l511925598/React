import {Component} from 'react'
import store from "../store";
import {subNumberAction} from "../store/acitonCreators";

export class Profile extends Component {
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

  subNumber(num){
    store.dispatch(subNumberAction(num))
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>Profile counter:{counter}</h2>
        <button onClick={() => this.subNumber(1)}>-1</button>
        <button onClick={() => this.subNumber(5)}>-5</button>
        <button onClick={() => this.subNumber(10)}>-10</button>
      </div>
    )
  }
}
