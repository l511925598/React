import React, {PureComponent} from 'react';
import { connect } from "react-redux";
import {addNumberAction, subNumberAction} from "../store/acitonCreators";

export class About extends PureComponent {

  calcNumber(num,isAdd){
    if (isAdd){
      this.props.addNumber(num)
      console.log('加')
    }else {
      this.props.sumNumber(num)
      console.log('剑法')
    }
  }
  render(){
    const {counter} = this.props
    return (
      <div>
        <h2>About Number:{counter}</h2>
        <button onClick={e => this.calcNumber(12,false)}>-12</button>
        <button onClick={e => this.calcNumber(20,true)}>+20</button>
        <button onClick={e => this.calcNumber(50,false)}>-50</button>
      </div>
    )
  }
}
const mapStateToprops = (state) => ({
  counter:state.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num){
    dispatch(addNumberAction(num))
  },
  sumNumber(num){
    dispatch(subNumberAction(num))
  }
})

// function fn2(dispath){
//   return {
//     addNumber(num){
//       dispath(addNumberAction(num))
//     },
//     sumNumber(num){
//       dispath(subNumberAction(num))
//     }
//   }
// }

export default connect(mapStateToprops,mapDispatchToProps)(About);
