import CounterHook from "./Hooks/CounterHook";
import {Divider} from "antd";
import 'antd/dist/reset.css';
import './App.css'
import Uffect from "./Hooks/Uffect";
import UseCallback from "./Hooks/UseCallback";
import UseRef from "./Hooks/UseRef";
function App() {
  return (
    <div className="App">
      <Divider>useState</Divider>
      <CounterHook/>
      <Divider>useEffect</Divider>
      <Uffect/>
      <Divider>useCallBack</Divider>
      <UseCallback/>
      <Divider>useRef</Divider>
      <UseRef/>
    </div>
  );
}

export default App;
