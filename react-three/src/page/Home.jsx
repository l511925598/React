import {Component} from 'react'
import store from "../store";
import {addNumberAction} from "../store/acitonCreators";

export class Home extends Component {
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

  addNumber(num){
      store.dispatch(addNumberAction(num))
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>Home counter:{counter}</h2>
        <button onClick={() => this.addNumber(1)}>+1</button>
        <button onClick={() => this.addNumber(5)}>+5</button>
        <button onClick={() => this.addNumber(10)}>+10</button>
      </div>
    )
  }
}
