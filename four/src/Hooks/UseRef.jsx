import {memo, useRef} from "react";

const UseRef = memo(() => {
  const inputEl = useRef(null)
  const inputClick = () => {
    inputEl.current.focus()
  }
  return (
    <div>
      <input ref={inputEl} type="text"/>
      <button onClick={inputClick}>聚焦输入框</button>
    </div>
  )
})

export default UseRef
