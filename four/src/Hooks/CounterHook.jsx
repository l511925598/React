import { memo,useState } from 'react'
function CounterHook(props){
  const [counter,setCounter] = useState(100)
  const [message,setMessage] = useState('Hellow ,world!')
  function changeMessage(){
    setMessage('天道酬勤')
  }

  return (
    <div>
      <h3>当前计数：{counter}</h3>
      <button onClick={() => setCounter(counter + 5)}>+5</button>
      <button onClick={() => setCounter(counter - 5)}>-5</button>
      <br/>
      <h3>{message}</h3>
      <button onClick={changeMessage}>改变消息</button>
    </div>

  )
}

export default memo(CounterHook)
