import React, {memo, useEffect, useState} from "react";

const Uffect = memo(() => {
  const [count,setCount] = useState(99)

  useEffect(() => {
    document.title = count
  });

  return (
    <div>
      <h4>计数器:{count}</h4>
      <button onClick={() => setCount(count + 5)}>+ 5</button>
    </div>
  )
})

export default Uffect
